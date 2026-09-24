import React, { useState } from 'react';
import { 
  Monitor, 
  Smartphone, 
  FileCode2, 
  FileText, 
  Download,
  ArrowRight
} from 'lucide-react';
import { ResponsiveWebsite } from './components/ResponsiveWebsite';
import { ViewportSimulator } from './components/ViewportSimulator';
import { ReportViewer } from './components/ReportViewer';
import { CodeDeliverables } from './components/CodeDeliverables';
import { AppTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('preview');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <header className="sticky top-0 z-50 bg-slate-900 text-white border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-display font-extrabold text-white text-base shadow-sm flex-shrink-0">
              AC
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm sm:text-base text-white truncate">
                  Apoorv Chaudhary — Responsive Systems
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono uppercase bg-blue-950 text-blue-300 px-2 py-0.5 rounded border border-blue-800">
                  Week 2 Project
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate hidden md:block">
                Media Queries · Fluid Grids · Zero-CLS Scaling · Viewport Telemetry
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 overflow-x-auto" aria-label="Application views">
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'preview'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Live Website</span>
            </button>

            <button
              onClick={() => setActiveTab('simulator')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'simulator'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Device Simulator</span>
            </button>

            <button
              onClick={() => setActiveTab('documentation')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'documentation'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Report & Description Note</span>
            </button>

            <button
              onClick={() => setActiveTab('deliverables')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'deliverables'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>Deliverables & Code</span>
            </button>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href="/deliverables/WEEK_2_RESPONSIVE_DESIGN_REPORT.md"
              download="WEEK_2_RESPONSIVE_DESIGN_REPORT.md"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>Export Report</span>
            </a>
          </div>

        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {activeTab === 'preview' && (
          <div className="flex-1 animate-in fade-in duration-150">
            <div className="bg-blue-50 border-b border-blue-100 py-2.5 px-4 sm:px-6 text-xs text-blue-900 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="font-medium">Direct Responsive Preview:</span>
                <span className="text-blue-700">Resize your browser window freely to test fluid clamp typography and auto-fitting grid tracks.</span>
              </div>
              <button
                onClick={() => setActiveTab('simulator')}
                className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-900 underline cursor-pointer"
              >
                <span>Launch Device Simulator (320px–1440px)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <ResponsiveWebsite />
          </div>
        )}

        {activeTab === 'simulator' && (
          <div className="flex-1 animate-in fade-in duration-150">
            <ViewportSimulator />
          </div>
        )}

        {activeTab === 'documentation' && (
          <div className="flex-1 bg-slate-100/60 animate-in fade-in duration-150">
            <ReportViewer />
          </div>
        )}

        {activeTab === 'deliverables' && (
          <div className="flex-1 bg-slate-100/60 animate-in fade-in duration-150">
            <CodeDeliverables />
          </div>
        )}
      </main>
    </div>
  );
}
