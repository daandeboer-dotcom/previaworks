"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Compass, LineChart, Layers, Workflow, Cpu, Mail } from "lucide-react";
import { Section, Card, NavLink } from "@/components/ui";

const brand = {
  name: "Previa Works",
  tagline: "Mensgericht. Impactgestuurd. Data‑gedreven.",
  accent: "from-blue-900 to-slate-900",
};

export default function Page() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <Section className="flex items-center justify-between py-3">
          {/* Logo top-left */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-900 to-slate-800" />
            <div className="leading-tight">
              <span className="block font-semibold text-lg">{brand.name}</span>
              <span className="block text-xs text-slate-500">{brand.tagline}</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#services">Diensten</NavLink>
            <NavLink href="#propositie">Propositie</NavLink>
            <NavLink href="#proces">Aanpak</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-white bg-gradient-to-br from-blue-900 to-slate-900 shadow-sm hover:shadow-md">
            Plan kennismaking <ArrowRight className="h-4 w-4" />
          </a>
        </Section>
      </header>

      {/* Hero */}
      <div className={`bg-gradient-to-br ${brand.accent} text-white`}>
        <Section className="py-20 sm:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                Bouw een website die groei versnelt —
                <span className="block mt-2 font-extrabold">strategisch ontworpen, clean uitgevoerd.</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-blue-50/90 max-w-xl">
                Wij ontwerpen en bouwen snelle, schaalbare websites die naadloos aansluiten op je propositie, merk en commerciële doelen.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#services" className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100">
                  Bekijk diensten <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold ring-1 ring-white/30">
                  Vraag een voorstel aan
                </a>
              </div>
              <div className="mt-6 flex items-center gap-3 text-blue-100/90 text-sm">
                <CheckCircle2 className="h-4 w-4" /> Clean design
                <CheckCircle2 className="h-4 w-4" /> Snel & toegankelijk
                <CheckCircle2 className="h-4 w-4" /> SEO‑klaar
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-xl" />
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  <div className="aspect-[16/10] bg-white/95 p-6 sm:p-8">
                    <div className="grid grid-cols-3 gap-3 h-full">
                      <div className="col-span-2 rounded-2xl bg-slate-100" />
                      <div className="rounded-2xl bg-slate-100" />
                      <div className="rounded-2xl bg-slate-100" />
                      <div className="col-span-2 rounded-2xl bg-slate-100" />
                      <div className="col-span-3 rounded-2xl bg-slate-100" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>

      {/* Services */}
      <Section id="services" className="py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-900">
            <Sparkles className="h-3.5 w-3.5" /> Diensten
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold">Wat we voor je bouwen</h2>
          <p className="mt-3 text-slate-600">Van strategie tot livegang – en alles ertussenin.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Card>
            <div className="flex items-start gap-3">
              <Compass className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">Strategie & informatiearchitectuur</h3>
                <p className="mt-1 text-sm text-slate-600">Doelgroep, journeys en sitemap scherp. Wireframes die converteren.</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <LineChart className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">Design & merkdoorvoering</h3>
                <p className="mt-1 text-sm text-slate-600">Clean UI, donkerblauwe accenten, consistent met je huisstijl.</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <Layers className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">Development</h3>
                <p className="mt-1 text-sm text-slate-600">Next.js of React, Tailwind, headless CMS en SEO‑techniek.</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <Workflow className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">Content & copy</h3>
                <p className="mt-1 text-sm text-slate-600">Structuur, tone of voice en visuals die je waarde bewijzen.</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <Cpu className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">Integraties & data</h3>
                <p className="mt-1 text-sm text-slate-600">Analytics, formulieren, CRM en automation – privacy‑proof.</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">Optimalisatie</h3>
                <p className="mt-1 text-sm text-slate-600">Snelheid, toegankelijkheid en conversieverbeteringen na livegang.</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Value prop */}
      <Section id="propositie" className="py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold">Propositie die klopt – vandaag en morgen</h2>
            <p className="mt-3 text-slate-600">We bouwen niet alleen pixels. We bouwen momentum: duidelijke keuzes in je aanbod, heldere CTA’s en een navigeerbare structuur die leads en aanvragen verhoogt.</p>
            <ul className="mt-6 space-y-2 text-sm">
              {["Mensgericht ontwerp (UX) dat vertrouwen wekt","Impactgestuurd: KPI’s en meetplan vanaf dag één","Data‑gedreven iteratie: releases in korte sprints"].map((t) => (
                <li key={t} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-blue-900" /><span>{t}</span></li>
              ))}
            </ul>
          </div>
          <Card>
            <h3 className="font-semibold">Voorstel in 3 stappen</h3>
            <ol className="mt-3 text-sm space-y-2 text-slate-700 list-decimal list-inside">
              <li>30‑min intake: doelen, scope en succescriteria.</li>
              <li>Compact plan: sitemap, aanpak, begroting & planning.</li>
              <li>Kick‑off: sprint 0 met design system & content‑inventaris.</li>
            </ol>
            <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-gradient-to-br from-blue-900 to-slate-900">
              Vraag je intake aan <ArrowRight className="h-4 w-4" />
            </a>
          </Card>
        </div>
      </Section>

      {/* Process */}
      <Section id="proces" className="py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold">Aanpak</h2>
          <p className="mt-3 text-slate-600">Simpel, transparant en iteratief.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {[
            { title: "Strategie", desc: "Doelen, doelgroep, sitemap & wireframes" },
            { title: "Design", desc: "Design system, UI‑screens & feedbackrondes" },
            { title: "Build", desc: "Componenten, CMS, integraties & test" },
            { title: "Launch", desc: "SEO‑check, performance, monitoring & roadmap" },
          ].map((s, i) => (
            <Card key={i}>
              <div className="text-sm text-blue-900 font-semibold">Stap {i + 1}</div>
              <div className="mt-1 font-semibold">{s.title}</div>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <div id="contact" className="bg-slate-50 border-t border-slate-200">
        <Section className="py-16 sm:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold">Klaar voor een clean, snelle website?</h2>
              <p className="mt-3 text-slate-600">Laat je e‑mail achter voor een intakevoorstel. We reageren doorgaans binnen één werkdag.</p>
              <ul className="mt-4 space-y-2 text-sm">
                {["Mobile‑first en toegankelijk","Lichtgewicht, razendsnel en SEO‑vriendelijk","Volledige merkdoorvoering in donkerblauw palet"].map((t) => (
                  <li key={t} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-blue-900" /><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <Card>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">E‑mail</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="naam@bedrijf.nl"
                    className="mt-1 w-full rounded-xl border-slate-300 focus:border-blue-900 focus:ring-blue-900"
                    required
                  />
                </div>
                <button className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-gradient-to-br from-blue-900 to-slate-900 w-full">
                  Verstuur <Mail className="h-4 w-4" />
                </button>
                <p className="text-xs text-slate-500">Door te verzenden ga je akkoord met eenmalig contact per e‑mail.</p>
              </form>
            </Card>
          </div>
        </Section>
      </div>

      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {brand.name}. Alle rechten voorbehouden.
      </footer>
    </div>
  );
}
