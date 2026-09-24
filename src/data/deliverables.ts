import { ChallengeItem, ViewportPreset } from '../types';

export const VIEWPORT_PRESETS: ViewportPreset[] = [
  {
    id: 'iphone-se',
    name: 'Mobile Small',
    width: 320,
    height: 568,
    category: 'mobile',
    deviceModel: 'iPhone SE (1st Gen)',
  },
  {
    id: 'iphone-14',
    name: 'Mobile Standard',
    width: 375,
    height: 667,
    category: 'mobile',
    deviceModel: 'iPhone 8 / SE (3rd Gen)',
  },
  {
    id: 'iphone-16-pro',
    name: 'Mobile Large',
    width: 430,
    height: 932,
    category: 'mobile',
    deviceModel: 'iPhone 16 Pro Max',
  },
  {
    id: 'ipad-mini',
    name: 'Tablet Portrait',
    width: 768,
    height: 1024,
    category: 'tablet',
    deviceModel: 'iPad Mini (768px)',
  },
  {
    id: 'ipad-pro-11',
    name: 'Tablet Large',
    width: 834,
    height: 1194,
    category: 'tablet',
    deviceModel: 'iPad Pro 11"',
  },
  {
    id: 'laptop',
    name: 'Tablet Landscape / Laptop',
    width: 1024,
    height: 768,
    category: 'desktop',
    deviceModel: 'MacBook Air / Laptop 13"',
  },
  {
    id: 'desktop-hd',
    name: 'Desktop Standard',
    width: 1280,
    height: 800,
    category: 'desktop',
    deviceModel: 'Standard Display (1280px)',
  },
  {
    id: 'desktop-wide',
    name: 'Desktop Wide (1440px)',
    width: 1440,
    height: 900,
    category: 'desktop',
    deviceModel: 'Wide Monitor (1440px)',
  },
];

export const CHALLENGES_DATA: ChallengeItem[] = [
  {
    id: 'horizontal-scroll',
    title: 'Horizontal Scrollbar Incursion & Grid Blowout on 320px–360px Mobile',
    category: 'Layout Integrity & Grid Constraints',
    measurableImpact: '18px horizontal page overflow (scrollWidth = 338px on 320px viewport). Swiping caused horizontal drift into white dead-space.',
    rootCause: 'CSS Grid tracks default to min-width: auto. Preformatted <code> tags and nested containers refused to shrink narrower than continuous code strings. Additionally, fixed outer paddings accumulated.',
    strategy: 'Applied min-width: 0 to all grid and flex children, global word break rules, and an overflow-x scroll container on code blocks, combined with fluid clamp padding.',
    codeSnippet: `.hero-content, .bento-card, .case-card {
  min-width: 0;
}

p, h1, h2, h3, span, code {
  overflow-wrap: break-word;
  hyphens: auto;
}

.card-code-block {
  overflow-x: auto;
  max-width: 100%;
  -webkit-overflow-scrolling: touch;
}`,
    verificationResult: 'Tested on 320px iPhone SE and Galaxy S8 emulation: document.documentElement.scrollWidth === 320px. Horizontal overflow: exactly 0px.',
    fixedMetrics: {
      before: '338px (18px overflow)',
      after: '320px (0px overflow)',
      metricName: 'Scroll Width @ 320px',
    },
  },
  {
    id: 'cls-media',
    title: 'Cumulative Layout Shift (CLS: 0.28) During Responsive Media Resizing',
    category: 'Web Vitals & Fluid Media',
    measurableImpact: 'Lighthouse reported CLS score of 0.28 (exceeding Google target of <= 0.10). Layout shifted by 142px vertically during initial asset paint.',
    rootCause: 'Graphical containers and responsive artwork declared width: 100% and height: auto without pre-allocating an intrinsic aspect ratio, triggering browser layout reflow upon asset rendering.',
    strategy: 'Integrated modern CSS aspect-ratio: 16 / 9 and 16 / 10 with object-fit: cover and instantaneous CSS SVG vector rendering.',
    codeSnippet: `.case-media {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
}

.fluid-canvas-art {
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}`,
    verificationResult: 'Chrome DevTools Performance & Lighthouse audits measured CLS = 0.000 across all 7 test viewports.',
    fixedMetrics: {
      before: '0.28 (Poor)',
      after: '0.000 (Flawless)',
      metricName: 'Cumulative Layout Shift',
    },
  },
  {
    id: 'tablet-bento',
    title: 'Asymmetric 12-Column Desktop Bento Grid Squishing on Tablet (768px–1023px)',
    category: 'CSS Grid & Responsive Columns',
    measurableImpact: 'At 768px (iPad Mini), the 4-column card squished to 216px width, forcing card titles into 4 lines of awkward wrapping and leaving 96px of dead vertical space.',
    rootCause: 'Porting a 12-column desktop mental model directly into medium tablet viewports without accounting for the decrease in content container width (from 1200px to 720px).',
    strategy: 'Introduced an intermediate 2-column paired layout at @media (min-width: 768px) and (max-width: 1023px) before transitioning to 3 columns at 1024px and 1 column below 768px.',
    codeSnippet: `.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
}

@media (min-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .bento-span-2 {
    grid-column: span 2;
  }
}

@media (min-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .bento-span-2 {
    grid-column: span 2;
  }
  .bento-span-1 {
    grid-column: span 1;
  }
}`,
    verificationResult: 'Card minimum width increased from 216px to 348px on 768px tablet, headline wrap reduced from 4 lines to 2 lines.',
    fixedMetrics: {
      before: '216px (4-line wrap)',
      after: '348px (2-line clean wrap)',
      metricName: 'Min Card Width @ 768px',
    },
  },
  {
    id: 'touch-targets',
    title: 'Mobile Touch Target Violations (<44px) & Off-Canvas Keyboard Trapping',
    category: 'Accessibility & Touch Ergonomics',
    measurableImpact: 'Navigation links measured 32px in height on mobile screens, violating WCAG 2.2 Success Criterion 2.5.8. Keyboard tabbing leaked behind active mobile menu.',
    rootCause: 'Desktop inline padding was reused on mobile without dedicated touch hit areas; off-canvas drawer lacked aria-expanded synchronization and focus lifecycle management.',
    strategy: 'Added mobile-specific min-height: 48px on touch elements, synchronized aria-expanded attributes, and added viewport resize reset listeners.',
    codeSnippet: `@media (max-width: 767px) {
  .nav-link {
    display: flex;
    align-items: center;
    min-height: 48px;
    width: 100%;
    padding-inline: 12px;
  }
  
  .mobile-menu-toggle {
    width: 44px;
    height: 44px;
  }
}`,
    verificationResult: 'Axe Accessibility audit verified 0 touch target violations; interactive hit area measures 48px vertical height on all mobile viewports.',
    fixedMetrics: {
      before: '32px (Non-compliant)',
      after: '48px (WCAG AAA Pass)',
      metricName: 'Nav Hit Area Height',
    },
  },
];

