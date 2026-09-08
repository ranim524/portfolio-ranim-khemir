import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";
import { ClaimsVisual, MobileAppVisual } from "./ProjectVisual";

const visuals = { "mae-assurances": ClaimsVisual, "sales-app": MobileAppVisual };

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Academic and internship projects that reflect how I approach building software end to end."
        />

        <div className="mt-14 space-y-8">
          {projects.map((project, i) => {
            const Visual = visuals[project.id];
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                className="grid grid-cols-1 overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-accent/40 lg:grid-cols-2"
              >
                <div className="order-2 flex flex-col justify-center p-8 lg:order-1 lg:p-10">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                      {project.tag}
                    </span>
                    <span className="text-xs font-medium text-mist">{project.period}</span>
                  </div>

                  <h3 className="font-display mt-4 text-2xl font-semibold text-paper">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">{project.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-mist">{project.description}</p>

                  <ul className="mt-5 space-y-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm leading-relaxed text-mist">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line bg-ink px-3 py-1 text-xs font-medium text-mist"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.note && (
                    <p className="mt-6 inline-flex items-center gap-2 text-xs text-mist/80">
                      <Lock size={13} /> {project.note}
                    </p>
                  )}
                </div>

                <div className="order-1 min-h-[240px] bg-ink p-4 lg:order-2 lg:p-6">
                  <div className="h-full overflow-hidden rounded-2xl border border-line">
                    <Visual />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
