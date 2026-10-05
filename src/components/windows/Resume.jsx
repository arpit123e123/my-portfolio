import resumePdf from "../../assets/resume.pdf";
import { FileText, Mail, Download, ExternalLink, Code2, BriefcaseBusiness } from "lucide-react";
import portfolioData from "../../data/portfolioData";

function Resume() {
  const { profile, education } = portfolioData;
  return (
    <div className="min-h-full bg-[#111318] p-6 text-white sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 text-red-300"><FileText size={30} /></div>
          <div><h2 className="text-2xl font-semibold">Resume</h2><p className="text-sm text-white/40">{profile.name} · {profile.role}</p></div>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={resumePdf} download className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black"><Download size={15} />Download PDF</a>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white"><Mail size={15} />Contact</a>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <div className="border-b border-white/10 pb-6"><h1 className="text-3xl font-bold">{profile.name}</h1><p className="mt-1 text-blue-400">{profile.role} · {profile.secondaryRole}</p><div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/40"><span>{profile.email}</span><span>{profile.phone}</span><span>{profile.location}</span></div></div>
        <section className="mt-7"><h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">Summary</h3><p className="mt-3 text-sm leading-7 text-white/50">B.Tech Computer Science graduate with hands-on experience building full-stack applications using JavaScript, React.js, Node.js, Express.js and MongoDB, with a strong focus on backend development and REST APIs.</p></section>
        <section className="mt-7"><h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">Education</h3><div className="mt-3"><p className="font-medium">{education.degree}</p><p className="mt-1 text-sm text-white/50">{education.university}</p><p className="mt-1 text-xs text-white/30">{education.period}</p></div></section>
        <section className="mt-7"><h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">Projects</h3><div className="mt-4 grid gap-3 sm:grid-cols-2"><div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><BriefcaseBusiness size={18} className="text-blue-400" /><h4 className="mt-3 font-medium">Multi-Vendor E-Commerce</h4><p className="mt-2 text-xs leading-5 text-white/40">Marketplace with vendor/admin workflows, JWT/RBAC, Razorpay payments and AI-powered product discovery.</p></div><div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><Code2 size={18} className="text-purple-400" /><h4 className="mt-3 font-medium">TaskFlow</h4><p className="mt-2 text-xs leading-5 text-white/40">Jira-style project and task management platform with authentication and role-based access.</p></div></div></section>
      </div>
      <div className="mt-5 flex justify-end"><a href={resumePdf} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-white/40 hover:text-white"><ExternalLink size={13} />Open PDF</a></div>
    </div>
  );
}
export default Resume;
