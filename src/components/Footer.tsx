import React, { useState } from "react";
import { ArrowUp, Check } from "lucide-react";

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateSection,
}) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      {/* Newsletter Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-stone-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
              La Gazette des Parfums
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-stone-100 font-normal">
              Private notices on rare harvests & flacon releases.
            </h3>
            <p className="text-sm text-stone-400 max-w-md">
              Receive private dispatches from our master perfumer on May rose extractions, seasonal cask macerations, and salon events.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="flex items-center gap-2 p-4 bg-stone-800/80 rounded-lg text-sm text-stone-200 border border-stone-700">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You have been added to the Maison Cyprès private client roll. Bienvenue.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 text-sm bg-stone-800/90 border border-stone-700 rounded-lg text-stone-100 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-stone-100 hover:bg-white rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  Join Circle
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Colophon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-stone-800/80">
          <div>
            <span className="font-serif text-xl tracking-[0.2em] font-medium text-white uppercase">
              MAISON CYPRÈS
            </span>
            <p className="text-xs text-stone-400 mt-1">
              Haute Parfumerie · Paris & Grasse · Extraits de Parfum d'Exception
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider text-stone-400 font-medium">
            <button
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigateSection("articles")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Articles
            </button>
            <button
              onClick={() => onNavigateSection("about")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigateSection("contact")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors cursor-pointer py-1.5 px-3 rounded bg-stone-800/50 hover:bg-stone-800"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 Maison Cyprès Haute Parfumerie. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-stone-400 transition-colors cursor-pointer">
              Boutique Salons
            </span>
            <span>·</span>
            <span className="hover:text-stone-400 transition-colors cursor-pointer">
              Ethical Sourcing Charter
            </span>
            <span>·</span>
            <span className="hover:text-stone-400 transition-colors cursor-pointer">
              Terms & Care
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
