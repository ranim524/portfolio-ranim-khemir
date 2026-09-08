import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";
import photo from "../assets/ranim-photo.png";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[24rem] w-[24rem] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs font-medium text-mist">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Computer Science Graduate · ISAMM
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-paper sm:text-5xl lg:text-6xl">
            Ranim Khemir
          </h1>
          <p className="font-display mt-4 text-xl font-medium text-accent sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-mist">
            <MapPin size={16} className="text-accent" />
            {profile.location}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] hover:bg-accent/90"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
            <a
              href={profile.cvFile}
              download
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-mist transition-colors hover:text-paper"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/25 via-transparent to-gold/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-2">
            <img
              src={photo}
              alt="Portrait of Ranim Khemir"
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-line bg-surface-2/95 px-5 py-4 shadow-xl backdrop-blur">
            <p className="font-display text-lg font-semibold text-accent">Full-Stack Developer</p>
            <p className="text-xs text-mist">Web & Mobile</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
