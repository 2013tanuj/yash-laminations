import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { MapPin, Phone, Mail, Award, Package, ShieldCheck, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const queryClient = new QueryClient();

const PRODUCTS = [
  { name: "Lamination Films", image: "/film-rolls.png", description: "BOPP, Thermal, and Wet lamination films for premium packaging." },
  { name: "Hot Melt Film & Glue", image: "/chemicals.png", description: "Industrial-grade adhesives for strong bonding." },
  { name: "Acrylic Pasting Film", image: "/acrylic-sheets.png", description: "High-clarity films for acrylic and specialized pasting." },
  { name: "Acrylic Sheets", image: "/acrylic-sheets.png", description: "Clear and frosted sheets for various industrial applications." },
  { name: "U.V. Chemicals", image: "/chemicals.png", description: "Top-tier UV varnishes and coating chemicals." },
  { name: "Inner Card Sheet", image: "/film-rolls.png", description: "Sturdy inner card materials for structural packaging." },
  { name: "Gum Cards", image: "/acrylic-sheets.png", description: "Pre-gummed cards ready for immediate application." },
  { name: "Mounting Tapes & More", image: "/film-rolls.png", description: "Double-sided tapes and essential mounting accessories." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-background w-full flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-foreground text-background py-2 px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center text-xs md:text-sm font-medium tracking-wide">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-primary" /> Chandni Chowk, Delhi - 110006
          </span>
          <span className="hidden md:flex items-center gap-1.5">
            <Mail size={14} className="text-primary" /> jharajesh00@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <span className="flex items-center gap-1.5 font-bold">
            <Phone size={14} className="text-primary" /> +91-9811741713 <span className="text-muted-foreground mx-1">|</span> 8506025713
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background shadow-md border-b-primary' : 'bg-background border-b border-border'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-3 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-black tracking-tight text-primary uppercase">Yash Laminations</span>
            <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-muted-foreground uppercase mt-0.5">All Lamination Materials</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 font-bold text-sm tracking-wider uppercase">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About Us</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md rounded-none" asChild>
              <a href="#contact">Call Now</a>
            </Button>
          </div>
          <div className="lg:hidden">
            <Button size="sm" className="bg-primary text-white rounded-none font-bold" asChild>
              <a href="tel:+919811741713">Call Now</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0">
          <img src="/hero.png" alt="Yash Laminations Shop Interior" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/90 to-foreground mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 lg:py-20 flex flex-col justify-center min-h-[50vh] md:min-h-[380px]">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl space-y-4 md:space-y-5"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.2em] rounded-none px-3 py-1 text-xs font-bold shadow-lg">
                Serving the Printing & Packaging Industry
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-background leading-[1.1] tracking-tight">
              Quality Materials.<br/>
              <span className="text-primary font-hindi font-medium italic mt-2 block">यथार्थ गुणवत्ता, आपका विश्वास।</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-base md:text-lg text-gray-300 font-medium leading-relaxed max-w-2xl border-l-2 border-primary pl-4">
              We are Chandni Chowk's trusted wholesale supplier for premium lamination films, acrylic sheets, and UV chemicals. When quality matters, the industry calls Yash Laminations.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm rounded-none shadow-lg h-11 px-7 font-bold uppercase tracking-wider transition-transform hover:-translate-y-1" asChild>
                <a href="#products">View Catalog</a>
              </Button>
              <Button variant="outline" className="bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-foreground rounded-none h-11 px-7 text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-1" asChild>
                <a href="#contact">Get a Quote</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About/Trust Section */}
      <section id="about" className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-3 p-5 bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 bg-primary text-white rounded-none flex items-center justify-center shadow-md">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground">Trusted Trade Partner</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Decades of serving Delhi's printing and packaging industry with unwavering reliability, honest pricing, and genuine advice.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-3 p-5 bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 bg-primary text-white rounded-none flex items-center justify-center shadow-md">
                <Package size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground">Comprehensive Stock</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                From specialized lamination films to UV chemicals and acrylic sheets, we carry robust inventory to fulfill bulk orders fast.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-3 p-5 bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 bg-primary text-white rounded-none flex items-center justify-center shadow-md">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground">Premium Quality</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                We strictly deal in high-grade, market-tested materials that guarantee an impeccable finish for your critical jobs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Catalog / Products */}
      <section id="products" className="py-12 md:py-16 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 space-y-3"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Our Products</h2>
            <h3 className="text-xl md:text-2xl text-primary font-hindi font-bold italic">हमारे प्रमुख उत्पाद</h3>
            <div className="h-1 w-20 bg-primary mt-3"></div>
            <p className="text-base text-muted-foreground font-medium mt-3 leading-relaxed">
              A complete catalog of lamination and pasting materials, carefully sourced for the professional printing and packaging industry.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {PRODUCTS.map((product, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <Card className="group overflow-hidden rounded-none border border-border/80 bg-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h4 className="font-serif font-bold text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors mb-2 leading-tight">{product.name}</h4>
                    <p className="text-sm text-muted-foreground font-medium mb-6 flex-1">{product.description}</p>
                    <div className="mt-auto flex items-center text-sm font-bold text-primary tracking-wide uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Enquire Now <ChevronRight size={16} className="ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-10 text-center"
          >
            <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-none px-8 h-11 font-bold shadow-lg uppercase tracking-wider text-sm" asChild>
              <a href="#contact">Request Full Catalog & Bulk Pricing</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Highlight */}
      <section className="py-12 bg-primary text-primary-foreground border-y-[6px] border-foreground">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight">Decades of Trust in Chandni Chowk.</h2>
              <p className="text-base font-medium text-white/90 leading-relaxed">
                When you run a high-volume press, you need materials that don't fail and a supplier who answers the phone. We pride ourselves on being that partner.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-bold text-base">
              <div className="flex items-center gap-3 bg-white/10 p-3 border border-white/20">
                <CheckCircle2 size={18} className="text-white shrink-0" />
                <span>Ready Stock Available</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 p-3 border border-white/20">
                <CheckCircle2 size={18} className="text-white shrink-0" />
                <span>Competitive Wholesale Rates</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 p-3 border border-white/20">
                <CheckCircle2 size={18} className="text-white shrink-0" />
                <span>Consistent Quality</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 p-3 border border-white/20">
                <CheckCircle2 size={18} className="text-white shrink-0" />
                <span>Prompt Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">Contact Us</h2>
                <h3 className="text-xl md:text-2xl text-primary font-hindi font-bold italic mb-4">संपर्क करें</h3>
                <p className="text-base text-muted-foreground font-medium mb-4 leading-relaxed max-w-md">
                  Get in touch with us for bulk orders, pricing inquiries, and product availability. We are open Monday through Saturday.
                </p>
              </motion.div>

              <motion.div variants={staggerContainer} className="space-y-5 bg-secondary/30 p-6 border border-border">
                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-background border border-primary/20 flex items-center justify-center text-primary rounded-none shrink-0 shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground uppercase tracking-wider text-xs mb-1">Visit Our Shop</h4>
                    <p className="text-muted-foreground font-medium leading-relaxed text-sm">
                      Shop No. 3, Property No. 1492, UG Floor,<br/>
                      Near Canara Bank, Main Road,<br/>
                      Chandni Chowk, Delhi - 110006
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-background border border-primary/20 flex items-center justify-center text-primary rounded-none shrink-0 shadow-sm">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground uppercase tracking-wider text-xs mb-1">Call Us (Proprietors)</h4>
                    <div className="text-foreground font-bold flex flex-col gap-1 text-base">
                      <a href="tel:+919811741713" className="hover:text-primary transition-colors">Rajesh Jha: +91-9811741713</a>
                      <a href="tel:+918506025713" className="hover:text-primary transition-colors">Tanuj: +91-8506025713</a>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-background border border-primary/20 flex items-center justify-center text-primary rounded-none shrink-0 shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground uppercase tracking-wider text-xs mb-1">Email Us</h4>
                    <a href="mailto:jharajesh00@gmail.com" className="text-foreground font-bold text-base hover:text-primary transition-colors">
                      jharajesh00@gmail.com
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-6 md:p-8 border border-border shadow-[6px_6px_0px_0px_hsl(var(--primary))] relative"
            >
              <h3 className="text-2xl font-serif font-bold text-foreground mb-1">Send an Inquiry</h3>
              <p className="text-muted-foreground font-medium mb-5 text-sm">Fill out the form below and we'll get back to you promptly.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Name / Company</label>
                  <input type="text" className="w-full bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary h-11 px-4 outline-none font-medium transition-all" placeholder="Your name or business name" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Phone Number</label>
                  <input type="tel" className="w-full bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary h-11 px-4 outline-none font-medium transition-all" placeholder="+91" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Requirement</label>
                  <textarea className="w-full bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary min-h-[110px] p-3 outline-none font-medium resize-none transition-all" placeholder="What materials are you looking for? e.g., BOPP Thermal Film, UV Chemicals..."></textarea>
                </div>
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm rounded-none shadow-md uppercase tracking-widest" type="submit">
                  Submit Inquiry
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background/80 py-10 border-t-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            <div>
              <span className="text-2xl font-serif font-black tracking-tight text-white block mb-2">YASH LAMINATIONS</span>
              <p className="font-medium max-w-sm leading-relaxed text-background/70 text-sm">
                Premium lamination films, adhesives, and printing materials for the packaging industry. Serving Chandni Chowk and beyond.
              </p>
            </div>
            <div className="md:text-right font-medium text-sm">
              <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Business Info</h4>
              <p className="mb-1.5">Proprietors: Rajesh Jha / Tanuj</p>
              <p className="mb-1.5">Deals In: All Lamination Materials</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-background/50">
            <p>© {new Date().getFullYear()} Yash Laminations. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Built for the Trade.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
