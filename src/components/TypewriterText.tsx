"use client";

import React, { useState, useEffect } from "react";

interface TypewriterTextProps {
  words?: string[];
  phrases?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
}

export default function TypewriterText({
  words,
  phrases,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 2200,
  className = "",
  cursorClassName = "",
}: TypewriterTextProps) {
  const wordList = words || phrases || [];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !wordList.length) return;

    const fullWord = wordList[currentWordIndex % wordList.length];

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing phase
      if (currentText.length < fullWord.length) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Pause at full word before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting phase
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        // Move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % wordList.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, wordList, typingSpeed, deletingSpeed, pauseDuration, isMounted]);

  // Prevent SSR hydration mismatch
  if (!isMounted) {
    return <span className={className}>{wordList[0] || ""}</span>;
  }

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      <span
        aria-hidden="true"
        className={`inline-block ml-0.5 w-[2px] h-[1.1em] bg-current animate-pulse align-middle ${cursorClassName}`}
      />
    </span>
  );
}

