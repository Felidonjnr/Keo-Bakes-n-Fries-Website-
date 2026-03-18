/**
 * Keo Bakes n' Fries - Content Data
 * Edit this file to change images, text, and categories.
 */

export const BRAND_INFO = {
  name: "Keo Bakes n' Fries",
  tagline: "Uyo's #1 Destination for Premium Small Chops",
  location: "Uyo, Akwa Ibom State",
  phone1: "0808 807 3411",
  phone2: "0706 801 0041",
  whatsapp: "2348088073411",
  email: "keobakesnfries@gmail.com",
  instagram: "https://instagram.com/keobakesnfries",
  facebook: "https://facebook.com/keobakesnfries",
  logoEmoji: "🥟",
  logoUrl: null // Replace with your logo URL like "https://your-site.com/logo.png"
};

export const SIGNATURE_PRODUCTS = [
  { 
    id: 1, 
    name: "Puff Puff", 
    badge: "Uyo's Favourite", 
    description: "Soft, golden, perfectly sweet fried dough balls. A classic staple for every Uyo gathering.", 
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 2, 
    name: "Samosas", 
    badge: "Crispy & Spiced", 
    description: "Crispy triangular pastries, spiced minced meat & vegetables. The perfect crunch.", 
    image: "https://images.unsplash.com/photo-1601050633647-81a35d377a86?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 3, 
    name: "Spring Rolls", 
    description: "Light, crispy rolls with savoury fillings. A party essential in Akwa Ibom.", 
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 4, 
    name: "Corn Dogs", 
    description: "Juicy sausages in golden cornmeal batter. A modern favorite for the Uyo youth.", 
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 5, 
    name: "Meat Pies", 
    badge: "Oven Fresh", 
    description: "Flaky buttery pastry with seasoned filling. The ultimate comfort snack.", 
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 6, 
    name: "Assorted Trays", 
    badge: "Event Ready", 
    description: "The ultimate variety tray for your events. Samosas, spring rolls, puff puff, and more.", 
    image: "https://images.unsplash.com/photo-1601050633647-81a35d377a86?auto=format&fit=crop&q=80&w=800" 
  },
];

export const MENU_CATEGORIES = [
  {
    id: "small-chops",
    name: "Small Chops",
    items: [
      { name: "Classic Samosas", description: "Crispy triangular pastries, seasoned meat & vegetables.", image: "https://images.unsplash.com/photo-1601050633647-81a35d377a86?auto=format&fit=crop&q=80&w=400" },
      { name: "Puff Puff (Regular)", description: "Warm, golden-fried dough balls. Timeless staple.", image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=400" },
      { name: "Spring Rolls", description: "Delicate crispy rolls, savoury fillings, perfectly seasoned.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400" },
    ]
  },
  {
    id: "combo-packs",
    name: "Combo Packs",
    items: [
      { name: "The Uyo Special", description: "A curated mix of our best-selling small chops.", image: "https://images.unsplash.com/photo-1601050633647-81a35d377a86?auto=format&fit=crop&q=80&w=400" },
      { name: "Family Feast", description: "Large assortment for family gatherings and weekend treats.", image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=400" },
    ]
  },
  {
    id: "catering",
    name: "Event Catering",
    items: [
      { name: "Corporate Package", description: "Office events, product launches, and conferences in Uyo.", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400" },
      { name: "Wedding Package", description: "Elegant small chops with on-site frying service for your big day.", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400" },
    ]
  }
];

export const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1601050633647-81a35d377a86?auto=format&fit=crop&q=80&w=1200", span: "col-span-2 row-span-2", title: "Event Setup" },
  { src: "https://images.unsplash.com/photo-1601050633647-81a35d377a86?auto=format&fit=crop&q=80&w=600", span: "col-span-1 row-span-1", title: "Fresh Samosas" },
  { src: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=600", span: "col-span-1 row-span-1", title: "Golden Puff Puff" },
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800", span: "col-span-2 row-span-1", title: "Spring Roll Platter" },
  { src: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=600", span: "col-span-1 row-span-1", title: "Meat Pies" },
  { src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600", span: "col-span-1 row-span-1", title: "Hygienic Prep" },
];
