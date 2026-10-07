import React from "react";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  onExploreClick: () => void;
  onAboutClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onAboutClick,
}) => {
  return (
    <section className="relative pt-14 pb-16 sm:pt-24 sm:pb-28 border-b border-stone-200/80 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5] to-[#F5F1E9]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Subtitle / Heritage Location Marker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-stone-500 py-1 px-3.5 bg-stone-200/60 rounded-full">
            <span>HAUTE PARFUMERIE • GRASSE & PARIS • EST. 2026</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-stone-900 leading-[1.12]">
            The poetry of botany, distilled into time.
          </h1>

          {/* Editorial Subtitle */}
          <p className="text-base sm:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-sans">
            Welcome to the journal of Maison Cyprès. Four investigative essays exploring the dawn harvest of Grasse roses, wild highland vetiver, ancient enfleurage, and scent architecture.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer group"
            >
              <span>Read the 4 Fragrance Articles</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={onAboutClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-stone-700 hover:text-stone-950 bg-white hover:bg-stone-100 border border-stone-200 rounded-lg transition-all cursor-pointer"
            >
              <span>The Maison’s Philosophy</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
