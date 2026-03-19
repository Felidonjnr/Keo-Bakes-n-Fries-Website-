/**
 * Keo Bakes n' Fries - Content Data
 * Edit this file to change images, text, and categories.
 */

export const BRAND_INFO = {
  name: "Keo Bakes n' Fries",
  tagline: "Uyo's #1 Destination for Premium Small Chops",
  location: "Uyo, Akwa Ibom State",
  phone1: "0706 801 0041",
  phone2: "0706 801 0041",
  whatsapp: "2347068010041",
  email: "mailchiomzy@gmail.com",
  instagram: "https://www.facebook.com/share/17rZvnsGzz/?mibextid=wwXIfr",
  facebook: "https://www.facebook.com/share/17rZvnsGzz/?mibextid=wwXIfr",
  tiktok: "https://www.tiktok.com/@keobakesnfries?_r=1&_t=ZS-94o8WXWDqa7",
  logoEmoji: null,
  logoUrl: "https://res.cloudinary.com/drcroxtgs/image/upload/v1773864791/IMG-20260313-WA0056_jhryye.jpg", // User provided logo
  whatsappMessage: "Hello Keo Bakes n' Fries! I'd like to make an enquiry about your premium small chops and catering services."
};

export const SIGNATURE_PRODUCTS = [
  { 
    id: 1, 
    name: "Puff Puff", 
    badge: "Uyo's Favourite", 
    description: "Soft, golden, perfectly sweet fried dough balls. A classic staple for every Uyo gathering.", 
    image: "https://res.cloudinary.com/drcroxtgs/image/upload/v1773866300/369331_uydkok.jpg" 
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
    image: "https://res.cloudinary.com/drcroxtgs/image/upload/v1773866303/image-34_oityii.jpg" 
  },
  { 
    id: 4, 
    name: "Corn Dogs", 
    description: "Juicy sausages in golden cornmeal batter. A modern favorite for the Uyo youth.", 
    image: "https://res.cloudinary.com/drcroxtgs/image/upload/v1773870072/image-43_bfdynf.jpg" 
  },
  { 
    id: 5, 
    name: "Meat Pies", 
    badge: "Oven Fresh", 
    description: "Flaky buttery pastry with seasoned filling. The ultimate comfort snack.", 
    image: "https://res.cloudinary.com/drcroxtgs/image/upload/v1773870066/image-39_e7whsv.jpg" 
  },
  { 
    id: 6, 
    name: "Assorted Trays", 
    badge: "Event Ready", 
    description: "The ultimate variety tray for your events. Samosas, spring rolls, puff puff, and more.", 
    image: "https://res.cloudinary.com/drcroxtgs/image/upload/v1773864786/IMG-20260313-WA0064_lf5kzd.jpg" 
  },
];

export const MENU_CATEGORIES = [
  {
    id: "small-chops",
    name: "Small Chops",
    items: [
      { name: "Classic Samosas", description: "Crispy triangular pastries, seasoned meat & vegetables.", image: "https://res.cloudinary.com/drcroxtgs/image/upload/v1773870838/368329_zjmzeo.jpg" },
      { name: "Puff Puff (Regular)", description: "Warm, golden-fried dough balls. Timeless staple.", image: "https://res.cloudinary.com/drcroxtgs/image/upload/v1773864785/IMG-20260313-WA0061_ppyskx.jpg" },
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
  { src: "https://res.cloudinary.com/drcroxtgs/image/upload/v1773864785/IMG-20260313-WA0063_jeccts.jpg", span: "col-span-2 row-span-2", title: "Signature Puff Puff" },
  { src: "https://res.cloudinary.com/drcroxtgs/image/upload/v1773864784/IMG-20260313-WA0065_gac8xd.jpg", span: "col-span-1 row-span-1", title: "Crispy Samosas" },
  { src: "https://res.cloudinary.com/drcroxtgs/image/upload/v1773864786/IMG-20260313-WA0060_yzqics.jpg", span: "col-span-1 row-span-1", title: "Fresh Spring Rolls" },
  { src: "https://res.cloudinary.com/drcroxtgs/image/upload/v1773864790/IMG-20260313-WA0057_oqok8v.jpg", span: "col-span-2 row-span-1", title: "Golden Corn Dogs" },
  { src: "https://res.cloudinary.com/drcroxtgs/image/upload/v1773864785/IMG-20260313-WA0063_jeccts.jpg", span: "col-span-1 row-span-1", title: "Meat Pie Perfection" },
];
