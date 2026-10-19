"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#education", label: "Education" },
  { href: "#scripts", label: "Screenwriting" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ name, initials }: { name: string; initials: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled || open ? "nav-solid" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="brand" aria-label="Home" onClick={() => setOpen(false)}>
          <span className="mark">{initials}</span>
          <span className="brand-name">{name}</span>
        </a>

        <nav aria-label="Main" className="nav-links">
          {links.slice(0, 5).map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-small nav-cta">
          Get in touch
        </a>

        <button
          type="button"
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <nav aria-label="Mobile" className="wrap">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
