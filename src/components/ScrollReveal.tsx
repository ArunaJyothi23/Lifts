"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fadeInUp" | "fadeIn" | "scaleUp" | "slideLeft" | "slideRight";
  delay?: number; // in seconds
  duration?: number; // in seconds
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.65,
  className = "",
  threshold = 0.15,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Fallback if browser doesn't support IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getAnimationStyles = () => {
    if (!isVisible) {
      switch (animation) {
        case "fadeInUp":
          return "opacity-0 translate-y-8";
        case "scaleUp":
          return "opacity-0 scale-95";
        case "slideLeft":
          return "opacity-0 -translate-x-8";
        case "slideRight":
          return "opacity-0 translate-x-8";
        case "fadeIn":
        default:
          return "opacity-0";
      }
    }
    return "opacity-100 translate-y-0 translate-x-0 scale-100";
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ${getAnimationStyles()} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}

