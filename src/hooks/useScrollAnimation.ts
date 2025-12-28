import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Animation class generator for staggered children
export const getStaggerDelay = (index: number, baseDelay: number = 100): string => {
  return `${index * baseDelay}ms`;
};

// Animation variants
export const animationVariants = {
  fadeUp: (isVisible: boolean, delay: number = 0) => ({
    className: `transition-all duration-700 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`,
    style: { transitionDelay: `${delay}ms` },
  }),
  fadeDown: (isVisible: boolean, delay: number = 0) => ({
    className: `transition-all duration-700 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
    }`,
    style: { transitionDelay: `${delay}ms` },
  }),
  fadeLeft: (isVisible: boolean, delay: number = 0) => ({
    className: `transition-all duration-700 ease-out ${
      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
    }`,
    style: { transitionDelay: `${delay}ms` },
  }),
  fadeRight: (isVisible: boolean, delay: number = 0) => ({
    className: `transition-all duration-700 ease-out ${
      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
    }`,
    style: { transitionDelay: `${delay}ms` },
  }),
  scaleIn: (isVisible: boolean, delay: number = 0) => ({
    className: `transition-all duration-700 ease-out ${
      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
    }`,
    style: { transitionDelay: `${delay}ms` },
  }),
  slideUp: (isVisible: boolean, delay: number = 0) => ({
    className: `transition-all duration-700 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    }`,
    style: { transitionDelay: `${delay}ms` },
  }),
};

export default useScrollAnimation;
