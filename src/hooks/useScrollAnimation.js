import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  // Capture options once at call-time so the effect dependency array stays
  // stable across re-renders (inline object literals change reference every render).
  const observerOptions = useRef({
    threshold: options.threshold ?? 0.1,
    rootMargin: options.rootMargin ?? '0px 0px -100px 0px',
  });

  // Track whether the component is still mounted so we never call setState
  // on an unmounted / not-yet-mounted component.
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!mountedRef.current) return;
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
        } else {
          setIsVisible(false);
        }
      },
      observerOptions.current
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      mountedRef.current = false;
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []); // ← empty: create the observer once on mount, clean up on unmount

  return [elementRef, isVisible, hasAnimated];
};

export const useStaggeredAnimation = (itemsCount, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!mountedRef.current) return;
        if (entry.isIntersecting) {
          setIsVisible(true);
          for (let i = 0; i < itemsCount; i++) {
            setTimeout(() => {
              if (!mountedRef.current) return;
              setVisibleItems((prev) => new Set([...prev, i]));
            }, i * delay);
          }
        } else {
          setIsVisible(false);
          setVisibleItems(new Set());
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const currentElement = containerRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      mountedRef.current = false;
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [itemsCount, delay]); // itemsCount and delay are primitives — safe in deps

  return [containerRef, visibleItems, isVisible];
};
