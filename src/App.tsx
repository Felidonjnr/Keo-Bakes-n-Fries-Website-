import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Twitter, 
  ChevronDown, Star, Leaf, ShieldCheck, Star as StarIcon, 
  Cake, Boxes, Handshake, FireExtinguisher, Package, 
  ChefHat, ClipboardList, Truck, Upload, Search, 
  MessageCircle, ShoppingBag, ArrowRight, Play, Heart,
  Video
} from 'lucide-react';

// Custom TikTok Icon
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// --- Data Import ---
import { 
  BRAND_INFO, 
  SIGNATURE_PRODUCTS, 
  MENU_CATEGORIES, 
  GALLERY_IMAGES 
} from './data';

// --- Types ---
interface OrderItem {
  name: string;
  quantity: number;
}

// --- Components ---

const Navbar = ({ orderCount }: { orderCount: number }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Specialties', href: '#products' },
    { name: 'Menu', href: '#menu' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-charcoal/95 backdrop-blur-xl py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className={`w-10 h-10 ${BRAND_INFO.logoUrl ? 'bg-transparent' : 'bg-gold shadow-lg shadow-gold/20'} rounded-xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform duration-300 overflow-hidden`}>
            {BRAND_INFO.logoUrl ? (
              <img 
                src={BRAND_INFO.logoUrl} 
                alt={BRAND_INFO.name} 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            ) : BRAND_INFO.logoEmoji ? (
              BRAND_INFO.logoEmoji
            ) : (
              <ChefHat className="text-white" size={24} />
            )}
          </div>
          <div>
            <h1 className="text-white font-display font-bold text-xl leading-none tracking-tight">{BRAND_INFO.name}</h1>
            <p className="text-gold text-[9px] uppercase font-black tracking-[0.2em] mt-1 opacity-80">Premium Small Chops</p>
          </div>
        </motion.div>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a 
              key={link.name} 
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="text-white/70 hover:text-gold text-xs font-black uppercase tracking-widest transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary py-2.5 px-8 text-[10px] font-black uppercase tracking-widest flex items-center gap-2"
          >
            <ShoppingBag size={14} />
            Order List {orderCount > 0 && <span className="bg-white text-primary-red px-1.5 py-0.5 rounded-full text-[8px]">{orderCount}</span>}
          </motion.a>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <button className="text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-charcoal border-t border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-white text-xl font-display font-bold hover:text-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="btn-primary text-center py-4" onClick={() => setMobileMenuOpen(false)}>
                Place Order
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-white text-charcoal px-8 py-4 rounded-2xl shadow-2xl border-b-4 border-gold flex items-center gap-4 min-w-[300px]"
    >
      <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
        <ShoppingBag size={20} />
      </div>
      <div>
        <p className="text-xs font-black uppercase tracking-widest text-warm-gray mb-0.5">Notification</p>
        <p className="text-sm font-bold">{message}</p>
      </div>
      <button onClick={onClose} className="ml-auto text-warm-gray hover:text-charcoal transition-colors">
        <X size={16} />
      </button>
    </motion.div>
  );
};

const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-red/5 border border-primary-red/10 rounded-full text-primary-red text-[10px] font-black uppercase tracking-[0.2em] mb-6"
  >
    <span className="w-1.5 h-1.5 bg-primary-red rounded-full animate-pulse" />
    {children}
  </motion.div>
);

