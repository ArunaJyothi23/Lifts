"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  duration = 1800,
  className = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Parse numeric part, prefix, suffix, and decimals
    const match = value.match(/^([^0-9.]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);

    if (!match) {
      // If no standard number (e.g., "24/7"), keep as-is
      return;
    }

    const prefix = match[1] || "";
    const targetNum = parseFloat(match[2]);
    const suffix = match[3] || "";
    const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Ease-out expo function for classic deceleration
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentNum = targetNum * easeOutExpo;

            setDisplayValue(
              `${prefix}${currentNum.toFixed(decimals)}${suffix}`
            );

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={elementRef} className={`inline-block tabular-nums transition-transform ${className}`}>
      {displayValue}
    </span>
  );
}

