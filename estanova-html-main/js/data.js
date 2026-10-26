/**
 * ==============================================================================
 * Propertis Orbanta – Content & Business Data (js/data.js)
 * ==============================================================================
 * 
 * Commercial Template Buyers:
 * This file centralizes all business content data:
 * - NAVIGATION_DATA : Desktop and mobile site navigation
 * - SERVICES_DATA   : Bespoke advisory disciplines & client services
 * - TESTIMONIALS_DATA: Client endorsements & transaction reviews
 * - FAQS_DATA       : Frequently asked questions & answers
 * - STATS_DATA      : Highlighted business metrics & track record
 * - AGENTS_DATA     : Private advisors, licenses, volume & contact details
 * - PROPERTIES_DATA : Luxury property listings, specifications, and galleries
 * 
 * Use this file to add, edit, or remove listings, team members, services, and reviews.
 */

// ------------------------------------------------------------------------------
// NAVIGATION DATA
// ------------------------------------------------------------------------------
const NAVIGATION_DATA = [
  { label: "Home", href: "index.html" },
  { label: "Properties", href: "properties.html" },
  { label: "Services", href: "services.html" },
  { label: "Private Agents", href: "agents.html" },
  { label: "About", href: "about.html" },
  { label: "Contact", href: "contact.html" },
  { label: "Saved Shortlist", href: "favorites.html", isShortlist: true },
];

// ------------------------------------------------------------------------------
// BUSINESS STATISTICS
// ------------------------------------------------------------------------------
const STATS_DATA = [
  { label: "Career Volume Transacted", value: "$850M+", description: "In closed luxury residential & estate acquisitions" },
  { label: "Curated Residences", value: "120+", description: "Landmark architectural promontories and penthouses" },
  { label: "Prime Global Destinations", value: "45+", description: "Flagship metropolitan, coastal and alpine markets" },
  { label: "Off-Market Discretion Rating", value: "99.4%", description: "Audited client privacy and fiduciary confidentiality" }
];

// ------------------------------------------------------------------------------
// BESPOKE ADVISORY SERVICES
// ------------------------------------------------------------------------------
const SERVICES_DATA = [
  {
    id: "private-whisper",
    title: "Private Placement Whisper Desk",
    shortDesc: "Discreet acquisition and off-market disposition of trophy estates shielded from public listing syndication.",
    fullDesc: "Over 40% of our transaction volume never enters the public Multiple Listing Service. Our Whisper Desk connects pre-cleared buyers directly with legacy property owners under strict bilateral non-disclosure covenants.",
    icon: "Shield",
    features: [
      "Bilateral non-disclosure protection",
      "Vetted high-net-worth syndicate",
      "Zero digital footprint marketing"
    ],
    ctaLink: "contact.html?service=whisper",
    ctaText: "Inquire On Desk"
  },
  {
    id: "generational-acquisition",
    title: "Generational Estate Acquisition",
    shortDesc: "End-to-end representation for multi-structure compounds, historic acreage, and architectural monuments.",
    fullDesc: "Representing purchasers in securing trophy holdings that withstand macroeconomic volatility. We handle structural analysis, view-corridor easements, and long-range municipal zoning verification.",
    icon: "Building",
    features: [
      "Comprehensive structural underwriting",
      "Title, water & riparian right reviews",
      "Off-market seller negotiation"
    ],
    ctaLink: "contact.html?service=acquisition",
    ctaText: "Inquire On Desk"
  },
  {
    id: "sovereign-structuring",
    title: "Sovereign Structuring & Entity Advisory",
    shortDesc: "Collaborative advisory with private bank fiduciaries and legal counsel to structure anonymous holding mechanisms.",
    fullDesc: "Collaborative advisory with leading private bank fiduciaries and legal counsel to structure anonymous, tax-optimized holding mechanisms for domestic and foreign principals.",
    icon: "FileCheck",
    features: [
      "FIRPTA & cross-border tax compliance",
      "Delaware & Wyoming blind LLC structuring",
      "Sovereign wealth and trust advisory"
    ],
    ctaLink: "contact.html?service=structuring",
    ctaText: "Inquire On Desk"
  },
  {
    id: "architectural-provenance",
    title: "Architectural Provenance & Preservation",
    shortDesc: "Historical archival research, blueprint verification, landmark commission compliance, and structural integrity stewardship.",
    fullDesc: "Authenticating historical pedigree and construction lineage for mid-century moderns, classic estates, and museum-grade masterworks.",
    icon: "Archive",
    features: [
      "Provenance & museum dossier compilation",
      "Historical Mills Act tax credit guidance",
      "Preservation architect vetting"
    ],
    ctaLink: "contact.html?service=provenance",
    ctaText: "Inquire On Desk"
  },
  {
    id: "luxury-leasing",
    title: "Luxury Leasing & Sovereign Asset Care",
    shortDesc: "High-security long-term and seasonal leasing stewardship for diplomatic delegations, entertainment leaders, and sovereign principals.",
    fullDesc: "Providing turnkey concierge-managed estates for seasonal retreats, film productions, and diplomatic relocations across our flagship markets.",
    icon: "Key",
    features: [
      "Thorough principal background vetting",
      "Dedicated estate manager integration",
      "Pre-tenancy photographic inventories"
    ],
    ctaLink: "contact.html?service=leasing",
    ctaText: "Inquire On Desk"
  },
  {
    id: "aviation-concierge",
    title: "White-Glove Aviation & Concierge",
    shortDesc: "Direct private jet charter landings at regional airfields, yacht berth reservations, fine art transport insurance, and security personnel.",
    fullDesc: "Synchronizing international property viewings with private aviation charters, maritime berthing, armored ground logistics, and fine art handling.",
    icon: "Compass",
    features: [
      "Seamless airport tarmac transfers",
      "Art courier security protocols",
      "Immediate turn-key residence staging"
    ],
    ctaLink: "contact.html?service=concierge",
    ctaText: "Inquire On Desk"
  }
];

