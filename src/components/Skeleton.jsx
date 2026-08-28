import React from "react";

/**
 * Base Shimmer Skeleton Atom
 */
export const Skeleton = ({
  variant = "rect", // "rect" | "circle" | "text" | "pill"
  className = "",
  width,
  height,
  style = {},
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "circle":
        return "rounded-full aspect-square";
      case "text":
        return "rounded-md h-3.5 my-1";
      case "pill":
        return "rounded-full h-6";
      case "rect":
      default:
        return "rounded-xl";
    }
  };

  return (
    <div
      style={{
        width: width,
        height: height,
        ...style,
      }}
      className={`relative overflow-hidden bg-white/[0.06] dark:bg-white/[0.03] border border-white/[0.05] ${getVariantStyles()} ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.08] dark:via-white/[0.04] to-transparent" />
    </div>
  );
};

/**
 * Pixel-Accurate Works / Projects Section Skeleton
 * Responsive for both Mobile (1 col) and Desktop (2-3 cols)
 */
export const WorksSkeleton = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-fadeIn">
      {/* Section Header */}
      <div className="space-y-3 mb-8">
        <Skeleton variant="pill" className="w-28 h-5" />
        <Skeleton variant="text" className="w-48 h-10" />
        <Skeleton variant="text" className="w-full max-w-2xl h-4" />
        <Skeleton variant="text" className="w-3/4 max-w-xl h-4" />
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
        {["All", "Fintech", "Full Stack", "Mobile", "AI & ML"].map((_, i) => (
          <Skeleton key={i} variant="pill" className="w-20 sm:w-24 h-8 shrink-0" />
        ))}
      </div>

      {/* Responsive Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="glass-card rounded-2xl p-5 border border-white/5 space-y-4 shadow-md flex flex-col justify-between"
          >
            <div>
              {/* 16:10 Aspect Image Preview */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-white/[0.03] border border-white/10">
                <Skeleton variant="rect" className="w-full h-full rounded-none" />
                <Skeleton variant="pill" className="absolute top-2.5 left-2.5 w-16 h-5 bg-white/10" />
                <Skeleton variant="pill" className="absolute top-2.5 right-2.5 w-24 h-5 bg-white/10" />
              </div>

              {/* Title & Description */}
              <Skeleton variant="text" className="w-3/4 h-6 mb-2" />
              <Skeleton variant="text" className="w-full h-3.5" />
              <Skeleton variant="text" className="w-5/6 h-3.5" />
            </div>

            {/* Tech Tags Bottom Row */}
            <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
              <Skeleton variant="pill" className="w-14 h-5" />
              <Skeleton variant="pill" className="w-16 h-5" />
              <Skeleton variant="pill" className="w-12 h-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Pixel-Accurate Work Experience Timeline Skeleton
 * Responsive: Desktop 2-column alternating grid, Mobile vertical spine
 */
export const ExperienceSkeleton = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-fadeIn">
      {/* Section Header */}
      <div className="space-y-3 mb-12 text-center sm:text-left">
        <Skeleton variant="pill" className="w-36 h-5 mx-auto sm:mx-0" />
        <Skeleton variant="text" className="w-56 h-10 mx-auto sm:mx-0" />
      </div>

      {/* Timeline Rows */}
      <div className="space-y-12 relative">
        {[1, 2].map((idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch"
          >
            {/* Brand Showcase Block */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between h-full space-y-6">
              <div className="flex items-center justify-between">
                <Skeleton variant="text" className="w-12 h-8" />
                <Skeleton variant="pill" className="w-28 h-6" />
              </div>
              <div className="py-6 flex flex-col items-center">
                <Skeleton variant="rect" className="w-full max-w-xs h-20 rounded-2xl" />
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <Skeleton variant="text" className="w-24 h-3" />
                <Skeleton variant="text" className="w-32 h-3" />
              </div>
            </div>

            {/* Experience Detail Block */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1.5">
                  <Skeleton variant="text" className="w-48 h-6" />
                  <Skeleton variant="text" className="w-32 h-4" />
                </div>
                <Skeleton variant="pill" className="w-36 h-6" />
              </div>

              {/* OpenGraph Preview Container Skeleton */}
              <div className="w-full rounded-2xl p-4 bg-white/[0.02] border border-white/5 space-y-3">
                <Skeleton variant="rect" className="w-full aspect-[16/9] rounded-xl" />
                <Skeleton variant="text" className="w-1/2 h-4" />
                <Skeleton variant="text" className="w-full h-3" />
              </div>

              {/* Bullet Points */}
              <div className="space-y-2 pt-2">
                <Skeleton variant="text" className="w-full h-3" />
                <Skeleton variant="text" className="w-5/6 h-3" />
                <Skeleton variant="text" className="w-4/5 h-3" />
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                <Skeleton variant="pill" className="w-16 h-5" />
                <Skeleton variant="pill" className="w-20 h-5" />
                <Skeleton variant="pill" className="w-14 h-5" />
                <Skeleton variant="pill" className="w-18 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Pixel-Accurate Contact Section Skeleton
 * Responsive: Desktop 2-column (Span 7 + Span 5), Mobile stacked
 */
export const ContactSkeleton = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form (Span 7) */}
        <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="space-y-2">
            <Skeleton variant="pill" className="w-28 h-5" />
            <Skeleton variant="text" className="w-40 h-9" />
            <Skeleton variant="text" className="w-full max-w-md h-4" />
          </div>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <Skeleton variant="text" className="w-20 h-3" />
              <Skeleton variant="rect" className="w-full h-12 rounded-xl" />
            </div>

            <div className="space-y-1.5">
              <Skeleton variant="text" className="w-20 h-3" />
              <Skeleton variant="rect" className="w-full h-12 rounded-xl" />
            </div>

            <div className="space-y-1.5">
              <Skeleton variant="text" className="w-24 h-3" />
              <Skeleton variant="rect" className="w-full h-32 rounded-xl" />
            </div>

            <Skeleton variant="rect" className="w-40 h-12 rounded-xl" />
          </div>
        </div>

        {/* Right Column: Info Channels (Span 5) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="glass-card p-6 sm:p-7 rounded-3xl border border-white/10 space-y-4">
            <Skeleton variant="pill" className="w-32 h-6" />
            <Skeleton variant="text" className="w-full h-6" />
            <Skeleton variant="text" className="w-4/5 h-4" />
          </div>

          <div className="glass-card p-6 sm:p-7 rounded-3xl border border-white/10 space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-3">
                  <Skeleton variant="circle" className="w-8 h-8" />
                  <div className="space-y-1">
                    <Skeleton variant="text" className="w-20 h-3" />
                    <Skeleton variant="text" className="w-32 h-3" />
                  </div>
                </div>
                <Skeleton variant="circle" className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * GitHub Heatmap Skeleton Loader
 */
export const HeatmapSkeleton = () => {
  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[#0d1117] border border-[#30363d] shadow-xl my-3 space-y-3">
      <div className="flex items-center justify-between">
        <Skeleton variant="text" className="w-48 h-4 bg-white/10" />
        <Skeleton variant="pill" className="w-14 h-5 bg-white/10" />
      </div>

      <div className="w-full overflow-hidden flex gap-1 pt-2">
        {Array(28)
          .fill(0)
          .map((_, col) => (
            <div key={col} className="flex flex-col gap-1">
              {Array(7)
                .fill(0)
                .map((_, row) => (
                  <Skeleton
                    key={row}
                    variant="rect"
                    className="w-2.5 h-2.5 rounded-[1.5px] bg-white/[0.04]"
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skeleton;
