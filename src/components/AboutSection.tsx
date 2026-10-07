import React from "react";
import { Sparkles, Droplets, Clock, Globe } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-stone-200 bg-[#F5F2EB]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            About Maison Cyprès
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-stone-900 mt-2 tracking-tight">
            An independent French haute parfumerie rooted in Grasse.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
            Maison Cyprès was established with a singular devotion: to restore fine fragrance to its botanical origins. We formulate unhurried extraits de parfum using raw floral absolutes, ancient cold enfleurage, and single-origin resin distillates.
          </p>
        </div>

        {/* 3 Pillars of the Maison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 p-8 rounded-xl border border-stone-200/80 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-amber-900 mb-5">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">
              High Concentration Extraits
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Every creation is compounded at an extraordinary 30% concentration of natural botanical oils, ensuring intimate, evolving sillage that breathes on the skin.
            </p>
          </div>

          <div className="bg-white/80 p-8 rounded-xl border border-stone-200/80 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-amber-900 mb-5">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">
              Oak Cask Maceration
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Before bottling, our fragrance concentrates rest for ninety days in French sessile oak casks in our Grasse cellars, harmonizing volatile esters into velvet depth.
            </p>
          </div>

          <div className="bg-white/80 p-8 rounded-xl border border-stone-200/80 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-amber-900 mb-5">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">
              Direct Terroir Sourcing
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              We partner exclusively with multi-generational family growers: Centifolia roses from Grasse, wild vetiver from Les Cayes, and Florentine iris roots aged three years.
            </p>
          </div>
        </div>

        {/* Maison Heritage Card */}
        <div className="p-8 sm:p-10 bg-white rounded-2xl border border-stone-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-900">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Atelier Bottle</span>
            </div>
            <h4 className="font-serif text-2xl font-semibold text-stone-900">
              Hand-finished flacons with brushed solid brass stoppers
            </h4>
            <p className="text-sm text-stone-600 max-w-xl">
              Engineered with refillable French crystal glass, designed to be kept for generations as permanent vanity sculptures.
            </p>
          </div>
          <div className="shrink-0">
            <div className="text-center md:text-right">
              <span className="text-xs uppercase tracking-widest text-stone-400 block font-medium">
                ATELIER GRASSE
              </span>
              <span className="text-sm font-medium text-stone-800">
                12 Place aux Aires, 06130 Grasse
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
