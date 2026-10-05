function DesktopIcon({ icon, label, onDoubleClick }) {
  return (
    <button
      type="button"
      onDoubleClick={onDoubleClick}
      className="group flex w-[90px] select-none flex-col items-center gap-1 rounded-lg p-1.5 outline-none transition duration-150 hover:bg-white/10 focus:bg-white/10"
    >
      <div className="transition duration-150 group-hover:scale-105 group-active:scale-95">
        {icon}
      </div>

      <span className="max-w-[86px] rounded-md bg-transparent px-1.5 py-0.5 text-center text-[11px] font-medium leading-tight text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">
        {label}
      </span>
    </button>
  );
}

export default DesktopIcon;