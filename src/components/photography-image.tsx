"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PhotographyImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export function PhotographyImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fill = true,
  width,
  height
}: PhotographyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn("relative overflow-hidden group bg-muted/10", className)}
    >
      <Image
        src={src}
        alt={alt}
        priority={priority}
        sizes={sizes}
        fill={fill}
        width={width}
        height={height}
        className={cn(
          "object-cover transition-all duration-700 ease-in-out",
          isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-105",
          "group-hover:scale-105",
          imageClassName
        )}
        onLoad={() => setIsLoaded(true)}
      />
      {/* Subtle overlay for editorial feel on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
}
