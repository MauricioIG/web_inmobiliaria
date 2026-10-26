/**
 * ==============================================================================
 * Propertis Orbanta – Global Site Configuration (js/config.js)
 * ==============================================================================
 * 
 * Commercial Template Buyers:
 * This is your primary configuration file. Edit the values below to instantly
 * rebrand the website, update phone numbers, office addresses, emails, social links,
 * and visual theme accents across ALL pages.
 * 
 * You do NOT need any build step, npm, or framework to customize this template.
 * Simply edit this file and reload your browser!
 */

const CONFIG = {
  // ----------------------------------------------------------------------------
  // BRAND & BROKERAGE IDENTITY
  // ----------------------------------------------------------------------------
  brand: {
    name: "Propertis Orbanta",
    legalName: "Propertis Orbanta Bienes Raíces de Lujo",
    logoText: "EN",                         // 2-character monogram displayed in logo badge
    logoImage: "images/logo.svg",           // Path to your custom image logo (optional)
    favicon: "images/favicon.svg",
    tagline: "Elegancia arquitectónica y vida de lujo excepcional",
    shortDescription: "Seleccionamos las residencias más distinguidas, propiedades costeras y refugios arquitectónicos modernos para una clientela exigente.",
    foundedYear: 2014,
    licenseNumber: "RUC 1790000000001",         // Real estate brokerage license number
    brokerageName: "Propertis Orbanta Private Client Advisory",
  },

  // ----------------------------------------------------------------------------
  // PRIMARY CONTACT DETAILS
  // ----------------------------------------------------------------------------
  contact: {
    phone: "+593 990095013",
    phoneDisplay: "+593 990095013",
    directPhone: "+593 990095020",
    email: "info@example.com",
    salesEmail: "inquiries@example.com",
    pressEmail: "press@example.com",
    address: "Av. República de El Salvador N36-84 y Naciones Unidas, oficina 400",
    city: "Quito",
    state: "Pichincha",
    zipCode: "170135",
    country: "Ecuador",
    officeHours: "Lunes a sábado: 9:00 – 18:00 | Domingo: con cita previa",
    
    // MAP INTEGRATION:
    // To display a live interactive Google Map on contact.html, paste your embed iframe URL here:
    // Example: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305..."
    googleMapsEmbedUrl: "",
    // Optional Google Maps or Mapbox API Key (if using dynamic JavaScript maps API)
    googleMapsApiKey: "",
  },

  // ----------------------------------------------------------------------------
  // REGIONAL FLAGSHIP DESKS / SALONS
  // ----------------------------------------------------------------------------
  offices: [
    {
      city: "Quito",
      tagline: "Sede principal",
      address: "Av. República de El Salvador N36-84 y Naciones Unidas, oficina 400",
      cityStateZip: "Quito, Pichincha 170135",
      phone: "+593 990095010",
      email: "quito@example.com",
      hours: "Lun – Sáb: 9:00 – 18:00",
      coordinates: "0.1807° S, 78.4678° W",
      isHeadquarters: true,
    },
    {
      city: "Guayaquil",
      tagline: "Salón Guayaquil",
      address: "Av. Francisco de Orellana y Justino Cornejo, piso 14",
      cityStateZip: "Guayaquil, Guayas 090505",
      phone: "+593 990095020",
      email: "guayaquil@example.com",
      hours: "Lun – Vie: 9:00 – 18:00",
      coordinates: "2.1709° S, 79.9224° W",
      isHeadquarters: false,
    },
    {
      city: "Cuenca",
      tagline: "Oficina Cuenca y Austro",
      address: "Av. Ordóñez Lasso y Av. de las Américas, oficina 800",
      cityStateZip: "Cuenca, Azuay 010107",
      phone: "+593 990095021",
      email: "cuenca@example.com",
      hours: "Lun – Sáb: 9:00 – 18:00",
      coordinates: "2.9001° S, 79.0059° W",
      isHeadquarters: false,
    },
    {
      city: "Ambato",
      tagline: "Oficina Ambato y Sierra central",
      address: "Av. Los Chasquis y Rodrigo Pachano, oficina 200",
      cityStateZip: "Ambato, Tungurahua 180150",
      phone: "+593 990095022",
      email: "ambato@example.com",
      hours: "Todos los días: 9:00 – 17:00",
      coordinates: "1.2417° S, 78.6267° W",
      isHeadquarters: false,
    }
  ],

  // ----------------------------------------------------------------------------
  // SOCIAL MEDIA CHANNELS
  // ----------------------------------------------------------------------------
  socialLinks: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },

  // ----------------------------------------------------------------------------
  // WEBSITE URL & CANONICAL HOST
  // ----------------------------------------------------------------------------
  websiteUrl: "https://estatenova.example.com",

  // ----------------------------------------------------------------------------
  // SEARCH ENGINE OPTIMIZATION (SEO) DEFAULTS
  // ----------------------------------------------------------------------------
  seo: {
    defaultTitle: "Propertis Orbanta | Bienes Raíces de Lujo y Propiedades Arquitectónicas Exclusivas",
    titleTemplate: "%s | Propertis Orbanta Bienes Raíces de Lujo",
    defaultDescription: "Representamos residencias arquitectónicas de lujo, penthouses modernos y propiedades privadas en los destinos más codiciados del mundo.",
    defaultKeywords: "bienes raíces de lujo, casas arquitectónicas, villas modernas, propiedades privadas, penthouses, casas de lujo en Quito, penthouses en Guayaquil, propiedades en Cuenca y Ambato",
    ogImage: "images/properties/property-01.jpg",
    author: "Propertis Orbanta Bienes Raíces de Lujo",
  },

  // ----------------------------------------------------------------------------
  // THEME & COLOR CUSTOMIZATION
  // ----------------------------------------------------------------------------
  // Modify these hex codes to adjust the theme accent colors across the template.
  // The JavaScript controller automatically syncs these values with CSS variables.
  theme: {
    accentColor: "#9a7430",        // Primary warm gold / amber accent (buttons, badges)
    accentHover: "#b08a3e",        // Accent hover state
    accentGold: "#d9b872",         // Monogram & badge bright gold
    primaryDark: "#0b1f33",        // Obsidian dark background / stone 950
    secondaryDark: "#0f2a43",      // Dark surface / stone 900
    bgLight: "#fafaf9",            // Light background / stone 50
    textDark: "#0f2a43",           // Dark text
    textLight: "#f5f5f4",          // Light text
    fontBrand: "'Cinzel', serif",
    fontSerif: "'Playfair Display', Georgia, serif",
    fontSans: "'Plus Jakarta Sans', -apple-system, sans-serif",
  },

  // ----------------------------------------------------------------------------
  // FOOTER CONTENT
  // ----------------------------------------------------------------------------
  footer: {
    newsletterTitle: "El Diario Monograph",
    newsletterSubtitle: "Recibe cada trimestre análisis de mercado y propiedades exclusivas fuera de mercado reservadas para compradores acreditados.",
    copyrightText: "© 2026 Propertis Orbanta Bienes Raíces de Lujo. Todos los derechos reservados.",
    complianceNotice: "Todo el material presentado aquí es solo informativo.",
  }
};

// Make CONFIG accessible globally in the browser
window.CONFIG = CONFIG;

// Backward-compatibility alias so any code looking for SITE_CONFIG continues to function seamlessly
window.SITE_CONFIG = CONFIG;