// ------------------------------------------------------------------------------
// CLIENT TESTIMONIALS
// ------------------------------------------------------------------------------
const TESTIMONIALS_DATA = [
  {
    id: "t-1",
    clientName: "Julian & Vivienne Sterling",
    role: "Founders, Sterling Capital Partners",
    location: "Beverly Hills, CA",
    quote: "Propertis Orbanta handled our off-market purchase of the Bel-Air architectural villa with utmost precision. Their discretion, speed, and architectural appreciation set the benchmark.",
    rating: 5,
    avatar: "images/agents/elena-rostova.jpg",
    propertyPurchased: "The Ridgeview Residence, $18.5M"
  },
  {
    id: "t-2",
    clientName: "Dr. Marcus Vance",
    role: "Tech Executive & Philanthropist",
    location: "Miami Beach, FL",
    quote: "Selling a $24M waterfront compound demands an agency that commands genuine respect among global buyers. Propertis Orbanta closed the sale in 28 days at 98% of ask.",
    rating: 5,
    avatar: "images/agents/julian-montgomery.jpg",
    propertyPurchased: "Palmetto Point Waterfront, $23.8M"
  },
  {
    id: "t-3",
    clientName: "Elena Rostova",
    role: "Art Collector & Industrialist",
    location: "Manhattan, NY",
    quote: "Finding a gallery-grade penthouse with 14-foot ceilings and private elevator access in Tribeca seemed impossible until the Propertis Orbanta team presented a private whisper listing.",
    rating: 5,
    avatar: "images/agents/elena-rostova.jpg",
    propertyPurchased: "Tribeca Sky Gallery Duplex, $14.2M"
  }
];

