'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#tours', label: 'Tours' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const DAY_RIDE_URL =
  'https://fareharbor.com/embeds/book/sanjuanscenehopper/items/611878/?full-items=yes&flow=1343801';
const NIGHT_RIDE_URL =
  'https://fareharbor.com/embeds/book/sanjuanscenehopper/items/661480/?full-items=yes&flow=no';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-blur border-b border-ink/10' : ''
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 flex items-center justify-between h-[72px] md:h-[88px]">
          <a href="#top" className="group flex items-center gap-3">
            <Mark />
            <span className="font-display text-[15px] leading-none tracking-tight text-ink hidden sm:block">
              <span className="block italic">San Juan</span>
              <span className="block text-[11px] uppercase tracking-[0.22em] not-italic mt-0.5 text-teal">
                Scene Hopper
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] uppercase tracking-[0.18em] text-ink/70 hover:text-teal transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={DAY_RIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-teal text-bone px-5 py-3 text-[12px] uppercase tracking-[0.2em] hover:bg-terracotta transition-colors duration-500"
            >
              Book a Ride
              <span aria-hidden>↗</span>
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden h-10 w-10 grid place-items-center text-ink"
            >
              <span className="block w-5 h-px bg-ink relative before:absolute before:content-[''] before:w-5 before:h-px before:bg-ink before:-top-1.5 after:absolute after:content-[''] after:w-5 after:h-px after:bg-ink after:top-1.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-paper transition-opacity duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between h-[72px] px-5">
          <Mark />
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="h-10 w-10 grid place-items-center text-ink text-2xl"
          >
            ×
          </button>
        </div>
        <nav className="px-6 pt-10 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-ink"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-10 flex flex-col gap-3">
            <a
              href={DAY_RIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-teal text-bone px-6 py-4 text-[12px] uppercase tracking-[0.22em]"
            >
              Book Day Ride
            </a>
            <a
              href={NIGHT_RIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-ink text-ink px-6 py-4 text-[12px] uppercase tracking-[0.22em]"
            >
              Book Night Ride
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

function Mark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" className="text-teal" fill="none">
      <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1" />
      <path
        d="M9 22h3l1-3h9l1 3h3M11 22v3M25 22v3M14 19l1.5-4.5h5L22 19"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="13" cy="22" r="1.5" fill="currentColor" />
      <circle cx="23" cy="22" r="1.5" fill="currentColor" />
    </svg>
  );
}
