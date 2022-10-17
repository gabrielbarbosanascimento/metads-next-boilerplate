import dynamic from 'next/dynamic';

export const MetaTooltip = dynamic(() => import('./tooltip'), { ssr: false });
