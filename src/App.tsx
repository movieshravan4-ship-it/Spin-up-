import { useState, useEffect, useMemo, useCallback } from "react";
import { ARTICLES, Article } from "./data/articles";
import { HOMEPAGE_SEO, KEYWORD_MAPPING_REPORT } from "./data/seoData";
import { SEOHead } from "./components/SEOHead";
import { AEOSection } from "./components/AEOSection";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ArticleCard } from "./components/ArticleCard";
import { ArticleDetail } from "./components/ArticleDetail";
import { NotFoundPage } from "./components/NotFoundPage";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { SubscribeModal } from "./components/SubscribeModal";
import { Sparkles, Filter, X, Table } from "lucide-react";

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [isSeoReportOpen, setIsSeoReportOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    ARTICLES.forEach((a) => set.add(a.category));
    return ["All", ...Array.from(set)];
  }, []);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    if (selectedCategory === "All") return ARTICLES;
    return ARTICLES.filter((a) => a.category === selectedCategory);
  }, [selectedCategory]);

  // Route resolver: resolves current URL pathname or hash to state
  const resolveCurrentRoute = useCallback(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;

    // 1. Client-side 301 redirect handler for /old-home -> /
    if (path === "/old-home") {
      window.history.replaceState(null, "", "/");
      setSelectedArticle(null);
      setIsNotFound(false);
      return;
    }

    // 2. Check pathname: /articles/:slug
    if (path.startsWith("/articles/")) {
      const slug = path.replace("/articles/", "").replace(/\/$/, "");
      const found = ARTICLES.find(
        (a) => a.slug === slug || a.id === slug || a.legacySlugs?.includes(slug)
      );
      if (found) {
        setSelectedArticle(found);
        setIsNotFound(false);
        return;
      } else {
        // Unknown article slug -> 404
        setSelectedArticle(null);
        setIsNotFound(true);
        return;
      }
    }

    // 3. Check hash fallback: #article-:id or #article-:slug
    if (hash.startsWith("#article-")) {
      const identifier = hash.replace("#article-", "");
      const found = ARTICLES.find(
        (a) => a.id === identifier || a.slug === identifier || a.legacySlugs?.includes(identifier)
      );
      if (found) {
        setSelectedArticle(found);
        setIsNotFound(false);
        return;
      }
    }

    // 4. Exact root pathname: /
    if (path === "/" || path === "") {
      setSelectedArticle(null);
      setIsNotFound(false);
      return;
    }

    // 5. Any other unrecognized path -> 404
    setSelectedArticle(null);
    setIsNotFound(true);
  }, []);

  // Sync with browser navigation & history
  useEffect(() => {
    resolveCurrentRoute();

    const handlePopState = () => {
      resolveCurrentRoute();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, [resolveCurrentRoute]);

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    setIsNotFound(false);
    const newUrl = `/articles/${article.slug}`;
    if (window.location.pathname !== newUrl) {
      window.history.pushState(null, "", newUrl);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToArticles = () => {
    setSelectedArticle(null);
    setIsNotFound(false);
    if (window.location.pathname !== "/") {
      window.history.pushState(null, "", "/");
    }
    setTimeout(() => {
      const articlesSection = document.getElementById("articles");
      if (articlesSection) {
        articlesSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50);
  };

  const handleNavigateHome = () => {
    setSelectedArticle(null);
    setIsNotFound(false);
    if (window.location.pathname !== "/") {
      window.history.pushState(null, "", "/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateSection = (sectionId: string) => {
    if (selectedArticle || isNotFound) {
      setSelectedArticle(null);
      setIsNotFound(false);
      if (window.location.pathname !== "/") {
        window.history.pushState(null, "", "/");
      }
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 80);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 font-sans selection:bg-amber-100 selection:text-stone-900">
      {/* Dynamic SEO & Structured Data Head Manager */}
      <SEOHead article={selectedArticle} isNotFound={isNotFound} />

      {/* Navigation Header */}
      <Navbar
        currentView={isNotFound ? "404" : selectedArticle ? "article" : "home"}
        onNavigateHome={handleNavigateHome}
        onNavigateSection={handleNavigateSection}
        onDiscoveryClick={() => setIsDiscoveryOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {isNotFound ? (
          /* Custom Friendly 404 Page */
          <NotFoundPage
            onNavigateHome={handleNavigateHome}
            onNavigateSection={handleNavigateSection}
            onSelectArticle={handleSelectArticle}
          />
        ) : selectedArticle ? (
          /* Detailed Long-Form Article Page */
          <ArticleDetail
            article={selectedArticle}
            onBackToArticles={handleBackToArticles}
            onSelectArticle={handleSelectArticle}
            onNavigateHome={handleNavigateHome}
          />
        ) : (
          /* Homepage View */
          <>
            {/* Hero Section */}
            <HeroSection
              onExploreClick={() => handleNavigateSection("articles")}
              onAboutClick={() => handleNavigateSection("about")}
            />

            {/* Main Articles Section */}
            <section
              id="articles"
              className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20"
              aria-labelledby="articles-heading"
            >
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 border-b border-stone-200/90 pb-6">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-900 mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>The Olfactory Gazette • 10 Curated Folios</span>
                  </div>
                  <h2
                    id="articles-heading"
                    className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-stone-900"
                  >
                    Fragrance Essays & Sourcing Chronicles
                  </h2>
                </div>
                <p className="text-sm text-stone-600 max-w-md font-sans">
                  Ten investigative long-form essays complete with archival field photographs, evaporation physics, rare botanical harvests, and distillation kinetics.
                </p>
              </div>

              {/* Functional Category Filter (Segmented control) */}
              <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Filter articles by olfactory category">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-400 mr-2 shrink-0">
                  <Filter className="w-3.5 h-3.5" />
                  <span>Topic:</span>
                </div>
                <div className="flex items-center gap-1.5 p-1 bg-stone-200/60 rounded-lg shrink-0">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      role="tab"
                      aria-selected={selectedCategory === cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                        selectedCategory === cat
                          ? "bg-white text-stone-950 shadow-xs font-semibold"
                          : "text-stone-600 hover:text-stone-900"
                      }`}
                    >
                      {cat} {cat === "All" && `(${ARTICLES.length})`}
                    </button>
                  ))}
                </div>
              </div>

              {/* 10 Article Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {filteredArticles.map((article, index) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    index={index}
                    onReadMore={handleSelectArticle}
                  />
                ))}
              </div>

              {/* Homepage AEO: Answer Engine Optimization Section (2 Question-Based H2s with 40-80 Word Answers) */}
              <AEOSection
                title="Haute Parfumerie Standards & Sourcing Inquiries"
                subtitle="Direct answers addressing our 30% concentration extraits, French oak cask maceration, and ethical harvest covenants."
                questions={HOMEPAGE_SEO.aeoQuestions}
              />
            </section>

            {/* About the Maison Section */}
            <AboutSection />

            {/* Contact / Fragrance Concierge Section */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigateHome={handleNavigateHome}
        onNavigateSection={handleNavigateSection}
        onOpenSeoReport={() => setIsSeoReportOpen(true)}
      />

      {/* Discovery Set / Scent Consultation Dialog */}
      <SubscribeModal
        isOpen={isDiscoveryOpen}
        onClose={() => setIsDiscoveryOpen(false)}
      />

      {/* Live SEO & Keyword Mapping Audit Modal */}
      {isSeoReportOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsSeoReportOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="SEO Keyword Mapping Report"
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-[#FAF8F5]">
              <div className="flex items-center gap-2">
                <Table className="w-5 h-5 text-amber-900" />
                <h3 className="font-serif text-xl font-semibold text-stone-900">
                  Technical SEO & Keyword Mapping Audit
                </h3>
              </div>
              <button
                onClick={() => setIsSeoReportOpen(false)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200 transition-colors cursor-pointer"
                aria-label="Close SEO report modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <p className="text-xs text-stone-500 font-sans">
                Below is the comprehensive page-by-page keyword mapping and indexing architecture implemented for Maison Cyprès across all 11 indexable URLs.
              </p>

              <div className="overflow-x-auto border border-stone-200 rounded-xl">
                <table className="w-full text-left text-xs font-sans divide-y divide-stone-200">
                  <thead className="bg-stone-100/80 text-stone-700 font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Page Name</th>
                      <th className="p-3">Recommended URL</th>
                      <th className="p-3">Primary Keyword</th>
                      <th className="p-3">Secondary Keyword 1</th>
                      <th className="p-3">Secondary Keyword 2</th>
                      <th className="p-3">Search Intent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-150 text-stone-600">
                    {KEYWORD_MAPPING_REPORT.map((row, idx) => (
                      <tr key={idx} className="hover:bg-amber-50/50 transition-colors">
                        <td className="p-3 font-medium text-stone-900">{row.pageName}</td>
                        <td className="p-3 font-mono text-[11px] text-amber-900">{row.recommendedUrl}</td>
                        <td className="p-3 font-medium text-stone-800">{row.primaryKeyword}</td>
                        <td className="p-3">{row.secondaryKeyword1}</td>
                        <td className="p-3">{row.secondaryKeyword2}</td>
                        <td className="p-3">{row.searchIntent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 border-t border-stone-200 bg-[#FAF8F5] flex justify-end">
              <button
                onClick={() => setIsSeoReportOpen(false)}
                className="px-4 py-2 bg-stone-900 text-white text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Dismiss Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
