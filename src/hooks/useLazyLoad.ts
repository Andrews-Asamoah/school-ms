import { useState, useEffect, useRef } from "react";

export function useLazyLoad(src: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const currentImgRef = imgRef.current;

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          if (observerRef.current && currentImgRef) {
            observerRef.current.unobserve(currentImgRef);
          }
        }
      });
    });

    if (currentImgRef) {
      observerRef.current.observe(currentImgRef);
    }

    return () => {
      if (observerRef.current && currentImgRef) {
        observerRef.current.unobserve(currentImgRef);
      }
    };
  }, [src]);

  return { isLoaded, imgRef };
}