export const FLUID_TYPE_SCALE = [
  {
    token: '--step-h1',
    label: 'Hero H1 Title',
    formula: 'clamp(2rem, 1.57rem + 2.14vw, 3.5rem)',
    v320: '32.0px (2.00rem)',
    v768: '39.4px (2.46rem)',
    v1024: '44.9px (2.81rem)',
    v1440: '56.0px (3.50rem)',
  },
  {
    token: '--step-h2',
    label: 'Section H2 Title',
    formula: 'clamp(1.5rem, 1.25rem + 1.25vw, 2.375rem)',
    v320: '24.0px (1.50rem)',
    v768: '28.6px (1.79rem)',
    v1024: '32.8px (2.05rem)',
    v1440: '38.0px (2.38rem)',
  },
  {
    token: '--step-h3',
    label: 'Card H3 Title',
    formula: 'clamp(1.125rem, 1rem + 0.625vw, 1.5rem)',
    v320: '18.0px (1.125rem)',
    v768: '20.8px (1.30rem)',
    v1024: '22.4px (1.40rem)',
    v1440: '24.0px (1.50rem)',
  },
  {
    token: '--step-lead',
    label: 'Lead Paragraph',
    formula: 'clamp(1rem, 0.95rem + 0.27vw, 1.1875rem)',
    v320: '16.0px (1.00rem)',
    v768: '17.2px (1.08rem)',
    v1024: '18.0px (1.125rem)',
    v1440: '19.0px (1.19rem)',
  },
  {
    token: '--step-body',
    label: 'Standard Body Copy',
    formula: 'clamp(0.9375rem, 0.915rem + 0.11vw, 1rem)',
    v320: '15.0px (0.94rem)',
    v768: '15.5px (0.97rem)',
    v1024: '15.8px (0.99rem)',
    v1440: '16.0px (1.00rem)',
  },
  {
    token: '--step-meta',
    label: 'Metadata & Micro-Labels',
    formula: 'clamp(0.75rem, 0.73rem + 0.1vw, 0.8125rem)',
    v320: '12.0px (0.75rem)',
    v768: '12.5px (0.78rem)',
    v1024: '12.8px (0.80rem)',
    v1440: '13.0px (0.81rem)',
  },
];
