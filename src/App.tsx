import { useState, useEffect, useMemo } from "react";
import { ARTICLES, Article } from "./data/articles";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ArticleCard } from "./components/ArticleCard";
import { ArticleDetail } from "./components/ArticleDetail";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { SubscribeModal } from "./components/SubscribeModal";
import { Sparkles, Filter } from "lucide-react";

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
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

  // Sync with URL hash for navigation & shareable URLs
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#article-")) {
        const articleId = hash.replace("#article-", "");
        const found = ARTICLES.find((a) => a.id === articleId || a.slug === articleId);
        if (found) {
          setSelectedArticle(found);
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
      } else if (hash === "" || hash === "#home") {
        setSelectedArticle(null);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    window.location.hash = `article-${article.id}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToArticles = () => {
    setSelectedArticle(null);
    window.location.hash = "articles";
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
    window.location.hash = "home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateSection = (sectionId: string) => {
    if (selectedArticle) {
      setSelectedArticle(null);
      window.location.hash = sectionId;
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
      {/* Navigation Header */}
      <Navbar
        currentView={selectedArticle ? "article" : "home"}
        onNavigateHome={handleNavigateHome}
        onNavigateSection={handleNavigateSection}
        onDiscoveryClick={() => setIsDiscoveryOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {selectedArticle ? (
          /* Detailed Long-Form Article Page */
          <ArticleDetail
            article={selectedArticle}
            onBackToArticles={handleBackToArticles}
            onSelectArticle={handleSelectArticle}
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
            >
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 border-b border-stone-200/90 pb-6">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-900 mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>The Olfactory Gazette • 10 Curated Folios</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-stone-900">
                    Fragrance Essays & Sourcing Chronicles
                  </h2>
                </div>
                <p className="text-sm text-stone-500 max-w-md font-sans">
                  Ten investigative long-form essays complete with archival field photographs, evaporation physics, rare botanical harvests, and distillation kinetics.
                </p>
              </div>

              {/* Functional Category Filter (Segmented control) */}
              <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-400 mr-2 shrink-0">
                  <Filter className="w-3.5 h-3.5" />
                  <span>Topic:</span>
                </div>
                <div className="flex items-center gap-1.5 p-1 bg-stone-200/60 rounded-lg shrink-0">
                  {categories.map((cat) => (
                    <button
                      key={cat}
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
      />

      {/* Discovery Set / Scent Consultation Dialog */}
      <SubscribeModal
        isOpen={isDiscoveryOpen}
        onClose={() => setIsDiscoveryOpen(false)}
      />
    </div>
  );
}
