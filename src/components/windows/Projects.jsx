import { ExternalLink, Sparkles, CreditCard, CheckCircle2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import portfolioData from "../../data/portfolioData";

function Projects() {
  const { projects } = portfolioData;

  return (
    <div className="min-h-full bg-[#0d1016] text-white">
      <div className="border-b border-white/10 bg-white/[0.025] px-7 py-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">Developer Portfolio</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">My Projects</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">Production-style MERN applications focused on backend APIs, authentication, payments and practical user workflows.</p>
      </div>

      <div className="grid gap-5 p-7 md:grid-cols-2">
        {projects.map((project, index) => {
          const isStore = project.name.includes("Multi-Vendor");
          return (
            <article key={project.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]">
              <div className={`relative h-36 overflow-hidden p-5 ${isStore ? "bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950" : "bg-gradient-to-br from-purple-950 via-slate-900 to-cyan-950"}`}>
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl transition group-hover:bg-blue-400/30" />
                <div className="relative flex items-start justify-between gap-3">
                  <div><span className="text-xs text-white/40">0{index + 1}</span><h2 className="mt-2 text-xl font-semibold">{project.name}</h2><p className="mt-1 text-xs text-white/45">{project.type}</p></div>
                  {isStore && <div className="flex gap-2"><span className="flex items-center gap-1 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-[10px] font-semibold text-cyan-200"><Sparkles size={11} />AI</span><span className="flex items-center gap-1 rounded-full border border-green-300/20 bg-green-300/10 px-2 py-1 text-[10px] font-semibold text-green-200"><CreditCard size={11} />Razorpay</span></div>}
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm leading-6 text-white/55">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.technologies?.map((technology) => <span key={technology} className={`rounded-full border px-2.5 py-1 text-[11px] ${technology === "AI" ? "border-cyan-300/25 bg-cyan-300/10 text-cyan-200" : technology === "Razorpay" ? "border-green-300/25 bg-green-300/10 text-green-200" : "border-white/10 bg-white/[0.05] text-white/65"}`}>{technology}</span>)}</div>
                {project.features?.length > 0 && <div className="mt-5"><p className="mb-2 text-xs font-medium text-white/40">KEY FEATURES</p><div className="grid gap-1.5">{project.features.slice(0, isStore ? 8 : 6).map((feature) => <div key={feature} className="flex gap-2 text-xs leading-5 text-white/55"><CheckCircle2 size={13} className="mt-1 shrink-0 text-blue-400" />{feature}</div>)}</div></div>}
                <div className="mt-6 flex gap-2">
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-3 py-2.5 text-xs font-semibold text-black transition hover:bg-white/90"><ExternalLink size={14} />Live Demo</a>}
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5 text-xs font-medium text-white/80 transition hover:bg-white/10"><SiGithub size={18} />GitHub</a>}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
