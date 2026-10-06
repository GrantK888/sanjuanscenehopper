import Nav from '@/components/Nav';
import Reveal from '@/components/Reveal';

const DAY_RIDE_URL =
  'https://fareharbor.com/embeds/book/sanjuanscenehopper/items/611878/?full-items=yes&flow=1343801';
// Night Rides: coming soon — URL intentionally omitted. When ready, restore the booking CTAs in
// Nav.tsx (mobile menu), the hero booking card, the Night tour card, and the big CTA at the bottom.

export default function Page() {
  return (
    <main id="top" className="relative overflow-x-hidden">
      <Nav />

      {/* ============ HERO ============ */}
      <section className="relative pt-[88px] md:pt-[100px] pb-20 md:pb-32 overflow-hidden">
        {/* Logo-echoed color splashes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="splash w-[500px] h-[500px] bg-pink/15 -left-32 top-20" />
          <div className="splash w-[400px] h-[400px] bg-yellow/20 right-10 top-96 hidden md:block" />
          <div className="splash w-[300px] h-[300px] bg-teal/15 left-1/2 -bottom-10 hidden md:block" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          {/* Top meta row */}
          <div className="flex items-center justify-between mb-10 md:mb-14 text-[11px] uppercase tracking-[0.24em] text-ink/60">
            <span>Old San Juan · Puerto Rico</span>
            <span className="hidden md:inline">18.4655° N, 66.1057° W</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              Now Booking
            </span>
          </div>

          <div className="grid grid-cols-12 gap-y-8 md:gap-x-8 items-end">
            <div className="col-span-12 lg:col-span-8 hero-title-stagger">
              <h1 className="font-display font-light text-ink leading-[0.92] tracking-tightest">
                <span className="block text-[clamp(3rem,11vw,9.5rem)]">Old San Juan,</span>
                <span className="block text-[clamp(3rem,11vw,9.5rem)] italic text-teal-dark">
                  unhurried.
                </span>
                <span className="block text-[clamp(1.4rem,3vw,2.4rem)] mt-6 font-normal not-italic text-ink/70 max-w-2xl leading-tight font-sans">
                  A shaded, street-legal golf cart through five centuries of cobblestone —
                  covering ground your feet won&apos;t.
                </span>
              </h1>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:pl-8">
              <div className="border-t-2 border-ink pt-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-ink/60 mb-3 font-medium">
                  Two ways to ride
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={DAY_RIDE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between bg-teal text-ink px-6 py-5 hover:bg-ink hover:text-cream transition-colors duration-500"
                  >
                    <span className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.24em] opacity-80 font-medium">
                        ☀ Daytime
                      </span>
                      <span className="font-display text-2xl mt-0.5">Book Day Ride</span>
                    </span>
                    <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <div
                    className="flex items-center justify-between border-2 border-ink/40 text-ink px-6 py-5 cursor-default select-none"
                    aria-disabled="true"
                  >
                    <span className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.24em] opacity-70 font-medium">
                        ☾ Adults Only
                      </span>
                      <span className="font-display text-2xl mt-0.5">Night Rides</span>
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] bg-yellow text-ink px-2.5 py-1 font-medium">
                      Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image strip */}
          <Reveal className="mt-16 md:mt-24">
            <div className="grid grid-cols-12 gap-3 md:gap-5">
              <div className="col-span-12 md:col-span-8 aspect-[16/10] relative overflow-hidden bg-sand">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero-flag.jpg"
                  alt="Puerto Rican flag draped between pastel buildings in Old San Juan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-cream/95 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-ink font-medium">
                  Pl. 01 — Calle Fortaleza
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 aspect-[16/10] md:aspect-auto relative overflow-hidden bg-sand">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero-cart.jpg"
                  alt="San Juan Scene Hopper branded golf cart on the beach"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-cream/95 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-ink font-medium">
                  Pl. 02 — Your Carriage
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Marquee */}
        <div className="mt-20 md:mt-28 overflow-hidden border-y-2 border-ink py-5 bg-yellow/20">
          <div className="marquee-track flex whitespace-nowrap animate-marquee gap-12 text-ink">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 items-center font-display italic text-3xl md:text-4xl font-light">
                <span>El Morro</span>
                <span className="text-teal-dark" aria-hidden>✦</span>
                <span>Castillo San Cristóbal</span>
                <span className="text-teal-dark" aria-hidden>✦</span>
                <span>Paseo de la Princesa</span>
                <span className="text-teal-dark" aria-hidden>✦</span>
                <span>Calle del Cristo</span>
                <span className="text-teal-dark" aria-hidden>✦</span>
                <span>Catedral de San Juan</span>
                <span className="text-teal-dark" aria-hidden>✦</span>
                <span>Plaza de Armas</span>
                <span className="text-teal-dark" aria-hidden>✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TOURS ============ */}
      <section id="tours" className="relative py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="flex items-baseline justify-between mb-16 md:mb-24">
              <h2 className="font-display font-light text-5xl md:text-7xl tracking-tightest text-ink leading-none">
                <span className="text-yellow mr-4 text-3xl md:text-5xl align-top font-sans font-light">
                  01
                </span>
                The Tours
              </h2>
              <span className="text-[11px] uppercase tracking-[0.24em] text-ink/50 hidden md:block">
                Two flavors. One island.
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/15">
            {/* Day */}
            <Reveal className="bg-cream group">
              <div className="p-8 md:p-12 h-full flex flex-col relative overflow-hidden">
                <div className="splash w-64 h-64 bg-yellow/30 -top-20 -right-20" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-teal-dark font-medium">
                      ☀ Tour I · Daytime
                    </span>
                    <span className="font-mono text-xs text-ink/50">9 AM — 6 PM</span>
                  </div>
                  <h3 className="font-display font-light text-4xl md:text-5xl text-ink leading-[0.95] mb-6">
                    The <span className="italic text-teal-dark">Daylight</span> Hop
                  </h3>
                  <p className="text-ink/75 leading-relaxed mb-8 max-w-md">
                    Castle to cathedral. Plaza to paseo. Glide between the city&apos;s icons in
                    shade — covering five times the ground you could on foot, with the camera at
                    the ready.
                  </p>
                  <ul className="space-y-2 text-sm text-ink/75 mb-10">
                    <li className="flex items-center gap-3">
                      <span className="text-teal-dark">→</span>Wheelchair & mobility scooter accessible
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-teal-dark">→</span>Choose your own stops
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-teal-dark">→</span>Street-legal, fully shaded carts
                    </li>
                  </ul>
                  <a
                    href={DAY_RIDE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caret mt-auto inline-flex font-display italic text-2xl text-teal-dark hover:text-ink transition-colors w-fit font-light"
                  >
                    Reserve a Day Ride
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Night */}
            <Reveal delay={150} className="bg-ink text-cream group">
              <div className="p-8 md:p-12 h-full flex flex-col relative overflow-hidden">
                <div className="splash w-64 h-64 bg-teal/40 -top-20 -left-20" />
                <div className="splash w-48 h-48 bg-yellow/30 bottom-10 right-10" />
                <div className="splash w-40 h-40 bg-pink/25 top-1/2 right-1/4" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-yellow font-medium">
                      ☾ Tour II · Adults Only
                    </span>
                    <span className="font-mono text-xs text-cream/50">8 PM — late</span>
                  </div>
                  <h3 className="font-display font-light text-4xl md:text-5xl leading-[0.95] mb-6">
                    The <span className="italic text-yellow">After-Dark</span> Hop
                  </h3>
                  <p className="text-cream/80 leading-relaxed mb-8 max-w-md">
                    The city in a different key. Roll between historic landmarks and the loudest
                    bars in the neighborhood — and turn heads doing it. The cart is half the show.
                  </p>
                  <ul className="space-y-2 text-sm text-cream/75 mb-10">
                    <li className="flex items-center gap-3">
                      <span className="text-yellow">→</span>21+ only
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-yellow">→</span>Hand-picked nightlife stops
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-yellow">→</span>Famously photogenic carts
                    </li>
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-3 font-display italic text-2xl text-yellow/80 w-fit font-light cursor-default select-none">
                    Coming Soon
                    <span className="not-italic text-[10px] uppercase tracking-[0.22em] bg-yellow text-ink px-2 py-0.5 font-sans font-medium">
                      Soon
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ WHY ============ */}
      <section className="relative py-24 md:py-36 bg-paper">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-12">
            <Reveal className="col-span-12 lg:col-span-5">
              <span className="text-yellow text-3xl md:text-5xl block mb-4 font-light">02</span>
              <h2 className="font-display font-light text-5xl md:text-7xl tracking-tightest text-ink leading-[0.95] mb-8">
                Walking is <span className="italic text-teal-dark">overrated.</span>
              </h2>
              <p className="text-ink/70 text-lg leading-relaxed max-w-md mb-8">
                Cobblestone is beautiful. It is also brutal. Old San Juan&apos;s streets were laid
                for horses and history, not for the modern ankle. So we built the alternative.
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/el-morro-sentry.jpg"
                alt="El Morro fortress sentry box overlooking the Atlantic"
                className="w-full aspect-[4/5] object-cover"
              />
            </Reveal>

            <div className="col-span-12 lg:col-span-7 lg:pl-12 grid grid-cols-1 gap-px bg-ink/15">
              {[
                {
                  n: '5×',
                  color: 'text-teal-dark',
                  t: 'More ground covered',
                  b: "See what walking tours can't, in a fraction of the time. Every fortress, every plaza, every photo op.",
                },
                {
                  n: '0°',
                  color: 'text-pink',
                  t: 'Of sun on your neck',
                  b: 'Our carts are fully shaded — you stay cool through midday humidity that flattens everyone else.',
                },
                {
                  n: '∞',
                  color: 'text-yellow-dark',
                  t: 'Freedom of itinerary',
                  b: "We're not a guided tour. You point, we drive. Linger where you love it, skip what you don't.",
                },
                {
                  n: '♿',
                  color: 'text-teal-dark',
                  t: 'Accessible to all',
                  b: "Wheelchairs and mobility scooters welcome. The city is finally everyone's to see.",
                },
              ].map((f, i) => (
                <Reveal
                  key={i}
                  delay={i * 100}
                  className="bg-paper p-8 md:p-10 flex items-start gap-8"
                >
                  <span
                    className={`font-display font-light text-5xl md:text-6xl ${f.color} leading-none shrink-0 w-24`}
                  >
                    {f.n}
                  </span>
                  <div>
                    <h3 className="font-display font-light text-2xl md:text-3xl text-ink mb-2">
                      {f.t}
                    </h3>
                    <p className="text-ink/65 leading-relaxed">{f.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ DESTINATIONS ============ */}
      <section id="destinations" className="relative py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="grid grid-cols-12 mb-16 md:mb-20 gap-6">
              <div className="col-span-12 md:col-span-7">
                <span className="text-yellow text-3xl md:text-5xl block mb-4 font-light">03</span>
                <h2 className="font-display font-light text-5xl md:text-7xl tracking-tightest text-ink leading-[0.95]">
                  Must-see <br />
                  <span className="italic text-teal-dark">stops on the route.</span>
                </h2>
              </div>
              <div className="col-span-12 md:col-span-5 md:pt-16">
                <p className="text-ink/70 leading-relaxed">
                  We don&apos;t lecture, but we know the way. Tell us where you want to go — or let
                  our regulars tell you.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-2 md:gap-y-3">
            {[
              { n: 'I', name: 'Castillo San Felipe del Morro', kind: 'Fortress · 1539' },
              { n: 'II', name: 'Castillo San Cristóbal', kind: 'Fortress · 1634' },
              { n: 'III', name: 'Calle Fortaleza', kind: 'Flag Street' },
              { n: 'IV', name: 'Catedral de San Juan Bautista', kind: 'Cathedral · 1521' },
              { n: 'V', name: 'Paseo de la Princesa', kind: 'Promenade' },
              { n: 'VI', name: 'Museo de Las Américas', kind: 'Museum' },
              { n: 'VII', name: 'Plaza de Armas', kind: 'Plaza' },
              { n: 'VIII', name: 'La Fortaleza', kind: "Governor's Mansion" },
            ].map((d, i) => (
              <Reveal
                key={d.n}
                delay={i * 50}
                className="col-span-12 md:col-span-6 group cursor-default border-b border-ink/15 py-6 flex items-baseline justify-between hover:border-teal transition-colors"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-display italic text-yellow text-2xl md:text-3xl w-12 font-light">
                    {d.n}.
                  </span>
                  <span className="font-display font-light text-2xl md:text-3xl text-ink group-hover:italic group-hover:text-teal-dark transition-all">
                    {d.name}
                  </span>
                </div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-ink/50 hidden md:block">
                  {d.kind}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section id="gallery" className="relative py-24 md:py-36 bg-ink text-cream overflow-hidden">
        <div className="splash w-[500px] h-[500px] bg-teal/35 -left-32 top-32" />
        <div className="splash w-[400px] h-[400px] bg-yellow/20 -right-32 bottom-20" />
        <div className="splash w-[300px] h-[300px] bg-pink/20 left-1/2 top-1/2" />

        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="flex items-end justify-between mb-12 md:mb-16">
              <h2 className="font-display font-light text-5xl md:text-7xl tracking-tightest leading-[0.95]">
                <span className="text-yellow text-3xl md:text-5xl block mb-4 font-sans font-light">
                  04
                </span>
                Field notes,
                <br />
                <span className="italic text-yellow">in colour.</span>
              </h2>
              <a
                href="/gallery"
                className="caret font-display italic text-xl hover:text-teal-light transition-colors hidden md:inline-flex font-light"
              >
                Full gallery
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-12 gap-3 md:gap-5">
            <Reveal className="col-span-12 md:col-span-7 aspect-[4/3] overflow-hidden bg-ink-mid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/carts-fleet.jpg"
                alt="The San Juan Scene Hopper fleet lined up by the ocean"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]"
              />
            </Reveal>
            <Reveal delay={120} className="col-span-12 md:col-span-5 aspect-[4/3] overflow-hidden bg-ink-mid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/el-morro-wide.webp"
                alt="Castillo San Felipe del Morro"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]"
              />
            </Reveal>
            <Reveal delay={240} className="col-span-12 md:col-span-5 aspect-[4/3] overflow-hidden bg-ink-mid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/city-hall.jpg"
                alt="San Juan City Hall colonial architecture"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]"
              />
            </Reveal>
            <Reveal delay={360} className="col-span-12 md:col-span-7 aspect-[4/3] overflow-hidden bg-ink-mid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/family-cart.jpg"
                alt="A family with their Scene Hopper cart in Old San Juan"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="relative py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-12">
            <Reveal className="col-span-12 lg:col-span-4">
              <span className="text-yellow text-3xl md:text-5xl block mb-4 font-light">05</span>
              <h2 className="font-display font-light text-5xl md:text-7xl tracking-tightest text-ink leading-[0.95] mb-8">
                Questions, <br />
                <span className="italic text-teal-dark">answered.</span>
              </h2>
              <p className="text-ink/70 leading-relaxed max-w-sm">
                Anything else? Phone us. We pick up.
              </p>
              <a
                href="tel:+17879565575"
                className="font-display italic text-3xl text-teal-dark hover:text-ink transition-colors mt-4 inline-block font-light"
              >
                (787) 956-5575
              </a>
            </Reveal>

            <div className="col-span-12 lg:col-span-8 lg:pl-12">
              {[
                {
                  q: 'How do I book a ride?',
                  a: "Hit either booking button at the top of the page and follow the steps — it takes a minute. Questions or special requests? Phone or email us and we'll handle it personally.",
                },
                {
                  q: 'Is the ride safe?',
                  a: 'Yes. Our staff is fully trained, our carts are street-legal and maintained on a strict schedule, and our 24/7 support line is always reachable while you ride.',
                },
                {
                  q: 'Can you accommodate wheelchairs or mobility scooters?',
                  a: 'Absolutely. Our carts are designed to accommodate guests with wheelchairs and mobility scooters. The whole city — finally — is yours.',
                },
                {
                  q: 'Do you do guided tours?',
                  a: "No. We're a transportation service, not a licensed tour company. You pick the stops, we drive you there comfortably and quickly. Bring your own itinerary, or ask us for recommendations when you arrive.",
                },
                {
                  q: 'Where do we meet?',
                  a: "Pickup details are confirmed at booking. We meet inside Old San Juan and you're rolling within minutes.",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <details className="group border-t border-ink/15 last:border-b py-6 cursor-pointer">
                    <summary className="flex items-start justify-between gap-6 list-none">
                      <h3 className="font-display font-light text-2xl md:text-3xl text-ink leading-tight group-hover:italic group-hover:text-teal-dark transition-all">
                        {item.q}
                      </h3>
                      <span className="font-display text-3xl text-teal-dark transition-transform duration-500 group-open:rotate-45 shrink-0 font-light">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-ink/70 leading-relaxed max-w-2xl">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ BIG CTA ============ */}
      <section className="relative py-32 md:py-48 bg-ink text-cream overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="splash w-[500px] h-[500px] bg-teal/30 -left-32 top-1/4" />
          <div className="splash w-[400px] h-[400px] bg-yellow/20 -right-32 bottom-0" />
          <div className="splash w-[300px] h-[300px] bg-pink/20 left-1/3 top-1/2" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.24em] text-yellow mb-6 font-medium">
              The city is right there
            </p>
            <h2 className="font-display font-light text-[clamp(3rem,12vw,11rem)] tracking-tightest leading-[0.9] mb-12">
              What are you <br />
              <span className="italic text-yellow">waiting for?</span>
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
              <div
                className="w-full md:w-auto border-2 border-cream/40 text-cream/70 px-10 py-5 text-[12px] uppercase tracking-[0.22em] font-medium cursor-default flex items-center justify-center gap-3 select-none"
                aria-disabled="true"
              >
                Night Rides
                <span className="bg-yellow text-ink px-2.5 py-1 text-[10px] tracking-[0.2em] font-medium">
                  Coming Soon
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer id="contact" className="relative bg-paper py-20 md:py-28 overflow-hidden">
        <div className="splash w-[400px] h-[400px] bg-teal/15 -left-20 top-20 hidden md:block" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-12 mb-16">
            <div className="col-span-12 md:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="" className="w-16 h-16 object-contain" />
                <h3 className="font-display italic text-4xl md:text-5xl text-ink leading-none font-light">
                  San Juan <br />Scene Hopper
                </h3>
              </div>
              <p className="text-ink/70 max-w-sm leading-relaxed">
                Street-legal golf cart transportation through Old San Juan, Puerto Rico. Day and
                night. For everyone.
              </p>
            </div>

            <div className="col-span-6 md:col-span-3">
              <h4 className="text-[11px] uppercase tracking-[0.24em] text-ink/50 mb-5 font-medium">
                Reach Us
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+17879565575"
                  className="block font-display text-xl text-ink hover:text-teal-dark transition-colors font-light"
                >
                  (787) 956-5575
                </a>
                <a
                  href="mailto:louvaq@sanjuanscenehopper.com"
                  className="block font-display text-xl text-ink hover:text-teal-dark transition-colors break-all font-light"
                >
                  louvaq@
                  <br className="md:hidden" />
                  sanjuanscenehopper.com
                </a>
                <p className="text-sm text-ink/60 pt-2">Mon–Sun, 9 AM – 8 PM</p>
              </div>
            </div>

            <div className="col-span-6 md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-[0.24em] text-ink/50 mb-5 font-medium">
                Explore
              </h4>
              <ul className="space-y-3 text-ink">
                <li><a href="/#tours" className="link-sweep hover:text-teal-dark transition-colors">Tours</a></li>
                <li><a href="/#destinations" className="link-sweep hover:text-teal-dark transition-colors">Destinations</a></li>
                <li><a href="/gallery" className="link-sweep hover:text-teal-dark transition-colors">Gallery</a></li>
                <li><a href="/#faq" className="link-sweep hover:text-teal-dark transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div className="col-span-12 md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-[0.24em] text-ink/50 mb-5 font-medium">
                Follow
              </h4>
              <ul className="space-y-3 text-ink">
                <li>
                  <a
                    href="https://www.instagram.com/sanjuanscenehopper/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caret hover:text-teal-dark transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61551151924738"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caret hover:text-teal-dark transition-colors"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-ink/15 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.24em] text-ink/50">
            <span>© {new Date().getFullYear()} San Juan Scene Hopper · San Juan, P.R.</span>
            <span>Made with sun, salt, and second gear.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
