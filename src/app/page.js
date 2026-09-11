"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "../data/posts";
import Typewriter from "@/components/Typewriter"; // Import the cycler component
import { ArrowUpRight, Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-between relative text-zinc-50 select-none">

      {/* Background Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Huge Background Cyber Graphic */}
      <div className="absolute right-4 bottom-20 text-[18vw] font-black opacity-[0.02] tracking-tighter select-none pointer-events-none">
        SYS_シシール
      </div>

      {/* Futuristic Technical Top Header */}
      <header className="border border-zinc-800 bg-zinc-950/80 backdrop-blur p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-zinc-400" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-zinc-400" />

        <div className="flex items-center gap-3">
          <Terminal size={16} className="text-zinc-400 animate-pulse" />
          <span className="text-lg font-bold tracking-widest">SHISHIR // CORE_OS</span>
          <span className="text-xs px-1.5 py-0.5 border border-zinc-700 text-zinc-500 rounded-sm">V.2.6</span>
        </div>

        <div className="text-xs text-zinc-400 tracking-wider flex items-center gap-4">
          {/* Add this link here */}
          <a
            href="/blog"
            className="px-2 py-0.5 border border-zinc-800 bg-zinc-900/50 hover:border-zinc-50 hover:text-zinc-50 text-zinc-400 transition-colors uppercase font-bold text-[10px]"
          >
            Open /blog ➔
          </a>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>NET_LOK // ACTIVE</span>
          </div>
        </div>
      </header>

      {/* Hero Content Console Frame */}
      <div className="my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

        {/* Left Interactive Prompt Input Box */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7 space-y-6 border border-zinc-800 p-6 bg-zinc-950/40 relative"
        >
          <div className="absolute -top-1 -left-1 text-zinc-700 text-xs">+</div>
          <div className="absolute -bottom-3 -right-1 text-zinc-700 text-xs">+</div>

          <div className="text-xs text-zinc-500 flex items-center gap-2">
            <span>[LOC] // SRC_APP_MAIN</span>
            <span>--</span>
            <span className="text-zinc-400">INIT: SUCCESS</span>
          </div>

          {/* Integrated Dynamic Text Cycler here */}
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none uppercase h-[90px] md:h-[120px]">
            &gt; I AM <br />
            <span className="text-emerald-400 font-bold mt-2 inline-block">
              <Typewriter />
            </span>
          </h2>

          <p className="text-zinc-400 max-w-lg text-xs md:text-sm leading-relaxed border-l-2 border-zinc-700 pl-4 font-mono">
            Compiling lightweight, highly reactive, and heavily animated web frameworks. Infusing traditional retro-Japanese publishing structural shapes into terminal consoles.
          </p>

          {/* Action Interface Buttons */}
          <div className="pt-4">
            <a
              href="https://github.com/Shishir3k"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 border border-zinc-400 text-xs font-bold tracking-widest bg-zinc-50 text-zinc-950 hover:bg-transparent hover:text-zinc-50 hover:border-zinc-50 transition-all duration-300 relative group"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>RUN GITHUB_EXPLORER</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right Graphical Viewport Matrix */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-5 border border-zinc-800 aspect-[4/5] relative bg-zinc-950/60 overflow-hidden flex flex-col justify-between p-4 group hover:border-zinc-600 transition-colors duration-300"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-full h-[1px] bg-zinc-800 absolute" />
            <div className="h-full w-[1px] bg-zinc-800 absolute" />
          </div>

          <div className="flex justify-between items-start z-10 text-[10px] text-zinc-500">
            <span>[VIEWPORT_01]</span>
            <span className="tracking-widest font-sans">シシール</span>
          </div>

          <div className="my-auto text-center z-10 space-y-2">
            <h3 className="text-3xl font-black tracking-widest text-zinc-300 group-hover:text-zinc-100 transition-colors duration-300">
              シシール
            </h3>
            <div className="text-[10px] tracking-widest text-zinc-600">
              [ 45.692°N // 12.017°E ]
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-2 flex justify-between text-[9px] text-zinc-600 z-10">
            <span>INDEX_MAPPING: STABLE</span>
            <span>SHISHIR3K</span>
          </div>
        </motion.div>
      </div>

      {/* SECTION 02: SYSTEM_OTAKU_CORE & PROJECT REGISTRY (ABOUT & EXPERIENCE) */}
      <section className="my-16 border border-zinc-800 bg-zinc-950/20 relative p-6 space-y-8 overflow-hidden">
        {/* Tech grid aesthetic pieces */}
        <div className="absolute top-0 right-0 bg-zinc-800 text-zinc-500 px-2 py-0.5 text-[9px] font-mono tracking-widest">
          SEC_02 // DEPLOYMENT_HISTORY_V4.0
        </div>
        <div className="absolute top-0 left-0 w-4 h-[1px] bg-zinc-400" />
        <div className="absolute top-0 left-0 w-[1px] h-4 bg-zinc-400" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Terminal Bio & Overclocked Language Array */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-bold tracking-widest uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 inline-block animate-ping" />
                <span>PILOT_PROFILE // シシール</span>
              </div>
              <span className="text-[10px] text-zinc-600">ID: SHISHIR3K</span>
            </div>

            <div className="space-y-2 border border-zinc-900 bg-zinc-950/60 p-4 text-xs md:text-sm leading-relaxed text-zinc-400 font-mono relative">
              <div className="absolute top-2 right-2 text-[9px] text-zinc-600 border border-zinc-800 px-1 font-sans">Otaku OS v4.0</div>
              <p className="text-zinc-200 font-bold">&gt; shishir --verbose --experience</p>
              <p>
                Fullstack engineer specializing in heavy data-mapping automation, lightweight synchronization layers, and rapid UI layout deployment. Operating on extreme amounts of caffeine and manga layouts.
              </p>
              <p className="pt-2 text-zinc-500">
                &gt; expertise: Structuring high-performance media content hubs, optimizing data scrapers, and linking cross-domain source nodes natively.
              </p>
            </div>

            {/* EXPANDED TECH LOADOUT MATRIX */}
            <div className="space-y-3 border border-zinc-900 bg-zinc-950/60 p-4 font-mono text-xs">
              <span className="text-zinc-500 block border-b border-zinc-900 pb-1 text-[10px] uppercase font-bold">[ENGINE_COMPILER_STACK]</span>

              {/* JS */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-zinc-300 font-bold">JAVASCRIPT / NODE.JS [ES6+]</span>
                  <span className="text-zinc-400 font-bold">LVL.90</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-900 border border-zinc-800 p-[1px]"><div className="h-full bg-zinc-50 w-[90%]" /></div>
              </div>

              {/* Python */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-zinc-300 font-bold">PYTHON [SCRAPING / DB TASKS]</span>
                  <span className="text-zinc-400 font-bold">LVL.85</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-900 border border-zinc-800 p-[1px]"><div className="h-full bg-zinc-50 w-[85%]" /></div>
              </div>

              {/* Next.js */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-zinc-300 font-bold">NEXT.JS / REACT FRONTEND</span>
                  <span className="text-zinc-400 font-bold">LVL.80</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-900 border border-zinc-800 p-[1px]"><div className="h-full bg-zinc-400 w-[80%]" /></div>
              </div>

              {/* PostgreSQL */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-zinc-300 font-bold">POSTGRESQL / SQL DATABASE</span>
                  <span className="text-zinc-400 font-bold">LVL.78</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-900 border border-zinc-800 p-[1px]"><div className="h-full bg-zinc-600 w-[78%]" /></div>
              </div>

              {/* Bash */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-zinc-300 font-bold">BASH SCRIPTING / SHELL AUTOMATION</span>
                  <span className="text-zinc-400 font-bold">LVL.82</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-900 border border-zinc-800 p-[1px]"><div className="h-full bg-zinc-50 w-[82%]" /></div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Developer Showcase (Projects & Live Nodes) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-zinc-400 inline-block" />
              <span>CORE_DEPLOYMENTS // MAIN_OPERATIONS</span>
            </div>

            <div className="space-y-4">
              {/* DEPLOYMENT 01: ANIMEERAZ (CLICKABLE) */}
              <a
                href="https://animeeraz.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-zinc-800 bg-zinc-950/60 p-4 relative font-mono group hover:border-zinc-50 hover:bg-zinc-900/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="absolute top-0 right-0 bg-zinc-800 text-zinc-400 px-2 py-0.5 text-[8px] group-hover:bg-zinc-50 group-hover:text-zinc-950 transition-colors">
                  NODE_01 // LAUNCH_LIVE ↗
                </div>
                <div className="flex justify-between items-baseline border-b border-zinc-900 pb-2 mb-2">
                  <h4 className="text-sm font-black tracking-widest text-zinc-100 uppercase group-hover:text-emerald-400 transition-colors">
                    &gt; ANIMEERAZ
                  </h4>
                  <span className="text-[10px] text-zinc-500">MEDIA INDEX ENGINE</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                  A comprehensive high-speed anime directory module built to process rapid metadata responses. Implements ultra-responsive grid layers alongside optimized asynchronous fetch engines for fluid catalog streaming.
                </p>
                <div className="flex flex-wrap gap-2 text-[9px]">
                  <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 font-bold">NEXT.JS</span>
                  <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 font-bold">TAILWIND CSS</span>
                  <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 font-bold">NODE API</span>
                </div>
              </a>

              {/* DEPLOYMENT 02: CINEERAZ (CLICKABLE) */}
              <a
                href="https://cineeraz.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-zinc-800 bg-zinc-950/60 p-4 relative font-mono group hover:border-zinc-50 hover:bg-zinc-900/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="absolute top-0 right-0 bg-zinc-800 text-zinc-400 px-2 py-0.5 text-[8px] group-hover:bg-zinc-50 group-hover:text-zinc-950 transition-colors">
                  NODE_02 // LAUNCH_LIVE ↗
                </div>
                <div className="flex justify-between items-baseline border-b border-zinc-900 pb-2 mb-2">
                  <h4 className="text-sm font-black tracking-widest text-zinc-100 uppercase group-hover:text-emerald-400 transition-colors">
                    &gt; CINEERAZ
                  </h4>
                  <span className="text-[10px] text-zinc-500">CINEMATIC INTERFACE</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                  An advanced streaming directory variant calibrated for ultra-minimalist, black-and-white media layout discovery. Engineered with specialized tracking layers to map cross-platform databases elegantly.
                </p>
                <div className="flex flex-wrap gap-2 text-[9px]">
                  <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 font-bold">JAVASCRIPT</span>
                  <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 font-bold">DATA AUTOMATION</span>
                  <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 font-bold">POSTGRESQL</span>
                </div>
              </a>

              {/* CUSTOM INTELLIGENT TELEMETRY BAR */}
              <div className="border border-zinc-900 bg-zinc-950/40 p-3 font-mono text-[10px] space-y-1 text-zinc-500">
                <div className="text-zinc-400 font-bold border-b border-zinc-900 pb-1 mb-1 flex justify-between">
                  <span>[LIVE_SYNCHRONIZATION_MATRIX]</span>
                  <span className="text-emerald-500 animate-pulse">RUNNING</span>
                </div>
                <div>&gt; SYNCING MANGAFIRE & MANGADEX PLUGINS ... <span className="text-zinc-300">[STABLE]</span></div>
                <div>&gt; DATA INTERFACE REDIRECTS STABLE ON ROUTE ... <span className="text-zinc-300">[PORT_XYZ]</span></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2.5: SYSTEM HISTORY & ROADMAP LOGS */}
      <section className="my-16 grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left Sub-Box: Technical Changelog Timeline */}
        <div className="lg:col-span-8 border border-zinc-800 bg-zinc-950/20 p-8 relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 bg-zinc-800 text-zinc-500 px-3 py-1 text-[10px] font-mono tracking-widest">
            LOG_02.B // TIMELINE_MATRIX
          </div>

          <div className="flex items-center gap-2 text-sm text-zinc-400 font-bold tracking-widest uppercase">
            <span>&gt; DEPLOYMENT_CHANGELOG // MAIN_CORE</span>
          </div>

          <div className="space-y-8 font-mono pt-4">
            {/* Timeline Item 1 */}
            <div className="border-l-2 border-zinc-600 pl-6 relative space-y-2">
              <div className="absolute -left-[6px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-50" />
              <div className="flex justify-between text-xs text-zinc-500 font-bold">
                <span>TIMESTAMP: Q1_2026</span>
                <span className="text-emerald-400 animate-pulse">[LIVE_STABLE]</span>
              </div>
              <h5 className="text-xl md:text-2xl font-black text-zinc-50 tracking-tight uppercase">
                DOMAIN MIGRATION // ANIMEERAZ PRODUCTION NODE
              </h5>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                Successfully executed system-wide network re-routing configurations. Migrated all active user catalog states and production application containers for <strong className="text-zinc-200">AnimeEraz</strong> from older legacy TLD structures into high-performance, optimized .xyz routing nodes.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="border-l-2 border-zinc-800 pl-6 relative space-y-2">
              <div className="absolute -left-[6px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="flex justify-between text-xs text-zinc-600 font-bold">
                <span>TIMESTAMP: Q4_2025</span>
                <span>[COMPLETED_ARCHIVE]</span>
              </div>
              <h5 className="text-xl md:text-2xl font-black text-zinc-500 tracking-tight uppercase">
                CROSS-SOURCE DATA MAPPER // STAGE_01
              </h5>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
                Engineered standard automation scripts to index and map database records seamlessly between varied manga provider platforms. Mitigated payload conflicts by developing strict synchronization loops inside native JavaScript modules.
              </p>
            </div>
          </div>
        </div>

        {/* Right Sub-Box: Hardware Specs Peripheral Loadout */}
        <div className="lg:col-span-4 border border-zinc-800 bg-zinc-950/20 p-8 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 bg-zinc-800 text-zinc-500 px-3 py-1 text-[10px] font-mono tracking-widest">
            SYS_ENV // MAIN_STACK
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-zinc-400 font-bold tracking-widest uppercase">
              <span>&gt; TERMINAL_SPECS</span>
            </div>

            <div className="space-y-2.5 font-mono text-xs text-zinc-400 pt-2">
              <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                <span className="text-zinc-600">CORE_FRAME:</span>
                <span className="text-zinc-300 font-bold">NEXT.JS / REACT</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                <span className="text-zinc-600">CLOUD_HOST:</span>
                <span className="text-zinc-300 font-bold">ORACLE / RENDER</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                <span className="text-zinc-600">DB_CLUSTER:</span>
                <span className="text-zinc-300 font-bold">FIREBASE / POSTGRES</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                <span className="text-zinc-600">AUTH_MOD:</span>
                <span className="text-zinc-300 font-bold">FIREBASE AUTH</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                <span className="text-zinc-600">DATA_ENGINE:</span>
                <span className="text-zinc-300 font-bold">PYTHON / SCRAPERS</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                <span className="text-zinc-600">CODE_IDE:</span>
                <span className="text-zinc-300 font-bold">VS_CODE / WORKSPACE</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                <span className="text-zinc-600">LOCAL_AI:</span>
                <span className="text-zinc-300 font-bold">OLLAMA ENGINE</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                <span className="text-zinc-600">VERSION_CTRL:</span>
                <span className="text-zinc-300 font-bold">GIT / GITHUB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-600">NODE_SYNC:</span>
                <span className="text-emerald-400 font-bold">OPERATIONAL</span>
              </div>
            </div>
          </div>

          <div className="mt-6 border border-zinc-800 p-3 bg-zinc-900/40 text-center font-mono text-xs">
            <span className="text-zinc-500">ENGINE STATE: </span>
            <span className="text-emerald-400 font-bold animate-pulse">OVERCLOCKED</span>
          </div>
        </div>

      </section>

      {/* SECTION 2.8: SYS_LEAN_LOGS (QUICK UPDATES / MICRO-BLOG) */}
      <section className="my-16 border border-zinc-800 bg-zinc-950/20 p-6 relative overflow-hidden space-y-4 font-mono">
        {/* Tech grid decoration */}
        <div className="absolute top-0 right-0 bg-zinc-800 text-zinc-500 px-2 py-0.5 text-[9px] tracking-widest">
          SEC_2.8 // SYS_LEAN_LOGS
        </div>
        <div className="absolute top-0 left-0 w-4 h-[1px] bg-zinc-400" />
        <div className="absolute top-0 left-0 w-[1px] h-4 bg-zinc-400" />

        <div className="flex justify-between items-center text-xs text-zinc-400 font-bold tracking-widest uppercase border-b border-zinc-900 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 animate-pulse rounded-full" />
            <span>&gt; TERMINAL_EVENT_FEED // STABLE</span>
          </div>
          <span className="text-[10px] text-zinc-600 hidden sm:inline">REFRESH_RATE: REALTIME</span>
        </div>

        {/* Dynamic Scrollable Log Stream Container */}
        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar text-xs">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              href={`/blog?id=${post.id}`}
              className="block p-3 border border-zinc-900 bg-zinc-950/40 space-y-1 hover:border-zinc-50 hover:bg-zinc-900/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between text-[10px] text-zinc-500 font-bold group-hover:text-zinc-300">
                <span>[LOG_ID: #{post.id}] // {post.category}</span>
                <span>TIMESTAMP: {post.date}</span>
              </div>
              <p className="text-zinc-300">
                &gt; {post.summary}
              </p>
            </Link>
          ))}
        </div>

        {/* Bottom Status bar */}
        <div className="text-[10px] text-zinc-600 pt-2 border-t border-zinc-900 flex justify-between">
          <span>LOG_STREAM_COUNT: 03_ACTIVE</span>
          <span>PRESS [CTRL+C] TO TERMINATE FEED</span>
        </div>
      </section>

      {/* SECTION 03: COMMS_PORTAL & TRANSMISSION (CONTACT) */}
      <section className="my-16 border border-zinc-800 bg-zinc-950/20 relative p-6 space-y-6 overflow-hidden">
        {/* Tech grid aesthetic pieces */}
        <div className="absolute top-0 right-0 bg-zinc-800 text-zinc-500 px-2 py-0.5 text-[9px] font-mono tracking-widest">
          SEC_03 // SECURE_COMMS_V1.0
        </div>
        <div className="absolute top-0 left-0 w-4 h-[1px] bg-zinc-400" />
        <div className="absolute top-0 left-0 w-[1px] h-4 bg-zinc-400" />

        <div className="flex items-center gap-2 text-xs text-zinc-400 font-bold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 bg-red-500 inline-block animate-pulse" />
          <span>ESTABLISH_TRANSMISSION // INBOUND</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Active Frequencies */}
          <div className="lg:col-span-4 space-y-3 font-mono text-xs text-zinc-400">
            <span className="text-zinc-600 block text-[10px] uppercase font-bold">[ACTIVE_FREQUENCIES]</span>

            <a
              href="https://github.com/Shishir3k"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-zinc-900 bg-zinc-950/60 p-3 hover:border-zinc-400 transition-colors group"
            >
              <div className="text-zinc-300 font-bold group-hover:text-zinc-50 flex justify-between items-center">
                <span>&gt; GITHUB_NODE</span>
                <span className="text-[10px] text-zinc-600 group-hover:text-zinc-400">CONNECT // ↗</span>
              </div>
              <p className="text-[11px] text-zinc-500 mt-1">Review raw repositories, automations, and source configs.</p>
            </a>

            <div className="border border-zinc-900 bg-zinc-950/60 p-3">
              <span className="text-zinc-600 block text-[9px]">ENCRYPTED_EMAIL:</span>
              <span className="text-zinc-300 font-bold select-all">shishir.dev@core.os</span>
              <span className="text-[9px] block text-zinc-500 mt-1">Click to copy channel signature</span>
            </div>
          </div>

          {/* Secure Transmission Message Console */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-8 border border-zinc-900 bg-zinc-950/60 p-4 font-mono text-xs space-y-4 relative"
          >
            <span className="text-zinc-500 block text-[10px] uppercase font-bold">[DATAPACKET_INPUT]</span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-zinc-500 text-[10px] block">SOURCE_IDENTITY:</label>
                <input
                  type="text"
                  placeholder="e.g. USER_NAME or AGENCY"
                  className="w-full bg-zinc-900/50 border border-zinc-800 p-2 text-zinc-200 focus:outline-none focus:border-zinc-400 placeholder:opacity-30"
                />
              </div>
              <div className="space-y-1">
                <label className="text-zinc-500 text-[10px] block">RETURN_CHANNEL:</label>
                <input
                  type="email"
                  placeholder="name@domain.com"
                  className="w-full bg-zinc-900/50 border border-zinc-800 p-2 text-zinc-200 focus:outline-none focus:border-zinc-400 placeholder:opacity-30"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-zinc-500 text-[10px] block">MESSAGE_PAYLOAD:</label>
              <textarea
                rows="4"
                placeholder="Enter transmission specifications..."
                className="w-full bg-zinc-900/50 border border-zinc-800 p-2 text-zinc-200 focus:outline-none focus:border-zinc-400 placeholder:opacity-30 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full border border-zinc-700 bg-zinc-900 hover:bg-zinc-50 hover:text-zinc-950 font-bold py-2 tracking-widest transition-all duration-300 uppercase text-[11px]"
            >
              Broadcast Secure Packet // 送信
            </button>
          </form>
        </div>
      </section>

      {/* Footer System Telemetry */}
      <footer className="text-[10px] text-zinc-600 border-t border-zinc-900 pt-4 flex flex-col sm:flex-row justify-between gap-2 z-10">
        <div>SYS.MEM.ALLOC // [OK]</div>
        <div className="tracking-wider uppercase">© 2026 Shishir. Terminal Environment configured.</div>
      </footer>
    </main>
  );
}