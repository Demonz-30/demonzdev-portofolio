import { assetPath } from "@/lib/paths";
export interface PhotographyWork {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  shortIntro: string;
  description: string;
  image: string;
  width: number;
  height: number;
  aspectRatio: string;
  orientation: "landscape" | "portrait";
  year: string;
  role: string;
  tools: string[];
  visualDetails: {
    composition: string;
    lighting: string;
    colorPalette: string;
  };
  technicalDetails: {
    camera: string;
    lens: string;
    settings: string;
    dimensions: string;
    format: string;
  };
}

export interface VideographyWork {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  shortIntro: string;
  description: string;
  video: string;
  width: number;
  height: number;
  aspectRatio: string;
  duration: string;
  year: string;
  role: string;
  tools: string[];
  visualDetails: {
    composition: string;
    lighting: string;
    pacing: string;
  };
  technicalDetails: {
    resolution: string;
    format: string;
    duration: string;
    camera: string;
  };
}

export interface CreativeCodeWork {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  shortIntro: string;
  description: string;
  video: string;
  width: number;
  height: number;
  aspectRatio: string;
  duration: string;
  year: string;
  role: string;
  tools: string[];
  visualDetails: {
    system: string;
    interaction: string;
    aesthetic: string;
  };
  technicalDetails: {
    resolution: string;
    format: string;
    duration: string;
  };
}

