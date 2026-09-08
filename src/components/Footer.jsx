import { Mail, ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";
import LinkedInIcon from "./icons/LinkedInIcon";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-10">
        <p className="text-sm text-mist">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="text-mist transition-colors hover:text-accent"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-mist transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-mist transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowUp size={14} /> Top
          </a>
        </div>
      </div>
    </footer>
  );
}
