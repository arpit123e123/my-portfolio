import {
  Mail,
  Code2,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";

import portfolioData from "../../data/portfolioData";

function Contact() {
  const { profile, social } = portfolioData;

  return (
    <div className="flex min-h-full items-center justify-center bg-[#111318] p-6 text-white sm:p-10">

      <div className="w-full max-w-2xl text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300">
          <Mail size={38} />
        </div>

        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-blue-400">
          Contact
        </p>

        <h2 className="mt-2 text-3xl font-semibold">
          Let's Connect
        </h2>

        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/45">
          I'm currently open to backend, MERN and software
          development opportunities.
        </p>

        <div className="mt-8 grid gap-3">

          <a
            href={social.email}
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-left transition hover:bg-white/[0.08]"
          >
            <Mail className="text-blue-400" />

            <div>
              <p className="text-xs text-white/30">
                Email
              </p>

              <p className="mt-1 text-sm">
                {profile.email}
              </p>
            </div>
          </a>

          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-left transition hover:bg-white/[0.08]"
          >
            <Code2 className="text-purple-400" />

            <div>
              <p className="text-xs text-white/30">
                GitHub
              </p>

              <p className="mt-1 text-sm">
                github.com/arpit123e123
              </p>
            </div>
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-left transition hover:bg-white/[0.08]"
          >
            <BriefcaseBusiness className="text-blue-400" />

            <div>
              <p className="text-xs text-white/30">
                LinkedIn
              </p>

              <p className="mt-1 text-sm">
                linkedin.com/in/arpit-patwa-dev
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-left">

            <MapPin className="text-green-400" />

            <div>
              <p className="text-xs text-white/30">
                Location
              </p>

              <p className="mt-1 text-sm">
                {profile.location}
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;