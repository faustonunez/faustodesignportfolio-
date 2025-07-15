// components/scrolltotop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // strip the “#” and scroll smoothly
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    // fallback: scroll to top on normal navigation
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
