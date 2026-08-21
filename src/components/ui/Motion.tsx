"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Professional spring and cubic-bezier easing configs
export const EASINGS = {
  smooth: [0.16, 1, 0.3, 1] as const,
  bounce: [0.34, 1.56, 0.64, 1] as const,
  soft: [0.25, 1, 0.5, 1] as const,
};

export const SPRINGS = {
  snappy: { type: "spring", stiffness: 400, damping: 25 },
  gentle: { type: "spring", stiffness: 200, damping: 20 },
  bouncy: { type: "spring", stiffness: 300, damping: 15 },
} as const;

// 1. FadeIn Component
interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 0.5,
  once = true,
}: FadeInProps) {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      default:
        return {};
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getOffset() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: EASINGS.smooth,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

// 2. Stagger Container & Stagger Item
interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerChildren = 0.08,
  delayChildren = 0,
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 20,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}) {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      default:
        return {};
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...getOffset() },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.5,
            ease: EASINGS.smooth,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

// 3. Hover Card / Button Wrapper with Spring Physics
export function HoverScale({
  children,
  className,
  scale = 1.03,
  y = -3,
}: {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  y?: number;
}) {
  return (
    <motion.div
      whileHover={{ scale, y }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={SPRINGS.snappy}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

// 4. Animated Number Counter
export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className,
}: {
  value: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  const numericMatch = value.match(/[\d.]+/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[0]) : null;

  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (isInView && targetNumber !== null) {
      count.set(targetNumber);
    }
  }, [isInView, targetNumber, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        const textValue = value.replace(/[\d.]+/, Math.floor(latest).toLocaleString());
        ref.current.textContent = `${prefix}${textValue}${suffix}`;
      }
    });
  }, [rounded, prefix, suffix, value]);

  if (targetNumber === null) {
    return <span className={className}>{prefix}{value}{suffix}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
