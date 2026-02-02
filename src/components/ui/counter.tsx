"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  end: number;
  duration?: number; // ms
  suffix?: string;
};

export default function Counter({
  end,
  duration = 2000,
  suffix = "",
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const stepTime = Math.max(Math.floor(duration / end), 20);

          const counter = setInterval(() => {
            start += Math.ceil(end / (duration / stepTime));
            if (start >= end) {
              setCount(end);
              clearInterval(counter);
            } else {
              setCount(start);
            }
          }, stepTime);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className="tabular-nums ">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
