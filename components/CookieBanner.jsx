'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookieConsent, setCookieConsent] = useState('granted');

  useEffect(() => {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
    });
  }, [cookieConsent]);

  return <>cookieConsent: {cookieConsent}</>;
}
