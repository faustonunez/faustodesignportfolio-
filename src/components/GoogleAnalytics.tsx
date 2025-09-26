// src/components/GoogleAnalytics.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface GoogleAnalyticsProps {
  trackingId?: string;
}

export const GoogleAnalytics = ({
  trackingId = "G-M725NZBLQD",
}: GoogleAnalyticsProps) => {
  const location = useLocation();

  useEffect(() => {
    // Track page views on route changes
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", trackingId, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location, trackingId]);

  return (
    <Helmet>
      {/* Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </script>
    </Helmet>
  );
};