export const photographyWorks: PhotographyWork[] = [
  {
    id: "robusta-lampung-composition",
    slug: "robusta-lampung-composition",
    number: "01",
    title: "ROBUSTA LAMPUNG COMPOSITION",
    category: "Commercial Product",
    tagline: "Packaging & Origin Collateral in Natural Sunlight",
    shortIntro: "Outdoor commercial composition pairing the Demonz Coffee pouch and companion origin profile card on textured stone.",
    description: "Staged commercial study highlighting product packaging, typography, and flavor metrics. The stand-up roast pouch rests alongside its origin profile card on weathered stone, bathed in natural daylight filtering through tree foliage.",
    image: assetPath("/assets/photography/Creative/fotografi/16,9.jpg"),
    width: 1280,
    height: 720,
    aspectRatio: "16/9",
    orientation: "landscape",
    year: "2026",
    role: "Product Photography & Staging",
    tools: ["Commercial Staging", "Natural Lighting", "Packaging Detail", "Depth of Field"],
    visualDetails: {
      composition: "Offset arrangement placing pouch and companion tasting card across natural stone",
      lighting: "Soft ambient daylight with tree canopy bokeh highlights",
      colorPalette: "Earthy stone browns, rich roasted coffee blacks, and lush foliage greens"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "1280 × 720 px",
      format: "JPEG (16:9)"
    }
  },
  {
    id: "joglo-community-gathering",
    slug: "joglo-community-gathering",
    number: "02",
    title: "JOGLO COMMUNITY GATHERING",
    category: "Event Documentary",
    tagline: "Traditional Architectural Setting & Collective Presence",
    shortIntro: "Environmental documentary photograph of a community gathering within an authentic wooden Joglo hall.",
    description: "Wide-angle observational capture of community participants gathered under the exposed timber rafters of a traditional Joglo structure. The composition documents cultural cohesion, shared interaction, and spatial architecture.",
    image: assetPath("/assets/photography/Creative/fotografi/16,9.jpeg"),
    width: 1280,
    height: 960,
    aspectRatio: "4/3",
    orientation: "landscape",
    year: "2026",
    role: "Event & Documentary Photography",
    tools: ["Documentary Capture", "Architectural Framing", "Ambient Light", "Cultural Context"],
    visualDetails: {
      composition: "Symmetrical wide framing utilizing vertical wooden pillars as natural frames",
      lighting: "Diffused open-hall ambient daylight balanced with interior incandescent pendants",
      colorPalette: "Rich natural teak timbers, clean tile reflections, and diverse textile tones"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "1280 × 960 px",
      format: "JPEG (4:3)"
    }
  },
  {
    id: "botanical-foliage-study",
    slug: "botanical-foliage-study",
    number: "03",
    title: "BOTANICAL FOLIAGE STUDY",
    category: "Commercial Product",
    tagline: "Matte Coffee Packaging Against Tropical Vegetation",
    shortIntro: "Commercial product study contrasting the Demonz Coffee pouch against dense tropical plant foliage.",
    description: "An exploration of organic-versus-industrial contrast. The matte black pouch stands delineating against a textured backdrop of living tropical leaves, highlighting natural origin and graphic typography.",
    image: assetPath("/assets/photography/Creative/fotografi/16,9 (2).jpg"),
    width: 1280,
    height: 720,
    aspectRatio: "16/9",
    orientation: "landscape",
    year: "2026",
    role: "Product Photography & Botanical Framing",
    tools: ["Commercial Photography", "Botanical Framing", "Natural Contrast", "Selective Focus"],
    visualDetails: {
      composition: "Right-anchored subject placement balanced by large leafy foreground elements",
      lighting: "Directional daylight with natural soft shadows in the leafy background",
      colorPalette: "Deep forest greens, matte black packaging, and fiery coffee splash graphic"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "1280 × 720 px",
      format: "JPEG (16:9)"
    }
  },
  {
    id: "handover-moment-joglo",
    slug: "handover-moment-joglo",
    number: "04",
    title: "HANDOVER MOMENT // JOGLO",
    category: "Event Documentary",
    tagline: "Formal Book Presentation in Traditional Pavilion",
    shortIntro: "Documentary capture of a formal handover and presentation moment inside the Joglo hall.",
    description: "A focused documentary record of a presentation ceremony. Community members and guests share a commemorative book presentation against the backdrop of seated participants and traditional wooden architecture.",
    image: assetPath("/assets/photography/Creative/fotografi/16,9 (2).jpeg"),
    width: 1280,
    height: 960,
    aspectRatio: "4/3",
    orientation: "landscape",
    year: "2026",
    role: "Documentary Photography",
    tools: ["Photojournalism", "Event Coverage", "Available Light", "Candid Pacing"],
    visualDetails: {
      composition: "Center-focused subjects framed by attending community members",
      lighting: "Natural ambient hall light with gentle open-air side fill",
      colorPalette: "Warm wood tones, soft neutral apparel, and lilac book accent"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "1280 × 960 px",
      format: "JPEG (4:3)"
    }
  },
  {
    id: "studio-broadcast-setup",
    slug: "studio-broadcast-setup",
    number: "05",
    title: "STUDIO BROADCAST SETUP",
    category: "Production & Studio",
    tagline: "Behind-the-Scenes Lighting & Creator Workspace",
    shortIntro: "Behind-the-scenes perspective capturing studio lighting instruments, projection accents, and presenter desk.",
    description: "An environmental production study documenting the physical apparatus of modern content creation. Softboxes, directional studio spots, and decorative gobo projections frame the creator desk setup.",
    image: assetPath("/assets/photography/Creative/fotografi/3,4.jpeg"),
    width: 1073,
    height: 1280,
    aspectRatio: "4/5",
    orientation: "portrait",
    year: "2026",
    role: "Production Documentation",
    tools: ["Studio Lighting", "BTS Photography", "Gobo Projection", "Set Architecture"],
    visualDetails: {
      composition: "Layered studio depth showing lighting modifiers, backdrop curtain, and presenter",
      lighting: "Artificial multi-point studio lighting with high-contrast gobo projection pattern",
      colorPalette: "Neutral curtain greys, acid lime wall accent, and warm amber projection"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "1073 × 1280 px",
      format: "JPEG (~4:5)"
    }
  },
  {
    id: "documentary-pov-framing",
    slug: "documentary-pov-framing",
    number: "06",
    title: "DOCUMENTARY POV // FRAMING",
    category: "Behind The Scenes & POV",
    tagline: "First-Person Perspective Framing Event on Camera Screen",
    shortIntro: "First-person perspective holding a DSLR camera, displaying the live composition of the Joglo event on screen.",
    description: "A photographer's perspective capturing the physical act of documentation. The camera body and LCD monitor take center stage, revealing the live preview of the pavilion gathering in real-time.",
    image: assetPath("/assets/photography/Creative/fotografi/3,4 (2).jpeg"),
    width: 960,
    height: 1280,
    aspectRatio: "3/4",
    orientation: "portrait",
    year: "2026",
    role: "Creative Direction & POV Capture",
    tools: ["POV Composition", "Depth of Field", "Documentary Perspective", "Tactile Framing"],
    visualDetails: {
      composition: "Subject foreground hand holding camera body with defocused hall background",
      lighting: "Direct outdoor daylight with subtle shadows across paving blocks",
      colorPalette: "Matte black camera body, warm skin tones, and rich timber pavilion hues"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "960 × 1280 px",
      format: "JPEG (3:4)"
    }
  },
  {
    id: "sunset-capture-field-pov",
    slug: "sunset-capture-field-pov",
    number: "07",
    title: "SUNSET CAPTURE // FIELD POV",
    category: "Behind The Scenes & POV",
    tagline: "Mirrorless Camera at Dusk Over Sports Pitch",
    shortIntro: "First-person POV holding a mirrorless camera overlooking an athletic pitch at sunset.",
    description: "An atmospheric look at outdoor sports capture. The camera LCD displays framing settings and live subject monitoring against golden sunset skies and vivid sports turf.",
    image: assetPath("/assets/photography/Creative/fotografi/3,4 (3).jpeg"),
    width: 960,
    height: 1280,
    aspectRatio: "3/4",
    orientation: "portrait",
    year: "2026",
    role: "Field Documentation & POV Capture",
    tools: ["Mirrorless POV", "Sunset Atmosphere", "Sports Framing", "Live Display"],
    visualDetails: {
      composition: "Central camera device framed against split background of mesh wall and open turf",
      lighting: "Golden-hour sunset backlight contrasting with luminous LCD display",
      colorPalette: "Saturated sunset golds, vibrant field greens, and deep device blacks"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "960 × 1280 px",
      format: "JPEG (3:4)"
    }
  },
  {
    id: "urban-multimedia-documentary",
    slug: "urban-multimedia-documentary",
    number: "08",
    title: "URBAN MULTIMEDIA DOCUMENTARY",
    category: "Street & Environmental Portraiture",
    tagline: "Field Documentary Portrait in Front of Urban Graffiti",
    shortIntro: "Documentary portrait of a creator in transit, framed against bold urban street art textures.",
    description: "A street environmental portrait focusing on tactile material contrast: field jacket embroidered branding, rugged backpack hardware, and layered urban mural art.",
    image: assetPath("/assets/photography/Creative/fotografi/9,16.jpg"),
    width: 1153,
    height: 1364,
    aspectRatio: "4/5",
    orientation: "portrait",
    year: "2026",
    role: "Visual Direction & Street Photography",
    tools: ["Street Photography", "Ambient Lighting", "Environmental Composition", "Color Grading"],
    visualDetails: {
      composition: "Low-angle leading perspective following the subject through mural corridors",
      lighting: "Diffused daylight with rim lighting accentuating fabric textures",
      colorPalette: "Deep moss greens, weathered graphite blacks, and vivid mural yellows and cyans"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "1153 × 1364 px",
      format: "JPEG (~4:5)"
    }
  },
  {
    id: "minimal-studio-portrait",
    slug: "minimal-studio-portrait",
    number: "09",
    title: "MINIMAL STUDIO PORTRAIT",
    category: "Studio Portraiture",
    tagline: "Clean Studio Headshot Against Neutral Backdrop",
    shortIntro: "Understated studio portrait studying natural expression against a minimalist neutral backdrop.",
    description: "A disciplined, restrained studio portrait emphasizing form and mood over ornamentation. Soft directional studio light gently defines facial features and draped fabric contours.",
    image: assetPath("/assets/photography/Creative/fotografi/9,16.jpeg"),
    width: 853,
    height: 1280,
    aspectRatio: "2/3",
    orientation: "portrait",
    year: "2026",
    role: "Studio Portrait Photography",
    tools: ["Studio Lighting", "Minimal Composition", "Portrait Framing", "Neutral Backdrop"],
    visualDetails: {
      composition: "Centered portrait orientation with generous vertical head space",
      lighting: "Soft frontal studio fill light producing subtle garment shadows",
      colorPalette: "Monochromatic grey curtain tones and deep matte black apparel"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "853 × 1280 px",
      format: "JPEG (2:3)"
    }
  },
  {
    id: "artisanal-batch-formulation",
    slug: "artisanal-batch-formulation",
    number: "10",
    title: "ARTISANAL BATCH FORMULATION",
    category: "Craft & Process Photography",
    tagline: "Direct POV of Real-World Batch Packaging",
    shortIntro: "First-person perspective holding a sealed Demonz Coffee Robusta pouch amid packaging operations.",
    description: "Tactile documentation of physical coffee production. The foreground hand presents the sealed roast pouch while background bags and prep surfaces convey the rhythm of batch packaging.",
    image: assetPath("/assets/photography/Creative/fotografi/9,16 (2).jpg"),
    width: 1200,
    height: 1600,
    aspectRatio: "3/4",
    orientation: "portrait",
    year: "2026",
    role: "Production Documentation & Craft Capture",
    tools: ["Process Documentation", "POV Composition", "Natural Lighting", "Tactile Textures"],
    visualDetails: {
      composition: "Direct foreground subject focus with atmospheric depth into packaging workflow",
      lighting: "Overhead ambient light catching pouch highlights and grind textures",
      colorPalette: "Rich roast browns, matte black label finish, and warm amber splash graphic"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "1200 × 1600 px",
      format: "WebP / JPEG (3:4)"
    }
  },
  {
    id: "octabox-silhouette-study",
    slug: "octabox-silhouette-study",
    number: "11",
    title: "OCTABOX SILHOUETTE STUDY",
    category: "Conceptual Studio Lighting",
    tagline: "High-Contrast Backlit Silhouette Geometry",
    shortIntro: "Minimal conceptual studio study framing a figure silhouette directly against an illuminated octagonal softbox.",
    description: "An exercise in extreme contrast and graphic shape. Positioned directly between camera and light source, the subject is rendered in pure silhouette within the octagonal geometric frame.",
    image: assetPath("/assets/photography/Creative/fotografi/9,16 (2).jpeg"),
    width: 853,
    height: 1280,
    aspectRatio: "2/3",
    orientation: "portrait",
    year: "2026",
    role: "Studio Lighting & Silhouette Study",
    tools: ["High-Contrast Lighting", "Silhouette Composition", "Studio Softbox", "Geometric Framing"],
    visualDetails: {
      composition: "Center-aligned geometric silhouette framed within an octagonal glow",
      lighting: "Single high-output studio octabox backlight with zero frontal fill",
      colorPalette: "Pristine diffuse white against deep obsidian shadows"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "853 × 1280 px",
      format: "JPEG (2:3)"
    }
  },
  {
    id: "aromatic-steam-dynamics",
    slug: "aromatic-steam-dynamics",
    number: "12",
    title: "AROMATIC STEAM DYNAMICS",
    category: "Commercial Product & Motion",
    tagline: "Controlled Studio Capture of Rising Coffee Steam",
    shortIntro: "Studio visual study capturing delicate thermal steam rising above freshly packaged coffee roast.",
    description: "Controlled commercial visual experiment capturing thermal fluid dynamics. Delicate wisps of steam rise gracefully from the package against a crisp white studio background.",
    image: assetPath("/assets/photography/Creative/fotografi/9,16 (3).jpg"),
    width: 1064,
    height: 1600,
    aspectRatio: "2/3",
    orientation: "portrait",
    year: "2026",
    role: "Studio Direction & Product Capture",
    tools: ["High-Key Studio Lighting", "Steam Dynamics", "Contrast Isolation", "Thermal Styling"],
    visualDetails: {
      composition: "Vertical symmetry centering the product with organic smoke trajectories",
      lighting: "High-key studio lighting isolating the translucent vapor trails",
      colorPalette: "Pure white backdrop, deep matte black packaging, and fiery roast splash accent"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "1064 × 1600 px",
      format: "JPEG (~2:3)"
    }
  },
  {
    id: "golden-hour-street-portrait",
    slug: "golden-hour-street-portrait",
    number: "13",
    title: "GOLDEN HOUR STREET PORTRAIT",
    category: "Street & Natural Light",
    tagline: "Low Sun Angles & High-Contrast Street Styling",
    shortIntro: "Street portrait bathed in late afternoon golden light, emphasizing floral pattern styling and warm rim shadows.",
    description: "An environmental street portrait captured during peak golden hour. Low-angled sunlight illuminates floral shirt patterns and sunglasses reflections against warm street textures.",
    image: assetPath("/assets/photography/Creative/fotografi/9,16 (3).jpeg"),
    width: 900,
    height: 1600,
    aspectRatio: "9/16",
    orientation: "portrait",
    year: "2026",
    role: "Street & Natural Light Portraiture",
    tools: ["Golden Hour Lighting", "Street Styling", "Natural Fill", "Color Grading"],
    visualDetails: {
      composition: "Vertical street composition with subject resting against an urban utility pole",
      lighting: "Raking golden-hour sunlight creating warm rim contours and specular highlights",
      colorPalette: "Warm amber sun tones, floral emeralds, and cool pavement asphalt"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "900 × 1600 px",
      format: "JPEG (9:16)"
    }
  },
  {
    id: "the-psychology-of-money",
    slug: "the-psychology-of-money",
    number: "14",
    title: "THE PSYCHOLOGY OF MONEY",
    category: "Editorial Still Life",
    tagline: "Open Volume & Custom Bookmark on Weathered Teak",
    shortIntro: "Still life study of Morgan Housel's book spread and Demonz illustrated bookmark on aged wood grain.",
    description: "An editorial still life exploring quiet reflection and typography. An open spread of 'The Psychology of Money' rests on teak grain, accompanied by an illustrated Demonz bookmark under soft garden light.",
    image: assetPath("/assets/photography/Creative/fotografi/9,16 (4).jpg"),
    width: 900,
    height: 1600,
    aspectRatio: "9/16",
    orientation: "portrait",
    year: "2026",
    role: "Editorial Photography & Still Life",
    tools: ["Editorial Still Life", "Typography Framing", "Natural Morning Light", "Macro Texture"],
    visualDetails: {
      composition: "Top-down diagonal perspective balancing book pages with soft bokeh foliage",
      lighting: "Soft directional daylight raking across textured paper and wood grain",
      colorPalette: "Warm cream paper tones, aged timber browns, and deep foliage greens"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "900 × 1600 px",
      format: "JPEG (9:16)"
    }
  },
  {
    id: "natural-canopy-portraiture",
    slug: "natural-canopy-portraiture",
    number: "15",
    title: "NATURAL CANOPY PORTRAITURE",
    category: "Environmental Portraiture",
    tagline: "Framed Between Tree Trunks Under Tropical Sunlight",
    shortIntro: "Environmental portrait framed naturally between two tree trunks with tropical palm leaves in the background.",
    description: "An outdoor environmental portrait utilizing natural foreground elements. Two textured trunks frame the subject, with palm fronds and overhead sunlight creating an organic visual rhythm.",
    image: assetPath("/assets/photography/Creative/fotografi/9,16 (4).jpeg"),
    width: 900,
    height: 1600,
    aspectRatio: "9/16",
    orientation: "portrait",
    year: "2026",
    role: "Environmental Portraiture",
    tools: ["Natural Framing", "Direct Daylight", "Tropical Foliage", "Depth Separation"],
    visualDetails: {
      composition: "Natural dual-pillar framing guiding focus directly to the central subject",
      lighting: "Direct top daylight filtering through palm fronds with strong foreground shadows",
      colorPalette: "Warm bark textures, golden palm yellows, and floral garment patterns"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "900 × 1600 px",
      format: "JPEG (9:16)"
    }
  },
  {
    id: "historical-monument-study",
    slug: "historical-monument-study",
    number: "16",
    title: "HISTORICAL MONUMENT STUDY",
    category: "Documentary & Heritage",
    tagline: "Subject Contemplating Ir. Soekarno Memorial Stone",
    shortIntro: "Documentary photograph of a subject observing the carved Ir. Soekarno memorial stone in late afternoon light.",
    description: "An environmental documentary study exploring heritage and reflection. The subject stands before the carved stone monument of Indonesia's first president, bathed in warm afternoon sunlight.",
    image: assetPath("/assets/photography/Creative/fotografi/9,16 (5).jpeg"),
    width: 900,
    height: 1600,
    aspectRatio: "9/16",
    orientation: "portrait",
    year: "2026",
    role: "Heritage & Documentary Photography",
    tools: ["Documentary Capture", "Monument Framing", "Late Afternoon Sun", "Heritage Story"],
    visualDetails: {
      composition: "Right-offset subject observing vertical carved stone memorial monolith",
      lighting: "Late afternoon directional sunlight casting sharp subject shadow across stone base",
      colorPalette: "Weathered grey stone, golden lawn greens, and warm sunlight tones"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "900 × 1600 px",
      format: "JPEG (9:16)"
    }
  },
  {
    id: "organic-origin-canopy",
    slug: "organic-origin-canopy",
    number: "17",
    title: "ORGANIC ORIGIN CANOPY",
    category: "Agricultural & Product",
    tagline: "Coffee Pouch Nestled in Living Coffee Tree Branches",
    shortIntro: "Commercial origin photograph nestling the Demonz Coffee pouch among living coffee leaves and green cherries.",
    description: "An agricultural product study emphasizing raw botanical origin. The coffee pouch is positioned directly within living coffee tree foliage, surrounded by unripened green coffee cherries.",
    image: assetPath("/assets/photography/Creative/fotografi/9,16 (6).jpeg"),
    width: 960,
    height: 1280,
    aspectRatio: "3/4",
    orientation: "portrait",
    year: "2026",
    role: "Origin & Agricultural Photography",
    tools: ["Agricultural Staging", "Foliage Depth", "Natural Environment", "Botanical Detail"],
    visualDetails: {
      composition: "Pouch centered within interwoven coffee branches and developing fruit clusters",
      lighting: "Dappled sunlight filtering through thick canopy with deep shaded accents",
      colorPalette: "Lush botanical greens, deep coffee blacks, and fiery splash graphic"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "960 × 1280 px",
      format: "JPEG (3:4)"
    }
  },
  {
    id: "horizon-and-highland-origin",
    slug: "horizon-and-highland-origin",
    number: "18",
    title: "HORIZON & HIGHLAND ORIGIN",
    category: "Environmental & Origin",
    tagline: "Coffee Pouch Held Against Rooftops and Distant Mountains",
    shortIntro: "Environmental capture holding the coffee pouch high against a village roofscape and mountain horizon.",
    description: "A panoramic environmental perspective connecting the finished roast to its regional landscape. The pouch is held aloft overlooking terracotta roofs, village architecture, and distant highland peaks.",
    image: assetPath("/assets/photography/Creative/fotografi/9,16 (7).jpeg"),
    width: 960,
    height: 1280,
    aspectRatio: "3/4",
    orientation: "portrait",
    year: "2026",
    role: "Environmental & Landscape Photography",
    tools: ["Environmental Staging", "Landscape Depth", "POV Composition", "Available Light"],
    visualDetails: {
      composition: "Foreground hand framing product against expansive rural village backdrop and mountain ridges",
      lighting: "Bright daylight under slightly overcast blue skies",
      colorPalette: "Terracotta roof reds, vibrant village greens, mountain indigos, and open sky blue"
    },
    technicalDetails: {
      camera: "Not available",
      lens: "Not available",
      settings: "Not available",
      dimensions: "960 × 1280 px",
      format: "JPEG (3:4)"
    }
  }
];

