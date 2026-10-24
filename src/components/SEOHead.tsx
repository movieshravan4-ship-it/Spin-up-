import { useEffect } from "react";
import { Article } from "../data/articles";
import { HOMEPAGE_SEO, SITE_DOMAIN } from "../data/seoData";

interface SEOHeadProps {
  article: Article | null;
  isNotFound?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ article, isNotFound = false }) => {
  useEffect(() => {
    // 1. Resolve self-referencing canonical URL
    const origin = typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : SITE_DOMAIN;
    const pathname = typeof window !== "undefined" && window.location.pathname
      ? window.location.pathname
      : "/";

    // Self-referencing canonical tag href for the current page
    let canonical = `${origin}${pathname}`;
    if (article) {
      canonical = `${origin}/articles/${article.slug}`;
    } else if (!isNotFound && pathname === "/") {
      canonical = `${origin}/`;
    }

    // Helper to update or create meta tags
    const setMetaTag = (nameAttr: "name" | "property", key: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(nameAttr, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to update or create canonical link
    const setCanonical = (href: string) => {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // 2. Handle 404 state
    if (isNotFound) {
      document.title = "Page Not Found (404) — Maison Cyprès";
      setMetaTag("name", "robots", "noindex, follow");
      setMetaTag("name", "description", "The requested fragrance page or archive could not be found.");
      setCanonical(canonical);
      return;
    }

    // 3. Regular Page SEO Resolution
    const title = article ? article.seoTitle : HOMEPAGE_SEO.title;
    const description = article ? article.metaDescription : HOMEPAGE_SEO.metaDescription;
    const ogImage = article
      ? `${origin}${article.image}`
      : `${origin}${HOMEPAGE_SEO.ogImage}`;
    const ogType = article ? "article" : "website";

    // Update document title
    document.title = title;

    // Reset standard robots directive for indexable pages
    setMetaTag("name", "robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

    // Set self-referencing canonical tag
    setCanonical(canonical);

    // Set meta description & keywords
    const keywords = article
      ? [article.primaryKeyword, ...article.secondaryKeywords].join(", ")
      : [HOMEPAGE_SEO.primaryKeyword, ...HOMEPAGE_SEO.secondaryKeywords].join(", ");

    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);

    // OpenGraph Tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonical);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", "Maison Cyprès");

    // Twitter Card Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

    // 4. Generate JSON-LD Structured Data
    const existingScript = document.getElementById("seo-json-ld");
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = "seo-json-ld";
    script.type = "application/ld+json";

    if (article) {
      // Article Structured Data + BreadcrumbList + FAQPage
      const articleStructuredData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Article",
            "@id": `${canonical}#article`,
            "isPartOf": {
              "@type": "WebSite",
              "@id": `${origin}/#website`,
              "name": "Maison Cyprès",
              "url": origin
            },
            "headline": article.title,
            "description": article.metaDescription,
            "image": ogImage,
            "datePublished": "2026-08-01T08:00:00+02:00",
            "dateModified": "2026-10-24T09:00:00+02:00",
            "author": {
              "@type": "Person",
              "name": article.author.name,
              "jobTitle": article.author.role
            },
            "publisher": {
              "@type": "Organization",
              "name": "Maison Cyprès",
              "logo": {
                "@type": "ImageObject",
                "url": `${origin}/images/perfume_flacon_travertine_1791344422337.webp`
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonical
            },
            "keywords": [article.primaryKeyword, ...article.secondaryKeywords].join(", ")
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${canonical}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": origin
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Articles",
                "item": `${origin}/#articles`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": article.title,
                "item": canonical
              }
            ]
          },
          {
            "@type": "FAQPage",
            "@id": `${canonical}#faq`,
            "mainEntity": article.aeoQuestions.map((q) => ({
              "@type": "Question",
              "name": q.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": q.shortAnswer
              }
            }))
          }
        ]
      };
      script.text = JSON.stringify(articleStructuredData);
    } else {
      // Homepage Structured Data: Organization + WebSite + FAQPage
      const homepageStructuredData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${origin}/#organization`,
            "name": "Maison Cyprès",
            "url": origin,
            "logo": `${origin}/images/perfume_flacon_travertine_1791344422337.webp`,
            "foundingDate": "2026",
            "founders": [
              {
                "@type": "Person",
                "name": "Hélène de Montmirail"
              }
            ],
            "description": HOMEPAGE_SEO.metaDescription,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "12 Place aux Aires",
              "addressLocality": "Grasse",
              "postalCode": "06130",
              "addressCountry": "FR"
            }
          },
          {
            "@type": "WebSite",
            "@id": `${origin}/#website`,
            "url": origin,
            "name": "Maison Cyprès — Haute Parfumerie",
            "description": HOMEPAGE_SEO.metaDescription,
            "publisher": {
              "@id": `${origin}/#organization`
            }
          },
          {
            "@type": "FAQPage",
            "@id": `${origin}/#faq`,
            "mainEntity": HOMEPAGE_SEO.aeoQuestions.map((q) => ({
              "@type": "Question",
              "name": q.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": q.shortAnswer
              }
            }))
          }
        ]
      };
      script.text = JSON.stringify(homepageStructuredData);
    }

    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("seo-json-ld");
      if (s) s.remove();
    };
  }, [article, isNotFound]);

  return null;
};
