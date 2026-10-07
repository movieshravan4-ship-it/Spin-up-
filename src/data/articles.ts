export interface FragranceNote {
  top: string[];
  heart: string[];
  base: string[];
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  callout?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  imageAlt: string;
  imageCaption: string;
  leadQuote: string;
  notesProfile?: FragranceNote;
  sections: ArticleSection[];
}

export const ARTICLES: Article[] = [
  {
    id: "1",
    slug: "ghost-of-grasse-centifolia-roses-dawn",
    title: "The Ghost of Grasse: Harvesting Centifolia Roses at First Dawn",
    excerpt:
      "Why the legendary Rose de Mai can only be plucked by hand between five and eight in the morning, before the Provençal sun evaporates its fragile honeyed facets.",
    date: "October 4, 2026",
    readTime: "6 min read",
    category: "Botanical Harvest",
    author: {
      name: "Hélène de Montmirail",
      role: "Master Perfumer, Grasse Atelier",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    },
    image: "/src/assets/images/perfume_grasse_roses_1791344393586.jpg",
    imageAlt: "Luxury perfume bottle on raw travertine surrounded by fresh pink Centifolia rose petals",
    imageCaption: "Rosa × centifolia gathered at the Maison Cyprès estate in Grasse, distilled within four hours of harvest.",
    leadQuote: "A rose picked at noon has surrendered half its soul to the sun; only at first light does it yield its true honey and pepper heart.",
    notesProfile: {
      top: ["Pink Pepper", "Dewy Morning Stems", "Mandarin Zest"],
      heart: ["Grasse Rose de Mai", "Damascena Absolute", "Wild Peony"],
      base: ["Ambrette Seed", "White Cedar", "Beeswax"]
    },
    sections: [
      {
        heading: "The Fragile Window of First Light",
        paragraphs: [
          "At five-fifteen on a crisp May morning in the hills above Grasse, the air still holds the cool breath of the Maritime Alps. The rose pickers move in gentle silence down the terraces, their fingers moving with the rhythmic grace of harpsichordists. Each Rosa centifolia bloom is cupped between thumb and forefinger, tilted slightly, and snapped clean at the calyx with a soft, distinct pop.",
          "Speed is paramount, yet haste is forbidden. By nine o’clock, as the Mediterranean sun crests the ridge, the petal temperature rises. The most ethereal top-note molecules — volatile phenyl ethyl alcohols and green aldehydes — begin to vaporize into the open atmosphere. To bottle the true ghost of Grasse, the entire harvest must arrive at our copper stills before the morning dew has fully cleared."
        ],
        callout: "It requires four hundred kilograms of fresh hand-picked petals to yield a single liter of pure Rose de Mai concrete."
      },
      {
        heading: "The Anatomy of Centifolia",
        paragraphs: [
          "Unlike modern hybrid tea roses bred for long vase life and vivid colors at the expense of scent, the centifolia — literally 'the hundred-petaled rose' — is a wild, tempestuous flower. Its aroma is not the powdery, synthetic sweetness often associated with commercial rose waters.",
          "Instead, a fresh Grasse rose carries surprising layers: a prick of green pepper, the damp earth of limestone soils, warm clover honey, and a subtle undertone of tobacco leaf. In our formulation for *Maison Cyprès Éphémère No. 4*, we balance this intoxicating floral weight with sparkling bergamot and dry cedarwood to preserve its crisp morning clarity on the skin."
        ]
      },
      {
        heading: "Preserving an Endangered Heritage",
        paragraphs: [
          "In the 1930s, hundreds of small family flower farms dotted the valley of Grasse. Today, under pressure from real estate expansion and climate fluctuations, only a handful of multi-generational growers remain. Maison Cyprès contracts our fields under exclusive long-term stewardship, guaranteeing fair agricultural prices and biodynamic soil cultivation.",
          "When you spray our extrait de parfum, you are not merely applying a fragrance; you are activating an unbroken chain of living botany and French artisanal heritage that has endured for three centuries."
        ]
      }
    ]
  },
  {
    id: "2",
    slug: "alchemy-of-smoke-and-petrichor-wild-vetiver",
    title: "The Alchemy of Smoke and Petrichor: Distilling Wild Vetiver and Resins",
    excerpt:
      "Journeying into the Les Cayes highlands and Somali plateaus to capture the primordial aroma of wet volcanic soil and sacred temple incense.",
    date: "September 22, 2026",
    readTime: "7 min read",
    category: "Raw Ingredients",
    author: {
      name: "Gabriel Laurent",
      role: "Botanical Scout & In-House Nose",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    },
    image: "/src/assets/images/perfume_vetiver_resins_1791344410697.jpg",
    imageAlt: "Dark architectural perfume bottle surrounded by raw frankincense resins and dried vetiver roots",
    imageCaption: "Aged vetiver roots macerating with tears of Boswellia carterii resin over twelve months in dark flacons.",
    leadQuote: "Vetiver is the anchor of the perfumer's palette — it smells like the memory of rain on parched limestone.",
    notesProfile: {
      top: ["Bitter Grapefruit", "Crushed Cardamom", "Geosmin Accord"],
      heart: ["Highland Vetiver Root", "Birch Tar", "Cypriol"],
      base: ["Somali Frankincense", "Smoked Patchouli", "Dry Amber"]
    },
    sections: [
      {
        heading: "Rooting in Volcanic Earth",
        paragraphs: [
          "While flowers attract pollinators through fleeting airborne promises, roots anchor themselves in stone, storing earth, water, and time. In southwestern Haiti, Chrysopogon zizanioides grows in volcanic soil that clings tenaciously to its fibrous roots. Digging them out requires days of manual excavation with pickaxes, followed by washed sun-drying on river stones.",
          "When subjected to slow low-temperature hydro-distillation over twenty-four hours, the resulting oil is thick, dark olive-gold, and startlingly complex. It contains no sweetness. It smells of wet earth, roasted hazelnut, damp moss, and the peculiar ozone chill that precedes a thunderstorm."
        ],
        callout: "The molecular compound geosmin, produced by soil bacteria, can be detected by the human olfactory bulb at five parts per trillion."
      },
      {
        heading: "The Tears of the Frankincense Tree",
        paragraphs: [
          "To counter the subterranean gravity of vetiver, our perfumers marry it to Somali frankincense (*Boswellia carterii*). Harvested by incising the bark of gnarled desert trees clinging to arid limestone cliffs, the milky resin hardens into translucent tears under the desert wind.",
          "When burned, frankincense produces an ethereal silver smoke celebrated by ancient civilizations for meditative stillness. But when extracted via modern supercritical carbon dioxide, the resin yields a mineral, lemony, and cool incense note that lifts vetiver into the realm of sacred geometry."
        ]
      },
      {
        heading: "Skin Chemistry and Enduring Sillage",
        paragraphs: [
          "Smoky and earthy accords possess an extraordinary property: molecular tenacity. Unlike citrus molecules that evaporate within twenty minutes, the sesquiterpenes in vetiver and frankincense bind to lipid molecules in human epidermis.",
          "As your body temperature fluctuates throughout the evening, *Maison Cyprès Terre Brûlée* continuously re-radiates, moving between leather, cool rain, and warm ember embers — a personal aura that feels intimately organic rather than applied."
        ]
      }
    ]
  },
  {
    id: "3",
    slug: "olfactory-architecture-building-scent-pyramids",
    title: "The Olfactory Architecture: How Master Perfumers Build Scent Pyramids",
    excerpt:
      "Demystifying volatility curves, evaporation kinetics, and why a true extrait de parfum transforms through distinct acts over twelve hours on skin.",
    date: "September 11, 2026",
    readTime: "8 min read",
    category: "The Perfumer's Art",
    author: {
      name: "Camille Vaneau",
      role: "Director of Olfactory Creation",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    },
    image: "/src/assets/images/perfume_flacon_travertine_1791344422337.jpg",
    imageAlt: "Square crystal perfume flacon with luminous golden fragrance on carved limestone plinth",
    imageCaption: "Maison Cyprès flacons are crafted from optical-grade recycled crystal with magnetic brass caps.",
    leadQuote: "A perfume is musical composition written in the medium of evaporation; every chord must dissolve to reveal the next.",
    notesProfile: {
      top: ["Calabrian Bergamot", "Neroli Petals", "Juniper Berry"],
      heart: ["Florentine Orris Butter", "Cedar Needles", "Black Tea"],
      base: ["Mysore Sandalwood", "Grey Amber Accord", "Cashmere Wood"]
    },
    sections: [
      {
        heading: "The Three Acts of a Scent Composition",
        paragraphs: [
          "Most commercial fragrances are engineered for the 'spray and pay' impulse: an explosive burst of synthetic top notes designed to entice customers in airport duty-free corridors, which promptly flattens into a synthetic musk within forty minutes. At Maison Cyprès, we structure our creations as classical three-act theatrical narratives.",
          "Act One represents the top notes (tête) — agile, effervescent molecules with low boiling points like cold-pressed bergamot, green angelica, and pink pepper. They greet the senses with radiant luminosity, lasting perhaps fifteen to thirty minutes before bowing out gracefully."
        ],
        callout: "A masterpiece fragrance should never smell identical at hour one and hour six; it must tell a developing story."
      },
      {
        heading: "The Heart and the Evaporation Threshold",
        paragraphs: [
          "Act Two is the heart (cœur), unfolding between thirty minutes and four hours. Here reside the grand botanical absolutes: orris butter, tuberose, and clary sage. They provide the emotional weight, volume, and texture of the fragrance, bridging the initial freshness to the deep foundation.",
          "To bridge these movements without jarring chasms, master perfumers use olfactory seam-sealers: aldehydes that lift heavy flowers, and natural hedione that gives floral accords a three-dimensional radiant sillage."
        ]
      },
      {
        heading: "The Base and the Memory of Cedar",
        paragraphs: [
          "Act Three is the base (fond). These are heavy, slow-moving molecules with boiling points exceeding three hundred degrees Celsius: aged sandalwood, labdanum resin, and genuine ambrette. They provide the fixative foundation that tethers the entire fragrance to your pulse points.",
          "When crafted with thirty-percent concentration of natural essences, this final act lingers into the following morning on wool scarves and skin — a quiet whisper that belongs solely to you."
        ]
      }
    ]
  },
  {
    id: "4",
    slug: "forgotten-extraction-cold-enfleurage-jasmine",
    title: "The Forgotten Extraction: Cold Enfleurage and Night-Blooming Jasmine",
    excerpt:
      "Reviving the painstaking 18th-century technique of capturing fragile nocturnal jasmine blossoms in cold vegetable fats without heat degradation.",
    date: "August 28, 2026",
    readTime: "5 min read",
    category: "Historical Heritage",
    author: {
      name: "Dr. Jean-Baptiste Cavaignac",
      role: "Fragrance Historian & Archivist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    },
    image: "/src/assets/images/perfume_jasmine_enfleurage_1791344441824.jpg",
    imageAlt: "Artisanal perfume flacon surrounded by white night-blooming jasmine flowers and vintage linen",
    imageCaption: "Pure Jasminum grandiflorum blossoms laid onto glass chassis in the Maison Cyprès historical cellar.",
    leadQuote: "Steam distillation is like shouting at a delicate whisper; cold enfleurage is listening with closed eyes.",
    notesProfile: {
      top: ["Night Breeze Accord", "Green Violet Leaf", "Sweet Lemon"],
      heart: ["Enfleurage Jasmine", "Orange Blossom", "Ylang-Ylang"],
      base: ["Bourbon Vanilla", "Sandalwood", "Warm Beeswax"]
    },
    sections: [
      {
        heading: "The Fragility of the Nocturnal Blossom",
        paragraphs: [
          "Jasminum grandiflorum does not yield its true treasure to steam. When subjected to the boiling temperatures of traditional copper alembics, the delicate indoles, jasmone, and methyl jasmonate that give jasmine its narcotic, intoxicating quality are destroyed by heat, leaving behind a cooked, herbal caricature.",
          "For two centuries, Grasse perfumers solved this problem with enfleurage: an astonishingly laborious technique where freshly picked night blooms are individually pressed into cold, odorless fat spread over sheets of glass mounted in wooden frames called *châssis*."
        ],
        callout: "Over forty consecutive days, spent blossoms are removed with tweezers and replaced with freshly plucked petals until the fat is saturated."
      },
      {
        heading: "The Maceration and the Pommade",
        paragraphs: [
          "Because jasmine blossoms continue to produce scent molecules for several hours even after being detached from the vine, the cold fat actively absorbs the living exhalation of the flower. The resulting fragrant pomade is then washed in organic cane alcohol to separate the floral absolute from the lipids.",
          "Although commercial perfume manufacturers abandoned enfleurage in the 1960s in favor of cheap petrochemical volatile solvent extraction (hexane and petroleum ether), Maison Cyprès has maintained a dedicated artisanal atelier workshop to produce limited batches for our *Cuvée d'Or* editions."
        ]
      },
      {
        heading: "The Scent of Pure Night",
        paragraphs: [
          "The difference upon smelling is revelatory. Solvent extraction yields a heavy, sometimes medicinal jasmine; cold enfleurage captures the crisp night wind, the green stem, the humid dusk air, and the intoxicating warmth of skin under starlight.",
          "It is perfumery in its purest, most devotional form: an art where human patience bows before the ephemeral beauty of the natural world."
        ]
      }
    ]
  }
];
