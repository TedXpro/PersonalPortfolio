import React, { useState } from "react";
import { ArrowUpRight, Globe } from "lucide-react";

/**
 * Standard Telegram & WhatsApp style OpenGraph Link Preview Card
 * Features:
 * - Direct live remote URL image loading
 * - Skeleton shimmer loader while network request is in flight
 * - Multi-tier graceful degradation (Remote URL -> Local Fallback -> Clean Compact Card)
 * - Safe referrerPolicy and lazy loading
 */
const OpenGraphCard = ({
  url,
  remoteImage,
  fallbackImage,
  title,
  description,
  domain,
  className = "",
}) => {
  const [imageState, setImageState] = useState("loading"); // "loading" | "loaded" | "fallback" | "error"
  const [currentSrc, setCurrentSrc] = useState(remoteImage || fallbackImage);

  const displayDomain = domain || (url ? url.replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0] : "website.com");

  const handleImageError = () => {
    if (currentSrc === remoteImage && fallbackImage) {
      // Tier 1 Fallback: Switch to local verified asset
      setImageState("fallback");
      setCurrentSrc(fallbackImage);
    } else {
      // Tier 2 Fallback: Gracefully degrade to clean compact card (Telegram/WhatsApp standard)
      setImageState("error");
    }
  };

  const handleImageLoad = () => {
    setImageState("loaded");
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`w-full max-w-sm mt-4 rounded-2xl overflow-hidden glass-card border border-[var(--glass-border)] hover:border-accent-purple/60 transition-all duration-300 group/og block text-left shadow-lg relative ${className}`}
    >
      {/* Visual Media Banner (Only if image hasn't errored out completely) */}
      {imageState !== "error" && currentSrc && (
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/30">
          {/* Skeleton Shimmer Loading Placeholder */}
          {imageState === "loading" && (
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/15 to-white/5 animate-pulse" />
          )}

          <img
            src={currentSrc}
            alt={title || displayDomain}
            loading="lazy"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`w-full h-full object-cover transition-all duration-500 group-hover/og:scale-105 ${
              imageState === "loaded" || imageState === "fallback" ? "opacity-100" : "opacity-0"
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover/og:opacity-20 transition-opacity" />

          {/* Top-Right Domain Badge */}
          <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg glass-panel text-[11px] font-mono font-semibold text-white flex items-center gap-1.5 shadow-md backdrop-blur-md">
            <span>{displayDomain}</span>
            <ArrowUpRight className="w-3 h-3 text-accent-purple group-hover/og:translate-x-0.5 group-hover/og:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      )}

      {/* Metadata Block (Telegram / WhatsApp Standard Preview) */}
      <div className="p-4 relative bg-white/[0.02] dark:bg-black/20 border-t border-[var(--glass-border)]">
        {/* Host URL Tag */}
        <div className="text-[10px] font-bold uppercase tracking-wider text-accent-purple mb-1.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>{url ? url.replace(/^https?:\/\//, "") : displayDomain}</span>
          </div>
          {imageState === "error" && (
            <span className="text-[10px] text-secondary flex items-center gap-1">
              <Globe className="w-3 h-3 text-accent-purple" />
              <span>Live Link</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h4 className="font-bold text-xs sm:text-sm text-[var(--text-primary)] line-clamp-1 group-hover/og:text-accent-purple transition-colors">
          {title || displayDomain}
        </h4>

        {/* Description */}
        {description && (
          <p className="mt-1 text-[11px] text-secondary line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </a>
  );
};

export default OpenGraphCard;
