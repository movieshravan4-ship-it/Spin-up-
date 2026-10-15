export interface KeywordMapItem {
  pageName: string;
  currentUrl: string;
  recommendedUrl: string;
  primaryKeyword: string;
  secondaryKeyword1: string;
  secondaryKeyword2: string;
  searchIntent: string;
}

export interface AEOItem {
  question: string;
  shortAnswer: string;
  supportingPoints: string[];
}

export interface PageSEOConfig {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  primaryKeyword: string;
  secondaryKeywords: [string, string];
  ogType?: string;
  ogImage?: string;
  aeoQuestions: AEOItem[];
}

export const SITE_DOMAIN = "https://maisoncypres.fr";

export const HOMEPAGE_SEO: PageSEOConfig = {
  title: "Maison Cyprès — French Haute Parfumerie & Botanical Extraits",
  metaDescription: "Discover Maison Cyprès, French haute parfumerie in Grasse. Explore hand-harvested floral extraits, sessile oak aging, and sustainable botanical sourcing.",
  canonicalUrl: `${SITE_DOMAIN}/`,
  primaryKeyword: "french haute parfumerie",
  secondaryKeywords: ["natural perfume extraits", "grasse botanical fragrances"],
  ogType: "website",
  ogImage: "/src/assets/images/perfume_grasse_roses_1791344393586.webp",
  aeoQuestions: [
    {
      question: "What Defines French Haute Parfumerie at Maison Cyprès?",
      shortAnswer:
        "French haute parfumerie at Maison Cyprès is defined by compounding unhurried extraits de parfum at an exceptional 30% concentration using authentic, single-origin botanical absolutes rather than mass petrochemical synthetics. Every formulation undergoes ninety days of cellar maceration in French sessile oak casks in Grasse, allowing volatile natural esters to harmonize into deep, skin-tenacious sillage without artificial stabilizing chemicals.",
      supportingPoints: [
        "Extraordinaire 30% concentration of natural botanical oils for evolving sillage that breathes on human skin.",
        "Ninety-day French sessile oak cask cellar aging in Grasse to meld raw floral absolutes and resins into velvet depth.",
        "Zero petrochemical carrier synthetics, phthalates, artificial fixatives, or commercial dye agents."
      ]
    },
    {
      question: "How Does Maison Cyprès Ethically Source Rare Perfume Botanicals?",
      shortAnswer:
        "Maison Cyprès partners directly with multi-generational family estates across Grasse, Florence, and Les Cayes through multi-year fair-harvest covenants. We exclusively utilize certified beach-combed ambergris, organic cold-pressed citrus from Cap d'Antibes, and sustainably regenerated Aquilaria agarwood reserves. By eliminating speculative middle-tier brokers, we protect endangered agricultural heritage and guarantee absolute botanical traceability for every flacon.",
      supportingPoints: [
        "Long-term agricultural land covenants with heritage growers in Grasse, Tuscany, and Madagascar.",
        "Certified non-harm beach-combed ambergris authenticated by marine biologist provenance documentation.",
        "Complete batch transparency with single-origin terroir notes documented on every numbered crystal flacon."
      ]
    }
  ]
};

