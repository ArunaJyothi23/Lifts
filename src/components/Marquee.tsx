"use client";

import React from "react";

interface MarqueeProps {
  children?: React.ReactNode;
  items?: (string | React.ReactNode)[];
  speed?: number; // seconds
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
}

export default function Marquee({
  children,
  items,
  speed = 28,
  direction = "left",
  pauseOnHover = true,
  className = "",
  itemClassName = "",
}: MarqueeProps) {
  const animationDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div
      className={`relative w-full overflow-hidden marquee-mask ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className={`flex w-fit ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
        style={{
          animation: `marqueeScroll ${speed}s linear infinite ${animationDirection}`,
        }}
      >
        {/* First track */}
        <div className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
          {items
            ? items.map((item, idx) => (
                <div key={`track-1-${idx}`} className={`shrink-0 ${itemClassName}`}>
                  {item}
                </div>
              ))
            : children}
        </div>

        {/* Second track for seamless infinite continuity */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6"
        >
          {items
            ? items.map((item, idx) => (
                <div key={`track-2-${idx}`} className={`shrink-0 ${itemClassName}`}>
                  {item}
                </div>
              ))
            : children}
        </div>
      </div>
    </div>
  );
}

