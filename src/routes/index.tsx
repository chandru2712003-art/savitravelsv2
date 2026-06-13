import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MapPin,
  Car,
  Plane,
  Route as RouteIcon,
  Shield,
  Clock,
  UserCheck,
  Star,
  CheckCircle2,
  MessageCircle,
  Mail,
} from "lucide-react";
import fleetHero from "@/assets/fleet-hero.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carSuv from "@/assets/car-suv.jpg";
import carVan from "@/assets/car-van.jpg";
import carTempo from "@/assets/car-tempo.jpg";
import destMadurai from "@/assets/dest-madurai.jpg";
import destOoty from "@/assets/dest-ooty.jpg";
import destKodai from "@/assets/dest-kodai.jpg";
import destRameswaram from "@/assets/dest-rameswaram.jpg";
import destMahabalipuram from "@/assets/dest-mahabalipuram.jpg";
import destKanyakumari from "@/assets/dest-kanyakumari.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SSG Tours & Travels — தமிழ்நாடு கார் வாடகை | பாதுகாப்பான பயணம், இனிய நினைவுகள்" },
      {
        name: "description",
        content:
          "வணக்கம்! Sedan, SUV, Tempo Traveller, Bus — உள்ளூர், வெளியூர், அறுபடை வீடு, நவகிரகம், ஊட்டி-கொடை சுற்றுலா. சிறந்த விலை உத்தரவாதம். அழைக்க 9344269995 / 9363169995.",
      },
      { property: "og:title", content: "SSG Tours & Travels — பாதுகாப்பான பயணம், இனிய நினைவுகள்" },
      {
        property: "og:description",
        content: "தமிழ்நாட்டின் நம்பிக்கையான பயண நண்பன் — அறுபடை வீடு, நவகிரகம், மலை வாசம் & விமான நிலைய சேவை. 24x7.",
      },
      { property: "og:image", content: fleetHero },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Catamaran:wght@500;700;800;900&family=Noto+Sans+Tamil:wght@500;700;800;900&family=Poppins:wght@600;700;800;900&display=swap",
      },
    ],
  }),
  component: Home,
});

const PHONE1 = "9344269995";
const PHONE2 = "9363169995";
const WA_TEXT = "வணக்கம் SSG Tours & Travels! நான் ஒரு பயணம் முன்பதிவு செய்ய விரும்புகிறேன். தயவுசெய்து விவரங்களை அனுப்புங்கள்.";
const WA1 = `https://wa.me/91${PHONE1}?text=${encodeURIComponent(WA_TEXT)}`;
const WA2 = `https://wa.me/91${PHONE2}?text=${encodeURIComponent(WA_TEXT)}`;

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Nav />
      <Hero />
      <ContactStrip />
      <Services />
      <Fleet />
      <Pricing />
      <FamousTours />
      <WhyUs />
      <BookNow />
      <Testimonials />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

