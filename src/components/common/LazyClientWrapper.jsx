'use client';

import dynamic from 'next/dynamic';

export default function LazyClientWrapper({ importPath, loader = null }) {
  const LazyComponent = dynamic(importPath, {
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