export const KEYWORD_MAPPING_REPORT: KeywordMapItem[] = [
  {
    pageName: "Maison Cyprès Homepage",
    currentUrl: "/",
    recommendedUrl: "/",
    primaryKeyword: "french haute parfumerie",
    secondaryKeyword1: "natural perfume extraits",
    secondaryKeyword2: "grasse botanical fragrances",
    searchIntent: "Commercial / Navigational"
  },
  {
    pageName: "Article 1: Centifolia Rose Harvest",
    currentUrl: "/#article-1",
    recommendedUrl: "/articles/grasse-centifolia-roses",
    primaryKeyword: "rose de mai harvest grasse",
    secondaryKeyword1: "centifolia rose extraction",
    secondaryKeyword2: "grasse perfume flowers",
    searchIntent: "Informational / Sourcing"
  },
  {
    pageName: "Article 2: Wild Vetiver & Petrichor",
    currentUrl: "/#article-2",
    recommendedUrl: "/articles/wild-vetiver-petrichor",
    primaryKeyword: "wild vetiver distillation",
    secondaryKeyword1: "petrichor fragrance accord",
    secondaryKeyword2: "somali frankincense resin",
    searchIntent: "Informational / Botanical"
  },
  {
    pageName: "Article 3: Scent Pyramid Architecture",
    currentUrl: "/#article-3",
    recommendedUrl: "/articles/perfume-scent-pyramids",
    primaryKeyword: "perfume scent pyramid structure",
    secondaryKeyword1: "fragrance evaporation kinetics",
    secondaryKeyword2: "top heart base notes",
    searchIntent: "Informational / Educational"
  },
  {
    pageName: "Article 4: Cold Enfleurage of Jasmine",
    currentUrl: "/#article-4",
    recommendedUrl: "/articles/cold-enfleurage-jasmine",
    primaryKeyword: "cold enfleurage jasmine extraction",
    secondaryKeyword1: "traditional grasse enfleurage",
    secondaryKeyword2: "jasminum grandiflorum perfume absolute",
    searchIntent: "Informational / Historical Craft"
  },
  {
    pageName: "Article 5: Florentine Iris Pallida",
    currentUrl: "/#article-5",
    recommendedUrl: "/articles/florentine-iris-pallida",
    primaryKeyword: "florentine orris root butter",
    secondaryKeyword1: "iris pallida rhizome maturation",
    secondaryKeyword2: "irone perfume chemistry",
    searchIntent: "Informational / Luxury Ingredient"
  },
  {
    pageName: "Article 6: Ethical Atlantic Ambergris",
    currentUrl: "/#article-6",
    recommendedUrl: "/articles/natural-ambergris-perfume",
    primaryKeyword: "ethical beachcombed ambergris",
    secondaryKeyword1: "natural ambergris tincture",
    secondaryKeyword2: "marine perfume fixative",
    searchIntent: "Informational / Ethical Sourcing"
  },
  {
    pageName: "Article 7: Citrus Aurantium Neroli",
    currentUrl: "/#article-7",
    recommendedUrl: "/articles/citrus-aurantium-neroli",
    primaryKeyword: "neroli bitter orange steam distillation",
    secondaryKeyword1: "citrus aurantium perfume absolutes",
    secondaryKeyword2: "petitgrain extraction grasse",
    searchIntent: "Informational / Botanical"
  },
  {
    pageName: "Article 8: Wild Assam Agarwood Oud",
    currentUrl: "/#article-8",
    recommendedUrl: "/articles/wild-assam-oud",
    primaryKeyword: "sustainable assam agarwood oud",
    secondaryKeyword1: "natural wild oud oil maceration",
    secondaryKeyword2: "aquilaria resin distillation",
    searchIntent: "Informational / Luxury Ingredient"
  },
  {
    pageName: "Article 9: Madagascar Bourbon Vanilla",
    currentUrl: "/#article-9",
    recommendedUrl: "/articles/madagascar-bourbon-vanilla",
    primaryKeyword: "madagascar bourbon vanilla absolute",
    secondaryKeyword1: "hand pollinated vanilla planifolia",
    secondaryKeyword2: "cured vanilla pod perfumery",
    searchIntent: "Informational / Botanical"
  },
  {
    pageName: "Article 10: Copper Distillation Alembic",
    currentUrl: "/#article-10",
    recommendedUrl: "/articles/copper-alembic-distillation",
    primaryKeyword: "copper alembic still perfume distillation",
    secondaryKeyword1: "low temperature vacuum fractionation",
    secondaryKeyword2: "essential oil distillation kinetics",
    searchIntent: "Informational / Technical Craft"
  }
];
