import { useEffect, useRef } from "react";

/**
 * Attach the returned ref to a container; every `.reveal` descendant fades in
 * the first time it enters the viewport. Falls back to visible-by-default when
 * IntersectionObserver is unavailable.
 */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return undefined;

    const targets = container.querySelectorAll(".reveal");
    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
