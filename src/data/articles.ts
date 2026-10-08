export interface FragranceNote {
  top: string[];
  heart: string[];
  base: string[];
}

export interface ArticleImage {
  url: string;
  alt: string;
  caption: string;
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  callout?: string;
  inlineImage?: ArticleImage;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
    initials: string;
  };
  image: string;
  imageAlt: string;
  imageCaption: string;
  gallery: ArticleImage[];
  leadQuote: string;
  notesProfile?: FragranceNote;
  sections: ArticleSection[];
}

export const ARTICLES: Article[] = [
  {
    id: "1",
    slug: "ghost-of-grasse-centifolia-roses-dawn",
    title: "The Ghost of Grasse: Harvesting Centifolia Roses at First Dawn",
    subtitle: "Why the legendary Rose de Mai can only be gathered by hand between 5 and 8 AM before the sun dissipates its fragile honeyed facets.",
    excerpt: "In the pre-dawn mist of Grasse, pickers move with monastic focus. Within three short hours, hundreds of thousands of delicate petals must be harvested and transported to the copper stills before the Mediterranean sun destroys their ethereal top notes.",
    date: "October 4, 2026",
    readTime: "9 min read",
    category: "Botanical Harvest",
    author: {
      name: "Hélène de Montmirail",
      role: "Master Perfumer, Grasse Atelier",
      initials: "HM",
    },
    image: "/src/assets/images/perfume_grasse_roses_1791344393586.jpg",
    imageAlt: "Luxury perfume bottle on raw travertine surrounded by fresh pink Centifolia rose petals",
    imageCaption: "Rosa × centifolia gathered at the Maison Cyprès estate in Grasse, distilled within four hours of dawn harvest.",
    gallery: [
      {
        url: "/src/assets/images/perfume_rose_petals_macro_1791430401179.jpg",
        alt: "Dewy fresh pink Centifolia rose petals with morning condensation drops",
        caption: "Fig. 1 — Extreme macro detail of glandular trichomes on Rosa centifolia petals, where volatile aromatic terpenes reside.",
      },
      {
        url: "/src/assets/images/perfume_harvest_basket_field_1791430450128.jpg",
        alt: "Wicker harvest basket filled with blossoms in morning field",
        caption: "Fig. 2 — Handwoven willow hampers filled at 6:15 AM on the sun-warmed terraces above Mouans-Sartoux.",
      }
    ],
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
          "Speed is paramount, yet haste is forbidden. By nine o’clock, as the Mediterranean sun crests the ridge, the petal temperature rises. The most ethereal top-note molecules — volatile phenyl ethyl alcohols and green aldehydes — begin to vaporize into the open atmosphere. To bottle the true ghost of Grasse, the entire harvest must arrive at our copper stills before the morning dew has fully cleared.",
          "Unlike modern hybrid tea roses bred for long vase life and vivid colors at the expense of scent, the centifolia — literally 'the hundred-petaled rose' — is a wild, tempestuous flower. Its aroma is not the powdery, synthetic sweetness often associated with commercial rose waters. Instead, a fresh Grasse rose carries surprising layers: a prick of green pepper, the damp earth of limestone soils, warm clover honey, and a subtle undertone of cured tobacco leaf."
        ],
        callout: "It requires four hundred kilograms of fresh hand-picked petals to yield a single liter of pure Rose de Mai concrete.",
      },
      {
        heading: "Extraction: The Hexane-Free Conscience",
        paragraphs: [
          "Historically, the fragrance industry shifted in the mid-20th century to industrial petroleum solvents like hexane to extract flower concrete quickly and cheaply. While economically efficient, petrochemical extraction leaves trace chemical residues and blunts the delicate, dewy green facets of the flower.",
          "At Maison Cyprès, we have returned to an advanced low-temperature extraction protocol using organic sugarcane ethanol combined with supercritical carbon dioxide. The result is an absolute of startling clarity: breathing it in is identical to walking into a rose field at 6:00 AM, smelling not only the pink blossom, but the damp earth beneath the roots and the green sap of the thorned stem.",
          "The chemical composition of our extract reveals unusually high concentrations of geraniol and nerol, compounds that grant our formula its velvety, nectar-like persistence without needing synthetic musks to anchor the drydown."
        ],
        inlineImage: {
          url: "/src/assets/images/perfume_alembic_copper_coil_1791430414672.jpg",
          alt: "Copper condensing coil and collection flask with clear rose distillate",
          caption: "Fig. 3 — Low-pressure fractionated distillation capturing the aqueous hydrosol without heat stress.",
        }
      },
      {
        heading: "The Formulation: Éphémère No. 4",
        paragraphs: [
          "In composing our signature extrait *Éphémère No. 4*, the master perfumer faces a classic dilemma: how to prolong the fleeting freshness of a May morning without suffocating it under heavy woods. Our solution lies in an architectural bridge constructed from Ambrette seed — the botanical musk derived from hibiscus pods — and unrefined mountain beeswax.",
          "As the rose develops on the wearer's wrist over six to eight hours, it does not sour or flatten. Instead, it softens into an intimate skin-scent, glowing with the natural warmth of body heat. It is a fragrance that invites closeness rather than demanding attention across a room."
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
    subtitle: "Journeying into the Les Cayes highlands and Somali plateaus to capture the primordial aroma of wet volcanic soil and sacred temple incense.",
    excerpt: "Deep beneath the soil, vetiver roots trap the memory of torrential rains, while desert frankincense trees bleed fragrant tears under relentless sun. When these two opposing elements meet in a single bottle, they create an intoxicating ode to petrichor.",
    date: "September 22, 2026",
    readTime: "11 min read",
    category: "Rare Ingredients",
    author: {
      name: "Gabriel Laurent",
      role: "Botanical Scout & Senior Nose",
      initials: "GL",
    },
    image: "/src/assets/images/perfume_vetiver_resins_1791344410697.jpg",
    imageAlt: "Dark architectural perfume bottle surrounded by raw frankincense resins and dried vetiver roots",
    imageCaption: "Aged vetiver roots macerating with tears of Boswellia carterii resin over twelve months in dark flacons.",
    gallery: [
      {
        url: "/src/assets/images/perfume_amber_resin_tears_1791430467242.jpg",
        alt: "Golden frankincense resin tears glowing on dark rock",
        caption: "Fig. 1 — Tears of Boswellia carterii harvested from ancient wild trees clinging to limestone escarpments in Somaliland.",
      },
      {
        url: "/src/assets/images/perfume_glass_dropper_pipette_1791430478680.jpg",
        alt: "Glass pipette dispensing dark golden resinous extract",
        caption: "Fig. 2 — Laboratory evaluation of raw Haitian vetiver oil, testing sesquiterpene density and root bitterness.",
      }
    ],
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
          "When subjected to slow low-temperature hydro-distillation over twenty-four hours, the resulting oil is thick, dark olive-gold, and startlingly complex. It contains no sweetness. It smells of wet earth, roasted hazelnut, damp moss, and the peculiar ozone chill that precedes a thunderstorm.",
          "Our botanical team spent three years evaluating wild vetiver across Java, Réunion, and Madagascar before choosing the high-altitude parcels of Les Cayes. The steep elevation and mineral-dense volcanic ash yield roots with an unusually high percentage of khusimol — the molecule responsible for that deep, velvet-smooth earthiness without any harsh swampy undertones."
        ],
        callout: "The molecular compound geosmin, produced by soil bacteria, can be detected by the human olfactory bulb at five parts per trillion."
      },
      {
        heading: "The Tears of the Frankincense Tree",
        paragraphs: [
          "To counter the subterranean gravity of vetiver, our perfumers marry it to Somali frankincense (*Boswellia carterii*). Harvested by incising the bark of gnarled desert trees clinging to arid limestone cliffs, the milky resin hardens into translucent tears under the desert wind.",
          "When burned, frankincense produces an ethereal silver smoke celebrated by ancient civilizations for meditative stillness. But when extracted via modern supercritical carbon dioxide, the resin yields a mineral, lemony, and cool incense note that lifts vetiver into the realm of sacred geometry.",
          "We source our resin tears exclusively through direct cooperative agreements with the clan elders of the Sanaag region, ensuring that trees are tapped only once every three seasons to prevent fatal exhaustion of these ancient desert monarchs."
        ],
        inlineImage: {
          url: "/src/assets/images/perfume_blotter_testing_nose_1791430431511.jpg",
          alt: "Perfumer testing organ desk with blotter strips",
          caption: "Fig. 3 — Evaluating test strips over 72 hours to measure how birch tar smokiness moderates the raw vetiver heart.",
        }
      },
      {
        heading: "Recreating the Molecule of Petrichor",
        paragraphs: [
          "For centuries, poets and scientists have tried to isolate the exact olfactory mechanism of 'petrichor' — the unmistakable scent of hot, dry earth struck by midsummer rain. We now know it is caused by geosmin, synthesized by actinobacteria in soil and aerosolized into raindrops.",
          "In compounding *Terre Brûlée*, our in-house nose Gabriel Laurent paired natural steam-distilled mitti attar (river clay distilled onto sandalwood) with wild Haitian vetiver and sparkling top notes of cold-pressed pink grapefruit. The result is visceral: upon application, the mind is immediately transported to a sun-baked stone courtyard as the first heavy rain drops strike the flagstones."
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
    subtitle: "Demystifying volatility curves, evaporation kinetics, and why a true extrait de parfum transforms through distinct acts over twelve hours on skin.",
    excerpt: "Why do some fragrances vanish in thirty minutes while others unfold like a multi-movement symphony? Exploring the physics of molecular weight, skin temperature evaporation, and the delicate art of invisible transitions.",
    date: "September 11, 2026",
    readTime: "10 min read",
    category: "The Perfumer's Art",
    author: {
      name: "Camille Vaneau",
      role: "Director of Olfactory Creation",
      initials: "CV",
    },
    image: "/src/assets/images/perfume_flacon_travertine_1791344422337.jpg",
    imageAlt: "Square crystal perfume flacon with luminous golden fragrance on carved limestone plinth",
    imageCaption: "Maison Cyprès flacons are crafted from optical-grade recycled crystal with magnetic brass caps.",
    gallery: [
      {
        url: "/src/assets/images/perfume_blotter_testing_nose_1791430431511.jpg",
        alt: "Perfumer organ desk with paper scent strips and scale",
        caption: "Fig. 1 — The formulation organ where hundreds of single-origin distillates are evaluated at precise molar ratios.",
      },
      {
        url: "/src/assets/images/perfume_glass_dropper_pipette_1791430478680.jpg",
        alt: "Pipette dropping amber extrait de parfum",
        caption: "Fig. 2 — Compounding test batches at 30% concentration to calibrate evaporation curves on human pulse points.",
      }
    ],
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
          "Act One represents the top notes (tête) — agile, effervescent molecules with low boiling points like cold-pressed bergamot, green angelica, and pink pepper. They greet the senses with radiant luminosity, lasting perhaps fifteen to thirty minutes before bowing out gracefully.",
          "The secret to a great opening is not merely loudness, but transparency. If the top notes are too dense, they suffocate the delicate middle accords; if they are too light, the fragrance feels unfinished and cold upon first spray."
        ],
        callout: "A masterpiece fragrance should never smell identical at hour one and hour six; it must tell a developing story."
      },
      {
        heading: "The Heart and the Evaporation Threshold",
        paragraphs: [
          "Act Two is the heart (cœur), unfolding between thirty minutes and four hours. Here reside the grand botanical absolutes: orris butter, tuberose, and clary sage. They provide the emotional weight, volume, and texture of the fragrance, bridging the initial freshness to the deep foundation.",
          "To bridge these movements without jarring chasms, master perfumers use olfactory seam-sealers: aldehydes that lift heavy flowers, and natural hedione that gives floral accords a three-dimensional radiant sillage.",
          "In *Cèdre Éthéré*, we use Moroccan cedarwood needles paired with steam-distilled Chinese black tea to create a dry, smoky floral heart that wears like a tailored vicuña coat on the skin."
        ],
        inlineImage: {
          url: "/src/assets/images/perfume_copper_still_atelier_1791430370728.jpg",
          alt: "Historic copper stills and glass coils in perfume laboratory",
          caption: "Fig. 3 — Fractionating high-boiling heart molecules to eliminate sulfurous off-notes in natural botanicals.",
        }
      },
      {
        heading: "The Base and the Memory of Cedar",
        paragraphs: [
          "Act Three is the base (fond). These are heavy, slow-moving molecules with boiling points exceeding three hundred degrees Celsius: aged sandalwood, labdanum resin, and genuine ambrette. They provide the fixative foundation that tethers the entire fragrance to your pulse points.",
          "When crafted with thirty-percent concentration of natural essences, this final act lingers into the following morning on wool scarves and skin — a quiet whisper that belongs solely to you."
        ]
      },
      {
        heading: "The Skin Temperature Dynamic",
        paragraphs: [
          "Paper blotters can only tell half the story. Paper is sterile, room-temperature, and porous; human skin is acidic, warm (33°C to 36°C), and covered in natural sebum oils that interact biochemically with fragrant lipids.",
          "Our testing protocols require that every modification is evaluated on five individuals with diverse skin chemistry across twelve hours. Only when a formula sings in harmony with living skin does it graduate to bottling in our crystal flacons."
        ]
      }
    ]
  },
  {
    id: "4",
    slug: "forgotten-extraction-cold-enfleurage-jasmine",
    title: "The Forgotten Extraction: Cold Enfleurage and Night-Blooming Jasmine",
    subtitle: "Reviving the painstaking 18th-century technique of capturing fragile nocturnal jasmine blossoms in cold vegetable fats without heat degradation.",
    excerpt: "When jasmine flowers meet boiling steam, their narcotic soul is scalded away. Only the ancient technique of cold fat enfleurage can capture the living breath of nocturnal blossoms. A rare journey inside the Maison Cyprès historical cellars.",
    date: "August 28, 2026",
    readTime: "8 min read",
    category: "Historical Heritage",
    author: {
      name: "Dr. Jean-Baptiste Cavaignac",
      role: "Fragrance Historian & Archivist",
      initials: "JC",
    },
    image: "/src/assets/images/perfume_jasmine_enfleurage_1791344441824.jpg",
    imageAlt: "Artisanal perfume flacon surrounded by white night-blooming jasmine flowers and vintage linen",
    imageCaption: "Pure Jasminum grandiflorum blossoms laid onto glass chassis in the Maison Cyprès historical cellar.",
    gallery: [
      {
        url: "/src/assets/images/perfume_harvest_basket_field_1791430450128.jpg",
        alt: "White blossoms gathered at twilight in wicker baskets",
        caption: "Fig. 1 — Nocturnal jasmine blossoms gathered at dusk, when their indol concentration reaches nocturnal zenith.",
      },
      {
        url: "/src/assets/images/perfume_alembic_copper_coil_1791430414672.jpg",
        alt: "Laboratory filtration setup extracting absolute from pomade",
        caption: "Fig. 2 — Chilled organic ethanol washing of saturated pomade to isolate the pure floral absolute.",
      }
    ],
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
          "For two centuries, Grasse perfumers solved this problem with enfleurage: an astonishingly laborious technique where freshly picked night blooms are individually pressed into cold, odorless fat spread over sheets of glass mounted in wooden frames called *châssis*.",
          "Because jasmine blossoms continue to breathe scent molecules for several hours even after being detached from the vine, the cold fat actively absorbs the living exhalation of the flower. Over forty consecutive days, spent blossoms are removed with tweezers and replaced with freshly plucked petals until the fat is saturated."
        ],
        callout: "Over forty consecutive days, spent blossoms are removed with tweezers and replaced with freshly plucked petals until the fat is saturated."
      },
      {
        heading: "From Pommade to Extrait",
        paragraphs: [
          "Once the fat has absorbed its maximum threshold of aromatic molecules, it becomes what Grasse artisans call *la pommade florale*. This fragrant butter is then subjected to repeated washings in chilled organic cane alcohol, dissolving the perfume molecules while leaving the insoluble lipids behind.",
          "Although commercial perfume manufacturers abandoned enfleurage in the 1960s in favor of cheap petrochemical volatile solvent extraction (hexane and petroleum ether), Maison Cyprès has maintained a dedicated artisanal atelier workshop to produce limited batches for our *Cuvée d'Or* editions.",
          "The financial cost is staggering: producing one kilogram of enfleurage absolute requires over three thousand hours of hand labor. But for our patrons, there is no substitute for authentic olfactory truth."
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
  },
  {
    id: "5",
    slug: "secret-of-iris-pallida-three-year-underground-maturation",
    title: "The Secret of Iris Pallida: The Three-Year Underground Maturation",
    subtitle: "Why the dried roots of the Florentine Iris are the world's most precious botanical commodity, aged in silence until their irones awaken.",
    excerpt: "You do not smell the purple iris flower; its real luxury is locked inside gnarly subterranean rhizomes. Sliced by hand, dried in Tuscan attics for three years, and steam-distilled into butter worth three times its weight in gold.",
    date: "August 14, 2026",
    readTime: "12 min read",
    category: "Rare Ingredients",
    author: {
      name: "Camille Vaneau",
      role: "Director of Olfactory Creation",
      initials: "CV",
    },
    image: "/src/assets/images/perfume_orris_root_florence_1791430293113.jpg",
    imageAlt: "Artisanal perfume bottle on sunlit Tuscan stone ledge with dried Florentine Iris pallida roots",
    imageCaption: "Iris pallida rhizomes harvested from the hills of San Polo in Chianti, aged for thirty-six months before grinding.",
    gallery: [
      {
        url: "/src/assets/images/perfume_amber_resin_tears_1791430467242.jpg",
        alt: "Crushed orris root and amber resin on dark surface",
        caption: "Fig. 1 — Ground iris rhizome powder displaying crystalline irone formations under raking studio light.",
      },
      {
        url: "/src/assets/images/perfume_blotter_testing_nose_1791430431511.jpg",
        alt: "Perfumer evaluating orris butter dilution on scent paper",
        caption: "Fig. 2 — Testing 1% orris butter dilution: powdery violet, soft suede, and cool silver-toned starch notes.",
      }
    ],
    leadQuote: "Fresh iris root has virtually no perfume; only time, darkness, and slow oxidation can coax the ghost of violet from stone-hard roots.",
    notesProfile: {
      top: ["Aldehydes", "Italian Angelique", "Pink Peppercorn"],
      heart: ["Florentine Orris Butter (15% Irone)", "White Heliotrope", "Violet Leaf"],
      base: ["French Cedarwood", "White Musk", "Vetiver Bourbon"]
    },
    sections: [
      {
        heading: "The Botanical Paradox of the Tuscan Hills",
        paragraphs: [
          "Travelers passing through Tuscany in May are enchanted by the lavender-blue fields of Iris pallida blanketing the terraces around Florence. Yet to the master perfumer, those blossoms are mere camouflage. The flower itself produces no usable essential oil.",
          "The true treasure sleeps six inches beneath the limestone gravel: the rhizome. When fresh, the root smells bitter, astringent, and herbaceous, possessing not even a trace of the powdery, aristocratic elegance prized in high perfumery.",
          "To awaken the root, Tuscan farmers must manually dig up the tubers in mid-July using two-pronged forks, wash away the soil by hand in river water, meticulously peel the outer bark with curved knives, and spread the white root slices on burlap screens in airy barn lofts."
        ],
        callout: "One ton of fresh Iris pallida roots yields barely two kilograms of pure orris butter after three years of curing and steam distillation."
      },
      {
        heading: "The Chemistry of Irones",
        paragraphs: [
          "What occurs during those three years of drying is a quiet miracle of natural organic chemistry. As the rhizome slowly desiccates, fatty acids oxidize, synthesizing rare ketone molecules called irones (specifically cis-α-irone and cis-γ-irone).",
          "These irone molecules are what give orris its signature scent: a cool, powdery, velvet violet note interwoven with accents of freshly planed cedarwood, warm bread, fine kidskin leather, and antique library parchment.",
          "At Maison Cyprès, we reject synthetic orris substitutes like ionones and methyl ionones. While synthetics can mimic the initial violet punch, they lack the three-dimensional, skin-melting warmth and velvety sillage that only genuine aged orris butter can impart."
        ],
        inlineImage: {
          url: "/src/assets/images/perfume_glass_dropper_pipette_1791430478680.jpg",
          alt: "Dropper dispensing dense golden orris extract",
          caption: "Fig. 3 — Pure orris butter dissolved at 50°C into warm neutral alcohol before incorporation into extrait batches.",
        }
      },
      {
        heading: "The Sovereign Touch in Orris Nocturne",
        paragraphs: [
          "In composing our award-winning extrait *Orris Nocturne*, we utilized a bespoke batch containing an exceptional fifteen percent irone content. We balanced its aristocratic coolness with soft angelica root and white heliotrope, anchoring the composition on a foundation of French cedar and Bourbon vetiver.",
          "When you wear *Orris Nocturne*, you are enveloped in an aura of quiet authority. It does not announce itself with shrill floral notes; it lingers in the air like a whispered secret in a marble palazzo."
        ]
      }
    ]
  },
  {
    id: "6",
    slug: "sacred-ambergris-floating-gold-oceanic-coasts",
    title: "Sacred Ambergris: The Floating Gold of the Atlantic Coast",
    subtitle: "Ethically gathered from sea-weathered tidelines, aged by decades of oceanic sun and salt to bring radiant warmth to fine fragrance.",
    excerpt: "Neither plant nor mineral, ambergris is the legendary ocean-cured substance that has haunted perfumers for millennia. We explore its ethical beachcombing origins and its miraculous ability to magnify scent notes.",
    date: "July 30, 2026",
    readTime: "9 min read",
    category: "The Perfumer's Art",
    author: {
      name: "Gabriel Laurent",
      role: "Botanical Scout & Senior Nose",
      initials: "GL",
    },
    image: "/src/assets/images/perfume_ambergris_ocean_stone_1791430307589.jpg",
    imageAlt: "Luxury amber perfume flacon resting on wet coastal granite rocks with sea spray",
    imageCaption: "Grey ambergris tincture prepared from beach-gathered nodules found on the windswept Atlantic coast of Brittany.",
    gallery: [
      {
        url: "/src/assets/images/perfume_glass_dropper_pipette_1791430478680.jpg",
        alt: "Pipette testing marine ambergris tincture in glass beaker",
        caption: "Fig. 1 — Macerating genuine ambergris tincture at 3% concentration in aged organic alcohol over eighteen months.",
      },
      {
        url: "/src/assets/images/perfume_blotter_testing_nose_1791430431511.jpg",
        alt: "Testing maritime salty skin accord on scent paper",
        caption: "Fig. 2 — Olfactory evaluation: notes of ocean breeze, warm skin, tobacco leaf, and mineral driftwood.",
      }
    ],
    leadQuote: "Ambergris is not a scent you smell directly; it is the warm acoustic amplifier through which all other flowers sing.",
    notesProfile: {
      top: ["Atlantic Sea Salt", "Crushed Myrtle", "Ozone Accord"],
      heart: ["Solar Jasmine", "Maritime Pine Needle", "Sun-Warmed Kelp"],
      base: ["Ethical Grey Ambergris (5-Year Tincture)", "Driftwood", "Labdanum"]
    },
    sections: [
      {
        heading: "The Ocean's Greatest Mystery",
        paragraphs: [
          "For thousands of years, pieces of fragrant grey wax washed ashore from New Zealand to the shores of Brittany, confounding merchants and kings. Ancient Chinese scholars called it 'Dragon's Spittle Fragrance,' believing it crystallized from the saliva of slumbering sea dragons.",
          "Today, we understand that ambergris originates in the digestive system of the sperm whale, formed around squid beaks to protect the animal's stomach lining. Expelled naturally into the open sea, it floats upon the waves for decades, bleached white-grey by salt water, sun radiation, and oceanic air.",
          "Fresh ambergris smells repulsive and foul. But after forty years of solar oxidation on ocean currents, it transforms chemically: ambrein breaks down into ambroxan and ambrinol, producing an aroma that is impossible to categorize — warm, salty, slightly tobacco-like, and profoundly human."
        ],
        callout: "Maison Cyprès uses exclusively certified beach-combed ambergris, verified by marine biologist certifications and zero cetacean harm."
      },
      {
        heading: "The Sonic Amplifier of Perfumery",
        paragraphs: [
          "What makes ambergris sacred in haute parfumerie is not its standalone smell, but its extraordinary physical behavior as a fixative. When added in microscopic quantities to a floral or woody formula, it acts like a golden acoustic amplifier.",
          "It rounds off sharp alcoholic edges, lifts floral notes into three dimensions, and binds the fragrance molecules to the skin's lipid mantle. A fragrance formulated with genuine ambergris tincture does not merely sit on top of skin; it appears to emanate from within the wearer's pores.",
          "In our maritime extrait *Marée Noire*, the grey ambergris base creates an unforgettable drydown: the impression of salt-crusted skin warming under late-afternoon sun on a deserted granite cliff."
        ]
      },
      {
        heading: "The Art of Slow Tincturing",
        paragraphs: [
          "Unlike essential oils extracted via steam, ambergris must be prepared through classical tincturing. The waxy nodule is ground into fine dust using a chilled marble mortar and pestle, suspended in 96% pure grape alcohol, and agitated weekly in dark glass demijohns for at least eighteen months.",
          "Only when the solution turns a pale, luminous golden-grey is it ready to be blended into our master concentrates. It is slow, demanding, and utterly timeless."
        ]
      }
    ]
  },
  {
    id: "7",
    slug: "citrus-aurantium-sacred-distillation-neroli-orange",
    title: "Citrus Aurantium: The Sacred Distillation of Neroli and Bitter Orange",
    subtitle: "The sunlit groves of the Cap d'Antibes and Seville: steam-distilling delicate white blossoms into radiant, honeyed morning light.",
    excerpt: "No tree gives more to the perfumer than the bitter orange (Citrus aurantium). From its delicate white flowers comes neroli and orange blossom absolute; from its green twigs, petitgrain; and from its sun-ripened peel, bitter orange zest.",
    date: "July 12, 2026",
    readTime: "9 min read",
    category: "Botanical Harvest",
    author: {
      name: "Hélène de Montmirail",
      role: "Master Perfumer, Grasse Atelier",
      initials: "HM",
    },
    image: "/src/assets/images/perfume_neroli_blossoms_copper_1791430326838.jpg",
    imageAlt: "Fresh white bitter orange neroli blossoms and green leaves next to luminous golden perfume flacon",
    imageCaption: "Bitter orange blossoms harvested in Vallauris, distilled in traditional copper alembics within six hours of picking.",
    gallery: [
      {
        url: "/src/assets/images/perfume_alembic_copper_coil_1791430414672.jpg",
        alt: "Vintage copper distillation coil condensing neroli hydrosol",
        caption: "Fig. 1 — Steam separating the precious floral neroli oil from the sweet orange flower water (hydrosol).",
      },
      {
        url: "/src/assets/images/perfume_harvest_basket_field_1791430450128.jpg",
        alt: "Wicker basket with white orange blossoms in Mediterranean sun",
        caption: "Fig. 2 — Canvas drop-cloths spread under ancient bitter orange trees to catch freshly fallen blossoms in April.",
      }
    ],
    leadQuote: "Neroli is liquid sunshine; it clears the cobwebs of the mind and returns the spirit to the optimism of youth.",
    notesProfile: {
      top: ["Cap d'Antibes Neroli", "Bitter Orange Peel", "Cardamom Seed"],
      heart: ["Orange Blossom Absolute", "Egyptian Petitgrain", "White Thyme"],
      base: ["Blonde Woods", "Benzoin Tears", "Vetiver Roots"]
    },
    sections: [
      {
        heading: "The Tree of Triple Treasures",
        paragraphs: [
          "If an apprentice perfumer could only study one botanical species for a lifetime, it should be the bitter orange tree (*Citrus aurantium subsp. amara*). Native to southeast Asia and brought to the Mediterranean by Arab botanists in the tenth century, the bitter orange is a marvel of aromatic generosity.",
          "In April, the trees erupt in starry white blossoms with a scent so intoxicating it blankets entire valleys from Seville to Grasse. When steam-distilled, these flowers yield **Neroli oil** — light, green, honeyed, and sparkling. When extracted with solvents, they produce **Orange Blossom Absolute** — rich, narcotic, animalic, and deeply floral.",
          "Later in summer, the pruned leafy twigs are distilled to produce **Petitgrain**, offering a crisp, herbal, woody bite. Finally, the bumpy orange rinds are cold-expressed to deliver a dark, marmalade-like bitter citrus oil. Four distinct olfactory universes from a single tree."
        ],
        callout: "The name 'Neroli' honors Anne Marie de La Trémoille, Princess of Nerola, who famously perfumed her gloves and bathwater with bitter orange blossom in the 17th century."
      },
      {
        heading: "The April Harvest in Vallauris",
        paragraphs: [
          "At our partner groves in Vallauris, just outside Antibes, the harvest begins in mid-April. Large white linen canvases are laid beneath the ancient trees. Pickers gently shake the branches with long poles, catching only the open blossoms while leaving immature green buds to ripen for tomorrow.",
          "Distillation must take place immediately. The copper stills are loaded with blossoms and fresh mountain spring water. As steam rises through the floral bed, it carries over the precious linalool and linalyl acetate molecules, condensing into pure golden neroli oil floating on top of aromatic orange blossom water."
        ]
      },
      {
        heading: "Composing L'Orangerie Royale",
        paragraphs: [
          "In crafting our warm-weather extrait *L'Orangerie Royale*, we reunited all four expressions of the bitter orange tree. The sparkling lift of cold-pressed neroli opens the composition, giving way to the sensual velvet depth of orange blossom absolute in the heart, grounded by bitter petitgrain and blond cedar.",
          "The result is an uplifting, restorative fragrance that evokes a sunlit stone terrace overlooking the Mediterranean, where a gentle sea breeze carries the scent of blossoming orange groves into open French windows."
        ]
      }
    ]
  },
  {
    id: "8",
    slug: "oud-of-ancient-valleys-wild-agarwood-maceration",
    title: "Oud of the Ancient Valleys: Wild Agarwood and Monastic Maceration",
    subtitle: "Sustainable Aquilaria resin from the valley of Assam: deep balsamic smokiness aged in darkness with royal sandalwood.",
    excerpt: "Before oud became a commercial buzzword, it was the world’s most revered incense wood, born from a wounded tree fighting to heal itself. How Maison Cyprès sources sustainable, aged wild agarwood without ecological devastation.",
    date: "June 25, 2026",
    readTime: "13 min read",
    category: "Rare Ingredients",
    author: {
      name: "Gabriel Laurent",
      role: "Botanical Scout & Senior Nose",
      initials: "GL",
    },
    image: "/src/assets/images/perfume_oud_agarwood_flacon_1791430339594.jpg",
    imageAlt: "Dark luxury perfume bottle in heavy smoked glass sitting on charred cedarwood block with fragrant oud chips",
    imageCaption: "Aged Assam oud oil resting in dark carboys after twelve months of anaerobic cellar maceration.",
    gallery: [
      {
        url: "/src/assets/images/perfume_amber_resin_tears_1791430467242.jpg",
        alt: "Resinous dark agarwood chips with golden veins",
        caption: "Fig. 1 — Close-up of resin-saturated heartwood chips from sixty-year-old Aquilaria agallocha trees.",
      },
      {
        url: "/src/assets/images/perfume_glass_dropper_pipette_1791430478680.jpg",
        alt: "Dark thick oud extract dripping into measuring flacon",
        caption: "Fig. 2 — Testing the viscosity and sesquiterpene resin balance of aged Indian hydro-distilled oud.",
      }
    ],
    leadQuote: "Oud is not merely wood; it is the scar tissue of a tree that chose to heal itself through sublime perfume.",
    notesProfile: {
      top: ["Saffron Stigmas", "Bitter Almond", "Bergamot"],
      heart: ["Assam Wild Agarwood", "Centifolia Rose Absolute", "Smoked Castoreum Accord"],
      base: ["Mysore Sandalwood", "Birch Tar", "Aged Patchouli"]
    },
    sections: [
      {
        heading: "The Miracle of the Wounded Tree",
        paragraphs: [
          "Healthy Aquilaria wood is soft, pale, odorless, and commercially unremarkable. But when the tree is pierced by lightning, boring beetles, or fungal spores (*Phaeoacremonium parasitica*), it mounts an immune defense of extraordinary complexity.",
          "Over decades, the tree saturates its inner heartwood with a dense, dark, aromatic resin to wall off the infection. The heavier and darker the wood becomes, the more precious it is. In the ancient Sanskrit texts, this wood was called *Aguru* — meaning 'heavy' — because a prime resin-saturated piece will immediately sink to the bottom of a bowl of water.",
          "When distilled, this resin yields oud: an intoxicating, multi-layered aroma that ranges from leather, barnyard warmth, and dried fruits to sweet tobacco, burnt honey, and ancient temple incense."
        ],
        callout: "Wild Aquilaria trees are critically endangered. Maison Cyprès works exclusively with ethical certified plantation reserves in Assam that practice sustainable replanting."
      },
      {
        heading: "Beyond the Synthetic Imitations",
        paragraphs: [
          "Ninety-nine percent of modern commercial 'oud' perfumes on department store counters contain zero real agarwood. Instead, they rely on cheap synthetic bases like Black Agar or Iso E Super paired with cypriol oil, producing a loud, aggressive chemical screech that bears no resemblance to natural oud.",
          "True artisanal oud is remarkably smooth. It does not attack the senses; it envelops them in a velvet embrace of wood, earth, and amber. In our creation *Santal & Oud Impérial*, we pair twelve-year-old Assam oud with vintage Mysore sandalwood, allowing the creamy sweetness of the sandalwood to tame the wild animalic facets of the agarwood."
        ]
      },
      {
        heading: "The Art of Maceration in Oak",
        paragraphs: [
          "Freshly distilled oud oil often carries sharp medicinal edges. To soften these compounds, we age our oud concentrate in French sessile oak casks in the cool cellars of our Grasse atelier for twelve full months before blending.",
          "During this long sleep, oxygen diffuses through the oak pores, rounding the tannins and knitting the fragrance into a seamless tapestry of smoky warmth. It is a scent for the connoisseur — dark, hypnotic, and unforgettable."
        ]
      }
    ]
  },
  {
    id: "9",
    slug: "vanillin-mirage-wild-bourbon-orchid-pods-madagascar",
    title: "The Vanillin Mirage: Wild Bourbon Orchid Pods from Madagascar",
    subtitle: "Hand-pollinated vanilla planifolia cured in wool blankets under the tropical sun: dark balsamic warmth versus synthetic food vanilla.",
    excerpt: "Most people think vanilla smells like birthday cake or cheap ice cream. Real cured vanilla planifolia smells of dark rum, pipe tobacco, cured leather, and smoky resin. Rediscovering the world’s most misunderstood botanical treasure.",
    date: "June 08, 2026",
    readTime: "9 min read",
    category: "Rare Ingredients",
    author: {
      name: "Camille Vaneau",
      role: "Director of Olfactory Creation",
      initials: "CV",
    },
    image: "/src/assets/images/perfume_bourbon_vanilla_pods_1791430355068.jpg",
    imageAlt: "Luxury amber perfume bottle next to plump glistening black Bourbon vanilla pods and crushed tonka beans",
    imageCaption: "Hand-pollinated Vanilla planifolia pods cured over nine months in the Sava region of Madagascar.",
    gallery: [
      {
        url: "/src/assets/images/perfume_glass_dropper_pipette_1791430478680.jpg",
        alt: "Dark brown vanilla absolute being measured with glass dropper",
        caption: "Fig. 1 — Pure dark Bourbon vanilla absolute, displaying over 250 volatile aromatic molecules beyond simple vanillin.",
      },
      {
        url: "/src/assets/images/perfume_blotter_testing_nose_1791430431511.jpg",
        alt: "Scent strips testing vanilla paired with smoked amber and cedar",
        caption: "Fig. 2 — Evaluating vanilla's balsamic drydown against Haitian vetiver to prevent excessive sugary sweetness.",
      }
    ],
    leadQuote: "Synthetic vanillin is a single flat piano note; natural Bourbon vanilla is a sixty-piece orchestra playing in the dark.",
    notesProfile: {
      top: ["Spiced Rum", "Bitter Cocoa Bean", "Mandarin Rind"],
      heart: ["Madagascar Vanilla Absolute", "Smoked Tobacco Leaf", "Roasted Tonka Bean"],
      base: ["Siam Benzoin", "Peruvian Balsam", "White Cedarwood"]
    },
    sections: [
      {
        heading: "The Hand of the Pollinator",
        paragraphs: [
          "Vanilla is an orchid (*Vanilla planifolia*), a climbing vine originally native to the tropical rainforests of Mesoamerica. Because its natural pollinator — the tiny Melipona bee — exists only in Mexico, every single vanilla flower grown in Madagascar must be pollinated entirely by human hand.",
          "The flower opens for only four hours on a single morning. If the grower does not reach the bloom with a bamboo toothpick before the tropical midday heat causes it to wilt, the flower drops to the ground and no pod will form that year.",
          "Once the green bean reaches maturity nine months later, it has zero scent. The fragrance must be born through *l’échaudage* and *l'étuvage*: dipping the green pods in boiling water, wrapping them tightly in wool blankets to 'sweat' in wooden boxes, and drying them under the equatorial sun for months until they turn glossy, dark, and frosted with vanillin crystals."
        ],
        callout: "Natural vanilla absolute contains over 250 distinct aromatic compounds, including guaiacol, eugenol, and acetic acid, which grant it complex smoky, floral, and woody undertones."
      },
      {
        heading: "Rescuing Vanilla from the Confectioner",
        paragraphs: [
          "In the 1870s, German chemists synthesized artificial vanillin from wood pulp and coal tar. This cheap synthetic molecule quickly flooded the confectionery industry, conditioning generations of consumers to equate 'vanilla' with flat, hyper-sweet sugar.",
          "In high perfumery, real vanilla is not sweet; it is dark, balsamic, slightly boozy, and deeply animalic. In our extrait *Vanille Sauvage*, we highlight these primal undertones by marrying Bourbon vanilla absolute with aged Cuban tobacco leaves, bitter dark cocoa, and smoked Peru balsam.",
          "The result is a warm, magnetic fragrance that creates an addictive sillage without ever feeling childish or gourmand."
        ]
      },
      {
        heading: "The Power of the Base Note",
        paragraphs: [
          "Because vanilla absolute contains heavy molecular structures that evaporate slowly, it acts as an extraordinary fixative, clinging to pulse points for over twenty-four hours. It serves as the warm velvet cushion upon which the entire scent architecture rests.",
          "When you spray *Vanille Sauvage*, you are wearing months of human patience, tropical rainfall, and the dark magic of the world's most demanding orchid."
        ]
      }
    ]
  },
  {
    id: "10",
    slug: "copper-alembic-physics-low-temperature-fractionation",
    title: "The Copper Alembic: The Physics of Low-Temperature Steam Fractionation",
    subtitle: "The engineering of Grasse's hand-hammered distillation stills, capturing volatile floral esters without scorching delicate plant waxes.",
    excerpt: "A deep dive into the engineering heart of the perfume laboratory: how swan necks, copper oxidation kinetics, and vacuum fractionating columns allow master distillers to separate aromatic truth from botanical noise.",
    date: "May 20, 2026",
    readTime: "11 min read",
    category: "The Perfumer's Art",
    author: {
      name: "Dr. Jean-Baptiste Cavaignac",
      role: "Fragrance Historian & Archivist",
      initials: "JC",
    },
    image: "/src/assets/images/perfume_copper_still_atelier_1791430370728.jpg",
    imageAlt: "Historic French perfume laboratory with vintage copper alembic distillation stills and glass condenser coils",
    imageCaption: "Hand-hammered red copper stills dating to 1892, restored and calibrated for low-pressure steam distillation in Grasse.",
    gallery: [
      {
        url: "/src/assets/images/perfume_alembic_copper_coil_1791430414672.jpg",
        alt: "Copper condensing coil and collection flask with clear distillate",
        caption: "Fig. 1 — The condensing coil (serpentin) immersed in chilled mountain spring water to rapidly condense floral vapors.",
      },
      {
        url: "/src/assets/images/perfume_glass_dropper_pipette_1791430478680.jpg",
        alt: "Testing distillate fractions in crystal laboratory receiver",
        caption: "Fig. 2 — Hydrometer testing of distillate density, separating head, heart, and tail fractions of steam extractions.",
      }
    ],
    leadQuote: "Copper is not merely a metal container; it is an active chemical mediator that strips away foul sulfur compounds and leaves pure botanical light.",
    notesProfile: {
      top: ["Cold Metallic Accord", "Citron Zest", "Mountain Mint"],
      heart: ["Steam Distilled Lavender", "Roman Chamomile", "Clary Sage"],
      base: ["Polished Cedar", "Oakmoss", "Clean Ambergris"]
    },
    sections: [
      {
        heading: "The Ancient Geometry of the Alembic",
        paragraphs: [
          "The word *alembic* descends from the Arabic *al-anbīq*, which in turn traces back to the ancient Greek *ambix* (cup or beaker). For over a thousand years, the fundamental geometry of the distillation still has remained unchanged: a copper pot (*la cucurbite*), a swan-neck cap (*le col-de-cygne*), and a helical cooling coil (*le serpentin*) immersed in cold water.",
          "Why has copper remained the undisputed king of distillation materials, even in an era of aerospace titanium and electropolished stainless steel? The answer lies in copper's unique catalytic properties.",
          "During distillation, plant material releases volatile sulfur compounds (mercaptans and dimethyl sulfide) that carry offensive rotten or cooked cabbage notes. Copper chemically reacts with these sulfur molecules, precipitating them out of the vapor as harmless copper sulfate crystals, leaving only clean, pristine floral and herbal notes in the receiver."
        ],
        callout: "A stainless steel still produces an oil that smells flat and metallic; a hand-hammered copper still delivers pure, sparkling botanical luminosity."
      },
      {
        heading: "The Innovation of Vacuum Fractionation",
        paragraphs: [
          "At standard atmospheric pressure, water boils at 100°C. However, when delicate flowers like lavender, chamomile, or clary sage are subjected to 100°C steam, heat-sensitive esters such as linalyl acetate begin to hydrolyze and break down, losing their crisp, green clarity.",
          "At Maison Cyprès, we solved this dilemma by retrofitting our vintage copper stills with modern low-pressure vacuum pumps. By reducing the internal chamber pressure, we can boil water and generate aromatic steam at just 68°C.",
          "At this gentle temperature, delicate plant waxes never scorch, and fragile terpenes are carried over completely intact. The resulting oils smell identical to the living plant standing in a crisp alpine field."
        ]
      },
      {
        heading: "The Distiller's Art of the Cut",
        paragraphs: [
          "Just as in the distillation of fine Cognac, a master perfume distiller must make precise 'cuts' during the run: separating the *têtes* (harsh, pungent initial fractions), the *cœur* (the pure, balanced heart), and the *queues* (the heavy, tired tail compounds).",
          "There is no digital sensor that can replace the distiller’s trained nose holding a glass hydrometer under the chilled distillate stream. It is a moment where physics, chemistry, and sensory intuition converge to create liquid art."
        ]
      }
    ]
  }
];
