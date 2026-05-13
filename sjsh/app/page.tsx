import Nav from '@/components/Nav';
import Reveal from '@/components/Reveal';

const DAY_RIDE_URL =
  'https://fareharbor.com/embeds/book/sanjuanscenehopper/items/611878/?full-items=yes&flow=1343801';
const NIGHT_RIDE_URL =
  'https://fareharbor.com/embeds/book/sanjuanscenehopper/items/661480/?full-items=yes&flow=no';

const HERO_IMG =
  'https://sanjuanscenehopper.com/wp-content/uploads/2025/02/san-juan-city-building.jpg';
const CART_IMG =
  'https://sanjuanscenehopper.com/wp-content/uploads/2025/02/cart-1.jpg';
const ITIN_IMG =
  'https://sanjuanscenehopper.com/wp-content/uploads/2025/02/San-Juan-Itin-2.jpg';
const G1 = 'https://sanjuanscenehopper.com/wp-content/uploads/2025/02/1-1.jpg';
const G2 = 'https://sanjuanscenehopper.com/wp-content/uploads/2025/02/2-1.jpg';
const G3 = 'https://sanjuanscenehopper.com/wp-content/uploads/2025/02/3.jpg';
const NIGHT_IMG = 'https://sanjuanscenehopper.com/wp-content/uploads/2025/02/1.jpg';
const STREET_IMG = 'https://sanjuanscenehopper.com/wp-content/uploads/2025/02/2.jpg';

