"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Terminal, ArrowLeft, Send, Lock, Unlock, CheckCircle, 
  Database, Trash2, Edit, FileText, Activity 
} from "lucide-react";
import { db } from "../../lib/firebase"; 
import { 
  collection, addDoc, getDocs, doc, deleteDoc, updateDoc, 
  serverTimestamp, query, orderBy 
} from "firebase/firestore";

export default function AdminTerminal() {
  // Auth State
  const [authKey, setAuthKey] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authError, setAuthError] = useState(false);

  // Terminal Navigation State
  const [activeView, setActiveView] = useState("HUB"); // HUB | UPLOAD | MANAGE
  const [liveLogs, setLiveLogs] = useState([]);
  const [isLoadingLogs, setIsLoadingLogs] = useState(false);

  // Form State
  const [editDocId, setEditDocId] = useState(null); // Tracks if we are updating an existing log
  const [customId, setCustomId] = useState(""); // The SYS_XXXX ID
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("INFRASTRUCTURE");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploySuccess, setDeploySuccess] = useState(false);

  // Handle Authentication
  const handleLogin = (e) => {
    e.preventDefault();
    if (authKey === process.env.NEXT_PUBLIC_ADMIN_KEY) {
      setIsAuthorized(true);
      setAuthError(false);
    } else {
      setAuthError(true);
      setAuthKey("");
    }
  };

  // Fetch Live Logs for Management
  const fetchLiveLogs = async () => {
    setIsLoadingLogs(true);
    try {
      const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const logs = snapshot.docs.map(doc => ({
        ...doc.data(),
        firebaseId: doc.id
      }));
      setLiveLogs(logs);
    } catch (error) {
      console.error("Failed to fetch logs:", error);
    } finally {
      setIsLoadingLogs(false);
    }
  };

  // Load Manage Tab
  const openManageTab = () => {
    fetchLiveLogs();
    setActiveView("MANAGE");
  };

  // Setup Form for New Post
  const openUploadTab = () => {
    setEditDocId(null);
    setCustomId(`SYS_${Math.floor(Math.random() * 10000)}`);
    setTitle(""); setCategory("INFRASTRUCTURE"); setSummary(""); setContent("");
    setActiveView("UPLOAD");
  };

  // Setup Form for Editing
  const handleEdit = (log) => {
    setEditDocId(log.firebaseId);
    setCustomId(log.id);
    setTitle(log.title);
    setCategory(log.category);
    setSummary(log.summary);
    setContent(log.content);
    setActiveView("UPLOAD");
  };

  // Handle Delete
  const handleDelete = async (firebaseId) => {
    if (!window.confirm("WARNING: Confirm deletion of this record?")) return;
    try {
      await deleteDoc(doc(db, "blogs", firebaseId));
      setLiveLogs(liveLogs.filter(log => log.firebaseId !== firebaseId));
    } catch (error) {
      console.error("Failed to delete record:", error);
    }
  };

  // Handle Firebase Deployment (Create OR Update)
  const handleDeploy = async (e) => {
    e.preventDefault();
    setIsDeploying(true);

    const payload = {
      id: customId,
      title,
      category,
      summary,
      content,
      date: new Date().toISOString().split("T")[0],
      createdAt: editDocId ? undefined : serverTimestamp(), // Only set createdAt on new posts
    };

    try {
      if (editDocId) {
        // UPDATE EXISTING
        await updateDoc(doc(db, "blogs", editDocId), payload);
      } else {
        // CREATE NEW
        await addDoc(collection(db, "blogs"), payload);
      }
      
      setDeploySuccess(true);
      setTimeout(() => {
        setDeploySuccess(false);
        setActiveView("HUB"); // Return to hub after success
      }, 2000);
    } catch (error) {
      console.error("Payload Failure:", error);
    } finally {
      setIsDeploying(false);
    }
  };

  return (
    <main className="p-4 md:p-8 max-w-5xl mx-auto min-h-screen flex flex-col text-zinc-50 font-mono relative select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none -z-10" />

      {/* HEADER */}
      <header className="border border-zinc-800 bg-zinc-950/80 backdrop-blur p-4 flex justify-between items-center relative overflow-hidden mb-8 shrink-0">
        <button 
          onClick={() => activeView === "HUB" ? window.location.href = "/" : setActiveView("HUB")}
          className="flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-50 transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          <span>{activeView === "HUB" ? "RETURN // CORE_OS" : "RETURN // ADMIN_HUB"}</span>
        </button>
        <div className="flex items-center gap-2 text-xs text-zinc-500 font-bold uppercase">
          <Terminal size={14} className={isAuthorized ? "animate-pulse text-emerald-400" : "text-red-500"} />
          <span className={isAuthorized ? "text-emerald-400" : "text-red-500"}>
            SYS_ADMIN // {isAuthorized ? activeView : "LOCKED"}
          </span>
        </div>
      </header>

      {/* LOCK SCREEN */}
      {!isAuthorized ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="border border-zinc-800 bg-zinc-950/60 p-8 max-w-md w-full relative space-y-6">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500" />
            
            <div className="text-center space-y-2">
              <Lock size={32} className="mx-auto text-red-500 mb-4" />
              <h2 className="text-xl font-black tracking-widest text-red-500 uppercase">Restricted Access</h2>
              <p className="text-xs text-zinc-500">Provide clearance credentials to access the deployment terminal.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 pt-4 border-t border-zinc-900">
              <input 
                type="password" 
                value={authKey}
                onChange={(e) => setAuthKey(e.target.value)}
                placeholder="ENTER_ADMIN_KEY..."
                className="w-full bg-zinc-900/40 border border-zinc-800 focus:border-red-500 focus:outline-none p-3 text-center tracking-widest text-sm text-zinc-100 transition-colors"
              />
              {authError && <p className="text-[10px] text-red-500 text-center uppercase animate-pulse">ERROR: Invalid Signature</p>}
              <button type="submit" className="w-full bg-zinc-800 hover:bg-red-500 text-zinc-50 py-3 font-bold text-xs uppercase tracking-widest transition-colors">
                Authorize Override
              </button>
            </form>
          </div>
        </div>
      ) : (
        /* AUTHORIZED WORKSPACE */
        <div className="flex-1 border border-emerald-900/30 bg-zinc-950/60 p-6 md:p-8 relative overflow-hidden flex flex-col">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-500" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-500" />
          
          <div className="border-b border-zinc-900 pb-4 mb-6 shrink-0">
            <span className="text-[10px] text-emerald-500 tracking-widest font-bold uppercase flex items-center gap-1 mb-1">
              <Unlock size={10} /> [CLEARANCE_GRANTED]
            </span>
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-zinc-100">
              {activeView === "HUB" && "CENTRAL_COMMAND"}
              {activeView === "UPLOAD" && (editDocId ? "UPDATE_LOG_RECORD" : "COMPILE_NEW_LOG")}
              {activeView === "MANAGE" && "DATABASE_MANAGEMENT"}
            </h1>
          </div>

          {/* VIEW: HUB */}
          {activeView === "HUB" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <button onClick={openUploadTab} className="border border-zinc-800 hover:border-emerald-500 hover:bg-emerald-950/20 p-8 text-left transition-all group relative overflow-hidden">
                <FileText size={24} className="text-zinc-500 group-hover:text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-zinc-100 uppercase tracking-wide">Write Payload</h3>
                <p className="text-xs text-zinc-500 mt-2 line-clamp-2">Compile and deploy a new technical log directly into the production database.</p>
              </button>
              
              <button onClick={openManageTab} className="border border-zinc-800 hover:border-emerald-500 hover:bg-emerald-950/20 p-8 text-left transition-all group relative overflow-hidden">
                <Database size={24} className="text-zinc-500 group-hover:text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-zinc-100 uppercase tracking-wide">Manage Records</h3>
                <p className="text-xs text-zinc-500 mt-2 line-clamp-2">Access the active Firestore registry to edit payloads or permanently delete logs.</p>
              </button>
            </div>
          )}

          {/* VIEW: MANAGE */}
          {activeView === "MANAGE" && (
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-3">
              {isLoadingLogs ? (
                <div className="flex items-center gap-2 text-zinc-500 text-xs p-4">
                  <Activity size={14} className="animate-spin" /> Fetching live database records...
                </div>
              ) : liveLogs.length === 0 ? (
                <div className="text-zinc-600 text-xs p-4 border border-zinc-900">NO ACTIVE PAYLOADS FOUND IN DATABASE.</div>
              ) : (
                liveLogs.map((log) => (
                  <div key={log.firebaseId} className="border border-zinc-800 bg-zinc-900/30 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-zinc-600 transition-colors">
                    <div>
                      <div className="text-[10px] text-zinc-500 font-bold mb-1">[ID: {log.id}] // {log.date}</div>
                      <h4 className="text-sm font-bold text-zinc-200 uppercase truncate max-w-lg">&gt; {log.title}</h4>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button onClick={() => handleEdit(log)} className="p-2 bg-zinc-800 hover:bg-emerald-500 hover:text-zinc-950 text-zinc-400 transition-colors text-xs flex items-center gap-1 font-bold">
                        <Edit size={12} /> EDIT
                      </button>
                      <button onClick={() => handleDelete(log.firebaseId)} className="p-2 bg-zinc-800 hover:bg-red-500 hover:text-zinc-50 text-zinc-400 transition-colors text-xs flex items-center gap-1 font-bold">
                        <Trash2 size={12} /> DEL
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* VIEW: UPLOAD / EDIT */}
          {activeView === "UPLOAD" && (
            <form onSubmit={handleDeploy} className="space-y-6 overflow-y-auto custom-scrollbar flex-1 pr-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] text-zinc-400 uppercase tracking-widest block">Log_Title:</label>
                  <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-zinc-900/40 border border-zinc-800 focus:border-emerald-500 focus:outline-none p-3 text-sm text-zinc-100 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-400 uppercase tracking-widest block">System_Category:</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-zinc-900/40 border border-zinc-800 focus:border-emerald-500 focus:outline-none p-3 text-sm text-zinc-100 transition-colors cursor-pointer">
                    <option value="INFRASTRUCTURE">INFRASTRUCTURE</option>
                    <option value="DATA_ENGINE">DATA_ENGINE</option>
                    <option value="DEPLOYMENT">DEPLOYMENT</option>
                    <option value="UI_DESIGN">UI_DESIGN</option>
                    <option value="SECURITY">SECURITY</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-zinc-400 uppercase tracking-widest block">Abstract_Summary:</label>
                <textarea required value={summary} onChange={(e) => setSummary(e.target.value)} rows={2} className="w-full bg-zinc-900/40 border border-zinc-800 focus:border-emerald-500 focus:outline-none p-3 text-sm text-zinc-100 custom-scrollbar resize-none transition-colors" />
              </div>

              <div className="space-y-2 flex-1">
                <label className="text-[10px] text-zinc-400 uppercase tracking-widest flex justify-between">
                  <span>Main_Payload (Markdown Support):</span>
                  <span className="text-emerald-400 animate-pulse">REC</span>
                </label>
                <textarea required value={content} onChange={(e) => setContent(e.target.value)} rows={12} className="w-full bg-zinc-900/40 border border-zinc-800 focus:border-emerald-500 focus:outline-none p-4 text-sm text-zinc-100 custom-scrollbar resize-none leading-relaxed transition-colors" />
              </div>

              <div className="pt-4 border-t border-zinc-900 flex justify-between items-center shrink-0">
                <span className="text-[9px] text-emerald-600 tracking-widest hidden sm:inline">
                  {deploySuccess ? "TRANSMITTED_SUCCESSFULLY" : `CONNECTION: SECURE // TARGET_ID: ${customId}`}
                </span>
                <button type="submit" disabled={isDeploying} className="bg-emerald-500 text-zinc-950 px-6 py-2.5 font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-emerald-400 transition-colors disabled:opacity-50">
                  {deploySuccess ? <CheckCircle size={14} /> : <Send size={14} />}
                  {isDeploying ? "TRANSMITTING..." : deploySuccess ? "DEPLOYED" : (editDocId ? "Update Payload" : "Deploy Payload")}
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </main>
  );
}