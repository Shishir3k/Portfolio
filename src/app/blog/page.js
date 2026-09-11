"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ArrowLeft, Search, X } from "lucide-react";
import { blogPosts as localPosts } from "../../data/posts"; // Rename import to localPosts

// 1. Add Firebase imports
import { db } from "../../lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export default function BlogArchive() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activePost, setActivePost] = useState(null);

    // 2. Create state to hold combined live and local posts
    const [allPosts, setAllPosts] = useState(localPosts);
    const searchParams = useSearchParams();

    // 3. Fetch live posts from Firebase on load
    useEffect(() => {
        const fetchLivePosts = async () => {
            try {
                const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
                const querySnapshot = await getDocs(q);
                const liveData = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    firebaseId: doc.id // keep internal reference
                }));

                // Combine Firebase logs + Local logs
                setAllPosts([...liveData, ...localPosts]);
            } catch (error) {
                console.error("Failed to sync live logs:", error);
            }
        };
        fetchLivePosts();
    }, []);

    // 4. Update the URL parameter listener to check the combined array
    useEffect(() => {
        const targetId = searchParams.get("id");
        if (targetId && allPosts.length > 0) {
            const matchedPost = allPosts.find((p) => p.id === targetId);
            if (matchedPost) {
                setActivePost(matchedPost);
            }
        }
    }, [searchParams, allPosts]);

    // 5. Update the filter to run over allPosts instead of blogPosts
    const filteredPosts = allPosts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="p-4 md:p-8 max-w-5xl mx-auto min-h-screen flex flex-col justify-between text-zinc-50 font-mono select-none relative">

            {/* Background Subtle Grid Mesh */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />

            {/* Header Matrix */}
            <header className="border border-zinc-800 bg-zinc-950/80 backdrop-blur p-4 flex justify-between items-center relative overflow-hidden z-10">
                <Link href="/" className="flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-50 transition-colors group">
                    <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                    <span>RETURN // CORE_OS</span>
                </Link>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <Terminal size={14} className="animate-pulse" />
                    <span>INDEX: /BLOG</span>
                </div>
            </header>

            {/* Main Listing Shell */}
            <div className="my-10 space-y-8 z-10">
                <div className="border-b-2 border-zinc-800 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div>
                        <span className="text-xs font-bold text-zinc-500 tracking-widest">[ARCHIVE_STREAM]</span>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-zinc-50 mt-1">
                            SYS_LOGS_DIRECTORY
                        </h2>
                    </div>

                    {/* Active Console Search Input Box */}
                    <div className="flex items-center gap-2 border border-zinc-800 bg-zinc-900/40 px-3 py-1.5 w-full md:w-64 text-zinc-300 focus-within:border-zinc-400 transition-colors">
                        <Search size={14} className="text-zinc-500" />
                        <input
                            type="text"
                            placeholder="FILTER_LOGS..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent text-xs w-full focus:outline-none placeholder:opacity-30 text-zinc-50"
                        />
                    </div>
                </div>

                {/* Blog Posts Map */}
                <div className="space-y-4">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, idx) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                onClick={() => setActivePost(post)}
                                className="border border-zinc-900 bg-zinc-950/40 p-5 relative group hover:border-zinc-50 hover:bg-zinc-900/20 cursor-pointer transition-all duration-300"
                            >
                                <div className="absolute top-0 right-0 bg-zinc-800 text-zinc-400 px-2 py-0.5 text-[9px] group-hover:bg-zinc-50 group-hover:text-zinc-950 transition-colors">
                                    {post.category} // READ_LOG ↗
                                </div>

                                <div className="flex justify-between items-baseline text-zinc-500 text-[10px] mb-1">
                                    <span>TIMESTAMP: {post.date}</span>
                                </div>

                                <h3 className="text-lg md:text-xl font-black text-zinc-200 uppercase group-hover:text-emerald-400 transition-colors max-w-3xl">
                                    &gt; {post.title}
                                </h3>

                                <p className="text-zinc-400 text-xs md:text-sm mt-2 leading-relaxed max-w-4xl border-l border-zinc-800 pl-3">
                                    {post.summary}
                                </p>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center p-12 border border-zinc-900 text-zinc-500 text-xs">
                            &gt; NO LOG RECORDS MATCHING SEARCH PARAMETERS FOUND.
                        </div>
                    )}
                </div>
            </div>

            {/* DYNAMIC MODAL SCREEN COMPONENT */}
            <AnimatePresence>
                {activePost && (
                    <div
                        onClick={() => setActivePost(null)}
                        className="fixed inset-0 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm z-50 cursor-pointer"
                    >
                        {/* Modal Box - Scaled up to max-w-5xl (Desktop Ultra-Wide Frame) */}
                        <motion.div
                            initial={{ scale: 0.97, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.97, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                            className="border-2 border-zinc-400 bg-zinc-950 w-full max-w-5xl h-[85vh] flex flex-col relative font-mono text-zinc-50 p-6 md:p-8 cursor-default overflow-hidden"
                        >
                            {/* Corner design flourishes */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-zinc-50" />
                            <div className="absolute bottom-[2px] right-[2px] w-4 h-4 border-b-2 border-r-2 border-zinc-50 pointer-events-none z-20" />

                            {/* Top Control Bar - Rigidly pinned */}
                            <div className="flex justify-between items-center border-b border-zinc-800 pb-4 mb-4 shrink-0">
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-emerald-400 animate-pulse" />
                                    <span className="text-[10px] md:text-xs text-zinc-400 tracking-widest font-bold uppercase">
                                        SYSTEM_LOG_PREVIEW // {activePost.category} // ID_{activePost.id}
                                    </span>
                                </div>
                                <button
                                    onClick={() => setActivePost(null)}
                                    className="text-zinc-500 hover:text-zinc-50 border border-zinc-800 hover:border-zinc-50 p-1.5 transition-all flex items-center gap-1 text-[10px]"
                                >
                                    <X size={14} />
                                    <span className="hidden sm:inline">ESC</span>
                                </button>
                            </div>

                            {/* Core Content Shell - Split layout framework */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8 min-h-0">

                                {/* Left Metadata Summary Area (Takes 4 columns on desktop) */}
                                <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r border-zinc-900 pb-6 lg:pb-0 lg:pr-6 shrink-0 h-fit">
                                    <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                                        [METADATA_PACKET]
                                    </div>
                                    <div className="bg-zinc-900/30 border border-zinc-900 p-4 space-y-2">
                                        <div className="text-[10px] text-zinc-600">TIMESTAMP RECORDED:</div>
                                        <div className="text-xs text-zinc-300 font-bold">{activePost.date}</div>

                                        <div className="text-[10px] text-zinc-600 pt-2">DECRYPT_KEY:</div>
                                        <div className="text-xs text-emerald-400 font-bold">AES_256_GCM</div>
                                    </div>

                                    <div className="space-y-1">
                                        <span className="text-[10px] text-zinc-600 uppercase block">Abstract Summary:</span>
                                        <p className="text-zinc-400 text-xs leading-relaxed italic">
                                            {activePost.summary}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Scroll Deck (Takes 8 columns on desktop for huge blogs) */}
                                <div className="lg:col-span-8 space-y-4 font-mono">
                                    <h3 className="text-xl md:text-3xl font-black text-zinc-100 tracking-tight uppercase leading-tight border-b border-zinc-900 pb-3">
                                        &gt; {activePost.title}
                                    </h3>

                                    {/* Text Body Entry */}
                                    <div className="text-xs md:text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap font-mono space-y-4 pb-6">
                                        {activePost.content}
                                    </div>
                                </div>

                            </div>

                            {/* Bottom Escape Bar - Fixed to bottom */}
                            <div className="mt-4 pt-4 border-t border-zinc-900 flex justify-between items-center shrink-0">
                                <span className="text-[9px] text-zinc-600 tracking-widest">STATUS: BUFFER_READ_COMPLETE</span>
                                <button
                                    onClick={() => setActivePost(null)}
                                    className="bg-zinc-50 text-zinc-950 hover:bg-zinc-900 hover:text-zinc-50 border border-transparent hover:border-zinc-50 px-4 py-1.5 font-bold text-xs uppercase transition-colors tracking-widest"
                                >
                                    Terminate Connection
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Tech Footer */}
            <footer className="text-[10px] text-zinc-600 border-t border-zinc-900 pt-4 text-center z-10">
                DIRECTORY_STREAM // END_OF_TRANSMISSION
            </footer>
        </main>
    );
}