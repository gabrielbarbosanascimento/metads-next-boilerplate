import dynamic from 'next/dynamic';

export * from './modal.styles';
export const MetaModal = dynamic(() => import('./modal'), {
  ssr: false,
});
