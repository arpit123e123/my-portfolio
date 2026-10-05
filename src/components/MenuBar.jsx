import { Wifi, BatteryFull, Search, SlidersHorizontal } from "lucide-react";

function MenuBar({ onSearch }) {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const date = now.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" });

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] h-7 border-b border-white/10 bg-black/25 px-3 text-[12px] text-white/90 shadow-sm backdrop-blur-2xl">
      <div className="flex h-full items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-[15px] font-semibold">●</span>
          <span className="font-semibold">Finder</span>
          <span>File</span><span>Edit</span><span>View</span><span>Go</span><span>Window</span><span>Help</span>
        </div>
        <div className="flex items-center gap-3">
          <Wifi size={13} />
          <BatteryFull size={15} />
          <button type="button" onClick={onSearch} aria-label="Spotlight search" className="rounded p-0.5 transition hover:bg-white/10">
            <Search size={13} />
          </button>
          <SlidersHorizontal size={13} />
          <span>{date}</span><span>{time}</span>
        </div>
      </div>
    </header>
  );
}

export default MenuBar;
