"use client";
import { useEffect, useState } from "react";
import Preloader from "./Preloader";
import CookieConsentPrompt from "./CookieConsentPrompt"; // <-- import here

const LogoLoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // hydration fallback
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
      <>
        {children}
        <CookieConsentPrompt /> {/* <-- only rendered after preloader */}
      </>
  );
};

export default LogoLoadingWrapper;
