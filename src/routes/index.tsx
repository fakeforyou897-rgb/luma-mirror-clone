import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import storyImg from "@/assets/story.jpg";
import pSerum from "@/assets/p-serum.jpg";
import pLip from "@/assets/p-lip.jpg";
import pCream from "@/assets/p-cream.jpg";
import pBronzer from "@/assets/p-bronzer.jpg";
import pToner from "@/assets/p-toner.jpg";
import pMask from "@/assets/p-mask.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import testimonialImg from "@/assets/testimonial.jpg";
import catSkincare from "@/assets/cat-skincare.jpg";
import catMakeup from "@/assets/cat-makeup.jpg";
import catHair from "@/assets/cat-hair.jpg";
import catBody from "@/assets/cat-body.jpg";

export const Route = createFileRoute("/")({
  component: LuminaHome,
});

const products = [
  { img: pSerum, badge: "Best Seller", category: "Skincare", name: "Radiance Glow Serum", desc: "Vitamin C + Rose Hip Oil complex", price: 78 },
  { img: pLip, badge: "New", category: "Makeup", name: "Velvet Lip Elixir", desc: "Hydrating shea + natural pigments", price: 42 },
  { img: pCream, badge: "Award Winner", category: "Skincare", name: "Pearl Luminosity Cream", desc: "Pearl extract + hyaluronic acid", price: 95 },
  { img: pBronzer, badge: "Trending", category: "Makeup", name: "Golden Hour Bronzer", desc: "Micro-shimmer + mineral pigments", price: 55 },
  { img: pToner, badge: null, category: "Skincare", name: "Rose Petal Toner", desc: "Damascena rose water + niacinamide", price: 48 },
  { img: pMask, badge: "Limited", category: "Skincare", name: "Midnight Repair Mask", desc: "Retinol + black pearl + squalane", price: 88 },
];

