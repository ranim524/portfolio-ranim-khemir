import { motion } from "framer-motion";
import { Languages as LanguagesIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { languages } from "../data/portfolio";

export default function Languages() {
  return (
    <section id="languages" className="border-t border-line bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading eyebrow="Languages" title="Languages I communicate in" />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <LanguagesIcon size={18} />
              </div>
              <h3 className="font-display text-base font-semibold text-paper">{lang.name}</h3>
              <p className="mt-1 text-sm text-accent">{lang.level}</p>

              {lang.cefr && (
                <dl className="mt-4 space-y-1.5 border-t border-line pt-4">
                  {lang.cefr.map((row) => (
                    <div key={row.skill} className="flex items-center justify-between text-xs">
                      <dt className="text-mist">{row.skill}</dt>
                      <dd className="font-semibold text-paper">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-xs text-mist/70">
          CEFR scale — A1/A2: basic user, B1/B2: independent user, C1/C2: proficient user.
        </p>
      </div>
    </section>
  );
}
