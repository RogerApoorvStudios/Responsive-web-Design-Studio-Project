export type AppTab = 'preview' | 'simulator' | 'deliverables' | 'documentation' | 'challenges';

export interface ViewportPreset {
  id: string;
  name: string;
  width: number;
  height: number;
  category: 'mobile' | 'tablet' | 'desktop';
  deviceModel: string;
  scale?: number;
}

export interface ChallengeItem {
  id: string;
  title: string;
  category: string;
  measurableImpact: string;
  rootCause: string;
  strategy: string;
  codeSnippet: string;
  verificationResult: string;
  fixedMetrics: {
    before: string;
    after: string;
    metricName: string;
  };
}