// ------------------------------------------------------------------------------
// FREQUENTLY ASKED QUESTIONS (FAQS)
// ------------------------------------------------------------------------------
const FAQS_DATA = [
  {
    id: "faq-1",
    question: "How do you safeguard client privacy during an off-market disposition?",
    answer: "We mandate vetted bilateral non-disclosure agreements prior to distributing any property address, interior photography, or owner details. Property showings are conducted with private security escorts, and no photography is permitted during private viewings."
  },
  {
    id: "faq-2",
    question: "Can you facilitate acquisitions through blind trusts or offshore entities?",
    answer: "Yes. Over 60% of our high-value transactions utilize specialized holding vehicles, including Delaware LLCs, Wyoming Statutory Trusts, and international holding companies. Our senior advisors collaborate directly with your family office legal counsel and private bankers."
  },
  {
    id: "faq-3",
    question: "What is the typical timeframe for matching an off-market property?",
    answer: "Because of our pre-vetted buyer syndicate, our historical average from private whisper listing to signed contract is 18 days for properties priced between $15M and $45M."
  },
  {
    id: "faq-4",
    question: "Do you represent clients in cross-border acquisitions outside the United States?",
    answer: "Yes. Through our international syndicate partners, we co-advise on acquisitions in London, Zurich, Lake Como, the French Riviera, and Dubai, offering unified fiduciary oversight across your entire global residential portfolio."
  }
];

