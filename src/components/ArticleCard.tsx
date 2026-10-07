import React from "react";
import { ArrowRight, Clock } from "lucide-react";
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
  return (
    <article
      onClick={() => onReadMore(article)}
      className="group flex flex-col bg-white rounded-xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onReadMore(article);
        }
      }}
      aria-label={`Read article: ${article.title}`}
    >
      {/* High-quality relevant perfume image */}
      <div className="relative aspect-16/10 sm:aspect-16/9 w-full overflow-hidden bg-stone-100">
        <img
          src={article.image}
          alt={article.imageAlt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading={index < 2 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        {/* Unboxed clean metadata (Zero-Pill discipline) */}
        <div className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-3 tracking-wide">
          <span className="text-amber-900 font-semibold">{article.category}</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span>{article.date}</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-stone-400" />
            {article.readTime}
          </span>
        </div>

        {/* Article Title */}
        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900 leading-snug tracking-tight mb-3 group-hover:text-amber-950 transition-colors line-clamp-2">
          {article.title}
        </h3>

        {/* Short description / excerpt */}
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6 line-clamp-3 flex-1 font-sans">
          {article.excerpt}
        </p>

        {/* Card Footer with Author and Read More button */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              referrerPolicy="no-referrer"
              className="w-7 h-7 rounded-full object-cover ring-1 ring-stone-200"
            />
            <span className="text-xs font-medium text-stone-700">
              {article.author.name}
            </span>
          </div>

          {/* Read More button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onReadMore(article);
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-stone-900 hover:text-amber-900 transition-colors cursor-pointer group/btn"
          >
            <span>Read More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
};
