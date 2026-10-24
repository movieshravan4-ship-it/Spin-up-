import React from "react";
import { ArrowRight, Clock, Image as ImageIcon } from "lucide-react";
import { Article } from "../data/articles";

interface ArticleCardProps {
  article: Article;
  onReadMore: (article: Article) => void;
  index?: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onReadMore,
  index = 0,
}) => {
  const photoCount = 1 + (article.gallery ? article.gallery.length : 0);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onReadMore(article);
  };

  return (
    <article
      className="group flex flex-col bg-white rounded-xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      aria-labelledby={`article-title-${article.id}`}
    >
      {/* High-quality relevant perfume image */}
      <a
        href={`/articles/${article.slug}`}
        onClick={handleClick}
        className="block relative aspect-16/10 sm:aspect-16/9 w-full overflow-hidden bg-stone-100 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={article.image}
          alt={article.imageAlt}
          width={640}
          height={360}
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.dataset.fallbackWebp) {
              target.dataset.fallbackWebp = "1";
              if (target.src.endsWith(".webp")) {
                target.src = target.src.replace(/\.webp$/, ".jpg");
                return;
              }
            }
            if (!target.dataset.fallbackAsset) {
              target.dataset.fallbackAsset = "1";
              if (target.src.includes("/images/")) {
                target.src = target.src.replace("/images/", "/assets/images/");
                return;
              }
            }
          }}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading={index < 2 ? "eager" : "lazy"}
          decoding={index < 2 ? "sync" : "async"}
          {...(index < 2 ? { fetchPriority: "high" } : {})}
        />
        <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-300" />

        {/* Archival Plates Count */}
        <div className="absolute bottom-3 right-3 px-2 py-1 bg-stone-900/60 backdrop-blur-xs text-stone-200 text-[11px] font-medium rounded-md flex items-center gap-1">
          <ImageIcon className="w-3 h-3 text-stone-300" />
          <span>{photoCount} Plates</span>
        </div>
      </a>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        {/* Unboxed clean metadata (Zero-Pill discipline) */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-500 mb-3 tracking-wide">
          <span className="text-amber-900 font-semibold">{article.category}</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <time dateTime="2026-10-04">{article.date}</time>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-stone-400" />
            <span>{article.readTime}</span>
          </span>
        </div>

        {/* Article Title */}
        <h3
          id={`article-title-${article.id}`}
          className="font-serif text-xl sm:text-2xl font-semibold text-stone-900 leading-snug tracking-tight mb-3 group-hover:text-amber-950 transition-colors line-clamp-2"
        >
          <a
            href={`/articles/${article.slug}`}
            onClick={handleClick}
            className="hover:underline focus:outline-none focus:ring-1 focus:ring-stone-400 rounded"
          >
            {article.title}
          </a>
        </h3>

        {/* Short description / excerpt */}
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6 line-clamp-3 flex-1 font-sans">
          {article.excerpt}
        </p>

        {/* Card Footer with Author and Descriptive Anchor Link */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div
              aria-label={`Author: ${article.author.name}`}
              className="w-7 h-7 rounded-full bg-stone-800 text-stone-100 flex items-center justify-center font-serif text-[11px] font-semibold tracking-wider shrink-0"
            >
              {article.author.initials}
            </div>
            <span className="text-xs font-medium text-stone-700 truncate">
              {article.author.name}
            </span>
          </div>

          {/* Descriptive Anchor Text instead of generic Read More */}
          <a
            href={`/articles/${article.slug}`}
            onClick={handleClick}
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-amber-900 hover:text-amber-950 transition-colors cursor-pointer group/btn shrink-0"
            aria-label={`${article.actionText}: ${article.title}`}
          >
            <span className="underline-offset-4 hover:underline">
              {article.actionText}
            </span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
};
