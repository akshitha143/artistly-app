'use client';

import dynamic from 'next/dynamic';

export default function LazyArtistComp({ loader = null }) {
  const LazyComponent = dynamic(()=>import('./ArtistPage.jsx'), {
    ssr: false,
    loading: () =>
      loader || (
        <div className="w-full h-screen flex items-center justify-center">
          <span className="animate-pulse text-brand font-semibold text-lg">Loading...</span>
        </div>
      ),
  });

  return <LazyComponent />;
}
