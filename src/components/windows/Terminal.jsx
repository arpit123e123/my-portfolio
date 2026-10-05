import { useState } from "react";

function Terminal({ onOpen }) {
  const [history, setHistory] = useState([
    { type: "output", text: "Arpit Portfolio Terminal · type 'help' to explore" },
  ]);
  const [input, setInput] = useState("");

  const runCommand = (raw) => {
    const command = raw.trim().toLowerCase();
    if (!command) return;

    const output = {
      help: "Commands: about · projects · skills · resume · contact · github · linkedin · clear",
      whoami: "Arpit Patwa · Backend Developer · MERN Stack Developer",
      about: "B.Tech CSE graduate focused on Node.js, Express.js, MongoDB and REST APIs.",
      projects: "Multi-Vendor E-Commerce + TaskFlow",
      skills: "JavaScript · React · Node.js · Express · MongoDB · Mongoose · REST APIs · JWT · RBAC",
      status: "● Open to opportunities",
      github: "Opening GitHub...",
      linkedin: "Opening LinkedIn...",
      resume: "Opening Resume...",
      contact: "Opening Contact...",
    }[command];

    setHistory((prev) => [...prev, { type: "command", text: raw }, { type: "output", text: output || `Command not found: ${command}. Type 'help'.` }]);

    if (command === "clear") setHistory([]);
    if (["about", "projects", "resume", "contact"].includes(command)) onOpen?.(command);
    if (command === "github") window.open("https://github.com/arpit123e123", "_blank", "noopener,noreferrer");
    if (command === "linkedin") window.open("https://www.linkedin.com/in/arpit-patwa-dev", "_blank", "noopener,noreferrer");
    setInput("");
  };

  return (
    <div className="min-h-full bg-[#080a0c] p-5 font-mono text-sm text-green-400">
      <div className="mb-5 flex items-center gap-2 text-white/30"><span className="h-2 w-2 rounded-full bg-red-400" /><span className="h-2 w-2 rounded-full bg-yellow-400" /><span className="h-2 w-2 rounded-full bg-green-400" /><span className="ml-2">arpit@portfolio</span></div>
      <div className="space-y-2">
        {history.map((item, index) => item.type === "command" ? <p key={index}><span className="text-green-300">arpit@portfolio</span><span className="text-white/30"> ~ $ </span><span className="text-white">{item.text}</span></p> : <p key={index} className="whitespace-pre-wrap text-white/70">{item.text}</p>)}
        <form onSubmit={(e) => { e.preventDefault(); runCommand(input); }} className="flex items-center pt-3">
          <span className="text-green-300">arpit@portfolio</span><span className="text-white/30"> ~ $ </span>
          <input autoFocus value={input} onChange={(e) => setInput(e.target.value)} className="min-w-0 flex-1 bg-transparent px-1 text-white outline-none" aria-label="Terminal command" />
        </form>
      </div>
    </div>
  );
}

export default Terminal;
