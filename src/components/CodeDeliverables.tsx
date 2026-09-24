import React, { useState, useEffect } from 'react';
import { 
  FileCode, 
  FileText, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Search,
  Code2
} from 'lucide-react';

type DeliverableFileKey = 'html' | 'css' | 'markdown';

interface DeliverableFileInfo {
  key: DeliverableFileKey;
  filename: string;
  path: string;
  language: string;
  title: string;
  description: string;
}

const FILES: DeliverableFileInfo[] = [
  {
    key: 'html',
    filename: 'index.html',
    path: '/deliverables/index.html',
    language: 'html',
    title: 'Deliverable 1: Semantic HTML5 Webpage',
    description: 'Semantic markup with landmarks, fluid layout structure, accessible form controls, authored by Apoorv Chaudhary.',
  },
  {
    key: 'css',
    filename: 'styles.css',
    path: '/deliverables/styles.css',
    language: 'css',
    title: 'Deliverable 2: Advanced Responsive CSS3',
    description: 'Custom properties, continuous clamp() fluid typography, intrinsic CSS Grid auto-fit tracks, and media queries.',
  },
  {
    key: 'markdown',
    filename: 'WEEK_2_RESPONSIVE_DESIGN_REPORT.md',
    path: '/deliverables/WEEK_2_RESPONSIVE_DESIGN_REPORT.md',
    language: 'markdown',
    title: 'Deliverable 3: Internship Technical Report & Description Note',
    description: 'Full documentation with specific numbers, viewport math, 7-device test matrix, and 4 resolved challenge logs.',
  },
];

export const CodeDeliverables: React.FC = () => {
  const [activeKey, setActiveKey] = useState<DeliverableFileKey>('html');
  const [fileContents, setFileContents] = useState<Record<DeliverableFileKey, string>>({
    html: 'Loading deliverable content...',
    css: 'Loading deliverable content...',
    markdown: 'Loading deliverable content...',
  });
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    Promise.all([
      fetch('/deliverables/index.html').then((r) => r.text()),
      fetch('/deliverables/styles.css').then((r) => r.text()),
      fetch('/deliverables/WEEK_2_RESPONSIVE_DESIGN_REPORT.md').then((r) => r.text()),
    ]).then(([html, css, markdown]) => {
      setFileContents({ html, css, markdown });
    }).catch((err) => {
      console.error('Failed to load deliverable files:', err);
    });
  }, []);

  const activeFile = FILES.find((f) => f.key === activeKey) || FILES[0];
  const currentContent = fileContents[activeKey] || '';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (file: DeliverableFileInfo) => {
    const blob = new Blob([fileContents[file.key]], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadAll = () => {
    FILES.forEach((file, index) => {
      setTimeout(() => {
        handleDownload(file);
      }, index * 300);
    });
  };

  const lines = currentContent.split('\n');
  const lineCount = lines.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            <span>Apoorv Chaudhary</span>
            <span aria-hidden="true">·</span>
            <span>Week 2 Submission Deliverables</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Source Code & Documentation Artifacts
          </h1>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl leading-relaxed">
            Inspect, copy, or download the required standalone HTML5 webpage, advanced CSS3 stylesheet, and comprehensive Markdown documentation report.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleDownloadAll}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download All 3 Deliverables
          </button>
          
          <a
            href="/deliverables/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Open Raw HTML
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {FILES.map((file) => {
          const isActive = file.key === activeKey;
          return (
            <button
              key={file.key}
              onClick={() => setActiveKey(file.key)}
              className={`text-left p-5 rounded-2xl border transition-all flex flex-col justify-between cursor-pointer ${
                isActive
                  ? 'bg-blue-50/60 border-blue-500 shadow-sm ring-1 ring-blue-500'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {file.key === 'html' && <Code2 className="w-4 h-4 text-orange-600" />}
                    {file.key === 'css' && <FileCode className="w-4 h-4 text-blue-600" />}
                    {file.key === 'markdown' && <FileText className="w-4 h-4 text-emerald-600" />}
                    <span className="font-mono text-xs font-bold text-slate-900">{file.filename}</span>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                    {file.language.toUpperCase()}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-800 mb-1">{file.title}</div>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                  {file.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-mono">
                  {fileContents[file.key]?.split('\n').length || '...'} lines
                </span>
                <span className="text-blue-600 font-semibold hover:underline">
                  View File &rarr;
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden flex flex-col">
        <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-slate-200 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              {activeFile.filename}
            </span>
            <span className="text-xs text-slate-500 font-mono">
              ({lineCount} lines · UTF-8)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
              <input
                type="text"
                placeholder="Find in code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 w-36 sm:w-48"
              />
            </div>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={() => handleDownload(activeFile)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6 overflow-x-auto max-h-[640px] font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 select-text">
          <pre className="table w-full">
            {lines.map((line, idx) => {
              const matchesSearch = searchQuery && line.toLowerCase().includes(searchQuery.toLowerCase());
              return (
                <div 
                  key={idx} 
                  className={`table-row hover:bg-slate-900/60 ${matchesSearch ? 'bg-yellow-950/50 text-yellow-200' : ''}`}
                >
                  <span className="table-cell pr-4 text-right select-none text-slate-600 w-12 text-[11px]">
                    {idx + 1}
                  </span>
                  <span className="table-cell pl-2 whitespace-pre">
                    {line}
                  </span>
                </div>
              );
            })}
          </pre>
        </div>
      </div>

    </div>
  );
};