function TopBar() {
  return (
    <div className="hidden md:block bg-navy text-navy-foreground text-xs">
      <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><MapPin className="size-3.5" /> எண். 12, கண்ணகி நகர், 2வது தெரு, மாடம்பாக்கம், சென்னை – 600 126</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-gold font-bold"><Clock className="size-3.5" /> 24x7 சேவை</span>
          <a href={`tel:${PHONE1}`} className="flex items-center gap-1.5 hover:text-gold transition font-semibold">
            <Phone className="size-3.5" /> {PHONE1}
          </a>
          <a href={`tel:${PHONE2}`} className="flex items-center gap-1.5 hover:text-gold transition font-semibold">
            <Phone className="size-3.5" /> {PHONE2}
          </a>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b-2 border-primary">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between gap-3">
        <a href="#" className="flex items-center gap-3">
          <div className="size-12 rounded-full bg-gradient-cta grid place-items-center text-primary-foreground font-black text-lg shadow-brand border-2 border-navy">
            SSG
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-navy text-lg tracking-tight">SSG Tours & Travels</div>
            <div className="text-[11px] text-primary font-semibold tracking-wide">பாதுகாப்பான பயணம்... இனிய நினைவுகள்...</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-navy">
          <a href="#services" className="hover:text-primary transition">சேவைகள்</a>
          <a href="#fleet" className="hover:text-primary transition">வாகனங்கள்</a>
          <a href="#pricing" className="hover:text-primary transition">விலை விவரம்</a>
          <a href="#tours" className="hover:text-primary transition">சுற்றுலா தொகுப்புகள்</a>
          <a href="#contact" className="hover:text-primary transition">தொடர்பு</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE1}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-cta text-primary-foreground px-4 py-2.5 text-sm font-bold shadow-brand hover:opacity-95 transition"
          >
            <Phone className="size-4" /> இப்போது அழை
          </a>
          <a
            href={WA1}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2.5 text-sm font-bold shadow-brand hover:opacity-95 transition"
          >
            <MessageCircle className="size-4" /> வாட்ஸ்அப்
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        className="absolute inset-0 opacity-25 mix-blend-overlay bg-cover bg-center"
        style={{ backgroundImage: `url(${fleetHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-20 md:pt-20 md:pb-28 text-primary-foreground">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-cta text-primary-foreground px-4 py-1.5 text-xs font-black uppercase tracking-wider shadow-gold">
              <Star className="size-3.5 fill-current" /> 24×7 சேவை · சிறந்த விலை உத்தரவாதம்
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              வணக்கம்! <span className="text-gold">தமிழ்நாட்டின்</span> நம்பிக்கையான பயண நண்பன்.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-primary-foreground/90 max-w-xl">
              சேடான், எஸ்யூவி, டெம்போ டிராவலர், டூரிஸ்டர், ஐச்சர், மினி பஸ் — உள்ளூர், வெளியூர், அறுபடை வீடு,
              நவகிரகம் & விமான நிலைய சேவை. <span className="font-bold text-gold">பாதுகாப்பான பயணம்... இனிய நினைவுகள்...</span>
            </p>

            {/* Big visible contact CTAs */}
            <div className="mt-7 grid sm:grid-cols-2 gap-3 max-w-xl">
              <a
                href={`tel:${PHONE1}`}
                className="group rounded-2xl bg-white text-navy px-5 py-4 shadow-brand hover:scale-[1.02] transition flex items-center gap-3"
              >
                <div className="size-12 rounded-full bg-gradient-cta grid place-items-center text-primary-foreground">
                  <Phone className="size-6" />
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] uppercase tracking-widest text-primary font-bold">இப்போது அழை</div>
                  <div className="font-black text-xl">{PHONE1}</div>
                </div>
              </a>
              <a
                href={WA1}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl bg-white text-navy px-5 py-4 shadow-brand hover:scale-[1.02] transition flex items-center gap-3"
              >
                <div className="size-12 rounded-full bg-[#25D366] grid place-items-center text-white">
                  <MessageCircle className="size-6" />
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] uppercase tracking-widest text-[#128C4A] font-bold">வாட்ஸ்அப்</div>
                  <div className="font-black text-xl">{PHONE1}</div>
                </div>
              </a>
              <a
                href={`tel:${PHONE2}`}
                className="rounded-2xl bg-white/15 backdrop-blur border border-white/30 px-5 py-3 hover:bg-white/25 transition flex items-center gap-3"
              >
                <Phone className="size-5 text-gold" />
                <div className="font-bold text-lg">{PHONE2}</div>
              </a>
              <a
                href={WA2}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white/15 backdrop-blur border border-white/30 px-5 py-3 hover:bg-white/25 transition flex items-center gap-3"
              >
                <MessageCircle className="size-5 text-gold" />
                <div className="font-bold text-lg">{PHONE2}</div>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {[
                { k: "10K+", v: "மகிழ்ச்சியான பயணங்கள்" },
                { k: "24×7", v: "சேவை" },
                { k: "50+", v: "சுற்றுலா இடங்கள்" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-3 text-center">
                  <div className="text-2xl font-black text-gold">{s.k}</div>
                  <div className="text-[10px] uppercase tracking-wider text-white/80 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-brand border-4 border-primary/60">
              <img
                src={fleetHero}
                alt="SSG Tours & Travels வாகனங்கள்"
                width={1920}
                height={1280}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground rounded-2xl p-4 shadow-brand hidden sm:flex items-center gap-3">
              <div className="size-12 rounded-xl bg-gradient-cta grid place-items-center">
                <Shield className="size-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-sm text-primary">பாதுகாப்பான பயணம், இனிய நினைவுகள்</div>
                <div className="text-xs text-muted-foreground">அனுபவம் மிக்க ஓட்டுநர்கள்</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactStrip() {
  return (
    <section className="bg-primary text-primary-foreground border-y-2 border-navy">
      <div className="mx-auto max-w-7xl px-6 py-4 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center">
        <div className="font-black uppercase tracking-wider text-sm md:text-base">
          📞 முன்பதிவுக்கு இப்போதே அழைக்கவும்:
        </div>
        <a href={`tel:${PHONE1}`} className="inline-flex items-center gap-2 font-black text-lg md:text-2xl hover:text-navy transition">
          <Phone className="size-5" /> {PHONE1}
        </a>
        <a href={`tel:${PHONE2}`} className="inline-flex items-center gap-2 font-black text-lg md:text-2xl hover:text-navy transition">
          <Phone className="size-5" /> {PHONE2}
        </a>
        <a href={WA1} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2 font-bold text-sm hover:opacity-90">
          <MessageCircle className="size-4" /> வாட்ஸ்அப்பில் பேசுங்கள்
        </a>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: Car,
      title: "எல்லா வகை வாகனங்கள்",
      desc: "சேடான், எஸ்யூவி, டெம்போ டிராவலர், டூரிஸ்டர், ஐச்சர் க்ரூஸியோ, மினி பஸ் — குழுவின் அளவு என்னவாக இருந்தாலும் வாகனம் தயார்.",
    },
    {
      icon: RouteIcon,
      title: "உள்ளூர் & வெளியூர் பயணம்",
      desc: "சென்னையில் நகர சவாரி முதல், வார இறுதி பயணம், அறுபடை வீடு, நவகிரகம், கேரளா, கர்நாடகா — எந்த ஊருக்கும்.",
    },
    {
      icon: Plane,
      title: "விமான நிலைய சேவை",
      desc: "சென்னை விமான நிலையத்திற்கு சரியான நேரத்தில் அழைப்பு & விடுதல், பகல்-இரவு சேவை, விமான கண்காணிப்புடன்.",
    },
  ];
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="எங்கள் சேவைகள்"
          title="எல்லா வகை பயணத்திற்கும் — நாங்கள் தயார்"
          subtitle="விமான நிலைய சேவை முதல் கோயில் சுற்றுலா வரை, சரியான வாகனம், சரியான ஓட்டுநர், சரியான விலை."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-3xl bg-card p-7 border-2 border-border hover:border-primary hover:shadow-brand transition-all"
            >
              <div className="size-14 rounded-2xl bg-gradient-cta grid place-items-center text-primary-foreground shadow-brand group-hover:scale-110 transition">
                <Icon className="size-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy">{title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fleet() {
  const cars = [
    { img: carSedan, name: "சேடான் கேப் (ஏசி)", seats: "4 பேர்", ex: "எட்டியோஸ், டிசையர், எக்ஸென்ட், அமேஸ்" },
    { img: carSuv, name: "எஸ்யூவி (ஏசி)", seats: "6–7 பேர்", ex: "இன்னோவா, கிறிஸ்டா, எர்டிகா" },
    { img: carTempo, name: "டெம்போ டிராவலர்", seats: "12 / 14 / 18 பேர்", ex: "ஏசி — குடும்பம் & குழு" },
    { img: carVan, name: "டூரிஸ்டர் / மினி பஸ்", seats: "15 / 21 / 25 / 32 பேர்", ex: "ஐச்சர் க்ரூஸியோ, மினி பஸ்" },
  ];
  return (
    <section id="fleet" className="py-16 md:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="எங்கள் வாகனங்கள்"
          title="உங்கள் குழுவிற்கு சரியான வாகனம்"
          subtitle="அனைத்து வாகனங்களும் சுத்தமானவை, ஏசி, தவறாமல் சர்வீஸ் செய்யப்பட்டவை, அனுபவமிக்க ஓட்டுநர்களுடன்."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((c) => (
            <div key={c.name} className="group rounded-3xl bg-card border-2 border-border overflow-hidden hover:shadow-brand hover:border-primary transition">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={c.img}
                  alt={c.name}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-navy">{c.name}</h3>
                  <span className="text-[10px] font-bold rounded-full bg-primary text-primary-foreground px-2 py-1 whitespace-nowrap">
                    {c.seats}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{c.ex}</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <a href={`tel:${PHONE1}`} className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-cta text-primary-foreground px-3 py-2.5 text-xs font-bold hover:opacity-95">
                    <Phone className="size-3.5" /> அழை
                  </a>
                  <a href={WA1} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] text-white px-3 py-2.5 text-xs font-bold hover:opacity-95">
                    <MessageCircle className="size-3.5" /> வாட்ஸ்அப்
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const rows = [
    { vehicle: "சேடான் கேப்", ac: "ஏசி", local: "₹1,250 / 5 மணி", outstation: "₹14 / கி.மீ", batta: "—" },
    { vehicle: "எஸ்யூவி", ac: "ஏசி", local: "₹1,750 / 5 மணி", outstation: "₹17 – ₹18 / கி.மீ", batta: "—" },
    { vehicle: "டெம்போ டிராவலர் 12 / 14 பேர்", ac: "ஏசி", local: "₹2,500 / ₹5,000", outstation: "₹21 – ₹22 / கி.மீ", batta: "₹800 பத்தா" },
    { vehicle: "டூரிஸ்டர் 15 பேர்", ac: "நான்-ஏசி", local: "₹2,500 / ₹5,000", outstation: "₹22 / கி.மீ", batta: "₹800 பத்தா" },
    { vehicle: "டெம்போ டிராவலர் 18 பேர்", ac: "ஏசி", local: "₹3,000 / ₹6,000", outstation: "₹24 – ₹25 / கி.மீ", batta: "₹800 பத்தா" },
    { vehicle: "ஐச்சர் க்ரூஸியோ 18 பேர்", ac: "நான்-ஏசி", local: "₹3,300 / ₹6,600", outstation: "₹23 / கி.மீ", batta: "₹800 பத்தா" },
    { vehicle: "மினி பஸ் 21 பேர்", ac: "ஏசி +₹500", local: "₹4,000 / ₹8,000", outstation: "₹25 – ₹28 / கி.மீ", batta: "₹900 பத்தா" },
    { vehicle: "மினி பஸ் 25 பேர்", ac: "ஏசி +₹500", local: "₹4,500 / ₹9,000", outstation: "₹30 – ₹32 / கி.மீ", batta: "₹900 பத்தா" },
    { vehicle: "பஸ் 32 பேர்", ac: "ஏசி", local: "₹15,000 / 15 மணி", outstation: "₹45 – ₹50 / கி.மீ", batta: "₹1,000 பத்தா" },
  ];
  return (
    <section id="pricing" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="விலை விவரம்"
          title="வெளிப்படையான விலை — மறைமுக கட்டணம் இல்லை"
          subtitle="எல்லா வாகனத்திற்கும், எல்லா பயணத்திற்கும் — சரியான விலை முன்கூட்டியே தெரியும். சிறந்த விலை உத்தரவாதம்!"
        />

        <div className="mt-10 overflow-hidden rounded-3xl border-2 border-primary shadow-brand bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-gradient-cta text-primary-foreground">
                <tr>
                  <th className="text-left px-4 md:px-6 py-4 font-black uppercase tracking-wider">வாகன வகை</th>
                  <th className="text-center px-3 py-4 font-black uppercase tracking-wider hidden sm:table-cell">ஏசி / நான்-ஏசி</th>
                  <th className="text-center px-3 md:px-6 py-4 font-black uppercase tracking-wider">
                    உள்ளூர் வாடகை<br/><span className="text-[10px] opacity-80">(5 / 10 மணி)</span>
                  </th>
                  <th className="text-center px-3 md:px-6 py-4 font-black uppercase tracking-wider">
                    வெளியூர்<br/><span className="text-[10px] opacity-80">(ஒரு கி.மீ.க்கு)</span>
                  </th>
                  <th className="text-center px-3 md:px-6 py-4 font-black uppercase tracking-wider hidden md:table-cell">ஓட்டுநர் பத்தா</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.vehicle} className={i % 2 === 0 ? "bg-secondary/60" : "bg-card"}>
                    <td className="px-4 md:px-6 py-4 font-bold text-navy">{r.vehicle}<div className="sm:hidden text-xs text-primary font-semibold mt-0.5">{r.ac}</div></td>
                    <td className="text-center px-3 py-4 hidden sm:table-cell">
                      <span className="inline-block rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-bold">{r.ac}</span>
                    </td>
                    <td className="text-center px-3 md:px-6 py-4 font-extrabold text-primary">{r.local}</td>
                    <td className="text-center px-3 md:px-6 py-4 font-extrabold text-primary">{r.outstation}</td>
                    <td className="text-center px-3 md:px-6 py-4 font-bold text-navy hidden md:table-cell">{r.batta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-navy text-navy-foreground px-6 py-4 text-xs md:text-sm flex flex-wrap items-center justify-between gap-3">
            <div>* டோல், பார்க்கிங் & பெர்மிட் கட்டணம் தனி · பத்தா = வெளியூர் பயணத்திற்கான ஓட்டுநர் கொடுப்பனவு</div>
            <a href={`tel:${PHONE1}`} className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 font-black hover:opacity-95">
              <Phone className="size-4" /> விலை கேட்க அழைக்கவும்
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FamousTours() {
  const tours = [
    {
      title: "அறுபடை வீடு சுற்றுலா",
      sub: "முருகனின் ஆறு படை வீடுகள்",
      places: "பழனி · சுவாமிமலை · திருச்செந்தூர் · திருப்பரங்குன்றம் · பழமுதிர்சோலை · திருத்தணி",
      days: "3–5 நாட்கள்",
      img: destMadurai,
    },
    {
      title: "நவகிரக கோயில் சுற்றுலா",
      sub: "கும்பகோணம் 9 கோயில்கள்",
      places: "சூரியனார் கோயில் · திங்களூர் · வைத்தீஸ்வரன் · திருவெண்காடு · ஆலங்குடி · கஞ்சனூர் · திருநள்ளாறு · திருநாகேஸ்வரம் · கீழப்பெரும்பள்ளம்",
      days: "2–3 நாட்கள்",
      img: destRameswaram,
    },
    {
      title: "மலை வாசம் சுற்றுலா",
      sub: "ஊட்டி · கொடைக்கானல் · ஏற்காடு",
      places: "டொடபெட்டா · தாவரவியல் பூங்கா · கோக்கர்ஸ் வாக் · கொடைக்கானல் ஏரி · பில்லர் ராக்ஸ்",
      days: "3–4 நாட்கள்",
      img: destOoty,
    },
    {
      title: "ராமேஸ்வரம் தீர்த்த யாத்திரை",
      sub: "ராமேஸ்வரம் · தனுஷ்கோடி · கன்னியாகுமரி",
      places: "ராமநாதசுவாமி கோயில் · அக்னி தீர்த்தம் · விவேகானந்தர் பாறை · திருவள்ளுவர் சிலை",
      days: "3–4 நாட்கள்",
      img: destKanyakumari,
    },
    {
      title: "சென்னை – திருப்பதி தரிசனம்",
      sub: "பாலாஜி சேவை பயணம்",
      places: "திருமலை · திருப்பதி · காணிபாக்கம் · ஸ்ரீ காளஹஸ்தி",
      days: "1–2 நாட்கள்",
      img: destKodai,
    },
    {
      title: "மதுரை – ராமேஸ்வரம் – கன்னியாகுமரி",
      sub: "தென் தமிழ்நாடு பாரம்பரிய வட்டம்",
      places: "மீனாட்சி அம்மன் · திருப்பரங்குன்றம் · ராமேஸ்வரம் · கன்னியாகுமரி · சுசீந்திரம்",
      days: "4–5 நாட்கள்",
      img: destMahabalipuram,
    },
    {
      title: "கேரளா பின்னீர் சுற்றுலா",
      sub: "முன்னார் · தேக்கடி · ஆலப்புழா",
      places: "தேயிலை தோட்டங்கள் · பெரியார் வனவிலங்கு · ஹவுஸ்போட் · கோவளம் கடற்கரை",
      days: "5–6 நாட்கள்",
      img: destOoty,
    },
    {
      title: "கர்நாடகா கோயில் சுற்றுலா",
      sub: "மைசூர் · குர்க் · தர்மஸ்தலா",
      places: "மைசூர் அரண்மனை · சாமுண்டி மலை · குக்கே சுப்ரமணியா · கொல்லூர் மூகாம்பிகை",
      days: "4–5 நாட்கள்",
      img: destMadurai,
    },
  ];
  return (
    <section id="tours" className="py-16 md:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="புகழ்பெற்ற சுற்றுலா தொகுப்புகள்"
          title="பக்தி, இயற்கை & பயணம் — இணைக்கும் சுற்றுலா தொகுப்புகள்"
          subtitle="அறுபடை வீடு முதல் நவகிரகம் வரை, மலை வாசம் முதல் கடற்கரை வரை — எல்லா புகழ்பெற்ற சுற்றுலாவும் எங்களிடம் கிடைக்கும்."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((t) => (
            <div key={t.title} className="group rounded-3xl bg-card border-2 border-border overflow-hidden hover:border-primary hover:shadow-brand transition flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={t.img} alt={t.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-3 right-3 rounded-full bg-primary text-primary-foreground px-3 py-1 text-[11px] font-black uppercase shadow-gold">
                  {t.days}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-[11px] font-bold text-primary uppercase tracking-wider">{t.sub}</div>
                <h3 className="mt-1 text-lg font-black text-navy leading-tight">{t.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-1">{t.places}</p>
                <a href={WA1} target="_blank" rel="noreferrer" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-cta text-primary-foreground px-3 py-2.5 text-sm font-bold hover:opacity-95">
                  <MessageCircle className="size-4" /> வாட்ஸ்அப்பில் விசாரிக்கவும்
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: UserCheck, title: "அனுபவமிக்க ஓட்டுநர்கள்", desc: "உரிமம் பெற்றவர்கள், மரியாதையானவர்கள், தமிழ்நாடு வழிகள் அனைத்தும் தெரிந்தவர்கள்." },
    { icon: Shield, title: "பாதுகாப்பான பயணம், இனிய நினைவுகள்", desc: "சுத்தமான ஏசி வாகனங்கள், தவறாமல் பாதுகாப்பு சோதனைகளுடன்." },
    { icon: Clock, title: "24×7 உதவி", desc: "எப்போது வேண்டுமானாலும் அழைக்கவும் / வாட்ஸ்அப் செய்யவும் — நாங்கள் எப்போதும் தயார்." },
    { icon: CheckCircle2, title: "சிறந்த விலை உத்தரவாதம்", desc: "மறைமுக கட்டணம் இல்லை. சரியான விலை முன்கூட்டியே தெரியும்." },
  ];
  return (
    <section id="why" className="py-16 md:py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="ஏன் SSG?"
          title="ஆயிரக்கணக்கான தமிழ்நாடு பயணிகளின் நம்பிக்கை"
          subtitle="ஒவ்வொரு பயணியையும் குடும்பம் போல் பார்ப்போம் — அதனால்தான் எங்கள் வாடிக்கையாளர்கள் திரும்ப திரும்ப வருகிறார்கள்."
          light
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-6">
              <div className="size-12 rounded-xl bg-gradient-cta grid place-items-center text-primary-foreground">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-1.5 text-sm text-white/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookNow() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-cream">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionHeader
          eyebrow="இப்போதே தொடர்பு கொள்ளுங்கள்"
          title="படிவம் நிரப்ப தேவை இல்லை — நேரடியாக அழை / வாட்ஸ்அப் செய்யுங்கள்!"
          subtitle="உங்கள் பயண விவரங்களை சொல்லுங்கள், சரியான வாகனத்தை சரியான விலையில் தயார் செய்கிறோம். இப்போதே தொலைபேசியில் தொடர்பு கொள்ளுங்கள்!"
        />

        <div className="mt-10 grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          <a
            href={`tel:${PHONE1}`}
            className="group rounded-3xl bg-card border-2 border-primary p-6 shadow-brand hover:scale-[1.02] transition flex items-center gap-4 text-left"
          >
            <div className="size-16 rounded-2xl bg-gradient-cta grid place-items-center text-primary-foreground shadow-brand">
              <Phone className="size-8" />
            </div>
            <div className="leading-tight">
              <div className="text-xs uppercase tracking-widest text-primary font-black">அழைக்கவும்</div>
              <div className="font-black text-2xl text-navy">{PHONE1}</div>
              <div className="text-xs text-muted-foreground mt-0.5">24×7 சேவை</div>
            </div>
          </a>
          <a
            href={WA1}
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl bg-[#25D366] text-white p-6 shadow-brand hover:scale-[1.02] transition flex items-center gap-4 text-left"
          >
            <div className="size-16 rounded-2xl bg-white/20 grid place-items-center">
              <MessageCircle className="size-8" />
            </div>
            <div className="leading-tight">
              <div className="text-xs uppercase tracking-widest font-black opacity-90">வாட்ஸ்அப் · உடனடி பதில்</div>
              <div className="font-black text-2xl">{PHONE1}</div>
              <div className="text-xs opacity-90 mt-0.5">உடனடி விலை</div>
            </div>
          </a>
          <a
            href={`tel:${PHONE2}`}
            className="rounded-3xl bg-card border-2 border-border p-5 hover:border-primary transition flex items-center gap-4 text-left"
          >
            <div className="size-12 rounded-xl bg-gradient-cta grid place-items-center text-primary-foreground">
              <Phone className="size-6" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-primary font-bold">இரண்டாவது எண்</div>
              <div className="font-black text-xl text-navy">{PHONE2}</div>
            </div>
          </a>
          <a
            href={WA2}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl bg-card border-2 border-border p-5 hover:border-[#25D366] transition flex items-center gap-4 text-left"
          >
            <div className="size-12 rounded-xl bg-[#25D366] grid place-items-center text-white">
              <MessageCircle className="size-6" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#128C4A] font-bold">வாட்ஸ்அப் 2</div>
              <div className="font-black text-xl text-navy">{PHONE2}</div>
            </div>
          </a>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-card border-2 border-border px-5 py-3 text-sm">
          <MapPin className="size-4 text-primary" />
          <span className="font-semibold text-navy">எண். 12, கண்ணகி நகர், 2வது தெரு, மாடம்பாக்கம், சென்னை – 600 126</span>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { n: "பிரியா எஸ்.", c: "சென்னை → கொடைக்கானல்", q: "ஓட்டுநர் மிகவும் தொழில்முறையாக இருந்தார், இன்னோவா மிகவும் சுத்தமாக இருந்தது. பல வருடங்களாக இது போல் ஒரு பயணம் இல்லை!" },
    { n: "முகமது ஏ.", c: "விமான நிலைய சேவை", q: "நள்ளிரவில் முன்பதிவு செய்தேன், சரியான நேரத்தில் வண்டி வந்தது. சுகமான பயணம், நியாயமான விலை. SSG சூப்பர்!" },
    { n: "லட்சுமி ஆர்.", c: "அறுபடை வீடு சுற்றுலா", q: "மதுரை, ராமேஸ்வரம், கன்னியாகுமரி எல்லாம் 4 நாட்களில் முடித்தோம். எல்லா ஏற்பாடும் சிறப்பாக இருந்தது." },
  ];
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="வாடிக்கையாளர் கருத்துகள்" title="உண்மையான பயணம், உண்மையான கதைகள்" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {t.map((x) => (
            <div key={x.n} className="rounded-3xl bg-card p-7 border-2 border-border">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-foreground leading-relaxed">"{x.q}"</p>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="font-bold text-navy">{x.n}</div>
                <div className="text-xs text-primary font-semibold">{x.c}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-full bg-gradient-cta grid place-items-center text-primary-foreground font-black border-2 border-primary">SSG</div>
            <div>
              <div className="font-extrabold text-lg">SSG Tours & Travels</div>
              <div className="text-xs uppercase tracking-widest text-gold">பாதுகாப்பான பயணம் · இனிய நினைவுகள்</div>
            </div>
          </div>
          <p className="mt-4 text-white/80 max-w-md">
            தமிழ்நாட்டின் நம்பிக்கையான பயண நண்பன். கார் வாடகை, வெளியூர் சுற்றுலா, அறுபடை வீடு,
            நவகிரகம் & விமான நிலைய சேவை. சுகமான பயணம், நியாயமான விலை, எப்போதும், எங்கும்.
          </p>
        </div>
        <div>
          <div className="font-black text-gold uppercase text-xs tracking-widest">சேவைகள்</div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>உள்ளூர் & வெளியூர் பயணம்</li>
            <li>அறுபடை வீடு சுற்றுலா</li>
            <li>நவகிரக கோயில் சுற்றுலா</li>
            <li>மலை வாசம் தொகுப்புகள்</li>
            <li>விமான நிலைய சேவை</li>
            <li>திருமணம் & நிகழ்வு வாடகை</li>
          </ul>
        </div>
        <div>
          <div className="font-black text-gold uppercase text-xs tracking-widest">தொடர்பு</div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 shrink-0" /> எண். 12, கண்ணகி நகர், 2வது தெரு, மாடம்பாக்கம், சென்னை – 600 126</li>
            <li><a href={`tel:${PHONE1}`} className="flex items-center gap-2 hover:text-gold"><Phone className="size-4" /> {PHONE1}</a></li>
            <li><a href={`tel:${PHONE2}`} className="flex items-center gap-2 hover:text-gold"><Phone className="size-4" /> {PHONE2}</a></li>
            <li><a href={WA1} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold"><MessageCircle className="size-4" /> வாட்ஸ்அப் அரட்டை</a></li>
            <li className="flex items-center gap-2"><Mail className="size-4" /> bookings@ssgtravels.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-white/70 flex flex-wrap items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} SSG Tours & Travels. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</div>
          <div>நன்றி! தமிழ்நாடு பயணிகளுக்கு அன்புடன் செய்தது.</div>
        </div>
      </div>
    </footer>
  );
}

function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={WA1}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="size-16 rounded-full bg-[#25D366] text-white grid place-items-center shadow-brand hover:scale-110 transition relative"
      >
        <MessageCircle className="size-8" />
        <span className="absolute -top-1 -right-1 size-4 rounded-full bg-red-500 border-2 border-white animate-pulse" />
      </a>
      <a
        href={`tel:${PHONE1}`}
        aria-label="Call"
        className="size-16 rounded-full bg-gradient-cta text-primary-foreground grid place-items-center shadow-brand hover:scale-110 transition"
      >
        <Phone className="size-8" />
      </a>
    </div>
  );
}

function SectionHeader({
  eyebrow, title, subtitle, light, align = "center",
}: { eyebrow: string; title: string; subtitle?: string; light?: boolean; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "max-w-3xl mx-auto text-center" : "max-w-2xl"}>
      <div className={`text-xs font-black uppercase tracking-[0.2em] ${light ? "text-gold" : "text-primary"}`}>
        {eyebrow}
      </div>
      <h2 className={`mt-3 text-3xl md:text-5xl font-black leading-tight ${light ? "text-primary-foreground" : "text-navy"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg ${light ? "text-white/80" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
