"use client";
import { useEffect } from "react";

export default function useFadeInOnScroll() {
  useEffect(() => {
    // Fade-in elements
    const fadeElements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, p, button, ul, li"
    );

    // Blink-in elements (cards)
    const blinkElements = document.querySelectorAll(".cardcontent");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // once
          }
        });
      },
      { threshold: 0.25 }
    );

    // Fade-in apply
    fadeElements.forEach((el) => {
      if (el.hasAttribute("data-no-animate")) return;
      el.classList.add("fade-in");
      observer.observe(el);
    });

    // Blink-in apply (cards)
    blinkElements.forEach((el) => {
      if (el.hasAttribute("data-no-animate")) return;
      el.classList.add("blink-in");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
