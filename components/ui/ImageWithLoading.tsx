"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ImageWithLoadingProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  sizes?: string;
  width?: number;
  height?: number;
}

export default function ImageWithLoading({
  src,
  alt,
  fill = false,
  className = "",
  priority = false,
  loading = "lazy",
  sizes,
  width,
  height,
}: ImageWithLoadingProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleLoad = () => {
    setImageLoading(false);
  };

  const handleError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <>
      {/* Loading skeleton */}
      {imageLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-200">
          <div className="flex h-full items-center justify-center">
            <div className="text-gray-400">Loading...</div>
          </div>
        </div>
      )}

      {/* Error state */}
      {imageError && (
        <div className="absolute inset-0 bg-gray-100">
          <div className="flex h-full items-center justify-center">
            <div className="text-gray-400">Image not available</div>
          </div>
        </div>
      )}

      {/* Actual image */}
      {!imageError && (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={width}
          height={height}
          className={className}
          priority={priority}
          loading={loading}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </>
  );
} 