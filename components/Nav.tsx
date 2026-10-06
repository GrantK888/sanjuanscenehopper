'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '/#tours', label: 'Tours' },
  { href: '/#destinations', label: 'Destinations' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact' },
];

const DAY_RIDE_URL =
  'https://fareharbor.com/embeds/book/sanjuanscenehopper/items/611878/?full-items=yes&flow=1343801';
// NIGHT_RIDE_URL intentionally omitted — Night Rides are "Coming Soon".

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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="San Juan Scene Hopper"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <span className="font-display text-[15px] leading-none tracking-tight text-ink hidden sm:block">
              <span className="block italic">San Juan</span>
              <span className="block text-[10px] uppercase tracking-[0.24em] not-italic mt-1 text-teal-dark font-sans font-medium">
                Scene Hopper
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[12px] uppercase tracking-[0.22em] text-ink/75 hover:text-teal-dark transition-colors duration-300 font-medium"
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
              className="hidden md:inline-flex items-center gap-2 bg-teal text-ink px-5 py-3 text-[11px] uppercase tracking-[0.22em] font-medium hover:bg-ink hover:text-cream transition-colors duration-500"
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

      <div
        className={`fixed inset-0 z-[60] bg-cream transition-opacity duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between h-[72px] px-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" className="w-10 h-10 object-contain" />
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
              className="block text-center bg-teal text-ink px-6 py-4 text-[11px] uppercase tracking-[0.24em] font-medium"
            >
              Book Day Ride
            </a>
            <div
              className="block text-center border border-ink/40 text-ink/60 px-6 py-4 text-[11px] uppercase tracking-[0.24em] font-medium cursor-default select-none"
              aria-disabled="true"
            >
              Night Rides — Coming Soon
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