// ------------------------------------------------------------------------------
// PRIVATE AGENTS & ADVISORS ROSTER
// ------------------------------------------------------------------------------
const AGENTS_DATA = [
  {
    id: "agent-1",
    name: "Victoria Vance",
    title: "Directora Gerente, Propiedades Privadas",
    position: "Sede principal Quito y Cumbayá",
    bio: "Con más de 18 años de especialización en propiedades legendarias, íconos arquitectónicos de mediados de siglo y ventas confidenciales fuera de mercado, Victoria se ha mantenido entre las principales asesoras de lujo de la región.",
    experienceYears: 18,
    propertiesHandled: 48,
    totalSales: "$120M+",
    phone: "+593 990095001",
    email: "victoria.vance@example.com",
    image: "images/agents/victoria-vance.jpg",
    specialties: [
      "Refugios arquitectónicos",
      "Propiedades confidenciales fuera de mercado",
      "Asesoría a figuras públicas y family offices"
    ],
    languages: ["Inglés", "Francés"],
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "agent-2",
    name: "Julian Montgomery",
    title: "Vicepresidente Senior, Lujo en Guayaquil",
    position: "Sede principal Guayaquil",
    bio: "Julian ofrece un servicio de corretaje de máxima distinción en las casas más históricas del centro de Guayaquil, los penthouses del Malecón y las torres de lujo de Puerto Santa Ana. Es un confidente de confianza para clientes privados, fundadores y coleccionistas.",
    experienceYears: 15,
    propertiesHandled: 36,
    totalSales: "$95M+",
    phone: "+593 990095002",
    email: "julian.montgomery@example.com",
    image: "images/agents/julian-montgomery.jpg",
    specialties: [
      "Penthouses exclusivos",
      "Casas patrimoniales restauradas",
      "Sindicación inmobiliaria comercial"
    ],
    languages: ["Inglés", "Alemán"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "agent-3",
    name: "Camilla Valente",
    title: "Socia, División de Patrimonio y Riberas",
    position: "Cuenca y el Austro",
    bio: "Nativa del Austro ecuatoriano, Camilla combina un profundo conocimiento del patrimonio arquitectónico con una gran agudeza en el mercado de lujo de casonas históricas y residencias a orillas del río Tomebamba.",
    experienceYears: 14,
    propertiesHandled: 42,
    totalSales: "$110M+",
    phone: "+593 990095003",
    email: "camilla.valente@example.com",
    image: "images/agents/camilla-valente.jpg",
    specialties: [
      "Casonas patrimoniales restauradas",
      "Residencias junto al río Tomebamba",
      "Haciendas y quintas del Austro"
    ],
    languages: ["Inglés", "Español", "Italiano"],
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "agent-4",
    name: "Harrison Brooks",
    title: "Director, Propiedades de Montaña y Ecuestres",
    position: "Oficina de Ambato y Tungurahua",
    bio: "Especialista en haciendas patrimoniales, refugios de montaña y propiedades ecuestres en la Sierra central del Ecuador. El enfoque pausado y basado en datos de Harrison es muy valorado por los inversionistas privados.",
    experienceYears: 16,
    propertiesHandled: 29,
    totalSales: "$88M+",
    phone: "+593 990095004",
    email: "harrison.brooks@example.com",
    image: "images/agents/harrison-brooks.jpg",
    specialties: [
      "Refugios de montaña con vista a volcanes",
      "Terrenos ecuestres",
      "Haciendas y reservas privadas"
    ],
    languages: ["Inglés"],
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "agent-5",
    name: "Elena Rostova",
    title: "Socia Senior, Mesa de Asesoría Europea",
    position: "Enlace Ginebra, Londres y Quito",
    bio: "Elena gestiona adquisiciones y asignaciones de capital transfronterizas para fiduciarios europeos y coleccionistas internacionales que buscan adquirir propiedades emblemáticas en Ecuador.",
    experienceYears: 20,
    propertiesHandled: 54,
    totalSales: "$145M+",
    phone: "+593 990095005",
    email: "elena.rostova@example.com",
    image: "images/agents/elena-rostova.jpg",
    specialties: [
      "Asesoría soberana transfronteriza",
      "Linaje arquitectónico histórico",
      "Integración de galerías de arte privadas"
    ],
    languages: ["Inglés", "Ruso", "Francés"],
    social: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "agent-6",
    name: "Sterling Chen",
    title: "Director, Arquitectura Moderna y Sostenible",
    position: "Valle de Tumbaco y Quito",
    bio: "Formado en la Escuela de Arquitectura del MIT, Sterling posee un conocimiento técnico poco común en ingeniería de alto rendimiento con cero emisiones, construcción en voladizo sobre laderas y minimalismo moderno.",
    experienceYears: 11,
    propertiesHandled: 27,
    totalSales: "$72M+",
    phone: "+593 990095006",
    email: "sterling.chen@example.com",
    image: "images/agents/sterling-chen.jpg",
    specialties: [
      "Complejos con certificación LEED Platino",
      "Ingeniería en voladizo sobre laderas",
      "Residencias de diseño biofílico"
    ],
    languages: ["Inglés", "Mandarín"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  }
];

// Helper to find an agent by ID
function getAgentById(id) {
  return AGENTS_DATA.find(a => a.id === id) || AGENTS_DATA[0];
}

// ------------------------------------------------------------------------------
// LUXURY PROPERTY LISTINGS CATALOG
// ------------------------------------------------------------------------------
const PROPERTIES_DATA = [
  {
    id: "prop-1",
    title: "Villa Mirador de Cumbayá",
    slug: "villa-mirador-de-cumbaya",
    price: 28500000,
    formattedPrice: "$28,500,000",
    status: "for-sale",
    propertyType: "Modernist Villa",
    bedrooms: 6,
    bathrooms: 8,
    squareFeet: 11400,
    lotSize: "1,4 acres",
    yearBuilt: 2024,
    address: "Calle de los Cipreses 840",
    city: "Quito",
    state: "Pichincha",
    zipCode: "170157",
    description: "Residencia minuciosamente diseñada por un reconocido arquitecto modernista. Cuenta con pabellones de agua que integran interior y exterior, muros de vidrio suizo motorizados de piso a techo, una piscina infinita en voladizo de 23 metros con vista panorámica de la ciudad a los volcanes y una galería subterránea para 6 vehículos con plataforma giratoria.",
    heroImage: "images/properties/property-01.jpg",
    images: [
      "images/properties/property-01.jpg",
      "images/properties/property-02.jpg",
      "images/properties/property-03.jpg",
      "images/properties/property-04.jpg",
      "images/properties/property-05.jpg"
    ],
    features: [
      "Piscina de horizonte infinito",
      "Galería subterránea para 6 vehículos",
      "Bodega de vinos con control de temperatura",
      "Caseta de guardia privada y doble acceso",
      "Cocina Dornbracht y Boffi",
      "Domótica Crestron integrada"
    ],
    featured: true,
    coordinates: { lat: -0.2002, lng: -78.4358 },
    agent: getAgentById("agent-1")
  },
  {
    id: "prop-2",
    title: "Penthouse Dúplex Malecón Sky",
    slug: "penthouse-duplex-malecon-sky",
    price: 19800000,
    formattedPrice: "$19,800,000",
    status: "for-sale",
    propertyType: "Penthouse",
    bedrooms: 4,
    bathrooms: 5,
    squareFeet: 7200,
    lotSize: "Azotea privada (167 m²)",
    yearBuilt: 2023,
    address: "Av. Francisco de Orellana y Justino Cornejo, PH-B",
    city: "Guayaquil",
    state: "Guayas",
    zipCode: "090505",
    description: "Extraordinario penthouse dúplex en lo alto de una de las torres más celebradas de Guayaquil. El ascensor se abre directamente a un salón de doble altura de 12 metros con ventanales de piso a techo y vistas al río Guayas, y a una terraza privada con jardín, cocina exterior y jacuzzi climatizado.",
    heroImage: "images/properties/property-06.jpg",
    images: [
      "images/properties/property-06.jpg",
      "images/properties/property-07.jpg",
      "images/properties/property-08.jpg",
      "images/properties/property-09.jpg"
    ],
    features: [
      "Acceso directo en ascensor con llave",
      "Terraza privada con jardín en la azotea",
      "Jacuzzi privado en la terraza",
      "Baños en mármol Calacatta Vagli",
      "Conserjería y portero las 24 horas",
      "Bodega privada escriturada"
    ],
    featured: true,
    coordinates: { lat: -2.1709, lng: -79.9224 },
    agent: getAgentById("agent-2")
  },
  {
    id: "prop-3",
    title: "Villa Palma frente al río en Samborondón",
    slug: "villa-palma-frente-al-rio",
    price: 34000000,
    formattedPrice: "$34,000,000",
    status: "for-sale",
    propertyType: "Waterfront Compound",
    bedrooms: 7,
    bathrooms: 9,
    squareFeet: 12800,
    lotSize: "0,85 acres / 30 m de frente al río",
    yearBuilt: 2024,
    address: "Km 5, Vía Samborondón",
    city: "Guayaquil",
    state: "Guayas",
    zipCode: "092301",
    description: "Ubicada en la prestigiosa vía Samborondón, con orientación oeste hacia el río y atardeceres abiertos. Cuenta con 30 metros de muelle reforzado para atracar un yate de 40 metros. Destacan los patios de travertino italiano, espejos de agua, un spa de bienestar completo y un pabellón de huéspedes independiente de 2 habitaciones.",
    heroImage: "images/properties/property-10.jpg",
    images: [
      "images/properties/property-10.jpg",
      "images/properties/property-11.jpg",
      "images/properties/property-12.jpg",
      "images/properties/property-13.jpg"
    ],
    features: [
      "Muelle privado de 30 m con elevador de yates",
      "Suite de bienestar con vapor y sauna",
      "Vestidores principales Poliform a medida",
      "Perímetro de seguridad completo con cámaras",
      "Villa de huéspedes independiente de dos habitaciones",
      "Cocina de servicio profesional Sub-Zero y Wolf"
    ],
    featured: true,
    coordinates: { lat: -2.1000, lng: -79.8600 },
    agent: getAgentById("agent-3")
  },
  {
    id: "prop-4",
    title: "El Refugio de Montaña de Ambato",
    slug: "refugio-de-montana-de-ambato",
    price: 24500000,
    formattedPrice: "$24,500,000",
    status: "for-sale",
    propertyType: "Alpine Chalet",
    bedrooms: 5,
    bathrooms: 7,
    squareFeet: 9100,
    lotSize: "2,8 acres privados de bosque",
    yearBuilt: 2022,
    address: "Vía a Pilahuín, km 4",
    city: "Ambato",
    state: "Tungurahua",
    zipCode: "180150",
    description: "Ubicada en las faldas de la sierra de Ambato, con vistas despejadas al Chimborazo y al volcán Tungurahua. Obra maestra arquitectónica con vigas de madera talladas a mano, piedra volcánica local, muros cortina de vidrio triple y un patio de vehículos cubierto.",
    heroImage: "images/properties/property-14.jpg",
    images: [
      "images/properties/property-14.jpg",
      "images/properties/property-02.jpg",
      "images/properties/property-05.jpg"
    ],
    features: [
      "Acceso empedrado y vestidor de montaña",
      "Sala panorámica exterior con fogata",
      "Suite principal con vista al Chimborazo",
      "Piscina interior de largos y tina de agua fría",
      "Audio y video Crestron profesional",
      "Acceso directo a senderos de montaña"
    ],
    featured: false,
    coordinates: { lat: -1.2417, lng: -78.6267 },
    agent: getAgentById("agent-4")
  },
  {
    id: "prop-5",
    title: "Residencia Contemporánea Tomebamba",
    slug: "residencia-contemporanea-tomebamba",
    price: 45000,
    formattedPrice: "$45,000 / mes",
    status: "for-rent",
    propertyType: "Contemporary Residence",
    bedrooms: 4,
    bathrooms: 5,
    squareFeet: 5600,
    lotSize: "18 m de frente al río",
    yearBuilt: 2023,
    address: "Av. Paseo de los Cañaris 220",
    city: "Cuenca",
    state: "Azuay",
    zipCode: "010107",
    description: "Ubicada junto al río Tomebamba, a pocos minutos del centro histórico de Cuenca. Esta residencia recién terminada se abre por completo a una terraza de ipé que domina el río. Incluye acceso privado a la ribera, terraza para cócteles al atardecer y persianas automatizadas.",
    heroImage: "images/properties/property-15.jpg",
    images: [
      "images/properties/property-15.jpg",
      "images/properties/property-03.jpg",
      "images/properties/property-04.jpg"
    ],
    features: [
      "Acceso privado directo a la ribera",
      "Amplia terraza de ipé frente al río",
      "Persianas solares automatizadas",
      "Cocina de chef Miele y Gaggenau",
      "Jardín con ducha exterior y zona de bienestar",
      "Interiores totalmente amoblados, listos para habitar"
    ],
    featured: false,
    coordinates: { lat: -2.9001, lng: -79.0059 },
    agent: getAgentById("agent-1")
  },
  {
    id: "prop-6",
    title: "La Residencia Sky de La Carolina",
    slug: "residencia-sky-la-carolina",
    price: 65000,
    formattedPrice: "$65,000 / mes",
    status: "for-rent",
    propertyType: "Hotel Residence",
    bedrooms: 3,
    bathrooms: 4,
    squareFeet: 4800,
    lotSize: "Balcón privado",
    yearBuilt: 2022,
    address: "Av. Naciones Unidas y Av. de los Shyris, Residencia 24A",
    city: "Quito",
    state: "Pichincha",
    zipCode: "170135",
    description: "Residencia en esquina de la torre, en el piso 24 frente al parque La Carolina y con vistas a los volcanes. Los residentes disfrutan de servicio a la habitación de nivel hotelero, acceso prioritario a un spa de primer nivel, una piscina interior de 23 metros y servicio personal de mayordomo.",
    heroImage: "images/properties/property-07.jpg",
    images: [
      "images/properties/property-07.jpg",
      "images/properties/property-08.jpg",
      "images/properties/property-09.jpg"
    ],
    features: [
      "Vistas despejadas al parque La Carolina",
      "Todos los servicios de la torre hotelera",
      "Valet y conserjería privados",
      "Servicio de mayordomo dedicado incluido",
      "Acceso a spa y gimnasio de última generación",
      "Mobiliario Christian Liaigre a medida"
    ],
    featured: false,
    coordinates: { lat: -0.1807, lng: -78.4840 },
    agent: getAgentById("agent-2")
  }
];

// Helper to find a property by ID or Slug
function getPropertyById(id) {
  return PROPERTIES_DATA.find(p => p.id === id || p.slug === id) || PROPERTIES_DATA[0];
}

// Attach all data structures to window
window.NAVIGATION_DATA = NAVIGATION_DATA;
window.STATS_DATA = STATS_DATA;
window.SERVICES_DATA = SERVICES_DATA;
window.TESTIMONIALS_DATA = TESTIMONIALS_DATA;
window.FAQS_DATA = FAQS_DATA;
window.AGENTS_DATA = AGENTS_DATA;
window.PROPERTIES_DATA = PROPERTIES_DATA;
window.getPropertyById = getPropertyById;
window.getAgentById = getAgentById;
