import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  bookSidebar: [
    {type: 'doc', id: 'intro', label: 'Introduction'},
    {
      type: 'category',
      label: 'Foundations',
      items: ['chapter-1-foundations'],
    },
    {
      type: 'category',
      label: 'Early Days (1980s–1990s)',
      items: ['chapter-2-early-days'],
    },
    {
      type: 'category',
      label: 'Internet Era (2000–2005)',
      items: ['chapter-3-internet-era'],
    },
    {
      type: 'category',
      label: 'State-Sponsored Warfare (2006–2010)',
      items: ['chapter-4-state-sponsored'],
    },
    {
      type: 'category',
      label: 'Data Breaches (2011–2015)',
      items: ['chapter-5-data-breaches'],
    },
    {
      type: 'category',
      label: 'Ransomware Revolution (2016–2020)',
      items: ['chapter-6-ransomware'],
    },
    {
      type: 'category',
      label: 'Supply Chain & Infrastructure (2020–2023)',
      items: ['chapter-7-supply-chain'],
    },
    {
      type: 'category',
      label: 'Lessons from History',
      items: ['chapter-8-lessons'],
    },
    {
      type: 'category',
      label: 'Defense & Future Outlook',
      items: ['chapter-9-defense-future'],
    },
    {type: 'doc', id: 'conclusion', label: 'Conclusion'},
  ],
};

export default sidebars;