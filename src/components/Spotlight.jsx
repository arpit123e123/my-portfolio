import { useMemo, useState } from "react";
import { Search, Folder, FileText, User, Bot, Mail, Terminal } from "lucide-react";

function Spotlight({ open, onClose, onOpen }) {
  const [query, setQuery] = useState("");

  const items = [
    { id: "projects", label: "Projects", detail: "Multi-Vendor E-Commerce · TaskFlow", icon: Folder },
    { id: "resume", label: "Resume", detail: "Experience, education & skills", icon: FileText },
    { id: "about", label: "About Me", detail: "Backend Developer · MERN Stack", icon: User },
    { id: "ai", label: "AI", detail: "Ask about Arpit's portfolio", icon: Bot },
    { id: "contact", label: "Contact", detail: "Email, GitHub & LinkedIn", icon: Mail },
    { id: "terminal", label: "Terminal", detail: "Interactive portfolio terminal", icon: Terminal },
  ];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => `${item.label} ${item.detail}`.toLowerCase().includes(q));
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center bg-black/25 px-4 pt-[13vh] backdrop-blur-[2px]" onMouseDown={onClose}>
      <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-[#17191f]/95 shadow-[0_30px_100px_rgba(0,0,0,.65)] backdrop-blur-3xl" onMouseDown={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <Search size={20} className="text-white/45" />
          <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => { if (e.key === "Escape") onClose(); if (e.key === "Enter" && results[0]) onOpen(results[0].id); }} placeholder="Search portfolio..." className="min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-white/30" />
          <kbd className="rounded-md border border-white/10 px-2 py-1 text-[10px] text-white/30">ESC</kbd>
        </div>
        <div className="max-h-[55vh] overflow-y-auto p-2">
          {results.length ? results.map((item) => {
            const Icon = item.icon;
            return <button key={item.id} type="button" onClick={() => onOpen(item.id)} className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-white/10">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.07]"><Icon size={19} className="text-white/80" /></span>
              <span><span className="block text-sm font-medium text-white">{item.label}</span><span className="block text-xs text-white/35">{item.detail}</span></span>
            </button>;
          }) : <p className="px-4 py-8 text-center text-sm text-white/35">No portfolio result found.</p>}
        </div>
        <div className="border-t border-white/10 px-4 py-2 text-[10px] text-white/25">Press Enter to open · Esc to close</div>
      </div>
    </div>
  );
}

export default Spotlight;
