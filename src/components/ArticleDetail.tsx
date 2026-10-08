import React, { useEffect, useState } from "react";
import { ArrowLeft, Clock, Share2, Check, Bookmark, Sparkles, Camera, ZoomIn } from "lucide-react";
import { Article, ARTICLES, ArticleImage } from "../data/articles";
import { ArticleCard } from "./ArticleCard";

interface ArticleDetailProps {
  article: Article;
  onBackToArticles: () => void;
  onSelectArticle: (article: Article) => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
  article,
  onBackToArticles,
  onSelectArticle,
}) => {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeModalImage, setActiveModalImage] = useState<ArticleImage | null>(null);

  // Scroll to top when article changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [article.id]);

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  // 3 Related articles
  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      {/* Reading Progress Indicator */}
      <div
        className="fixed top-18 left-0 h-1 bg-stone-900 z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Top Navigation Bar with Back Button */}
      <div className="border-b border-stone-200/80 bg-[#FAF8F5]/90 backdrop-blur sticky top-18 z-30 py-3.5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <button
            onClick={onBackToArticles}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 hover:text-stone-950 transition-colors cursor-pointer py-1 px-2.5 -ml-2.5 rounded-md hover:bg-stone-200/50"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All 10 Articles</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-2 rounded-md transition-colors cursor-pointer ${
                bookmarked
                  ? "text-amber-800 bg-amber-50"
                  : "text-stone-500 hover:text-stone-800 hover:bg-stone-200/50"
              }`}
              title={bookmarked ? "Saved to reading list" : "Save to reading list"}
              aria-label="Bookmark article"
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-current" : ""}`} />
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors cursor-pointer"
              title="Copy article link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14">
        {/* Category & Read Time Kicker */}
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-stone-500 mb-4">
          <span className="text-amber-900 font-semibold">{article.category}</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-stone-400" />
            {article.readTime}
          </span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span>Folio No. 0{article.id}</span>
        </div>

        {/* Article Title */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-stone-900 leading-[1.18] tracking-tight mb-4">
          {article.title}
        </h1>

        {/* Subtitle */}
        {article.subtitle && (
          <p className="text-lg sm:text-xl text-stone-700 font-serif italic mb-6 leading-relaxed">
            {article.subtitle}
          </p>
        )}

        {/* Article Excerpt */}
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans mb-8 max-w-3xl border-l-2 border-stone-300 pl-4">
          {article.excerpt}
        </p>

        {/* Author and Publication Date Info */}
        <div className="flex items-center justify-between py-5 border-y border-stone-200/90 mb-10">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-stone-800 text-stone-100 flex items-center justify-center font-serif text-sm font-semibold tracking-wider">
              {article.author.initials}
            </div>
            <div>
              <div className="text-sm font-semibold text-stone-900">
                {article.author.name}
              </div>
              <div className="text-xs text-stone-500">
                {article.author.role}
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs uppercase tracking-wider text-stone-400 font-medium">
              Published
            </div>
            <div className="text-xs sm:text-sm font-medium text-stone-700">
              {article.date}
            </div>
          </div>
        </div>

        {/* 1. Large Featured Main Image */}
        <figure className="mb-12">
          <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100 aspect-16/10 sm:aspect-16/9 w-full">
            <img
              src={article.image}
              alt={article.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <button
              onClick={() =>
                setActiveModalImage({
                  url: article.image,
                  alt: article.imageAlt,
                  caption: article.imageCaption,
                })
              }
              className="absolute bottom-3 right-3 p-2 bg-stone-900/70 hover:bg-stone-900 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              title="Expand photograph"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
          <figcaption className="text-xs sm:text-sm text-stone-500 italic mt-3 px-1 text-center sm:text-left">
            {article.imageCaption}
          </figcaption>
        </figure>

        {/* Olfactory Note Architecture Box if available */}
        {article.notesProfile && (
          <div className="my-10 p-6 sm:p-7 bg-[#F6F2EA] rounded-xl border border-stone-200/80 shadow-xs">
            <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-widest text-amber-900">
              <Sparkles className="w-4 h-4" />
              <span>Olfactory Pyramid & Botanical Accords</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-sm">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-stone-500 block">
                  Top Notes (Tête)
                </span>
                <p className="font-serif text-stone-900 font-medium">
                  {article.notesProfile.top.join(" · ")}
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-stone-500 block">
                  Heart Notes (Cœur)
                </span>
                <p className="font-serif text-stone-900 font-medium">
                  {article.notesProfile.heart.join(" · ")}
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-stone-500 block">
                  Base Notes (Fond)
                </span>
                <p className="font-serif text-stone-900 font-medium">
                  {article.notesProfile.base.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Lead Quote */}
        {article.leadQuote && (
          <blockquote className="my-10 p-6 sm:p-8 bg-stone-100/60 rounded-xl border-l-4 border-stone-900">
            <p className="font-serif italic text-lg sm:text-xl text-stone-800 leading-relaxed">
              "{article.leadQuote}"
            </p>
          </blockquote>
        )}

        {/* Formatted In-Depth Article Content with Sections and Inline Images */}
        <div className="prose-container max-w-3xl mx-auto space-y-12">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-5">
              {/* Subheading */}
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight pt-2">
                {section.heading}
              </h2>

              {/* Paragraphs */}
              {section.paragraphs.map((para, pIdx) => (
                <p
                  key={pIdx}
                  className={`text-stone-700 text-base sm:text-lg leading-[1.85] font-sans ${
                    idx === 0 && pIdx === 0 ? "drop-cap" : ""
                  }`}
                >
                  {para}
                </p>
              ))}

              {/* Section Callout */}
              {section.callout && (
                <div className="my-6 p-5 sm:p-6 bg-white rounded-lg border border-stone-200 shadow-sm flex items-start gap-4">
                  <div className="p-2 bg-stone-100 rounded text-amber-900 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <p className="text-sm sm:text-base font-serif italic text-stone-800 leading-relaxed">
                    {section.callout}
                  </p>
                </div>
              )}

              {/* Section Inline Image if present */}
              {section.inlineImage && (
                <figure className="my-8">
                  <div className="rounded-xl overflow-hidden border border-stone-200 shadow-sm aspect-16/9 bg-stone-100">
                    <img
                      src={section.inlineImage.url}
                      alt={section.inlineImage.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="text-xs text-stone-500 italic mt-2.5">
                    {section.inlineImage.caption}
                  </figcaption>
                </figure>
              )}
            </section>
          ))}
        </div>

        {/* 2 & 3. Dedicated Photographic Plates Section (Multiple Pictures Per Article) */}
        {article.gallery && article.gallery.length > 0 && (
          <div className="mt-16 pt-10 border-t border-stone-200">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-900 mb-6">
              <Camera className="w-4 h-4" />
              <span>Photographic Plates & Field Documentation</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {article.gallery.map((plate, pIdx) => (
                <figure
                  key={pIdx}
                  className="bg-white p-3 rounded-xl border border-stone-200/90 shadow-sm flex flex-col group cursor-pointer"
                  onClick={() => setActiveModalImage(plate)}
                >
                  <div className="relative aspect-16/10 rounded-lg overflow-hidden bg-stone-100 mb-3">
                    <img
                      src={plate.url}
                      alt={plate.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1 bg-white/90 text-stone-900 text-xs font-medium rounded-full shadow-sm flex items-center gap-1">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>
                  <figcaption className="text-xs text-stone-600 leading-relaxed font-sans px-1">
                    {plate.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* End of article author bio box */}
        <div className="mt-14 pt-8 border-t border-stone-200">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200/90 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-stone-800 text-stone-100 flex items-center justify-center font-serif text-xl font-semibold tracking-wider shrink-0 ring-2 ring-stone-200">
              {article.author.initials}
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-900 font-semibold mb-1">
                Written by
              </div>
              <h4 className="font-serif text-lg font-semibold text-stone-900 mb-1">
                {article.author.name}
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed mb-3">
                {article.author.role}. Investigating olfactory ethnobotany, extraction kinetics, and raw natural essences across Grasse, Florence, and the Mediterranean basin.
              </p>
              <div className="text-xs text-stone-400">
                Maison Cyprès Haute Parfumerie, Grasse Atelier
              </div>
            </div>
          </div>
        </div>

        {/* Back to Articles Button (middle CTA) */}
        <div className="mt-10 text-center">
          <button
            onClick={onBackToArticles}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-stone-900 hover:text-white bg-white hover:bg-stone-900 border border-stone-300 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All 10 Fragrance Articles</span>
          </button>
        </div>

        {/* Related Article Suggestions at the bottom */}
        <div className="mt-20 pt-12 border-t border-stone-200">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Olfactory Archives
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                Related Fragrance Stories
              </h3>
            </div>
            <button
              onClick={onBackToArticles}
              className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-900 transition-colors"
            >
              <span>View all 10</span>
              <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((relArt) => (
              <ArticleCard
                key={relArt.id}
                article={relArt}
                onReadMore={() => onSelectArticle(relArt)}
              />
            ))}
          </div>
        </div>
      </article>

      {/* Image Zoom Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 sm:aspect-16/9 w-full rounded-xl overflow-hidden bg-black">
              <img
                src={activeModalImage.url}
                alt={activeModalImage.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 flex items-center justify-between text-stone-300">
              <p className="text-xs sm:text-sm font-sans italic pr-4">
                {activeModalImage.caption}
              </p>
              <button
                onClick={() => setActiveModalImage(null)}
                className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-100 text-xs uppercase tracking-wider font-semibold rounded-md transition-colors cursor-pointer shrink-0"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
