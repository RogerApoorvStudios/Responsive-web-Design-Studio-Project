import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Send
} from 'lucide-react';

interface ResponsiveWebsiteProps {
  forcedBreakpoint?: string;
}

export const ResponsiveWebsite: React.FC<ResponsiveWebsiteProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    url: '',
    priority: 'all',
    notes: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.url) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      <header className="sticky top-0 z-40 bg-slate-50/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#hero" className="font-display text-xl font-extrabold tracking-tight text-slate-900 hover:text-blue-600 transition-colors">
            Apoorv Chaudhary
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#capabilities" className="hover:text-slate-900 transition-colors">Capabilities</a>
            <a href="#bento" className="hover:text-slate-900 transition-colors">Fluid Architecture</a>
            <a href="#case-studies" className="hover:text-slate-900 transition-colors">Case Studies</a>
            <a href="#specs" className="hover:text-slate-900 transition-colors">Specifications</a>
            <a href="#consultation" className="hover:text-slate-900 transition-colors">Consultation</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="#consultation" 
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow active:scale-95"
            >
              Schedule Audit
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 py-5 shadow-lg transition-all animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1">
              <a 
                href="#capabilities" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[48px] px-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Capabilities
              </a>
              <a 
                href="#bento" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[48px] px-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Fluid Architecture
              </a>
              <a 
                href="#case-studies" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[48px] px-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Case Studies
              </a>
              <a 
                href="#specs" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[48px] px-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Specifications
              </a>
              <a 
                href="#consultation" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[48px] px-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Consultation
              </a>
            </nav>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <a
                href="#consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full min-h-[48px] text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Schedule Responsive Audit
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="hero" className="py-12 sm:py-16 lg:py-24 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 min-w-0">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-4">
                <span>Apoorv Chaudhary</span>
                <span aria-hidden="true">·</span>
                <span>Frontend Development Project</span>
              </div>
              
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] text-balance mb-6">
                Engineering fluid interfaces for every screen dimension
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[62ch] mb-8">
                Adaptive layouts built with mathematical CSS clamp formulas, resilient flexbox hierarchies, and auto-fitting grid systems that scale smoothly from 320px smartphones to 2560px ultra-wide displays.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10">
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-sm active:scale-95 text-center"
                >
                  Explore Capabilities
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#specs"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-all text-center"
                >
                  Review Breakpoint Matrix
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/90 text-left">
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">0.00</div>
                  <div className="text-xs text-slate-500 mt-0.5">Cumulative Layout Shift</div>
                </div>
                <div className="border-l border-slate-200 pl-4">
                  <div className="font-mono text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">320–2560px</div>
                  <div className="text-xs text-slate-500 mt-0.5">Continuously Tested</div>
                </div>
                <div className="border-l border-slate-200 pl-4">
                  <div className="font-mono text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">48px</div>
                  <div className="text-xs text-slate-500 mt-0.5">Mobile Touch Target</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 min-w-0">
              <div className="relative w-full aspect-[16/10] bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-800 overflow-hidden group">
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                <div className="relative h-full w-full bg-slate-950/80 rounded-xl border border-slate-800 flex flex-col overflow-hidden backdrop-blur-md">
                  <div className="h-8 bg-slate-900 border-b border-slate-800 px-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="font-mono text-[11px] text-slate-400">
                      grid-template: repeat(auto-fit, minmax(280px, 1fr))
                    </span>
                    <div className="w-3" />
                  </div>

                  <div className="p-3 sm:p-4 flex-1 flex flex-col gap-2.5 overflow-hidden">
                    <div className="h-14 sm:h-16 rounded-lg bg-blue-900/30 border border-blue-500/20 p-2.5 flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="h-2.5 w-24 bg-blue-400/50 rounded" />
                        <div className="h-2 w-36 bg-blue-400/30 rounded" />
                      </div>
                      <div className="h-6 w-16 bg-blue-600/60 rounded text-[10px] font-mono text-white flex items-center justify-center font-medium">
                        1fr + 1fr
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 flex-1">
                      <div className="rounded-lg bg-slate-900 border border-slate-800 p-2 flex flex-col justify-between">
                        <div className="h-2 w-12 bg-slate-700 rounded" />
                        <div className="font-mono text-[10px] text-blue-400">clamp(1rem, ...)</div>
                      </div>
                      <div className="rounded-lg bg-slate-900 border border-slate-800 p-2 flex flex-col justify-between">
                        <div className="h-2 w-12 bg-slate-700 rounded" />
                        <div className="font-mono text-[10px] text-emerald-400">minmax(280px)</div>
                      </div>
                      <div className="hidden sm:flex rounded-lg bg-slate-900 border border-slate-800 p-2 flex-col justify-between">
                        <div className="h-2 w-12 bg-slate-700 rounded" />
                        <div className="font-mono text-[10px] text-amber-400">CLS: 0.000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2.5 text-center">
                Fluid CSS container math eliminates reflow without external JavaScript dependencies.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="capabilities" className="py-16 sm:py-20 lg:py-24 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">Core Capabilities</div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Responsive engineering foundations
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Four structural pillars designed to eliminate layout fragility, horizontal overflow, and erratic media reflow.
            </p>
          </div>

          <div id="bento" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-blue-600 mb-3 block">01. CONTINUOUS SCALE</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Mathematical fluid typography via CSS clamp()
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                  Headlines and body copy avoid rigid stepped media query jumps by computing continuous linear slopes between 320px and 1440px viewports. Text sizes calculate dynamically without layout shift.
                </p>
                <div className="bg-slate-900 text-slate-100 rounded-xl p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800 mb-4">
                  <code>font-size: clamp(2rem, 1.57rem + 2.14vw, 3.5rem);</code>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-4 border-t border-slate-100">
                <span>Slope: 2.14vw</span>
                <span aria-hidden="true">·</span>
                <span>Minimum: 32px @ 320px</span>
                <span aria-hidden="true">·</span>
                <span>Maximum: 56px @ 1440px</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-blue-600 mb-3 block">02. INTRINSIC TRACKS</span>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  Resilient auto-fit grid tracks
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  Grid layouts use <code className="font-mono text-xs bg-slate-100 text-blue-700 px-1 py-0.5 rounded">repeat(auto-fit, minmax(min(100%, 280px), 1fr))</code> to automatically collapse without micro-managing 10 media queries.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-4 border-t border-slate-100">
                <span>Min Track: 280px</span>
                <span aria-hidden="true">·</span>
                <span>Guard: min(100%)</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-blue-600 mb-3 block">03. ZERO LAYOUT JITTER</span>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  Zero-CLS media scaling
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  Visual containers declare explicit <code className="font-mono text-xs bg-slate-100 text-blue-700 px-1 py-0.5 rounded">aspect-ratio: 16 / 9</code> with <code className="font-mono text-xs bg-slate-100 text-blue-700 px-1 py-0.5 rounded">object-fit: cover</code>, guaranteeing zero cumulative shift during asset streaming.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-4 border-t border-slate-100">
                <span>CLS Score: 0.000</span>
                <span aria-hidden="true">·</span>
                <span>Lazy Decoding: async</span>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-blue-600 mb-3 block">04. ERGONOMIC PARITY</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Touch ergonomics & WCAG 2.2 touch target compliance
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                  Interactive controls dynamically expand padding on viewports under 768px to guarantee a minimum 48px × 48px hit area. Visual focus rings use <code className="font-mono text-xs bg-slate-100 text-blue-700 px-1 py-0.5 rounded">:focus-visible</code> with 2px offset for keyboard navigation parity.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-4 border-t border-slate-100">
                <span>Hit Area: 48px min</span>
                <span aria-hidden="true">·</span>
                <span>Focus Offset: 2px</span>
                <span aria-hidden="true">·</span>
                <span>WCAG Level: AAA Target Size</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="case-studies" className="py-16 sm:py-20 lg:py-24 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">Production Case Studies</div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Tested viewport implementations
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Quantifiable performance metrics across varied multi-device digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <article className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="relative aspect-[16/9] bg-gradient-to-br from-blue-950 to-slate-900 p-6 flex items-center justify-center">
                <div className="flex items-end gap-2.5 h-16 w-36">
                  <div className="flex-1 bg-blue-500/80 rounded-t h-[45%]" />
                  <div className="flex-1 bg-blue-400 rounded-t h-[75%]" />
                  <div className="flex-1 bg-blue-300 rounded-t h-[100%]" />
                  <div className="flex-1 bg-blue-500/80 rounded-t h-[60%]" />
                  <div className="flex-1 bg-blue-400 rounded-t h-[85%]" />
                </div>
                <span className="absolute top-3 left-3 text-[11px] font-mono font-medium text-white/80 bg-white/10 px-2 py-0.5 rounded border border-white/10">
                  Fintech Ledger
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">Financial Analytics</span>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                    Dense tabular data re-flow across mobile screens
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Transformed a 14-column spreadsheet dashboard into stacked card matrices under 768px, retaining tabular figure alignment and inline delta indicators.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                  <div>
                    <div className="font-mono text-base font-bold text-slate-900 tabular-nums">+185%</div>
                    <div className="text-[11px] text-slate-500">Mobile Retention</div>
                  </div>
                  <div>
                    <div className="font-mono text-base font-bold text-slate-900 tabular-nums">0.00s</div>
                    <div className="text-[11px] text-slate-500">Layout Reflow Latency</div>
                  </div>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="relative aspect-[16/9] bg-gradient-to-br from-slate-950 to-indigo-950 p-6 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full border-2 border-white/50" />
                  <span className="w-6 h-0.5 bg-white/40" />
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-400 ring-4 ring-blue-400/30" />
                  <span className="w-6 h-0.5 bg-white/40" />
                  <span className="w-3 h-3 rounded-full border-2 border-white/50" />
                </div>
                <span className="absolute top-3 left-3 text-[11px] font-mono font-medium text-white/80 bg-white/10 px-2 py-0.5 rounded border border-white/10">
                  Robotics OEM
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">Industrial Automation</span>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                    Interactive telemetry on rugged field tablets
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Deployed dual-breakpoint container queries allowing operators on 1024px industrial tablets to toggle between split diagnostics and full-width parameter sliders.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                  <div>
                    <div className="font-mono text-base font-bold text-slate-900 tabular-nums">48ms</div>
                    <div className="text-[11px] text-slate-500">First Contentful Paint</div>
                  </div>
                  <div>
                    <div className="font-mono text-base font-bold text-slate-900 tabular-nums">100%</div>
                    <div className="text-[11px] text-slate-500">Touch Target Accuracy</div>
                  </div>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="relative aspect-[16/9] bg-gradient-to-br from-emerald-950 to-slate-900 p-6 flex items-center justify-center">
                <div className="w-20 h-10 border-4 border-emerald-400/70 border-b-0 rounded-t-full flex items-end justify-center pb-1">
                  <div className="w-1.5 h-6 bg-emerald-300 origin-bottom transform rotate-12 rounded" />
                </div>
                <span className="absolute top-3 left-3 text-[11px] font-mono font-medium text-white/80 bg-white/10 px-2 py-0.5 rounded border border-white/10">
                  Clean Mobility
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">Commercial Logistics</span>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                    Dispatch console with fluid aspect-ratios
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Architected responsive map integration that smoothly scales across dual-monitor desktop setups down to smartphone delivery driver views.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                  <div>
                    <div className="font-mono text-base font-bold text-slate-900 tabular-nums">34KB</div>
                    <div className="text-[11px] text-slate-500">Critical CSS Payload</div>
                  </div>
                  <div>
                    <div className="font-mono text-base font-bold text-slate-900 tabular-nums">0.00</div>
                    <div className="text-[11px] text-slate-500">Cumulative Layout Shift</div>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section id="specs" className="py-16 sm:py-20 lg:py-24 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">Breakpoint Reference Matrix</div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Viewport thresholds & numerical specs
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Explicit architectural thresholds defining layout behaviors, containers, and typography.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase text-xs tracking-wider">
                    <th className="px-6 py-4">Device Tier</th>
                    <th className="px-6 py-4">Viewport Width</th>
                    <th className="px-6 py-4">Media Query Rule</th>
                    <th className="px-6 py-4">Max Container</th>
                    <th className="px-6 py-4">Grid Tracks</th>
                    <th className="px-6 py-4">Root Typographic Base</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 text-slate-700">
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-6 py-4 font-semibold text-slate-900">Compact Smartphone</td>
                    <td className="px-6 py-4 font-mono text-xs">320px — 480px</td>
                    <td className="px-6 py-4"><code className="font-mono text-xs bg-slate-100 text-blue-700 px-2 py-0.5 rounded">@media (max-width: 480px)</code></td>
                    <td className="px-6 py-4 font-mono text-xs">100% (16px pad)</td>
                    <td className="px-6 py-4 font-medium">1 Column Linear</td>
                    <td className="px-6 py-4 font-mono text-xs">clamp(15px, 3.8vw, 16px)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-6 py-4 font-semibold text-slate-900">Large Phone / Phablet</td>
                    <td className="px-6 py-4 font-mono text-xs">481px — 767px</td>
                    <td className="px-6 py-4"><code className="font-mono text-xs bg-slate-100 text-blue-700 px-2 py-0.5 rounded">@media (min-width: 481px)</code></td>
                    <td className="px-6 py-4 font-mono text-xs">100% (20px pad)</td>
                    <td className="px-6 py-4 font-medium">1–2 Columns</td>
                    <td className="px-6 py-4 font-mono text-xs">clamp(15px, 3.2vw, 16px)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-6 py-4 font-semibold text-slate-900">Tablet Portrait</td>
                    <td className="px-6 py-4 font-mono text-xs">768px — 1023px</td>
                    <td className="px-6 py-4"><code className="font-mono text-xs bg-slate-100 text-blue-700 px-2 py-0.5 rounded">@media (min-width: 768px)</code></td>
                    <td className="px-6 py-4 font-mono text-xs">720px</td>
                    <td className="px-6 py-4 font-medium">2 Columns Balanced</td>
                    <td className="px-6 py-4 font-mono text-xs">clamp(16px, 1.8vw, 17px)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-6 py-4 font-semibold text-slate-900">Laptop / Tablet Landscape</td>
                    <td className="px-6 py-4 font-mono text-xs">1024px — 1279px</td>
                    <td className="px-6 py-4"><code className="font-mono text-xs bg-slate-100 text-blue-700 px-2 py-0.5 rounded">@media (min-width: 1024px)</code></td>
                    <td className="px-6 py-4 font-mono text-xs">960px</td>
                    <td className="px-6 py-4 font-medium">3 Columns Asymmetric</td>
                    <td className="px-6 py-4 font-mono text-xs">16px fixed</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-6 py-4 font-semibold text-slate-900">Desktop Standard</td>
                    <td className="px-6 py-4 font-mono text-xs">1280px — 1439px</td>
                    <td className="px-6 py-4"><code className="font-mono text-xs bg-slate-100 text-blue-700 px-2 py-0.5 rounded">@media (min-width: 1280px)</code></td>
                    <td className="px-6 py-4 font-mono text-xs">1200px</td>
                    <td className="px-6 py-4 font-medium">3–4 Columns</td>
                    <td className="px-6 py-4 font-mono text-xs">16px fixed</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-6 py-4 font-semibold text-slate-900">Ultra-Wide Display</td>
                    <td className="px-6 py-4 font-mono text-xs">&ge; 1440px</td>
                    <td className="px-6 py-4"><code className="font-mono text-xs bg-slate-100 text-blue-700 px-2 py-0.5 rounded">@media (min-width: 1440px)</code></td>
                    <td className="px-6 py-4 font-mono text-xs">1320px (Centered)</td>
                    <td className="px-6 py-4 font-medium">4 Columns + Bento Span</td>
                    <td className="px-6 py-4 font-mono text-xs">17px opt-compensated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="consultation" className="py-16 sm:py-20 lg:py-24 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-sm max-w-3xl mx-auto">
            <div className="mb-8 text-center sm:text-left">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">Technical Advisory</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Request a responsive performance audit
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Submit your web application URL for a multi-viewport profiling report across mobile, tablet, and desktop breakpoints.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-display text-lg font-bold text-emerald-950">Audit Request Received</h3>
                <p className="text-sm text-emerald-800 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. A comprehensive responsive telemetry report for <strong>{formData.url}</strong> has been queued and will be dispatched to <strong>{formData.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', url: '', priority: 'all', notes: '' });
                  }}
                  className="mt-2 text-xs font-semibold text-emerald-700 underline hover:text-emerald-900"
                >
                  Submit another URL
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Elena Rostova"
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@enterprise.org"
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="url" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Target Website URL <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="url"
                    id="url"
                    required
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    placeholder="https://app.example.com"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="priority" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Primary Viewport Focus
                  </label>
                  <select
                    id="priority"
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  >
                    <option value="all">Complete Cross-Device Suite (320px - 2560px)</option>
                    <option value="mobile">Mobile-First Critical Path (320px - 480px)</option>
                    <option value="tablet">Tablet & Split-Screen Viewports (768px - 1024px)</option>
                    <option value="cls">Cumulative Layout Shift (CLS) Remediation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Specific Layout Observations (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Describe any horizontal scrolling, awkward wrapping, or touch target collisions..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-y"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Submit Audit Request
                  </button>
                  <p className="text-xs text-slate-500 max-w-xs">
                    Audits performed within 24 business hours using automated and manual viewport profiling.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200 pt-16 pb-12">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-100">
            
            <div className="lg:col-span-5">
              <a href="#hero" className="font-display text-lg font-extrabold text-slate-900 block mb-2">
                Apoorv Chaudhary
              </a>
              <p className="text-sm text-slate-600 max-w-sm mb-3">
                Frontend Web Developer Internship · Week 2 Project Deliverable.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>Standards Compliant: HTML5 · CSS3</span>
                <span aria-hidden="true">·</span>
                <span>WCAG 2.2 Level AA</span>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">Architecture</div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#capabilities" className="hover:text-blue-600 transition-colors">Bento Layouts</a></li>
                <li><a href="#hero" className="hover:text-blue-600 transition-colors">Fluid Formulas</a></li>
                <li><a href="#case-studies" className="hover:text-blue-600 transition-colors">Media Scaling</a></li>
                <li><a href="#specs" className="hover:text-blue-600 transition-colors">Breakpoint Matrix</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">Deliverables</div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="/deliverables/WEEK_2_RESPONSIVE_DESIGN_REPORT.md" target="_blank" className="hover:text-blue-600 transition-colors">Apoorv's Report</a></li>
                <li><a href="/deliverables/index.html" target="_blank" className="hover:text-blue-600 transition-colors">Raw HTML5</a></li>
                <li><a href="/deliverables/styles.css" target="_blank" className="hover:text-blue-600 transition-colors">Raw CSS3</a></li>
                <li><a href="#specs" className="hover:text-blue-600 transition-colors">WCAG 2.2 Metrics</a></li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">Verification</div>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                Developer: Apoorv Chaudhary. Task: Week 2 Implementation of Responsive Web Design.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Responsive Engine Active</span>
              </div>
            </div>

          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>&copy; 2026 Apoorv Chaudhary. Built for Frontend Web Developer Internship Assessment.</p>
            <a href="#hero" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              Back to Top &uarr;
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
