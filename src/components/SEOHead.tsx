import { useEffect } from "react";
import { Article } from "../data/articles";
import { HOMEPAGE_SEO, SITE_DOMAIN } from "../data/seoData";

interface SEOHeadProps {
  article: Article | null;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ article }) => {
  useEffect(() => {
    // 1. Determine Title & Meta Description
    const title = article ? article.seoTitle : HOMEPAGE_SEO.title;
    const description = article ? article.metaDescription : HOMEPAGE_SEO.metaDescription;
    const canonical = article ? article.canonicalUrl : HOMEPAGE_SEO.canonicalUrl;
    const ogImage = article
      ? window.location.origin + article.image
      : window.location.origin + HOMEPAGE_SEO.ogImage;
    const ogType = article ? "article" : "website";

    // 2. Update Document Title
    document.title = title;

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

    // 3. Set Standard & Social Meta Tags
    const keywords = article
      ? [article.primaryKeyword, ...article.secondaryKeywords].join(", ")
      : [HOMEPAGE_SEO.primaryKeyword, ...HOMEPAGE_SEO.secondaryKeywords].join(", ");

    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);
    setCanonical(canonical);

    // OpenGraph
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonical);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", "Maison Cyprès");

    // Twitter Card
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
            "@id": `${article.canonicalUrl}#article`,
            "isPartOf": {
              "@type": "WebSite",
              "@id": `${SITE_DOMAIN}/#website`,
              "name": "Maison Cyprès",
              "url": SITE_DOMAIN
            },
            "headline": article.title,
            "description": article.metaDescription,
            "image": ogImage,
            "datePublished": "2026-08-01T08:00:00+02:00",
            "dateModified": "2026-10-14T09:00:00+02:00",
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
                "url": `${SITE_DOMAIN}/src/assets/images/perfume_flacon_travertine_1791344422337.webp`
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": article.canonicalUrl
            },
            "keywords": [article.primaryKeyword, ...article.secondaryKeywords].join(", ")
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${article.canonicalUrl}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": SITE_DOMAIN
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Articles",
                "item": `${SITE_DOMAIN}/#articles`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": article.title,
                "item": article.canonicalUrl
              }
            ]
          },
          {
            "@type": "FAQPage",
            "@id": `${article.canonicalUrl}#faq`,
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
            "@id": `${SITE_DOMAIN}/#organization`,
            "name": "Maison Cyprès",
            "url": SITE_DOMAIN,
            "logo": `${SITE_DOMAIN}/src/assets/images/perfume_flacon_travertine_1791344422337.webp`,
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
            "@id": `${SITE_DOMAIN}/#website`,
            "url": SITE_DOMAIN,
            "name": "Maison Cyprès — Haute Parfumerie",
            "description": HOMEPAGE_SEO.metaDescription,
            "publisher": {
              "@id": `${SITE_DOMAIN}/#organization`
            }
          },
          {
            "@type": "FAQPage",
            "@id": `${SITE_DOMAIN}/#faq`,
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
  }, [article]);

  return null;
};
