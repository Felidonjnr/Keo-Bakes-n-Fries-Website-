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
  logoEmoji: null,
  logoUrl: "https://res.cloudinary.com/drcroxtgs/image/upload/v1773864791/IMG-20260313-WA0056_jhryye.jpg" // User provided logo
};

export const SIGNATURE_PRODUCTS = [
  { 
    id: 1, 
    name: "Puff Puff", 
    badge: "Uyo's Favourite", 
    description: "Soft, golden, perfectly sweet fried dough balls. A classic staple for every Uyo gathering.", 
    image: "input_file_0.png" 
  },
  { 
    id: 2, 
    name: "Samosas", 
    badge: "Crispy & Spiced", 
    description: "Crispy triangular pastries, spiced minced meat & vegetables. The perfect crunch.", 
    image: "input_file_1.png" 
  },
  { 
    id: 3, 
    name: "Spring Rolls", 
    description: "Light, crispy rolls with savoury fillings. A party essential in Akwa Ibom.", 
    image: "input_file_2.png" 
  },
  { 
    id: 4, 
    name: "Corn Dogs", 
    description: "Juicy sausages in golden cornmeal batter. A modern favorite for the Uyo youth.", 
    image: "input_file_3.png" 
  },
  { 
    id: 5, 
    name: "Meat Pies", 
    badge: "Oven Fresh", 
    description: "Flaky buttery pastry with seasoned filling. The ultimate comfort snack.", 
    image: "input_file_4.png" 
  },
  { 
    id: 6, 
    name: "Assorted Trays", 
    badge: "Event Ready", 
    description: "The ultimate variety tray for your events. Samosas, spring rolls, puff puff, and more.", 
    image: "input_file_5.png" 
  },
];

export const MENU_CATEGORIES = [
  {
    id: "small-chops",
    name: "Small Chops",
    items: [
      { name: "Classic Samosas", description: "Crispy triangular pastries, seasoned meat & vegetables.", image: "input_file_1.png" },
      { name: "Puff Puff (Regular)", description: "Warm, golden-fried dough balls. Timeless staple.", image: "input_file_0.png" },
      { name: "Spring Rolls", description: "Delicate crispy rolls, savoury fillings, perfectly seasoned.", image: "input_file_2.png" },
    ]
  },
  {
    id: "combo-packs",
    name: "Combo Packs",
    items: [
      { name: "The Uyo Special", description: "A curated mix of our best-selling small chops.", image: "input_file_6.png" },
      { name: "Family Feast", description: "Large assortment for family gatherings and weekend treats.", image: "input_file_7.png" },
    ]
  },
  {
    id: "catering",
    name: "Event Catering",
    items: [
      { name: "Corporate Package", description: "Office events, product launches, and conferences in Uyo.", image: "input_file_8.png" },
      { name: "Wedding Package", description: "Elegant small chops with on-site frying service for your big day.", image: "input_file_9.png" },
    ]
  }
];

export const GALLERY_IMAGES = [
  { src: "input_file_0.png", span: "col-span-2 row-span-2", title: "Signature Puff Puff" },
  { src: "input_file_1.png", span: "col-span-1 row-span-1", title: "Crispy Samosas" },
  { src: "input_file_2.png", span: "col-span-1 row-span-1", title: "Fresh Spring Rolls" },
  { src: "input_file_3.png", span: "col-span-2 row-span-1", title: "Golden Corn Dogs" },
  { src: "input_file_4.png", span: "col-span-1 row-span-1", title: "Meat Pie Perfection" },
  { src: "input_file_5.png", span: "col-span-1 row-span-1", title: "Assorted Platter" },
  { src: "input_file_6.png", span: "col-span-1 row-span-1", title: "Event Catering" },
  { src: "input_file_7.png", span: "col-span-1 row-span-1", title: "Party Packs" },
  { src: "input_file_8.png", span: "col-span-2 row-span-2", title: "Corporate Setup" },
  { src: "input_file_9.png", span: "col-span-1 row-span-1", title: "Wedding Special" },
  { src: "input_file_10.png", span: "col-span-1 row-span-1", title: "Freshly Fried" },
  { src: "input_file_11.png", span: "col-span-2 row-span-1", title: "Small Chops Variety" },
  { src: "input_file_12.png", span: "col-span-1 row-span-1", title: "Brand Logo" },
];
