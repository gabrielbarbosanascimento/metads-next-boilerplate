import dynamic from 'next/dynamic';

// export * from './select';
export const MetaSelect = dynamic(() => import('./select'), { ssr: false });
