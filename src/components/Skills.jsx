import { motion } from "framer-motion";
import { Code2, Database, Globe, Wrench, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills, softSkills } from "../data/portfolio";

const icons = [Code2, Globe, Database, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A practical toolkit built through academic projects and a full-stack internship."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-base font-semibold text-paper">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-ink px-3 py-1 text-xs font-medium text-mist"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-6 rounded-2xl border border-line bg-surface p-6"
        >
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
            <Sparkles size={20} />
          </div>
          <h3 className="font-display text-base font-semibold text-paper">Soft Skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {softSkills.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-ink px-3 py-1 text-xs font-medium text-mist"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
