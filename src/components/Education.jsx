import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="border-t border-line py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              className="rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-accent/50"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <GraduationCap size={22} />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent">
                {edu.period}
              </p>
              <h3 className="font-display mt-2 text-lg font-semibold text-paper">{edu.degree}</h3>
              <p className="mt-1 text-sm text-mist">{edu.school}</p>
              <p className="text-sm text-mist">{edu.location}</p>

              {edu.details.length > 0 && (
                <ul className="mt-4 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-mist marker:text-accent">
                  {edu.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}

              {edu.link && (
                <a
                  href={edu.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  Institution website <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
