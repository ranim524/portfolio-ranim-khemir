import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { about } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="About Me"
          title="An engineer who enjoys turning ideas into intelligent products"
        />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-5"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-mist sm:text-lg">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/50"
              >
                <p className="section-label text-[11px] font-semibold uppercase text-accent">
                  {h.label}
                </p>
                <p className="mt-2 text-sm font-medium leading-snug text-paper">{h.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
