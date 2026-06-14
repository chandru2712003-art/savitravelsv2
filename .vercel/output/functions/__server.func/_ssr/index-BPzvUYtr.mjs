import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { f as fleetHero } from "./router-Bi53yhXv.mjs";
import { M as MapPin, C as Clock, P as Phone, a as MessageCircle, S as Star, b as Shield, c as Car, R as Route, d as Plane, U as UserCheck, e as CircleCheck, f as Mail } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const carSedan = "/assets/car-sedan-C7GlKSky.jpg";
const carSuv = "/assets/car-suv-CG_o1Nks.jpg";
const carVan = "/assets/car-van-CA3M25ip.jpg";
const carTempo = "/assets/car-tempo-B0EHAAwf.jpg";
const destMadurai = "/assets/dest-madurai-Do5OPfly.jpg";
const destOoty = "/assets/dest-ooty-B8Z7Kqaa.jpg";
const destKodai = "/assets/dest-kodai-CsciZmQm.jpg";
const destRameswaram = "/assets/dest-rameswaram-BHFpqDS8.jpg";
const destMahabalipuram = "/assets/dest-mahabalipuram-BLElss8Y.jpg";
const destKanyakumari = "/assets/dest-kanyakumari-3TryWZHM.jpg";
const PHONE1 = "9344269995";
const PHONE2 = "9363169995";
const WA_TEXT = "வணக்கம் SSG Tours & Travels! நான் ஒரு பயணம் முன்பதிவு செய்ய விரும்புகிறேன். தயவுசெய்து விவரங்களை அனுப்புங்கள்.";
const WA1 = `https://wa.me/91${PHONE1}?text=${encodeURIComponent(WA_TEXT)}`;
const WA2 = `https://wa.me/91${PHONE2}?text=${encodeURIComponent(WA_TEXT)}`;
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Fleet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FamousTours, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BookNow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCTA, {})
  ] });
}
function TopBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block bg-navy text-navy-foreground text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-2 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-3.5" }),
      " எண். 12, கண்ணகி நகர், 2வது தெரு, மாடம்பாக்கம், சென்னை – 600 126"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-gold font-bold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-3.5" }),
        " 24x7 சேவை"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${PHONE1}`, className: "flex items-center gap-1.5 hover:text-gold transition font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-3.5" }),
        " ",
        PHONE1
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${PHONE2}`, className: "flex items-center gap-1.5 hover:text-gold transition font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-3.5" }),
        " ",
        PHONE2
      ] })
    ] })
  ] }) });
}
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 bg-background/95 backdrop-blur border-b-2 border-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-3 flex items-center justify-between gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-gradient-cta grid place-items-center text-primary-foreground font-black text-lg shadow-brand border-2 border-navy", children: "SSG" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-extrabold text-navy text-lg tracking-tight", children: "SSG Tours & Travels" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-primary font-semibold tracking-wide", children: "பாதுகாப்பான பயணம்... இனிய நினைவுகள்..." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-6 text-sm font-semibold text-navy", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-primary transition", children: "சேவைகள்" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#fleet", className: "hover:text-primary transition", children: "வாகனங்கள்" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#pricing", className: "hover:text-primary transition", children: "விலை விவரம்" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#tours", className: "hover:text-primary transition", children: "சுற்றுலா தொகுப்புகள்" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-primary transition", children: "தொடர்பு" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${PHONE1}`, className: "inline-flex items-center gap-2 rounded-full bg-gradient-cta text-primary-foreground px-4 py-2.5 text-sm font-bold shadow-brand hover:opacity-95 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
        " இப்போது அழை"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WA1, target: "_blank", rel: "noreferrer", className: "hidden sm:inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2.5 text-sm font-bold shadow-brand hover:opacity-95 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
        " வாட்ஸ்அப்"
      ] })
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-25 mix-blend-overlay bg-cover bg-center", style: {
      backgroundImage: `url(${fleetHero})`
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 pt-14 pb-20 md:pt-20 md:pb-28 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-gradient-cta text-primary-foreground px-4 py-1.5 text-xs font-black uppercase tracking-wider shadow-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-3.5 fill-current" }),
          " 24×7 சேவை · சிறந்த விலை உத்தரவாதம்"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight", children: [
          "வணக்கம்! ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "தமிழ்நாட்டின்" }),
          " நம்பிக்கையான பயண நண்பன்."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-lg md:text-xl text-primary-foreground/90 max-w-xl", children: [
          "சேடான், எஸ்யூவி, டெம்போ டிராவலர், டூரிஸ்டர், ஐச்சர், மினி பஸ் — உள்ளூர், வெளியூர், அறுபடை வீடு, நவகிரகம் & விமான நிலைய சேவை. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gold", children: "பாதுகாப்பான பயணம்... இனிய நினைவுகள்..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 grid sm:grid-cols-2 gap-3 max-w-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${PHONE1}`, className: "group rounded-2xl bg-white text-navy px-5 py-4 shadow-brand hover:scale-[1.02] transition flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-gradient-cta grid place-items-center text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest text-primary font-bold", children: "இப்போது அழை" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-xl", children: PHONE1 })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WA1, target: "_blank", rel: "noreferrer", className: "group rounded-2xl bg-white text-navy px-5 py-4 shadow-brand hover:scale-[1.02] transition flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-[#25D366] grid place-items-center text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest text-[#128C4A] font-bold", children: "வாட்ஸ்அப்" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-xl", children: PHONE1 })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${PHONE2}`, className: "rounded-2xl bg-white/15 backdrop-blur border border-white/30 px-5 py-3 hover:bg-white/25 transition flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-lg", children: PHONE2 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WA2, target: "_blank", rel: "noreferrer", className: "rounded-2xl bg-white/15 backdrop-blur border border-white/30 px-5 py-3 hover:bg-white/25 transition flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-5 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-lg", children: PHONE2 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-3 gap-3 max-w-md", children: [{
          k: "10K+",
          v: "மகிழ்ச்சியான பயணங்கள்"
        }, {
          k: "24×7",
          v: "சேவை"
        }, {
          k: "50+",
          v: "சுற்றுலா இடங்கள்"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black text-gold", children: s.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-white/80 mt-1", children: s.v })
        ] }, s.v)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl overflow-hidden shadow-brand border-4 border-primary/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: fleetHero, alt: "SSG Tours & Travels வாகனங்கள்", width: 1920, height: 1280, className: "w-full h-auto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -left-6 bg-card text-card-foreground rounded-2xl p-4 shadow-brand hidden sm:flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-gradient-cta grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "size-6 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm text-primary", children: "பாதுகாப்பான பயணம், இனிய நினைவுகள்" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "அனுபவம் மிக்க ஓட்டுநர்கள்" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
