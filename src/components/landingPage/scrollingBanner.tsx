"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

type News = {
  id: number;
  content: string;
};

const news: News[] = [
  { id: 1, content: "School closed on Monday for staff training" },
  { id: 2, content: "Parent-teacher conferences scheduled for next week" },
  { id: 3, content: "Annual school fair coming up this Saturday!" },
];

interface ScrollingBannerProps {
  onClose: () => void;
}

export default function ScrollingBanner({ onClose }: ScrollingBannerProps) {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const animateText = async () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;

      await controls.start({
        x: [-containerWidth, containerWidth],
        transition: {
          duration: 15,
          ease: "linear",
        },
      });

      // Immediately move to the next news item
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length);
    }
  };

  useEffect(() => {
    animateText();
  }, [currentNewsIndex]);

  return (
    <div className="bg-primary text-white py-0 px-4 flex items-center justify-between overflow-hidden">
      <div ref={containerRef} className="flex-1 overflow-hidden">
        <motion.div animate={controls} className="whitespace-nowrap">
          {news[currentNewsIndex].content}
        </motion.div>
      </div>
      <Button variant="ghost" size="icon" className="ml-4" onClick={onClose}>
        <X className="h-2 w-2" />
        <span className="sr-only">Close</span>
      </Button>
    </div>
  );
}
