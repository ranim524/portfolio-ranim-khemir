import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";
import LinkedInIcon from "./icons/LinkedInIcon";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have a project, an opportunity, or just want to connect? Reach out through any of the channels below."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-mist">
                    {item.label}
                  </span>
                  <span className="block text-sm font-medium text-paper">{item.value}</span>
                </span>
              </div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] hover:bg-accent/90"
          >
            <Mail size={16} /> Say Hello
          </a>
          <a
            href={profile.cvFile}
            download
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-accent hover:text-accent"
          >
            <Download size={16} /> Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
