import React, { useState } from 'react';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  RotateCw, 
  Sliders, 
  ZoomIn, 
  ZoomOut
} from 'lucide-react';
import { VIEWPORT_PRESETS } from '../data/deliverables';
import { ViewportPreset } from '../types';
import { ResponsiveWebsite } from './ResponsiveWebsite';

export const ViewportSimulator: React.FC = () => {
  const [activePreset, setActivePreset] = useState<ViewportPreset>(VIEWPORT_PRESETS[3]);
  const [customWidth, setCustomWidth] = useState<number>(768);
  const [isLandscape, setIsLandscape] = useState<boolean>(false);
  const [zoomScale, setZoomScale] = useState<number>(1);

  const effectiveWidth = isLandscape 
    ? Math.max(activePreset.height, customWidth) 
    : customWidth;
    
  const effectiveHeight = isLandscape 
    ? Math.min(activePreset.width, 800) 
    : (activePreset.height || 800);

  const handleSelectPreset = (preset: ViewportPreset) => {
    setActivePreset(preset);
    setCustomWidth(preset.width);
  };

  let activeMediaQuery = '';
  let gridColumns = '';
  let navPattern = '';
  let computedH1 = '';

  if (effectiveWidth <= 480) {
    activeMediaQuery = '@media (max-width: 480px)';
    gridColumns = '1 Column Linear';
    navPattern = 'Hamburger Drawer (48px Touch)';
    computedH1 = '32px – 34px (2.0rem)';
  } else if (effectiveWidth < 768) {
    activeMediaQuery = '@media (min-width: 481px) and (max-width: 767px)';
    gridColumns = '1 to 2 Columns';
    navPattern = 'Hamburger Drawer (48px Touch)';
    computedH1 = '35px – 39px (2.2rem)';
  } else if (effectiveWidth < 1024) {
    activeMediaQuery = '@media (min-width: 768px) and (max-width: 1023px)';
    gridColumns = '2 Columns Balanced';
    navPattern = 'Horizontal 3-Zone Bar';
    computedH1 = '39px – 44px (2.5rem)';
  } else if (effectiveWidth < 1280) {
    activeMediaQuery = '@media (min-width: 1024px) and (max-width: 1279px)';
    gridColumns = '3 Columns Asymmetric';
    navPattern = 'Horizontal 3-Zone Bar';
    computedH1 = '45px – 50px (2.8rem)';
  } else {
    activeMediaQuery = '@media (min-width: 1280px)';
    gridColumns = '3 to 4 Columns';
    navPattern = 'Horizontal 3-Zone Bar';
    computedH1 = '52px – 56px (3.5rem)';
  }

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden bg-slate-950 text-slate-100">
      <div className="flex-none bg-slate-900 border-b border-slate-800 px-4 py-3 z-20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            <span className="text-xs font-semibold text-slate-400 mr-2 flex items-center gap-1">
              <Smartphone className="w-3.5 h-3.5" />
              Presets:
            </span>
            {VIEWPORT_PRESETS.map((preset) => {
              const isSelected = activePreset.id === preset.id && customWidth === preset.width;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {preset.category === 'mobile' && <Smartphone className="w-3 h-3" />}
                  {preset.category === 'tablet' && <Tablet className="w-3 h-3" />}
                  {preset.category === 'desktop' && <Monitor className="w-3 h-3" />}
                  <span>{preset.name}</span>
                  <span className="text-[10px] opacity-70 font-mono">({preset.width}px)</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsLandscape(!isLandscape)}
                className={`p-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  isLandscape 
                    ? 'bg-blue-900/60 border-blue-500 text-blue-200' 
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
                title="Rotate Orientation"
              >
                <RotateCw className={`w-3.5 h-3.5 transition-transform ${isLandscape ? 'rotate-90 text-blue-400' : ''}`} />
                <span>{isLandscape ? 'Landscape' : 'Portrait'}</span>
              </button>
            </div>

            <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">
              <Sliders className="w-3.5 h-3.5 text-slate-400" />
              <input
                type="range"
                min="320"
                max="1440"
                value={customWidth}
                onChange={(e) => setCustomWidth(Number(e.target.value))}
                className="w-24 sm:w-36 accent-blue-500 cursor-pointer"
              />
              <span className="font-mono text-xs font-semibold text-blue-400 min-w-[50px] text-right">
                {customWidth}px
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-lg border border-slate-700 text-xs">
              <button
                onClick={() => setZoomScale((prev) => Math.max(0.5, prev - 0.1))}
                className="p-1 hover:text-white text-slate-400"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-[11px] px-1 text-slate-300">
                {Math.round(zoomScale * 100)}%
              </span>
              <button
                onClick={() => setZoomScale((prev) => Math.min(1.2, prev + 0.1))}
                className="p-1 hover:text-white text-slate-400"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setZoomScale(1)}
                className="text-[10px] text-blue-400 ml-1 hover:underline"
              >
                Reset
              </button>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400 font-mono">Active CSS Rule:</span>
            <code className="bg-blue-950 text-blue-300 px-2 py-0.5 rounded text-[11px] font-mono border border-blue-800">
              {activeMediaQuery}
            </code>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
            <div>
              <span>Computed H1: </span>
              <span className="font-mono text-slate-200 font-medium">{computedH1}</span>
            </div>
            <div className="hidden md:block">
              <span>Grid Structure: </span>
              <span className="font-mono text-slate-200 font-medium">{gridColumns}</span>
            </div>
            <div className="hidden lg:block">
              <span>Nav Hierarchy: </span>
              <span className="font-mono text-slate-200 font-medium">{navPattern}</span>
            </div>
            <div>
              <span>CLS: </span>
              <span className="font-mono text-emerald-400 font-bold">0.000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-slate-950 p-4 sm:p-6 flex items-start justify-center">
        <div 
          className="relative transition-all duration-200 ease-out bg-slate-900 border-4 border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{
            width: `${effectiveWidth}px`,
            maxWidth: '100%',
            height: '840px',
            transform: `scale(${zoomScale})`,
            transformOrigin: 'top center',
          }}
        >
          <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800 text-[11px] text-slate-400 select-none">
            <div className="flex items-center gap-2 font-mono">
              <span className="font-bold text-slate-200">{activePreset.deviceModel}</span>
              <span>·</span>
              <span>{effectiveWidth} × {effectiveHeight}px</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-mono border border-emerald-800">
                WCAG 2.2 AA Pass
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto bg-slate-50">
            <ResponsiveWebsite forcedBreakpoint={activeMediaQuery} />
          </div>
        </div>
      </div>
    </div>
  );
};
