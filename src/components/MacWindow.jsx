import { useEffect, useRef, useState } from "react";
import { Minus, Maximize2, X } from "lucide-react";

function MacWindow({ title, children, onClose, onMinimize, onFocus }) {
  const [maximized, setMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!dragging) return;

    const move = (event) => {
      setPosition({
        x: event.clientX - dragOffset.current.x,
        y: event.clientY - dragOffset.current.y,
      });
    };

    const stop = () => setDragging(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", stop);
    };
  }, [dragging]);

  const startDrag = (event) => {
    if (maximized || event.button !== 0 || event.target.closest("button")) return;
    onFocus?.();
    const rect = event.currentTarget.closest("[data-mac-window]")?.getBoundingClientRect();
    if (!rect) return;

    dragOffset.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    setDragging(true);
  };

  return (
    <div
      data-mac-window
      onMouseDown={onFocus}
      style={!maximized ? { transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))` } : undefined}
      className={`fixed z-[80] overflow-hidden border border-white/20 bg-[#111318]/90 shadow-[0_30px_100px_rgba(0,0,0,0.65)] backdrop-blur-3xl ${
        maximized
          ? "inset-[32px_10px_78px_10px] rounded-2xl"
          : "left-1/2 top-1/2 h-[min(680px,78vh)] w-[min(1000px,88vw)] rounded-2xl"
      }`}
    >
      <header
        onPointerDown={startDrag}
        className={`relative flex h-12 shrink-0 select-none items-center border-b border-white/10 bg-white/[0.055] px-4 ${
          maximized ? "cursor-default" : "cursor-grab active:cursor-grabbing"
        }`}
      >
        <div className="flex items-center gap-2">
          <button type="button" onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Close" className="group flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#ff5f57] transition hover:brightness-110">
            <X size={8} strokeWidth={3} className="text-black/70 opacity-0 group-hover:opacity-100" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); onMinimize(); }} aria-label="Minimize" className="group flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#febc2e] transition hover:brightness-110">
            <Minus size={8} strokeWidth={3} className="text-black/70 opacity-0 group-hover:opacity-100" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); setMaximized((value) => !value); }} aria-label="Maximize" className="group flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#28c840] transition hover:brightness-110">
            <Maximize2 size={7} strokeWidth={3} className="text-black/70 opacity-0 group-hover:opacity-100" />
          </button>
        </div>

        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2">
          <span className="text-[13px] font-medium text-white/80">{title}</span>
        </div>
      </header>

      <div className="h-[calc(100%-48px)] overflow-y-auto">{children}</div>
    </div>
  );
}

export default MacWindow;