export default function App() {
  const [activeMenuTab, setActiveMenuTab] = useState(MENU_CATEGORIES[0].id);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [toasts, setToasts] = useState<{ id: number, message: string }[]>([]);
  const [orderList, setOrderList] = useState<OrderItem[]>([]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const addToast = (message: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const addToOrder = (name: string) => {
    setOrderList(prev => {
      const existing = prev.find(item => item.name === name);
      if (existing) {
        return prev.map(item => item.name === name ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { name, quantity: 1 }];
    });
    addToast(`${name} added to your order list!`);
  };

  const removeFromOrder = (name: string) => {
    setOrderList(prev => prev.filter(item => item.name !== name));
  };

  const generateWhatsAppMessage = () => {
    if (orderList.length === 0) return "";
    const items = orderList.map(item => `- ${item.name} (x${item.quantity})`).join('\n');
    const message = `Hello Keo Bakes n' Fries! I'd like to place an order for:\n\n${items}\n\nPlease let me know the total and delivery details. Thank you!`;
    return encodeURIComponent(message);
  };

  return (
    <div className="relative bg-white selection:bg-gold selection:text-charcoal">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gold z-[60] origin-left" style={{ scaleX }} />
      
      <Navbar orderCount={orderList.reduce((acc, item) => acc + item.quantity, 0)} />

      {/* --- Hero Section --- */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="input_file_10.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                <Star size={12} className="text-gold fill-current animate-pulse" />
                OUR PROMISE
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-display font-black leading-[0.9] mb-8 tracking-tighter">
                FRIED <br />
                <span className="text-gold italic">PERFECTLY</span> <br />
                FOR YOU.
              </h1>
              
              <p className="text-white/70 text-lg md:text-2xl max-w-2xl mb-12 leading-relaxed font-medium">
                Uyo's premier destination for premium small chops, pastries, and event catering. Experience the crunch, taste the quality.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <motion.a 
                  href="#menu" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-10 py-5 text-xs font-black uppercase tracking-widest flex items-center gap-3"
                >
                  Explore Menu <ArrowRight size={16} />
                </motion.a>
                <motion.a 
                  href="#gallery" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-white/20 transition-all flex items-center gap-3"
                >
                  View Gallery <Play size={16} className="fill-current" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Socials */}
        <div className="absolute left-10 bottom-10 hidden xl:flex flex-col gap-6 z-10">
          {[
            { Icon: Instagram, href: BRAND_INFO.instagram },
            { Icon: Facebook, href: BRAND_INFO.facebook },
            { Icon: TikTokIcon, href: BRAND_INFO.tiktok }
          ].map((item, i) => (
            <motion.a 
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-white/40 hover:text-gold transition-colors"
            >
              <item.Icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-black uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* --- Connect With Us --- */}
      <section className="py-20 bg-cream-dark border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h3 className="text-3xl font-display font-black mb-2">Connect With Us.</h3>
              <p className="text-warm-gray">Follow our journey and see what's cooking in our kitchen.</p>
            </div>
            <div className="flex items-center gap-6">
              {[
                { Icon: Facebook, href: BRAND_INFO.facebook, label: "Facebook" },
                { Icon: Instagram, href: BRAND_INFO.instagram, label: "Instagram" },
                { Icon: TikTokIcon, href: BRAND_INFO.tiktok, label: "TikTok" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-charcoal group-hover:bg-gold group-hover:text-white transition-all duration-300 shadow-xl shadow-charcoal/5">
                    <social.Icon size={24} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Signature Products --- */}
      <section id="products" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cream/30 -skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <SectionTag>Our Specialties</SectionTag>
              <h2 className="text-5xl md:text-7xl font-display font-black leading-tight">
                Uyo's Most <br />
                <span className="text-primary-red">Wanted</span> Bites.
              </h2>
            </div>
            <p className="text-warm-gray text-lg max-w-md leading-relaxed">
              Hand-crafted with love and the finest ingredients. No shortcuts, just pure deliciousness in every bite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SIGNATURE_PRODUCTS.map((product, i) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-8 shadow-2xl shadow-charcoal/10">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {product.badge && (
                    <div className="absolute top-6 left-6 bg-white text-charcoal text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-xl">
                      {product.badge}
                    </div>
                  )}

                  <button 
                    onClick={() => addToOrder(product.name)}
                    className="absolute bottom-8 right-8 w-16 h-16 bg-gold text-charcoal rounded-full flex items-center justify-center shadow-2xl translate-y-20 group-hover:translate-y-0 transition-transform duration-500 hover:bg-white"
                  >
                    <ShoppingBag size={24} />
                  </button>
                </div>
                
                <div className="px-4">
                  <h3 className="text-3xl font-display font-bold mb-3 group-hover:text-primary-red transition-colors">{product.name}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed mb-6 line-clamp-2">{product.description}</p>
                  <button 
                    onClick={() => addToOrder(product.name)}
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red flex items-center gap-2 group/btn"
                  >
                    Add to Order List <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionTag>The Keo Standard</SectionTag>
              <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-tight mb-10">
                Why We Are <br />
                <span className="text-gold italic">Different.</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Leaf />, title: "Freshly Prepared", desc: "No reheated food. Every order is made fresh for you." },
                  { icon: <ShieldCheck />, title: "Hygienic Prep", desc: "Clean kitchen, clean hands, clean food. Always." },
                  { icon: <StarIcon />, title: "Premium Taste", desc: "Secret recipes that keep Uyo coming back for more." },
                  { icon: <Truck />, title: "Fast Delivery", desc: "Hot and crispy, delivered right to your doorstep." },
                ].map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="w-12 h-12 bg-white/5 text-gold rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-gold group-hover:text-charcoal transition-all duration-500">
                      {item.icon}
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gold/20 rounded-[60px] blur-[100px] animate-pulse" />
              <div className="relative h-full w-full rounded-[60px] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Expert Chef" 
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-charcoal bg-gold flex items-center justify-center text-[10px] font-bold">
                          {i === 4 ? '+500' : '👤'}
                        </div>
                      ))}
                    </div>
                    <p className="text-white text-xs font-bold">Trusted by 500+ Happy Clients in Uyo</p>
                  </div>
                  <div className="flex items-center gap-1 text-gold">
                    {[1,2,3,4,5].map(i => <StarIcon key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Full Menu --- */}
      <section id="menu" className="py-32 bg-cream-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionTag>The Full Experience</SectionTag>
            <h2 className="text-5xl md:text-7xl font-display font-black mb-8">
              Explore Our <br />
              <span className="text-primary-red">Delicious</span> Menu.
            </h2>
            <p className="text-warm-gray text-lg">
              From individual snacks to massive party packs, we have something for every craving and every crowd.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {MENU_CATEGORIES.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => setActiveMenuTab(cat.id)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${activeMenuTab === cat.id ? 'bg-primary-red text-white shadow-2xl shadow-primary-red/30 scale-105' : 'bg-white text-warm-gray hover:bg-white/80'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeMenuTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {MENU_CATEGORIES.find(c => c.id === activeMenuTab)?.items.map((item, i) => (
                <motion.div 
                  key={item.name}
                  whileHover={{ y: -5 }}
                  className="group bg-white p-6 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
                >
                  <div className="relative h-64 rounded-[32px] overflow-hidden mb-6">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h4 className="font-display font-bold text-2xl mb-2 group-hover:text-primary-red transition-colors">{item.name}</h4>
                    <p className="text-warm-gray text-sm leading-relaxed mb-8 line-clamp-2">{item.description}</p>
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-charcoal/5">
                      <button 
                        onClick={() => addToOrder(item.name)}
                        className="text-[10px] font-black uppercase tracking-widest text-charcoal hover:text-primary-red transition-colors flex items-center gap-2"
                      >
                        <ShoppingBag size={14} /> Add to Order
                      </button>
                      <div className="w-8 h-8 bg-cream rounded-full flex items-center justify-center text-primary-red opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart size={14} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* --- Services --- */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <SectionTag>Beyond Snacks</SectionTag>
              <h2 className="text-5xl md:text-7xl font-display font-black leading-tight">
                Our <span className="text-primary-red">Catering</span> <br />
                Solutions.
              </h2>
            </div>
            <p className="text-warm-gray text-lg max-w-md">
              We don't just deliver food; we deliver an experience. Professional, reliable, and always delicious.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {[
              { icon: <FireExtinguisher />, name: "Ready-to-Eat", desc: "Freshly fried snacks delivered hot and crispy.", span: "md:col-span-3" },
              { icon: <Package />, name: "Ready-to-Fry", desc: "Pre-packaged for your convenience.", span: "md:col-span-3" },
              { icon: <ChefHat />, name: "Live Frying", desc: "On-site frying service for events.", span: "md:col-span-2" },
              { icon: <ClipboardList />, name: "Custom Packs", desc: "Tailored for your specific needs.", span: "md:col-span-2" },
              { icon: <Truck />, name: "Fast Delivery", desc: "Reliable service across Uyo.", span: "md:col-span-2" },
            ].map((service, i) => (
              <motion.div 
                key={service.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative p-10 bg-cream rounded-[40px] hover:bg-primary-red hover:text-white transition-all duration-500 ${service.span}`}
              >
                <motion.div 
                  animate={{ 
                    y: [0, -6, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                  className="w-14 h-14 bg-white text-primary-red rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-charcoal/5"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                <p className="text-warm-gray group-hover:text-white/80 transition-colors leading-relaxed">{service.desc}</p>
                <div className="absolute top-10 right-10 text-4xl font-display font-black opacity-5 group-hover:opacity-10 transition-opacity">0{i + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Gallery --- */}
      <section id="gallery" className="py-32 bg-charcoal relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <SectionTag>Visual Feast</SectionTag>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white">
              The <span className="text-gold italic">Gallery.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
            {GALLERY_IMAGES.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-[40px] cursor-pointer ${item.span}`}
                onClick={() => setLightboxImage(item.src)}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white text-charcoal rounded-full flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                    <Search size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact --- */}
      <section id="contact" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <SectionTag>Ready to Order?</SectionTag>
              <h2 className="text-5xl md:text-7xl font-display font-black leading-tight mb-12">
                Let's Get <br />
                <span className="text-primary-red">Cooking.</span>
              </h2>

              {/* Order List Display */}
              <div className="bg-cream rounded-[40px] p-10 mb-12 border border-charcoal/5">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <ShoppingBag className="text-primary-red" /> Your Order List
                  </h3>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-white px-3 py-1 rounded-full">
                    {orderList.length} Items
                  </span>
                </div>

                {orderList.length === 0 ? (
                  <div className="py-12 text-center">
                    <p className="text-warm-gray italic">Your order list is empty. Explore the menu to add items!</p>
                  </div>
                ) : (
                  <div className="space-y-4 mb-10">
                    {orderList.map((item) => (
                      <div key={item.name} className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-cream-dark rounded-xl flex items-center justify-center font-bold text-primary-red">
                            {item.quantity}x
                          </div>
                          <span className="font-bold text-sm">{item.name}</span>
                        </div>
                        <button 
                          onClick={() => removeFromOrder(item.name)}
                          className="text-warm-gray hover:text-primary-red transition-colors"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {orderList.length > 0 && (
                  <a 
                    href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary py-5 flex items-center justify-center gap-3 text-xs font-black uppercase tracking-widest"
                  >
                    <MessageCircle size={20} /> Send Order to WhatsApp
                  </a>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-cream text-primary-red rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 uppercase tracking-widest">Call Us</h4>
                    <p className="text-warm-gray text-sm">{BRAND_INFO.phone1}</p>
                    <p className="text-warm-gray text-sm">{BRAND_INFO.phone2}</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-cream text-primary-red rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 uppercase tracking-widest">Location</h4>
                    <p className="text-warm-gray text-sm">{BRAND_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gold/5 rounded-[60px] -rotate-3" />
              <div className="relative bg-white p-12 rounded-[60px] shadow-2xl border border-charcoal/5">
                <h3 className="text-3xl font-display font-bold mb-8">Send an Enquiry</h3>
                <form className="space-y-6" onSubmit={(e) => { 
                  e.preventDefault(); 
                  const formData = new FormData(e.currentTarget as HTMLFormElement);
                  const name = formData.get('name');
                  const phone = formData.get('phone');
                  const service = formData.get('service');
                  const message = formData.get('message');
                  const waMessage = `Hello Keo Bakes n' Fries! I'd like to make an enquiry.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`;
                  window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(waMessage)}`, '_blank');
                  addToast("Redirecting to WhatsApp..."); 
                }}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-warm-gray ml-2">Full Name</label>
                    <input name="name" type="text" placeholder="e.g. Chioma Johnson" className="w-full bg-cream rounded-3xl px-8 py-4 focus:bg-white focus:ring-4 focus:ring-gold/10 border-2 border-transparent focus:border-gold outline-none transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-warm-gray ml-2">Phone Number</label>
                    <input name="phone" type="tel" placeholder="e.g. 0801 234 5678" className="w-full bg-cream rounded-3xl px-8 py-4 focus:bg-white focus:ring-4 focus:ring-gold/10 border-2 border-transparent focus:border-gold outline-none transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-warm-gray ml-2">Service Type</label>
                    <select name="service" className="w-full bg-cream rounded-3xl px-8 py-4 focus:bg-white focus:ring-4 focus:ring-gold/10 border-2 border-transparent focus:border-gold outline-none transition-all appearance-none">
                      <option>Event Catering</option>
                      <option>Bulk Party Pack</option>
                      <option>Custom Cake Order</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-warm-gray ml-2">Your Message</label>
                    <textarea name="message" rows={4} placeholder="Tell us about your event..." className="w-full bg-cream rounded-3xl px-8 py-4 focus:bg-white focus:ring-4 focus:ring-gold/10 border-2 border-transparent focus:border-gold outline-none transition-all resize-none" required />
                  </div>
                  <button type="submit" className="w-full btn-primary py-5 text-xs font-black uppercase tracking-widest">
                    Send Message via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-charcoal pt-32 pb-12 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${BRAND_INFO.logoUrl ? 'bg-transparent' : 'bg-gold'} rounded-2xl flex items-center justify-center text-2xl overflow-hidden`}>
                  {BRAND_INFO.logoUrl ? (
                    <img 
                      src={BRAND_INFO.logoUrl} 
                      alt={BRAND_INFO.name} 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  ) : BRAND_INFO.logoEmoji ? (
                    BRAND_INFO.logoEmoji
                  ) : (
                    <ChefHat className="text-white" size={24} />
                  )}
                </div>
                <h2 className="font-display font-bold text-3xl">{BRAND_INFO.name}</h2>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                Uyo's premier one-stop store for premium Nigerian small chops, pastries, and event catering. Quality you can taste.
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, href: BRAND_INFO.instagram },
                  { Icon: Facebook, href: BRAND_INFO.facebook },
                  { Icon: TikTokIcon, href: BRAND_INFO.tiktok }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-500">
                    <social.Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-10">Navigation</h4>
              <ul className="space-y-4 text-sm text-white/50">
                {['Home', 'Products', 'Menu', 'Services', 'About', 'Gallery', 'Contact'].map(link => (
                  <li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-gold transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-10">Our Best Sellers</h4>
              <ul className="space-y-4 text-sm text-white/50">
                {SIGNATURE_PRODUCTS.slice(0, 5).map(p => (
                  <li key={p.name}><a href="#menu" className="hover:text-gold transition-colors">{p.name}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-10">Newsletter</h4>
              <p className="text-white/40 text-sm mb-8">Join our list for exclusive event offers and new menu drops.</p>
              <form className="relative" onSubmit={(e) => { e.preventDefault(); addToast("Welcome to the family!"); }}>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm outline-none focus:border-gold transition-colors" 
                  required 
                />
                <button className="absolute right-2 top-2 bottom-2 px-4 bg-gold text-charcoal rounded-xl hover:bg-white transition-colors">
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.2em] text-white/20">
            <p>© 2026 {BRAND_INFO.name}. All rights reserved.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
            <p className="flex items-center gap-2">Made with <Heart size={10} className="text-primary-red fill-current" /> in Uyo</p>
          </div>
        </div>
      </footer>

      {/* --- Floating WhatsApp --- */}
      <motion.a 
        href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(BRAND_INFO.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-20 h-20 bg-[#25D366] text-white rounded-[28px] flex items-center justify-center shadow-2xl z-50 group"
      >
        <MessageCircle size={36} />
        <span className="absolute right-full mr-6 bg-white text-charcoal px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap">
          Chat with us
        </span>
      </motion.a>

      {/* --- Lightbox --- */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/98 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setLightboxImage(null)}
          >
            <button className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors">
              <X size={48} />
            </button>
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={lightboxImage} 
              alt="Lightbox" 
              className="max-w-full max-h-[85vh] object-contain rounded-[40px] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Toasts --- */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] pointer-events-none flex flex-col items-center p-10 gap-4">
        <AnimatePresence>
          {toasts.map(toast => (
            <Toast key={toast.id} message={toast.message} onClose={() => removeToast(toast.id)} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