export default function Page() {
  return (
    <main id="top" className="relative">
      <Nav />

      {/* HERO */}
      <section className="relative pt-[88px] md:pt-[100px] pb-20 md:pb-32 overflow-hidden">
        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-ink/8 hidden md:block" />
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-ink/8 hidden md:block" />
          <div className="absolute right-[8%] top-0 bottom-0 w-px bg-ink/8 hidden md:block" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          {/* Top meta row */}
          <div className="flex items-center justify-between mb-10 md:mb-14 text-[11px] uppercase tracking-[0.24em] text-ink/60">
            <span>Old San Juan · Puerto Rico</span>
            <span className="hidden md:inline">18.4655° N, 66.1057° W</span>
            <span>Est. 2024</span>
          </div>

          <div className="grid grid-cols-12 gap-y-8 md:gap-x-8 items-end">
            <div className="col-span-12 lg:col-span-8 hero-title-stagger">
              <h1 className="font-display font-light text-ink leading-[0.92] tracking-tightest">
                <span className="block text-[clamp(3rem,11vw,9.5rem)]">Old San Juan,</span>
                <span className="block text-[clamp(3rem,11vw,9.5rem)] italic text-teal">
                  unhurried.
                </span>
                <span className="block text-[clamp(1.4rem,3vw,2.4rem)] mt-6 font-normal not-italic text-ink/70 max-w-2xl leading-tight">
                  A shaded, street-legal golf cart through five centuries of
                  cobblestone — covering ground your feet won't.
                </span>
              </h1>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:pl-8">
              <div className="border-t border-ink/20 pt-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-ink/60 mb-3">
                  Two ways to ride
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={DAY_RIDE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between bg-teal text-bone px-6 py-5 hover:bg-terracotta transition-colors duration-500"
                  >
                    <span className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.24em] opacity-70">
                        ☀ Daytime
                      </span>
                      <span className="font-display text-2xl mt-0.5">Book Day Ride</span>
                    </span>
                    <span className="text-2xl transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a
                    href={NIGHT_RIDE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border border-ink text-ink px-6 py-5 hover:bg-ink hover:text-bone transition-colors duration-500"
                  >
                    <span className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.24em] opacity-70">
                        ☾ Adults Only
                      </span>
                      <span className="font-display text-2xl mt-0.5">Book Night Ride</span>
                    </span>
                    <span className="text-2xl transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
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
                  src={HERO_IMG}
                  alt="Cobblestone streets of Old San Juan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-bone/90 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-ink">
                  Pl. 01 — Calle del Cristo
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 aspect-[16/10] md:aspect-auto relative overflow-hidden bg-sand">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={CART_IMG}
                  alt="Our shaded golf cart"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-bone/90 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-ink">
                  Pl. 02 — Your Carriage
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Marquee */}
        <div className="mt-20 md:mt-28 overflow-hidden border-y border-ink/15 py-5 bg-paper/60">
          <div className="marquee-track flex whitespace-nowrap animate-marquee gap-12 text-ink/70">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 items-center font-display italic text-3xl md:text-4xl">
                <span>El Morro</span>
                <span aria-hidden>✦</span>
                <span>Castillo San Cristóbal</span>
                <span aria-hidden>✦</span>
                <span>Paseo de la Princesa</span>
                <span aria-hidden>✦</span>
                <span>Calle del Cristo</span>
                <span aria-hidden>✦</span>
                <span>Catedral de San Juan Bautista</span>
                <span aria-hidden>✦</span>
                <span>Plaza de Armas</span>
                <span aria-hidden>✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOURS */}
      <section id="tours" className="relative py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="flex items-baseline justify-between mb-16 md:mb-24">
              <h2 className="font-display text-5xl md:text-7xl tracking-tightest text-ink leading-none">
                <span className="section-number text-ochre mr-4 text-3xl md:text-5xl align-top">
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
            <Reveal className="bg-bone group">
              <div className="p-8 md:p-12 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[11px] uppercase tracking-[0.24em] text-teal">
                    ☀ Tour I · Daytime
                  </span>
                  <span className="font-mono text-xs text-ink/50">9 AM — 6 PM</span>
                </div>
                <h3 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-6">
                  The <span className="italic text-teal">Daylight</span> Hop
                </h3>
                <p className="text-ink/75 leading-relaxed mb-8 max-w-md">
                  Castle to cathedral. Plaza to paseo. Glide between the
                  city's icons in shade — covering five times the ground you
                  could on foot, with the camera at the ready.
                </p>
                <ul className="space-y-2 text-sm text-ink/70 mb-10">
                  <li className="flex items-center gap-3">
                    <span className="text-terracotta">→</span>Wheelchair & mobility scooter accessible
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-terracotta">→</span>Choose your own stops
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-terracotta">→</span>Street-legal, fully shaded carts
                  </li>
                </ul>
                <a
                  href={DAY_RIDE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="caret mt-auto inline-flex font-display text-2xl italic text-teal hover:text-terracotta transition-colors w-fit"
                >
                  Reserve a Day Ride
                </a>
              </div>
            </Reveal>

            {/* Night */}
            <Reveal delay={150} className="bg-ink text-bone group">
              <div className="p-8 md:p-12 h-full flex flex-col relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-terracotta/20 blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-ochre">
                      ☾ Tour II · Adults Only
                    </span>
                    <span className="font-mono text-xs text-bone/50">8 PM — late</span>
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl leading-[0.95] mb-6">
                    The <span className="italic text-ochre">After-Dark</span> Hop
                  </h3>
                  <p className="text-bone/75 leading-relaxed mb-8 max-w-md">
                    The city in a different key. Roll between historic
                    landmarks and the loudest bars in the neighborhood — and
                    turn heads doing it. The cart is half the show.
                  </p>
                  <ul className="space-y-2 text-sm text-bone/70 mb-10">
                    <li className="flex items-center gap-3">
                      <span className="text-ochre">→</span>21+ only
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-ochre">→</span>Hand-picked nightlife stops
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-ochre">→</span>Famously photogenic carts
                    </li>
                  </ul>
                  <a
                    href={NIGHT_RIDE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caret mt-auto inline-flex font-display text-2xl italic text-ochre hover:text-terracotta-light transition-colors w-fit"
                  >
                    Reserve a Night Ride
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="relative py-24 md:py-36 bg-paper">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-12">
            <Reveal className="col-span-12 lg:col-span-5">
              <span className="section-number text-ochre text-3xl md:text-5xl block mb-4">02</span>
              <h2 className="font-display text-5xl md:text-7xl tracking-tightest text-ink leading-[0.95] mb-8">
                Walking is <span className="italic text-teal">overrated.</span>
              </h2>
              <p className="text-ink/70 text-lg leading-relaxed max-w-md mb-8">
                Cobblestone is beautiful. It is also brutal. Old San Juan's
                streets were laid for horses and history, not for the modern
                ankle. So we built the alternative.
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={STREET_IMG}
                alt="Street in Old San Juan"
                className="w-full aspect-[4/5] object-cover"
              />
            </Reveal>

            <div className="col-span-12 lg:col-span-7 lg:pl-12 grid grid-cols-1 gap-px bg-ink/15">
              {[
                {
                  n: '5×',
                  t: 'More ground covered',
                  b: "See what walking tours can't, in a fraction of the time. Every fortress, every plaza, every photo op.",
                },
                {
                  n: '0°',
                  t: 'Of sun on your neck',
                  b: 'Our carts are fully shaded — you stay cool through midday humidity that flattens everyone else.',
                },
                {
                  n: '∞',
                  t: 'Freedom of itinerary',
                  b: "We're not a guided tour. You point, we drive. Linger where you love it, skip what you don't.",
                },
                {
                  n: '♿',
                  t: 'Accessible to all',
                  b: 'Wheelchairs and mobility scooters welcome. The city is finally everyone\'s to see.',
                },
              ].map((f, i) => (
                <Reveal
                  key={i}
                  delay={i * 100}
                  className="bg-paper p-8 md:p-10 flex items-start gap-8"
                >
                  <span className="font-display text-5xl md:text-6xl text-teal leading-none shrink-0 w-24">
                    {f.n}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-ink mb-2">
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

      {/* DESTINATIONS */}
      <section id="destinations" className="relative py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="grid grid-cols-12 mb-16 md:mb-20 gap-6">
              <div className="col-span-12 md:col-span-7">
                <span className="section-number text-ochre text-3xl md:text-5xl block mb-4">
                  03
                </span>
                <h2 className="font-display text-5xl md:text-7xl tracking-tightest text-ink leading-[0.95]">
                  Must-see <br />
                  <span className="italic text-teal">stops on the route.</span>
                </h2>
              </div>
              <div className="col-span-12 md:col-span-5 md:pt-16">
                <p className="text-ink/70 leading-relaxed">
                  We don't lecture, but we know the way. Tell us where you
                  want to go — or let our regulars tell you.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-2 md:gap-y-3">
            {[
              { n: 'I', name: 'Castillo San Felipe del Morro', kind: 'Fortress · 1539' },
              { n: 'II', name: 'Castillo San Cristóbal', kind: 'Fortress · 1634' },
              { n: 'III', name: 'Calle del Cristo', kind: 'Street' },
              { n: 'IV', name: 'Catedral de San Juan Bautista', kind: 'Cathedral · 1521' },
              { n: 'V', name: 'Paseo de la Princesa', kind: 'Promenade' },
              { n: 'VI', name: 'Museo de Las Américas', kind: 'Museum' },
              { n: 'VII', name: 'Plaza de Armas', kind: 'Plaza' },
              { n: 'VIII', name: 'La Fortaleza', kind: 'Governor\'s Mansion' },
            ].map((d, i) => (
              <Reveal
                key={d.n}
                delay={i * 60}
                className="col-span-12 md:col-span-6 group cursor-default border-b border-ink/15 py-6 flex items-baseline justify-between hover:border-ink transition-colors"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-display italic text-ochre text-2xl md:text-3xl w-12">
                    {d.n}.
                  </span>
                  <span className="font-display text-2xl md:text-3xl text-ink group-hover:italic transition-all">
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

      {/* GALLERY */}
      <section id="gallery" className="relative py-24 md:py-36 bg-teal text-bone overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="flex items-end justify-between mb-12 md:mb-16">
              <h2 className="font-display text-5xl md:text-7xl tracking-tightest leading-[0.95]">
                <span className="section-number text-ochre text-3xl md:text-5xl block mb-4">
                  04
                </span>
                Field notes,<br />
                <span className="italic text-ochre">in colour.</span>
              </h2>
              <a
                href="https://sanjuanscenehopper.com/56-2/"
                className="caret font-display italic text-xl hover:text-ochre transition-colors hidden md:inline-flex"
              >
                Full gallery
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-12 gap-3 md:gap-5">
            <Reveal className="col-span-12 md:col-span-7 aspect-[4/3] overflow-hidden bg-teal-deep">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={G1} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]" />
            </Reveal>
            <Reveal delay={120} className="col-span-12 md:col-span-5 aspect-[4/3] overflow-hidden bg-teal-deep">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={G2} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]" />
            </Reveal>
            <Reveal delay={240} className="col-span-12 md:col-span-5 aspect-[4/3] overflow-hidden bg-teal-deep">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={G3} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]" />
            </Reveal>
            <Reveal delay={360} className="col-span-12 md:col-span-7 aspect-[4/3] overflow-hidden bg-teal-deep">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={NIGHT_IMG} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]" />
            </Reveal>
          </div>

          <div className="md:hidden mt-10 text-center">
            <a href="https://sanjuanscenehopper.com/56-2/" className="caret font-display italic text-xl text-ochre">
              View full gallery
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-12">
            <Reveal className="col-span-12 lg:col-span-4">
              <span className="section-number text-ochre text-3xl md:text-5xl block mb-4">05</span>
              <h2 className="font-display text-5xl md:text-7xl tracking-tightest text-ink leading-[0.95] mb-8">
                Questions, <br />
                <span className="italic text-teal">answered.</span>
              </h2>
              <p className="text-ink/70 leading-relaxed max-w-sm">
                Anything else? Phone us. We pick up.
              </p>
              <a
                href="tel:+17879565575"
                className="font-display italic text-3xl text-teal hover:text-terracotta transition-colors mt-4 inline-block"
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
                      <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight group-hover:italic transition-all">
                        {item.q}
                      </h3>
                      <span className="font-display text-3xl text-teal transition-transform duration-500 group-open:rotate-45 shrink-0">
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

      {/* BIG CTA */}
      <section className="relative py-32 md:py-48 bg-ink text-bone overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-32 top-1/4 w-[500px] h-[500px] rounded-full bg-terracotta/15 blur-3xl" />
          <div className="absolute -right-32 bottom-0 w-[400px] h-[400px] rounded-full bg-ochre/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.24em] text-ochre mb-6">
              The city is right there
            </p>
            <h2 className="font-display text-[clamp(3rem,12vw,11rem)] tracking-tightest leading-[0.9] mb-12">
              What are you <br />
              <span className="italic text-ochre">waiting for?</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <a
                href={DAY_RIDE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-bone text-ink px-10 py-5 text-[12px] uppercase tracking-[0.22em] hover:bg-ochre transition-colors duration-500"
              >
                Book Day Ride →
              </a>
              <a
                href={NIGHT_RIDE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto border border-bone text-bone px-10 py-5 text-[12px] uppercase tracking-[0.22em] hover:bg-bone hover:text-ink transition-colors duration-500"
              >
                Book Night Ride →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="relative bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-12 mb-16">
            <div className="col-span-12 md:col-span-5">
              <h3 className="font-display italic text-5xl md:text-6xl text-teal leading-none mb-6">
                San Juan <br />Scene Hopper
              </h3>
              <p className="text-ink/70 max-w-sm leading-relaxed">
                Street-legal golf cart transportation through Old San Juan,
                Puerto Rico. Day and night. For everyone.
              </p>
            </div>

            <div className="col-span-6 md:col-span-3">
              <h4 className="text-[11px] uppercase tracking-[0.24em] text-ink/50 mb-5">
                Reach Us
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+17879565575"
                  className="block font-display text-xl text-ink hover:text-teal transition-colors"
                >
                  (787) 956-5575
                </a>
                <a
                  href="mailto:reservations@sanjuanscenehopper.com"
                  className="block font-display text-xl text-ink hover:text-teal transition-colors break-all"
                >
                  reservations@<br className="md:hidden" />sanjuanscenehopper.com
                </a>
                <p className="text-sm text-ink/60 pt-2">Mon–Sun, 9 AM – 8 PM</p>
              </div>
            </div>

            <div className="col-span-6 md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-[0.24em] text-ink/50 mb-5">Explore</h4>
              <ul className="space-y-3 text-ink">
                <li><a href="#tours" className="hover:text-teal transition-colors">Tours</a></li>
                <li><a href="#destinations" className="hover:text-teal transition-colors">Destinations</a></li>
                <li><a href="#gallery" className="hover:text-teal transition-colors">Gallery</a></li>
                <li><a href="#faq" className="hover:text-teal transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div className="col-span-12 md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-[0.24em] text-ink/50 mb-5">Follow</h4>
              <ul className="space-y-3 text-ink">
                <li>
                  <a
                    href="https://www.instagram.com/sanjuanscenehopper/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caret hover:text-teal transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61551151924738"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caret hover:text-teal transition-colors"
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