const categories = [
  { img: catSkincare, count: 42, name: "Skincare" },
  { img: catMakeup, count: 28, name: "Makeup" },
  { img: catHair, count: 19, name: "Hair Care" },
  { img: catBody, count: 15, name: "Body Care" },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-rose-gold">
        <path d="M12 2c1 4 4 7 8 8-4 1-7 4-8 8-1-4-4-7-8-8 4-1 7-4 8-8z" fill="currentColor" />
      </svg>
      <span className="font-display text-2xl tracking-tight text-ivory">Lumina<span className="text-rose-gold">.</span></span>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass-card" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#products" className="hover:text-ivory transition">Products</a>
          <a href="#about" className="hover:text-ivory transition">About</a>
          <a href="#results" className="hover:text-ivory transition">Results</a>
          <a href="#newsletter" className="hover:text-ivory transition">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs tracking-widest border border-border rounded-full px-3 py-1.5 text-muted-foreground">
            <span className="text-ivory">EN</span><span>|</span><span>AR</span>
          </div>
          <a href="#products" className="shine-btn bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] rounded-full px-5 py-3 hover:opacity-90 transition rose-gold-glow">
            Shop Now
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <img src={heroImg} alt="Luxury beauty model with luminous glowing skin" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      {/* Floating particles */}
      {[...Array(14)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-rose-gold animate-float"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${(i * 83) % 100}%`,
            top: `${(i * 47) % 100}%`,
            animationDelay: `${i * 0.4}s`,
            opacity: 0.5,
          }}
        />
      ))}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-ivory/80 glass-card rounded-full px-5 py-2">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-gold animate-gentle-pulse" /> Luxury Natural Beauty
        </span>
        <h1 className="mt-8 font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] text-balance text-ivory rose-gold-text-glow">
          Discover Your<br />
          <em className="shimmer-text not-italic font-light italic">Natural Glow.</em>
        </h1>
        <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          Premium skincare crafted with nature's finest ingredients for skin that radiates from within.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#products" className="shine-btn bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] rounded-full px-8 py-4 hover:opacity-90 transition rose-gold-glow">
            Shop Now
          </a>
          <a href="#about" className="glass-card text-ivory text-xs uppercase tracking-[0.25em] rounded-full px-8 py-4 hover:bg-surface-2 transition">
            Discover Products
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground flex flex-col items-center gap-2">
        Scroll to explore
        <span className="w-px h-10 bg-gradient-to-b from-rose-gold to-transparent animate-scroll-indicator" />
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src={storyImg} alt="Elegant woman with luminous glowing skin" loading="lazy" width={1024} height={1280} className="w-full h-[640px] object-cover rounded-3xl" />
          <div className="absolute -bottom-8 -right-8 hidden md:block max-w-xs glass-card rounded-2xl p-6 rose-gold-glow">
            <p className="font-display italic text-lg leading-snug text-ivory">
              "Beauty is not about perfection. It's about confidence in your own luminous skin."
            </p>
          </div>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">Our Story</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-balance leading-[1.05] text-ivory">
            Born from Nature,<br /><em className="shimmer-text not-italic italic font-light">Refined by Science.</em>
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            Lumina Beauty was founded on a singular belief: that the most powerful beauty ingredients are found in nature. Every formula begins in our botanical laboratories, where ancient remedies meet modern dermatology to create products that don't just enhance your beauty — they reveal it.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10">
            {[["12+", "Years of Expertise"], ["97%", "Customer Satisfaction"], ["100%", "Natural Ingredients"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-4xl text-champagne">{n}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="relative py-32 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">Best Sellers</span>
        <h2 className="mt-4 font-display text-5xl md:text-6xl text-ivory">Signature <em className="shimmer-text not-italic italic font-light">Collection.</em></h2>
        <p className="mt-6 text-muted-foreground">Our most-loved formulas, trusted by thousands.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <article key={p.name} className="product-card-hover group relative bg-surface border border-border rounded-3xl overflow-hidden">
            <div className="relative aspect-[4/5] overflow-hidden bg-background">
              <img src={p.img} alt={p.name} loading="lazy" width={800} height={1024} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              {p.badge && (
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-primary text-primary-foreground rounded-full px-3 py-1.5">
                  {p.badge}
                </span>
              )}
              <button className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.2em] glass-card rounded-full px-3 py-1.5 opacity-0 group-hover:opacity-100 transition text-ivory">
                Quick View
              </button>
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{p.category}</span>
              <h3 className="mt-2 font-display text-2xl text-ivory">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-display text-2xl text-champagne">${p.price}</span>
                <button className="shine-btn text-xs uppercase tracking-[0.2em] border border-border rounded-full px-4 py-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition text-ivory">
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Differences() {
  const items = [
    { t: "Natural Ingredients", d: "100% botanically sourced actives. No parabens, sulfates, or synthetic fragrances. Just pure, effective nature." },
    { t: "Cruelty-Free", d: "Every Lumina formula is certified cruelty-free and vegan. Beauty that respects all life." },
    { t: "Dermatologist Tested", d: "Clinically validated by independent dermatologists. Safe for all skin types including sensitive." },
    { t: "Visible Results", d: "91% of users report visibly brighter skin within 14 days. Results you can see, not just feel." },
  ];
  return (
    <section className="relative py-32 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">Why Lumina</span>
        <h2 className="mt-4 font-display text-5xl md:text-6xl text-ivory">The Lumina <em className="shimmer-text not-italic italic font-light">Difference.</em></h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <div key={it.t} className="glass-card rounded-3xl p-8 hover:rose-gold-glow transition group">
            <div className="font-display text-5xl text-rose-gold/40 group-hover:text-rose-gold transition">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="mt-6 font-display text-2xl text-ivory">{it.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromX = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <section id="results" className="relative py-32 px-6 lg:px-10 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">Real Results</span>
        <h2 className="mt-4 font-display text-5xl md:text-6xl text-ivory">Before <em className="shimmer-text not-italic italic font-light">& After.</em></h2>
        <p className="mt-6 text-muted-foreground">Unretouched. Unfiltered. Real Lumina users, real transformations.</p>
      </div>
      <div
        ref={ref}
        className="relative aspect-[4/3] md:aspect-[16/10] w-full rounded-3xl overflow-hidden rose-gold-glow select-none cursor-ew-resize"
        onMouseDown={(e) => { dragging.current = true; updateFromX(e.clientX); }}
        onMouseMove={(e) => dragging.current && updateFromX(e.clientX)}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={(e) => updateFromX(e.touches[0].clientX)}
        onTouchMove={(e) => updateFromX(e.touches[0].clientX)}
      >
        <img src={afterImg} alt="After 14 days" loading="lazy" width={1024} height={1280} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={beforeImg} alt="Before" loading="lazy" width={1024} height={1280} className="absolute inset-0 h-full object-cover" style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }} />
        </div>
        <span className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.3em] glass-card rounded-full px-3 py-1.5 text-ivory">Before</span>
        <span className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.3em] bg-primary text-primary-foreground rounded-full px-3 py-1.5">After — 14 Days</span>
        <div className="absolute top-0 bottom-0 w-px bg-ivory/80 pointer-events-none" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center rose-gold-glow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/></svg>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">Drag to compare · Lumina Radiance Serum — 14 day result</p>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="relative py-32 px-6 lg:px-10 max-w-5xl mx-auto text-center">
      <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">Testimonials</span>
      <h2 className="mt-4 font-display text-5xl md:text-6xl text-ivory">What Our Clients <em className="shimmer-text not-italic italic font-light">Say.</em></h2>
      <div className="mt-16 relative glass-card rounded-3xl p-12 rose-gold-glow">
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-display text-9xl text-rose-gold leading-none">"</span>
        <img src={testimonialImg} alt="Sarah Mitchell" loading="lazy" width={800} height={800} className="mx-auto w-20 h-20 rounded-full object-cover ring-2 ring-rose-gold" />
        <p className="mt-8 font-display italic text-2xl md:text-3xl text-balance leading-snug text-ivory">
          "The Radiance Serum transformed my skin in just two weeks. I've never received so many compliments. Lumina is the only brand I trust."
        </p>
        <div className="mt-8">
          <div className="font-display text-xl text-ivory">Sarah Mitchell</div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-1">New York, USA</div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="relative py-32 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">Shop by Category</span>
        <h2 className="mt-4 font-display text-5xl md:text-6xl text-ivory">Explore the <em className="shimmer-text not-italic italic font-light">Collection.</em></h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((c) => (
          <a key={c.name} href="#products" className="product-card-hover group relative aspect-[3/4] rounded-3xl overflow-hidden block">
            <img src={c.img} alt={c.name} loading="lazy" width={1024} height={1280} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="text-[10px] uppercase tracking-[0.3em] text-rose-gold">{c.count} Products</span>
              <h3 className="mt-1 font-display text-3xl text-ivory">{c.name}</h3>
              <span className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-ivory transition">Shop →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="newsletter" className="relative py-32 px-6 lg:px-10">
      <div className="max-w-3xl mx-auto text-center glass-card rounded-3xl p-12 md:p-20 rose-gold-glow relative overflow-hidden">
        <div className="relative">
          <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">Join the Club</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-ivory">Join the Lumina<br /><em className="shimmer-text not-italic italic font-light">Glow Club.</em></h2>
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
            Exclusive access to new launches, member-only offers, and personalized beauty rituals delivered to your inbox.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-surface-2 border border-border rounded-full px-5 py-4 text-sm text-ivory placeholder:text-muted-foreground focus:outline-none focus:border-rose-gold transition"
            />
            <button className="shine-btn bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] rounded-full px-6 py-4 hover:opacity-90 transition">
              Join the Glow
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-20 py-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Logo />
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">© {new Date().getFullYear()} Lumina Beauty — Crafted with nature.</p>
        <div className="flex gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#" className="hover:text-rose-gold transition">Instagram</a>
          <a href="#" className="hover:text-rose-gold transition">Pinterest</a>
          <a href="#" className="hover:text-rose-gold transition">TikTok</a>
        </div>
      </div>
    </footer>
  );
}

function LuminaHome() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grain-overlay" />
      <Header />
      <main>
        <Hero />
        <Story />
        <Products />
        <Differences />
        <BeforeAfter />
        <Testimonial />
        <Categories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
