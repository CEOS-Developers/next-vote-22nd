// app/splash.tsx
'use client';

import { useEffect, useState } from 'react';

function Splash() {
  return (
    <div
      className="flex w-full h-full justify-center"
      style={{ backgroundColor: 'var(--color-main-light)' }}
    >
      <div className="w-full">
        <img
          src="/ceos-favicon-1.ico"
          alt="CEOS favicon"
          className="mt-[199px] h-[199px] w-[199px] mx-auto"
        />
      </div>
    </div>
  );
}

export function SplashWrapper({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500); // 1.5초

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <Splash />;
  }

  return <>{children}</>;
}