export const videographyWorks: VideographyWork[] = [
  {
    id: "demonz-motion-reel",
    slug: "demonz-motion-reel",
    number: "01",
    title: "DEMONZ MOTION & DOCUMENTARY REEL",
    category: "Motion & Documentary Videography",
    tagline: "Cinematic Narrative & Observational Visual Flow",
    shortIntro: "Cinematic motion piece exploring documentary storytelling, visual pacing, and environmental capture.",
    description: "A continuous motion study focusing on visual pacing, ambient sound design, and field documentation. Captured in native widescreen format, the reel compiles moments of community presence, craft execution, and observational cinematography.",
    video: assetPath("/assets/photography/Creative/video%20grafi/videpgrafi.mp4"),
    width: 848,
    height: 480,
    aspectRatio: "848/480",
    duration: "01:46",
    year: "2026",
    role: "Videography, Visual Capture & Editing",
    tools: ["Motion Capture", "Observational Cinematography", "Field Audio", "Pacing & Sequence"],
    visualDetails: {
      composition: "Native widescreen framing capturing horizontal depth and spatial continuity",
      lighting: "Available natural light transitioning across varied indoor and outdoor environments",
      pacing: "Measured documentary pacing emphasizing authentic presence and atmosphere"
    },
    technicalDetails: {
      resolution: "848 × 480 px (Widescreen)",
      format: "MP4 (H.264 / AAC)",
      duration: "106 seconds (01:46)",
      camera: "Not available"
    }
  }
];

