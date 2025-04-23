"use client";
import { useEffect, useState } from "react";
import Preloader from "./Preloader";

const LogoLoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader when component mounts (hydration completes)
    setLoading(false);
    
    // For fallback in case hydration is very fast
    const timer = setTimeout(() => setLoading(false), 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Preloader /> : children}</>;
};

export default LogoLoadingWrapper;