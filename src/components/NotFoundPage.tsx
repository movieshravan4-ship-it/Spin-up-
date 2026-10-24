import React from "react";
import { Home, Compass, ArrowRight, Sparkles, BookOpen, Clock } from "lucide-react";
import { Article, ARTICLES } from "../data/articles";

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateSection: (sectionId: string) => void;
  onSelectArticle: (article: Article) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigateHome,
  onNavigateSection,
  onSelectArticle,
}) => {
  // Suggest 3 popular folios from the archive
  const suggestedArticles = ARTICLES.slice(0, 3);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Editorial Pill Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-900 py-1.5 px-4 bg-amber-100/70 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Error 404 • Page Introuvable</span>
        </div>

        {/* Main 404 Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 tracking-tight leading-tight mb-4">
          The Essence You Seek Has Dissipated
        </h1>

        {/* Friendly explanation */}
        <p className="text-base sm:text-lg text-stone-600 max-w-xl mx-auto leading-relaxed mb-10 font-sans">
          The fragrance folio, page, or botanical archive you requested cannot be located. It may have moved, been renamed, or is currently undergoing cellar maturation.
        </p>

        {/* Friendly Links to Main Pages */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={() => onNavigateSection("articles")}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-stone-800 hover:text-stone-950 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg shadow-2xs transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Browse All 10 Folios</span>
          </button>

          <button
            onClick={() => onNavigateSection("about")}
            className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-900 bg-transparent hover:bg-stone-200/50 rounded-lg transition-all cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>About the Maison</span>
          </button>
        </div>

        {/* Curated Recommendations from the Archives */}
        <div className="border-t border-stone-200/90 pt-12 text-left">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-900 font-semibold">
                Curated Suggestions
              </span>
              <h2 className="font-serif text-2xl font-semibold text-stone-900 mt-1">
                Begin With Our Most Read Chronicles
              </h2>
            </div>
            <button
              onClick={() => onNavigateSection("articles")}
              className="text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-900 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>View all 10</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {suggestedArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group bg-white rounded-xl border border-stone-200 p-4 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 rounded-lg overflow-hidden bg-stone-100 mb-3">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      width={400}
                      height={250}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-medium text-stone-500 mb-1.5">
                    <span className="text-amber-900 font-semibold">{article.category}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-stone-900 group-hover:text-amber-950 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-900">
                  <span>Read Chronicle</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
