import {
  MapPin,
  GraduationCap,
  Code2,
  Server,
  Database,
  GitBranch,
  Mail,
  BriefcaseBusiness,
} from "lucide-react";

import { SiGithub } from "react-icons/si";
import LinkedInIcon from "../LinkedInIcon";



import portfolioData from "../../data/portfolioData";

function About() {
  const { profile, education, skills } = portfolioData;

  return (
    <div className="min-h-full bg-[#111217] text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-white/[0.03] px-6 py-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          {/* Avatar */}
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 text-2xl font-bold shadow-xl">
            AP
          </div>

          {/* Profile */}
          <div className="min-w-0">
            <h1 className="text-2xl font-bold tracking-tight">
              {profile.name}
            </h1>

            <p className="mt-1 text-sm text-blue-400">
              {profile.role} · {profile.secondaryRole}
            </p>

            <div className="mt-3 flex flex-wrap gap-3 text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} />
                {profile.location}
              </span>

              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {profile.availability}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 p-6">
        {/* About */}
        <section>
          <div className="mb-3 flex items-center gap-2">
            <BriefcaseBusiness
              size={18}
              className="text-blue-400"
            />

            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              About Me
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm leading-7 text-white/70">
              I am a Computer Science Engineering graduate focused on
              backend development and the MERN stack. I enjoy building
              practical full-stack applications, designing REST APIs,
              working with databases, authentication and role-based
              access control.
            </p>

            <p className="mt-3 text-sm leading-7 text-white/70">
              My current focus is becoming a stronger backend engineer
              by building real-world projects and improving my
              problem-solving and software development skills.
            </p>
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="mb-3 flex items-center gap-2">
            <GraduationCap
              size={18}
              className="text-purple-400"
            />

            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Education
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <h3 className="font-semibold text-white">
              {education.degree}
            </h3>

            <p className="mt-1 text-sm text-white/60">
              {education.university}
            </p>

            <p className="mt-2 text-xs text-white/40">
              {education.period}
            </p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <div className="mb-3 flex items-center gap-2">
            <Code2
              size={18}
              className="text-cyan-400"
            />

            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Technical Skills
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Frontend */}
            <SkillGroup
              icon={<Code2 size={17} />}
              title="Frontend"
              items={skills.frontend}
            />

            {/* Backend */}
            <SkillGroup
              icon={<Server size={17} />}
              title="Backend"
              items={skills.backend}
            />

            {/* Database */}
            <SkillGroup
              icon={<Database size={17} />}
              title="Database"
              items={skills.database}
            />

            {/* Tools */}
            <SkillGroup
              icon={<GitBranch size={17} />}
              title="Tools"
              items={skills.tools}
            />
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="mb-3 flex items-center gap-2">
            <Mail
              size={18}
              className="text-emerald-400"
            />

            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Connect
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs text-white/75 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-white"
            >
              <Mail size={15} />
              Email
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs text-white/75 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <SiGithub size={15} />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs text-white/75 transition hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-white"
            >
              <LinkedInIcon size={15} className="text-blue-400" />
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

function SkillGroup({ icon, title, items = [] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="mb-3 flex items-center gap-2 text-white/80">
        <span className="text-blue-400">
          {icon}
        </span>

        <h3 className="text-sm font-semibold">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-white/10 bg-black/20 px-2.5 py-1.5 text-[11px] text-white/65"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default About;