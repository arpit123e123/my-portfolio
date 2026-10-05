import {
  Folder,
  FileText,
  User,
  Bot,
  Mail,
  Terminal,
} from "lucide-react";

import { SiGithub } from "react-icons/si";
import LinkedInIcon from "./LinkedInIcon";

function Dock({
  toggleWindow,
  restoreWindow,
  minimizedWindows = [],
}) {
  const apps = [
    {
      id: "projects",
      name: "Projects",
      icon: (
        <div className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-gradient-to-b from-blue-400 to-blue-700 shadow-lg">
          <Folder
            size={25}
            color="white"
            fill="white"
            strokeWidth={1.5}
          />
        </div>
      ),
    },

    {
      id: "resume",
      name: "Resume",
      icon: (
        <div className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-white shadow-lg">
          <FileText
            size={25}
            className="text-blue-500"
            strokeWidth={1.7}
          />
        </div>
      ),
    },

    {
      id: "about",
      name: "About Me",
      icon: (
        <div className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-gradient-to-br from-purple-500 to-indigo-700 shadow-lg">
          <User
            size={25}
            color="white"
            strokeWidth={1.7}
          />
        </div>
      ),
    },

    {
      id: "ai",
      name: "AI",
      icon: (
        <div className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-lg">
          <Bot
            size={25}
            color="white"
            strokeWidth={1.7}
          />
        </div>
      ),
    },

    {
      id: "contact",
      name: "Contact",
      icon: (
        <div className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg">
          <Mail
            size={25}
            color="white"
            strokeWidth={1.7}
          />
        </div>
      ),
    },

    {
      id: "terminal",
      name: "Terminal",
      icon: (
        <div className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-gradient-to-br from-gray-800 to-black shadow-lg">
          <Terminal
            size={25}
            color="white"
            strokeWidth={1.7}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 z-[9999] -translate-x-1/2">
      <div className="flex items-end gap-2 rounded-[20px] border border-white/20 bg-black/35 px-3 py-2.5 shadow-2xl backdrop-blur-2xl">
        
        {/* Main Apps */}
        {apps.map((app) => {
          const isMinimized = minimizedWindows.includes(app.id);

          return (
            <button
              key={app.id}
              type="button"
              title={app.name}
             onClick={() => {
  if (isMinimized) {
    restoreWindow(app.id);
  } else {
    toggleWindow(app.id);
  }
}}
              className="group relative flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 hover:-translate-y-2 hover:scale-110 active:scale-95"
            >
              {app.icon}

              {/* Tooltip */}
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-[10px] text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                {app.name}
              </span>

              {/* Minimized indicator */}
              {isMinimized && (
                <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-white" />
              )}
            </button>
          );
        })}

        {/* Divider */}
        <div className="mx-1 h-9 w-px bg-white/25" />

        {/* GitHub */}
        <button
          type="button"
          title="GitHub"
          onClick={() =>
            window.open(
              "https://github.com/arpit123e123",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="group relative flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 hover:-translate-y-2 hover:scale-110 active:scale-95"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-[#171717] shadow-lg">
            <SiGithub
              size={25}
              color="white"
            />
          </div>

          <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-[10px] text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
            GitHub
          </span>
        </button>

        {/* LinkedIn */}
        <button
          type="button"
          title="LinkedIn"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/arpit-patwa-dev",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="group relative flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 hover:-translate-y-2 hover:scale-110 active:scale-95"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-[#0a66c2] shadow-lg">
            <LinkedInIcon
              size={25}
              className="text-white"
            />
          </div>

          <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-[10px] text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
            LinkedIn
          </span>
        </button>
      </div>
    </div>
  );
}

export default Dock;