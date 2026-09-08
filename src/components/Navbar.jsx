import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-ink/85 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-paper">
          Ranim<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-mist transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.cvFile}
          download
          className="hidden items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-paper transition-colors hover:border-accent hover:text-accent md:inline-flex"
        >
          <Download size={16} /> Resume
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-paper md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/98 px-6 pb-6 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleClick}
                  className="block text-base font-medium text-mist transition-colors hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.cvFile}
                download
                onClick={handleClick}
                className="mt-2 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-paper"
              >
                <Download size={16} /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