export const creativeCodeWorks: CreativeCodeWork[] = [
  {
    id: "computational-visual-experiments",
    slug: "computational-visual-experiments",
    number: "01",
    title: "COMPUTATIONAL VISUAL EXPERIMENTS",
    category: "Creative Code & Interactive Systems",
    tagline: "Algorithmic Motion & Generative Interface Exploration",
    shortIntro: "Screen recording capture of generative visual experiments and computational design interactions.",
    description: "A digital recording documenting experiments in generative typography, algorithmic layout, and dynamic screen systems. Explores code as an expressive creative medium for interactive interfaces.",
    video: assetPath("/assets/photography/Creative/creative%20code/creative%20code.mp4"),
    width: 480,
    height: 864,
    aspectRatio: "480/864",
    duration: "00:29",
    year: "2026",
    role: "Creative Coding & Visual Systems",
    tools: ["Interactive Canvas", "Generative Motion", "Visual Algorithms", "Screen Capture"],
    visualDetails: {
      system: "Algorithmic visual sequences responding to screen coordinates and state changes",
      interaction: "Real-time visual feedback loops exploring motion dynamics",
      aesthetic: "High-contrast dark-mode interface with experimental typography"
    },
    technicalDetails: {
      resolution: "480 × 864 px (Vertical Screen Capture)",
      format: "MP4 (H.264 / AAC)",
      duration: "29 seconds (00:29)"
    }
  }
];

// Accessors for Photography
export function getPhotographyWorks(): PhotographyWork[] {
  return photographyWorks;
}

export function getPhotographyWorkBySlug(slug: string): PhotographyWork | undefined {
  return photographyWorks.find((work) => work.slug === slug);
}

// Accessors for Videography
export function getVideographyWorks(): VideographyWork[] {
  return videographyWorks;
}

export function getVideographyWorkBySlug(slug: string): VideographyWork | undefined {
  return videographyWorks.find((work) => work.slug === slug);
}

// Accessors for Creative Code
export function getCreativeCodeWorks(): CreativeCodeWork[] {
  return creativeCodeWorks;
}

export function getCreativeCodeWorkBySlug(slug: string): CreativeCodeWork | undefined {
  return creativeCodeWorks.find((work) => work.slug === slug);
}

// Backward Compatibility Aliases
export type CreativeWork = PhotographyWork;
export const creativeWorks = photographyWorks;
export function getAllCreativeWorks() {
  return photographyWorks;
}
export function getCreativeWorkBySlug(slug: string) {
  return photographyWorks.find((w) => w.slug === slug);
}
