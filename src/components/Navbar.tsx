import React, { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  currentView: "home" | "article";
  onNavigateHome: () => void;
  onNavigateSection: (sectionId: string) => void;
  onDiscoveryClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigateHome,
  onNavigateSection,
  onDiscoveryClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (sectionId === "home") {
      onNavigateHome();
    } else {
      onNavigateSection(sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark in serif display face */}
        <button
          onClick={onNavigateHome}
          className="text-left group cursor-pointer focus:outline-none"
          aria-label="Maison Cyprès Haute Parfumerie Home"
        >
          <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-medium text-stone-900 group-hover:text-stone-700 transition-colors uppercase">
            Maison Cyprès
          </span>
        </button>

        {/* Zone 2: 4 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-stone-600">
          <button
            onClick={() => handleNavClick("home")}
            className="hover:text-stone-950 transition-colors py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("articles")}
            className="hover:text-stone-950 transition-colors py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded"
          >
            Articles
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className="hover:text-stone-950 transition-colors py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="hover:text-stone-950 transition-colors py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary action button & Mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onDiscoveryClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-50 bg-stone-900 rounded-md hover:bg-stone-800 transition-all cursor-pointer shadow-sm hover:shadow active:scale-98"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Discovery Set</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-stone-900 focus:outline-none cursor-pointer rounded-md hover:bg-stone-200/50"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-[#FAF8F5] px-6 py-5 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-sm uppercase tracking-wider font-medium text-stone-700">
            <button
              onClick={() => handleNavClick("home")}
              className="text-left py-2 hover:text-stone-950 border-b border-stone-200 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("articles")}
              className="text-left py-2 hover:text-stone-950 border-b border-stone-200 transition-colors"
            >
              Articles
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="text-left py-2 hover:text-stone-950 border-b border-stone-200 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-left py-2 hover:text-stone-950 transition-colors"
            >
              Contact
            </button>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDiscoveryClick();
              }}
              className="w-full text-center py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-stone-50 bg-stone-900 rounded-md hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Request Fragrance Discovery Set
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
