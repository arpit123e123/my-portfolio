import { useState } from "react";
import { Folder, FileText, User, Bot, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import LinkedInIcon from "./LinkedInIcon";
import LiveWallpaper from "./LiveWallpaper";
import MenuBar from "./MenuBar";
import DesktopIcon from "./DesktopIcon";
import Dock from "./Dock";
import MacWindow from "./MacWindow";
import Spotlight from "./Spotlight";
import Projects from "./windows/Projects";
import About from "./windows/About";
import Resume from "./windows/Resume";
import AI from "./windows/AI";
import Contact from "./windows/Contact";
import Terminal from "./windows/Terminal";

function MacDesktop() {
  const [activeWindow, setActiveWindow] = useState(null);
  const [minimizedWindows, setMinimizedWindows] = useState([]);
  const [spotlightOpen, setSpotlightOpen] = useState(false);

  const openWindow = (windowName) => {
    setMinimizedWindows((current) => current.filter((item) => item !== windowName));
    setActiveWindow(windowName);
  };

  const closeWindow = () => setActiveWindow(null);

  const minimizeWindow = () => {
    if (!activeWindow) return;
    setMinimizedWindows((current) => current.includes(activeWindow) ? current : [...current, activeWindow]);
    setActiveWindow(null);
  };

  const restoreWindow = (windowName) => {
    setMinimizedWindows((current) => current.filter((item) => item !== windowName));
    setActiveWindow(windowName);
  };

  const toggleWindow = (windowName) => {
    if (activeWindow === windowName) minimizeWindow();
    else openWindow(windowName);
  };

  const renderWindow = () => {
    if (!activeWindow) return null;
    const windowProps = { onClose: closeWindow, onMinimize: minimizeWindow, onFocus: () => openWindow(activeWindow) };
    switch (activeWindow) {
      case "projects": return <MacWindow title="Projects" {...windowProps}><Projects /></MacWindow>;
      case "about": return <MacWindow title="About Me" {...windowProps}><About /></MacWindow>;
      case "resume": return <MacWindow title="Resume" {...windowProps}><Resume /></MacWindow>;
      case "ai": return <MacWindow title="AI" {...windowProps}><AI /></MacWindow>;
      case "contact": return <MacWindow title="Contact" {...windowProps}><Contact /></MacWindow>;
      case "terminal": return <MacWindow title="Terminal" {...windowProps}><Terminal onOpen={openWindow} /></MacWindow>;
      default: return null;
    }
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <LiveWallpaper />
      <div className="relative z-[100]"><MenuBar onSearch={() => setSpotlightOpen(true)} /></div>

      <div className="absolute left-6 top-12 z-[50]">
        <div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-black/30 font-bold shadow-xl backdrop-blur-xl">AP</div><div><p className="text-sm font-semibold text-white drop-shadow-lg">Arpit Patwa</p><p className="text-[11px] text-white/75 drop-shadow-lg">Backend Developer</p></div></div>
      </div>

      <div className="absolute right-4 top-20 z-[50] flex max-h-[calc(100vh-6.5rem)] flex-col gap-1">
        <DesktopIcon icon={<div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-gradient-to-b from-blue-400 to-blue-700 shadow-xl"><Folder size={34} color="white" fill="white" strokeWidth={1.5} /></div>} label="Projects" onDoubleClick={() => openWindow("projects")} />
        <DesktopIcon icon={<div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-white shadow-xl"><FileText size={32} className="text-blue-500" strokeWidth={1.7} /></div>} label="Resume" onDoubleClick={() => openWindow("resume")} />
        <DesktopIcon icon={<div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-gradient-to-br from-purple-500 to-indigo-700 shadow-xl"><User size={32} color="white" strokeWidth={1.7} /></div>} label="About Me" onDoubleClick={() => openWindow("about")} />
        <DesktopIcon icon={<div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-xl"><Bot size={32} color="white" strokeWidth={1.7} /></div>} label="AI" onDoubleClick={() => openWindow("ai")} />
        <DesktopIcon icon={<div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-gradient-to-br from-green-400 to-emerald-600 shadow-xl"><Mail size={31} color="white" strokeWidth={1.7} /></div>} label="Contact" onDoubleClick={() => openWindow("contact")} />
        <DesktopIcon icon={<div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-[#171717] shadow-xl"><SiGithub size={31} color="white" /></div>} label="GitHub" onDoubleClick={() => window.open("https://github.com/arpit123e123", "_blank", "noopener,noreferrer")} />
        <DesktopIcon icon={<div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-[#0a66c2] shadow-xl"><LinkedInIcon size={32} className="text-white" /></div>} label="LinkedIn" onDoubleClick={() => window.open("https://www.linkedin.com/in/arpit-patwa-dev", "_blank", "noopener,noreferrer")} />
      </div>

      {renderWindow()}
      <Spotlight open={spotlightOpen} onClose={() => setSpotlightOpen(false)} onOpen={(id) => { setSpotlightOpen(false); openWindow(id); }} />
      <Dock toggleWindow={toggleWindow} restoreWindow={restoreWindow} minimizedWindows={minimizedWindows} />
    </main>
  );
}

export default MacDesktop;
