import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Field Notes — San Juan Scene Hopper Gallery',
  description:
    'Scenes from the Scene Hopper — day rides, night rides, family trips and happy riders in Old San Juan.',
};

const DAY_RIDE_URL =
  'https://www.viator.com/tours/San-Juan/A-new-easy-way-to-explore-Old-San-juan-VIP-STYLE/d903-448604P1';

type Photo = {
  src: string;
  alt: string;
  caption?: string;
};

const PHOTOS: Photo[] = [
  { src: '/gallery/pink-flag.jpg',          alt: 'Three riders under the pink Puerto Rican flag canopy', caption: 'Calle Fortaleza · the flag street' },
  { src: '/gallery/street-crowd.jpg',       alt: 'A cart threads through a busy cobblestone street', caption: 'Through the crowd' },
  { src: '/gallery/morro-group.jpg',        alt: 'Happy riders in the cart with El Morro behind them', caption: 'At El Morro' },
  { src: '/gallery/night-traditional.jpg',  alt: 'Guests in traditional dress riding at night', caption: 'The city after dark' },
  { src: '/gallery/family-portrait.jpg',    alt: 'A family of four posing with their Scene Hopper cart', caption: 'The Pérez family' },
  { src: '/gallery/fleet-plaza.jpg',        alt: 'Two Scene Hopper carts parked in a plaza', caption: 'Carts at rest' },
  { src: '/gallery/street-wet.jpg',         alt: 'A cart rolling through a wet, red-tinted alley', caption: 'After the rain' },
  { src: '/gallery/night-formal.jpg',       alt: 'Formally dressed riders in the cart under purple lighting', caption: 'A night out' },
  { src: '/gallery/group-overcast.jpg',     alt: 'A group of friends by the carts', caption: 'Friends in from Los Angeles' },
  { src: '/gallery/fleet-festive.jpg',      alt: 'Two carts decorated with holiday wreaths', caption: 'December in Old San Juan' },
];

export default function GalleryPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Nav />

      {/* HEADER */}
      <section className="relative pt-[120px] md:pt-[160px] pb-16 md:pb-24 overflow-hidden">
        <div className="splash w-[500px] h-[500px] bg-teal/15 -left-32 top-20 pointer-events-none" />
        <div className="splash w-[400px] h-[400px] bg-yellow/15 right-10 top-40 hidden md:block pointer-events-none" />
        <div className="splash w-[300px] h-[300px] bg-pink/10 left-1/2 top-80 hidden md:block pointer-events-none" />

        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex items-center justify-between mb-10 text-[11px] uppercase tracking-[0.24em] text-ink/60">
            <a href="/" className="hover:text-teal-dark transition-colors">← Back home</a>
            <span>Vol. 01 · {new Date().getFullYear()}</span>
          </div>

          <Reveal>
            <div className="grid grid-cols-12 gap-y-8 md:gap-x-12 items-end mb-4">
              <div className="col-span-12 lg:col-span-8">
                <span className="text-yellow text-3xl md:text-5xl block mb-4 font-light">06</span>
                <h1 className="font-display font-light text-ink leading-[0.92] tracking-tightest text-[clamp(3rem,10vw,8rem)]">
                  Field notes,
                  <br />
                  <span className="italic text-teal-dark">in colour.</span>
                </h1>
              </div>
              <div className="col-span-12 lg:col-span-4 border-t-2 border-ink pt-6">
                <p className="text-ink/70 leading-relaxed">
                  Ten scenes from the route — day and night, families and friends, carts at rest
                  and carts in motion. Taken on the job, in Old San Juan.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MASONRY */}
      <section className="relative pb-24 md:pb-36">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:balance]">
            {PHOTOS.map((p, i) => (
              <Reveal
                key={p.src}
                delay={(i % 3) * 100}
                className="mb-5 break-inside-avoid group relative overflow-hidden bg-sand"
              >
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading={i < 3 ? 'eager' : 'lazy'}
                    className="w-full h-auto object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
                  />
                  {p.caption && (
                    <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="font-display italic text-lg leading-tight block">
                        {p.caption}
                      </span>
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* END CTA */}
      <section className="relative py-24 md:py-36 bg-ink text-cream overflow-hidden">
        <div className="splash w-[500px] h-[500px] bg-teal/30 -left-32 top-1/4 pointer-events-none" />
        <div className="splash w-[400px] h-[400px] bg-yellow/20 -right-32 bottom-0 pointer-events-none" />
        <div className="splash w-[300px] h-[300px] bg-pink/20 left-1/3 top-1/2 pointer-events-none" />

        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.24em] text-yellow mb-6 font-medium">
              Add your own
            </p>
            <h2 className="font-display font-light text-[clamp(2.5rem,8vw,6rem)] tracking-tightest leading-[0.95] mb-10">
              Your scene is <br />
              <span className="italic text-yellow">waiting.</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <a
                href={DAY_RIDE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-teal text-ink px-10 py-5 text-[12px] uppercase tracking-[0.22em] font-medium hover:bg-yellow transition-colors duration-500"
              >
                Book Day Ride →
              </a>
              <a
                href="/"
                className="w-full md:w-auto border-2 border-cream text-cream px-10 py-5 text-[12px] uppercase tracking-[0.22em] font-medium hover:bg-cream hover:text-ink transition-colors duration-500"
              >
                Back home
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
