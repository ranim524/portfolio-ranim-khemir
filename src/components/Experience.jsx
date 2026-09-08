import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading eyebrow="Experience" title="Where I've worked and contributed" />

        <div className="relative mt-14 max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-ink" />

                <div className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {exp.period}
                  </p>
                  <h3 className="font-display mt-2 text-lg font-semibold text-paper">
                    {exp.role}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-mist">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase size={14} /> {exp.org}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-mist marker:text-accent">
                    {exp.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
