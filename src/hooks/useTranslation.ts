"use client";

import { useState, useEffect } from "react";
import { dictionary, Locale } from "../locales/dictionary";

export function useTranslation() {
  const [lang, setLang] = useState<Locale>("en");

  useEffect(() => {
    // Get language on mount
    const savedLang = (localStorage.getItem("lang") as Locale) || "en";
    setLang(savedLang);

    // Listen for language changes dispatched from language selectors
    const handleLangChange = () => {
      const updatedLang = (localStorage.getItem("lang") as Locale) || "en";
      setLang(updatedLang);
    };

    window.addEventListener("languageChange", handleLangChange);
    return () => {
      window.removeEventListener("languageChange", handleLangChange);
    };
  }, []);

  const t = (path: string): string => {
    const keys = path.split(".");
    let result: any = dictionary[lang] || dictionary["en"];

    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        // Fallback to English
        let englishFallback: any = dictionary["en"];
        for (const fallbackKey of keys) {
          if (englishFallback && englishFallback[fallbackKey] !== undefined) {
            englishFallback = englishFallback[fallbackKey];
          } else {
            return path; // return key name if not found in English either
          }
        }
        return typeof englishFallback === "string" ? englishFallback : path;
      }
    }

    return typeof result === "string" ? result : path;
  };

  return { t, lang };
}