function ContactStrip() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground border-y-2 border-navy", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-4 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black uppercase tracking-wider text-sm md:text-base", children: "📞 முன்பதிவுக்கு இப்போதே அழைக்கவும்:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${PHONE1}`, className: "inline-flex items-center gap-2 font-black text-lg md:text-2xl hover:text-navy transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5" }),
      " ",
      PHONE1
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${PHONE2}`, className: "inline-flex items-center gap-2 font-black text-lg md:text-2xl hover:text-navy transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5" }),
      " ",
      PHONE2
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WA1, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2 font-bold text-sm hover:opacity-90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
      " வாட்ஸ்அப்பில் பேசுங்கள்"
    ] })
  ] }) });
}
function Services() {
  const items = [{
    icon: Car,
    title: "எல்லா வகை வாகனங்கள்",
    desc: "சேடான், எஸ்யூவி, டெம்போ டிராவலர், டூரிஸ்டர், ஐச்சர் க்ரூஸியோ, மினி பஸ் — குழுவின் அளவு என்னவாக இருந்தாலும் வாகனம் தயார்."
  }, {
    icon: Route,
    title: "உள்ளூர் & வெளியூர் பயணம்",
    desc: "சென்னையில் நகர சவாரி முதல், வார இறுதி பயணம், அறுபடை வீடு, நவகிரகம், கேரளா, கர்நாடகா — எந்த ஊருக்கும்."
  }, {
    icon: Plane,
    title: "விமான நிலைய சேவை",
    desc: "சென்னை விமான நிலையத்திற்கு சரியான நேரத்தில் அழைப்பு & விடுதல், பகல்-இரவு சேவை, விமான கண்காணிப்புடன்."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "எங்கள் சேவைகள்", title: "எல்லா வகை பயணத்திற்கும் — நாங்கள் தயார்", subtitle: "விமான நிலைய சேவை முதல் கோயில் சுற்றுலா வரை, சரியான வாகனம், சரியான ஓட்டுநர், சரியான விலை." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-3 gap-6", children: items.map(({
      icon: Icon,
      title,
      desc
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-3xl bg-card p-7 border-2 border-border hover:border-primary hover:shadow-brand transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-2xl bg-gradient-cta grid place-items-center text-primary-foreground shadow-brand group-hover:scale-110 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-bold text-navy", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground leading-relaxed", children: desc })
    ] }, title)) })
  ] }) });
}
function Fleet() {
  const cars = [{
    img: carSedan,
    name: "சேடான் கேப் (ஏசி)",
    seats: "4 பேர்",
    ex: "எட்டியோஸ், டிசையர், எக்ஸென்ட், அமேஸ்"
  }, {
    img: carSuv,
    name: "எஸ்யூவி (ஏசி)",
    seats: "6–7 பேர்",
    ex: "இன்னோவா, கிறிஸ்டா, எர்டிகா"
  }, {
    img: carTempo,
    name: "டெம்போ டிராவலர்",
    seats: "12 / 14 / 18 பேர்",
    ex: "ஏசி — குடும்பம் & குழு"
  }, {
    img: carVan,
    name: "டூரிஸ்டர் / மினி பஸ்",
    seats: "15 / 21 / 25 / 32 பேர்",
    ex: "ஐச்சர் க்ரூஸியோ, மினி பஸ்"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "fleet", className: "py-16 md:py-20 bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "எங்கள் வாகனங்கள்", title: "உங்கள் குழுவிற்கு சரியான வாகனம்", subtitle: "அனைத்து வாகனங்களும் சுத்தமானவை, ஏசி, தவறாமல் சர்வீஸ் செய்யப்பட்டவை, அனுபவமிக்க ஓட்டுநர்களுடன்." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: cars.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-3xl bg-card border-2 border-border overflow-hidden hover:shadow-brand hover:border-primary transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: c.name, width: 1024, height: 768, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition duration-500" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-navy", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold rounded-full bg-primary text-primary-foreground px-2 py-1 whitespace-nowrap", children: c.seats })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: c.ex }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${PHONE1}`, className: "inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-cta text-primary-foreground px-3 py-2.5 text-xs font-bold hover:opacity-95", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-3.5" }),
            " அழை"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WA1, target: "_blank", rel: "noreferrer", className: "inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] text-white px-3 py-2.5 text-xs font-bold hover:opacity-95", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-3.5" }),
            " வாட்ஸ்அப்"
          ] })
        ] })
      ] })
    ] }, c.name)) })
  ] }) });
}
function Pricing() {
  const rows = [{
    vehicle: "சேடான் கேப்",
    ac: "ஏசி",
    local: "₹1,250 / 5 மணி",
    outstation: "₹14 / கி.மீ",
    batta: "—"
  }, {
    vehicle: "எஸ்யூவி",
    ac: "ஏசி",
    local: "₹1,750 / 5 மணி",
    outstation: "₹17 – ₹18 / கி.மீ",
    batta: "—"
  }, {
    vehicle: "டெம்போ டிராவலர் 12 / 14 பேர்",
    ac: "ஏசி",
    local: "₹2,500 / ₹5,000",
    outstation: "₹21 – ₹22 / கி.மீ",
    batta: "₹800 பத்தா"
  }, {
    vehicle: "டூரிஸ்டர் 15 பேர்",
    ac: "நான்-ஏசி",
    local: "₹2,500 / ₹5,000",
    outstation: "₹22 / கி.மீ",
    batta: "₹800 பத்தா"
  }, {
    vehicle: "டெம்போ டிராவலர் 18 பேர்",
    ac: "ஏசி",
    local: "₹3,000 / ₹6,000",
    outstation: "₹24 – ₹25 / கி.மீ",
    batta: "₹800 பத்தா"
  }, {
    vehicle: "ஐச்சர் க்ரூஸியோ 18 பேர்",
    ac: "நான்-ஏசி",
    local: "₹3,300 / ₹6,600",
    outstation: "₹23 / கி.மீ",
    batta: "₹800 பத்தா"
  }, {
    vehicle: "மினி பஸ் 21 பேர்",
    ac: "ஏசி +₹500",
    local: "₹4,000 / ₹8,000",
    outstation: "₹25 – ₹28 / கி.மீ",
    batta: "₹900 பத்தா"
  }, {
    vehicle: "மினி பஸ் 25 பேர்",
    ac: "ஏசி +₹500",
    local: "₹4,500 / ₹9,000",
    outstation: "₹30 – ₹32 / கி.மீ",
    batta: "₹900 பத்தா"
  }, {
    vehicle: "பஸ் 32 பேர்",
    ac: "ஏசி",
    local: "₹15,000 / 15 மணி",
    outstation: "₹45 – ₹50 / கி.மீ",
    batta: "₹1,000 பத்தா"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pricing", className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "விலை விவரம்", title: "வெளிப்படையான விலை — மறைமுக கட்டணம் இல்லை", subtitle: "எல்லா வாகனத்திற்கும், எல்லா பயணத்திற்கும் — சரியான விலை முன்கூட்டியே தெரியும். சிறந்த விலை உத்தரவாதம்!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 overflow-hidden rounded-3xl border-2 border-primary shadow-brand bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm md:text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gradient-cta text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 md:px-6 py-4 font-black uppercase tracking-wider", children: "வாகன வகை" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-3 py-4 font-black uppercase tracking-wider hidden sm:table-cell", children: "ஏசி / நான்-ஏசி" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "text-center px-3 md:px-6 py-4 font-black uppercase tracking-wider", children: [
            "உள்ளூர் வாடகை",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] opacity-80", children: "(5 / 10 மணி)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "text-center px-3 md:px-6 py-4 font-black uppercase tracking-wider", children: [
            "வெளியூர்",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] opacity-80", children: "(ஒரு கி.மீ.க்கு)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-3 md:px-6 py-4 font-black uppercase tracking-wider hidden md:table-cell", children: "ஓட்டுநர் பத்தா" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 === 0 ? "bg-secondary/60" : "bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 md:px-6 py-4 font-bold text-navy", children: [
            r.vehicle,
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden text-xs text-primary font-semibold mt-0.5", children: r.ac })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-3 py-4 hidden sm:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-bold", children: r.ac }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-3 md:px-6 py-4 font-extrabold text-primary", children: r.local }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-3 md:px-6 py-4 font-extrabold text-primary", children: r.outstation }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-3 md:px-6 py-4 font-bold text-navy hidden md:table-cell", children: r.batta })
        ] }, r.vehicle)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-navy text-navy-foreground px-6 py-4 text-xs md:text-sm flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "* டோல், பார்க்கிங் & பெர்மிட் கட்டணம் தனி · பத்தா = வெளியூர் பயணத்திற்கான ஓட்டுநர் கொடுப்பனவு" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${PHONE1}`, className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 font-black hover:opacity-95", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
          " விலை கேட்க அழைக்கவும்"
        ] })
      ] })
    ] })
  ] }) });
}
function FamousTours() {
  const tours = [{
    title: "அறுபடை வீடு சுற்றுலா",
    sub: "முருகனின் ஆறு படை வீடுகள்",
    places: "பழனி · சுவாமிமலை · திருச்செந்தூர் · திருப்பரங்குன்றம் · பழமுதிர்சோலை · திருத்தணி",
    days: "3–5 நாட்கள்",
    img: destMadurai
  }, {
    title: "நவகிரக கோயில் சுற்றுலா",
    sub: "கும்பகோணம் 9 கோயில்கள்",
    places: "சூரியனார் கோயில் · திங்களூர் · வைத்தீஸ்வரன் · திருவெண்காடு · ஆலங்குடி · கஞ்சனூர் · திருநள்ளாறு · திருநாகேஸ்வரம் · கீழப்பெரும்பள்ளம்",
    days: "2–3 நாட்கள்",
    img: destRameswaram
  }, {
    title: "மலை வாசம் சுற்றுலா",
    sub: "ஊட்டி · கொடைக்கானல் · ஏற்காடு",
    places: "டொடபெட்டா · தாவரவியல் பூங்கா · கோக்கர்ஸ் வாக் · கொடைக்கானல் ஏரி · பில்லர் ராக்ஸ்",
    days: "3–4 நாட்கள்",
    img: destOoty
  }, {
    title: "ராமேஸ்வரம் தீர்த்த யாத்திரை",
    sub: "ராமேஸ்வரம் · தனுஷ்கோடி · கன்னியாகுமரி",
    places: "ராமநாதசுவாமி கோயில் · அக்னி தீர்த்தம் · விவேகானந்தர் பாறை · திருவள்ளுவர் சிலை",
    days: "3–4 நாட்கள்",
    img: destKanyakumari
  }, {
    title: "சென்னை – திருப்பதி தரிசனம்",
    sub: "பாலாஜி சேவை பயணம்",
    places: "திருமலை · திருப்பதி · காணிபாக்கம் · ஸ்ரீ காளஹஸ்தி",
    days: "1–2 நாட்கள்",
    img: destKodai
  }, {
    title: "மதுரை – ராமேஸ்வரம் – கன்னியாகுமரி",
    sub: "தென் தமிழ்நாடு பாரம்பரிய வட்டம்",
    places: "மீனாட்சி அம்மன் · திருப்பரங்குன்றம் · ராமேஸ்வரம் · கன்னியாகுமரி · சுசீந்திரம்",
    days: "4–5 நாட்கள்",
    img: destMahabalipuram
  }, {
    title: "கேரளா பின்னீர் சுற்றுலா",
    sub: "முன்னார் · தேக்கடி · ஆலப்புழா",
    places: "தேயிலை தோட்டங்கள் · பெரியார் வனவிலங்கு · ஹவுஸ்போட் · கோவளம் கடற்கரை",
    days: "5–6 நாட்கள்",
    img: destOoty
  }, {
    title: "கர்நாடகா கோயில் சுற்றுலா",
    sub: "மைசூர் · குர்க் · தர்மஸ்தலா",
    places: "மைசூர் அரண்மனை · சாமுண்டி மலை · குக்கே சுப்ரமணியா · கொல்லூர் மூகாம்பிகை",
    days: "4–5 நாட்கள்",
    img: destMadurai
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "tours", className: "py-16 md:py-20 bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "புகழ்பெற்ற சுற்றுலா தொகுப்புகள்", title: "பக்தி, இயற்கை & பயணம் — இணைக்கும் சுற்றுலா தொகுப்புகள்", subtitle: "அறுபடை வீடு முதல் நவகிரகம் வரை, மலை வாசம் முதல் கடற்கரை வரை — எல்லா புகழ்பெற்ற சுற்றுலாவும் எங்களிடம் கிடைக்கும்." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: tours.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-3xl bg-card border-2 border-border overflow-hidden hover:border-primary hover:shadow-brand transition flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] overflow-hidden relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition duration-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 rounded-full bg-primary text-primary-foreground px-3 py-1 text-[11px] font-black uppercase shadow-gold", children: t.days })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex-1 flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold text-primary uppercase tracking-wider", children: t.sub }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-lg font-black text-navy leading-tight", children: t.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed flex-1", children: t.places }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WA1, target: "_blank", rel: "noreferrer", className: "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-cta text-primary-foreground px-3 py-2.5 text-sm font-bold hover:opacity-95", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
          " வாட்ஸ்அப்பில் விசாரிக்கவும்"
        ] })
      ] })
    ] }, t.title)) })
  ] }) });
}
function WhyUs() {
  const items = [{
    icon: UserCheck,
    title: "அனுபவமிக்க ஓட்டுநர்கள்",
    desc: "உரிமம் பெற்றவர்கள், மரியாதையானவர்கள், தமிழ்நாடு வழிகள் அனைத்தும் தெரிந்தவர்கள்."
  }, {
    icon: Shield,
    title: "பாதுகாப்பான பயணம், இனிய நினைவுகள்",
    desc: "சுத்தமான ஏசி வாகனங்கள், தவறாமல் பாதுகாப்பு சோதனைகளுடன்."
  }, {
    icon: Clock,
    title: "24×7 உதவி",
    desc: "எப்போது வேண்டுமானாலும் அழைக்கவும் / வாட்ஸ்அப் செய்யவும் — நாங்கள் எப்போதும் தயார்."
  }, {
    icon: CircleCheck,
    title: "சிறந்த விலை உத்தரவாதம்",
    desc: "மறைமுக கட்டணம் இல்லை. சரியான விலை முன்கூட்டியே தெரியும்."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "why", className: "py-16 md:py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10", style: {
      backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
      backgroundSize: "40px 40px"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "ஏன் SSG?", title: "ஆயிரக்கணக்கான தமிழ்நாடு பயணிகளின் நம்பிக்கை", subtitle: "ஒவ்வொரு பயணியையும் குடும்பம் போல் பார்ப்போம் — அதனால்தான் எங்கள் வாடிக்கையாளர்கள் திரும்ப திரும்ப வருகிறார்கள்.", light: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: items.map(({
        icon: Icon,
        title,
        desc
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-gradient-cta grid place-items-center text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-bold", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-white/80", children: desc })
      ] }, title)) })
    ] })
  ] });
}
function BookNow() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-16 md:py-24 bg-gradient-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "இப்போதே தொடர்பு கொள்ளுங்கள்", title: "படிவம் நிரப்ப தேவை இல்லை — நேரடியாக அழை / வாட்ஸ்அப் செய்யுங்கள்!", subtitle: "உங்கள் பயண விவரங்களை சொல்லுங்கள், சரியான வாகனத்தை சரியான விலையில் தயார் செய்கிறோம். இப்போதே தொலைபேசியில் தொடர்பு கொள்ளுங்கள்!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid md:grid-cols-2 gap-5 max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${PHONE1}`, className: "group rounded-3xl bg-card border-2 border-primary p-6 shadow-brand hover:scale-[1.02] transition flex items-center gap-4 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-2xl bg-gradient-cta grid place-items-center text-primary-foreground shadow-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-8" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary font-black", children: "அழைக்கவும்" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-2xl text-navy", children: PHONE1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: "24×7 சேவை" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WA1, target: "_blank", rel: "noreferrer", className: "group rounded-3xl bg-[#25D366] text-white p-6 shadow-brand hover:scale-[1.02] transition flex items-center gap-4 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-2xl bg-white/20 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-8" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest font-black opacity-90", children: "வாட்ஸ்அப் · உடனடி பதில்" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-2xl", children: PHONE1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-90 mt-0.5", children: "உடனடி விலை" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${PHONE2}`, className: "rounded-3xl bg-card border-2 border-border p-5 hover:border-primary transition flex items-center gap-4 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-gradient-cta grid place-items-center text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest text-primary font-bold", children: "இரண்டாவது எண்" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-xl text-navy", children: PHONE2 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WA2, target: "_blank", rel: "noreferrer", className: "rounded-3xl bg-card border-2 border-border p-5 hover:border-[#25D366] transition flex items-center gap-4 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-[#25D366] grid place-items-center text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest text-[#128C4A] font-bold", children: "வாட்ஸ்அப் 2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-xl text-navy", children: PHONE2 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 inline-flex items-center gap-2 rounded-full bg-card border-2 border-border px-5 py-3 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-navy", children: "எண். 12, கண்ணகி நகர், 2வது தெரு, மாடம்பாக்கம், சென்னை – 600 126" })
    ] })
  ] }) });
}
function Testimonials() {
  const t = [{
    n: "பிரியா எஸ்.",
    c: "சென்னை → கொடைக்கானல்",
    q: "ஓட்டுநர் மிகவும் தொழில்முறையாக இருந்தார், இன்னோவா மிகவும் சுத்தமாக இருந்தது. பல வருடங்களாக இது போல் ஒரு பயணம் இல்லை!"
  }, {
    n: "முகமது ஏ.",
    c: "விமான நிலைய சேவை",
    q: "நள்ளிரவில் முன்பதிவு செய்தேன், சரியான நேரத்தில் வண்டி வந்தது. சுகமான பயணம், நியாயமான விலை. SSG சூப்பர்!"
  }, {
    n: "லட்சுமி ஆர்.",
    c: "அறுபடை வீடு சுற்றுலா",
    q: "மதுரை, ராமேஸ்வரம், கன்னியாகுமரி எல்லாம் 4 நாட்களில் முடித்தோம். எல்லா ஏற்பாடும் சிறப்பாக இருந்தது."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20 bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "வாடிக்கையாளர் கருத்துகள்", title: "உண்மையான பயணம், உண்மையான கதைகள்" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-3 gap-6", children: t.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card p-7 border-2 border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-primary", children: Array.from({
        length: 5
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 fill-current" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-foreground leading-relaxed", children: [
        '"',
        x.q,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-5 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-navy", children: x.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-primary font-semibold", children: x.c })
      ] })
    ] }, x.n)) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-navy text-navy-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-gradient-cta grid place-items-center text-primary-foreground font-black border-2 border-primary", children: "SSG" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-extrabold text-lg", children: "SSG Tours & Travels" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-gold", children: "பாதுகாப்பான பயணம் · இனிய நினைவுகள்" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/80 max-w-md", children: "தமிழ்நாட்டின் நம்பிக்கையான பயண நண்பன். கார் வாடகை, வெளியூர் சுற்றுலா, அறுபடை வீடு, நவகிரகம் & விமான நிலைய சேவை. சுகமான பயணம், நியாயமான விலை, எப்போதும், எங்கும்." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-gold uppercase text-xs tracking-widest", children: "சேவைகள்" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "உள்ளூர் & வெளியூர் பயணம்" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "அறுபடை வீடு சுற்றுலா" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "நவகிரக கோயில் சுற்றுலா" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "மலை வாசம் தொகுப்புகள்" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "விமான நிலைய சேவை" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "திருமணம் & நிகழ்வு வாடகை" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-gold uppercase text-xs tracking-widest", children: "தொடர்பு" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 mt-0.5 shrink-0" }),
            " எண். 12, கண்ணகி நகர், 2வது தெரு, மாடம்பாக்கம், சென்னை – 600 126"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${PHONE1}`, className: "flex items-center gap-2 hover:text-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
            " ",
            PHONE1
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${PHONE2}`, className: "flex items-center gap-2 hover:text-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
            " ",
            PHONE2
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WA1, target: "_blank", rel: "noreferrer", className: "flex items-center gap-2 hover:text-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
            " வாட்ஸ்அப் அரட்டை"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4" }),
            " bookings@ssgtravels.in"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-5 text-xs text-white/70 flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " SSG Tours & Travels. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "நன்றி! தமிழ்நாடு பயணிகளுக்கு அன்புடன் செய்தது." })
    ] }) })
  ] });
}
function FloatingCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-5 right-5 z-50 flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WA1, target: "_blank", rel: "noreferrer", "aria-label": "WhatsApp", className: "size-16 rounded-full bg-[#25D366] text-white grid place-items-center shadow-brand hover:scale-110 transition relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 size-4 rounded-full bg-red-500 border-2 border-white animate-pulse" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${PHONE1}`, "aria-label": "Call", className: "size-16 rounded-full bg-gradient-cta text-primary-foreground grid place-items-center shadow-brand hover:scale-110 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-8" }) })
  ] });
}
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light,
  align = "center"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: align === "center" ? "max-w-3xl mx-auto text-center" : "max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs font-black uppercase tracking-[0.2em] ${light ? "text-gold" : "text-primary"}`, children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `mt-3 text-3xl md:text-5xl font-black leading-tight ${light ? "text-primary-foreground" : "text-navy"}`, children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-4 text-base md:text-lg ${light ? "text-white/80" : "text-muted-foreground"}`, children: subtitle })
  ] });
}
export {
  Home as component
};
