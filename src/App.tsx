import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Scissors, Footprints, BedDouble, 
  ChevronDown, Instagram, Facebook, MessageCircle, 
  MapPin, Phone, Mail, Clock, Award, BookOpen, 
  Briefcase, CheckCircle2 
} from 'lucide-react';
import { MannequinDrawing, SewingMachineDrawing, ShearsDrawing } from './components/Graphics';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Shop', href: '#shop' },
    { name: 'Skilling Centre', href: '#skilling-centre' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const faqs = [
    { q: 'How do I place a custom tailoring order?', a: 'Start by booking a consultation through our contact form. We will discuss your vision, take precise measurements, and guide you through fabric selection before crafting your bespoke garment.' },
    { q: 'How long does a made-to-order garment take?', a: 'Typically, a custom order takes 2-4 weeks depending on the complexity of the design and fabric availability. Fast-tracking is available for certain requests.' },
    { q: 'Do I need prior experience to join the skilling centre?', a: 'Not at all. Our Basic Cutting & Tailoring course is designed specifically for absolute beginners. We teach everything from threading a machine to garment finishing.' },
    { q: 'What is the difference between Basic and Advanced courses?', a: 'The Basic course covers foundational skills and simple garment construction (145 hours). The Advanced course (300 hours) delves into complex pattern grading, advanced industrial techniques, and business management to start your own boutique.' },
    { q: 'Do you provide a certificate after the course?', a: 'Yes, all students who successfully complete their coursework and final practical assessments receive a professional certificate from Glance Skilling Centre.' },
    { q: 'Can I visit the boutique for a consultation?', a: 'Absolutely. We highly recommend in-person consultations for the best experience. Please book an appointment beforehand using our contact form to ensure we dedicate sufficient time to you.' }
  ];

  return (
    <div className="min-h-screen bg-charcoal text-cream font-sans overflow-x-hidden">
      {/* 1. NAVIGATION BAR */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-charcoal/95 backdrop-blur-md shadow-lg shadow-black/20 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#home" className="flex flex-col items-center">
            <span className="font-serif text-3xl font-semibold tracking-wider text-cream leading-none">Glance</span>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold mt-1">Nagaland</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-cream/80 hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href="#contact"
              className="bg-gold text-charcoal px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-gold-hover transition-colors duration-300"
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cream p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[72px] inset-x-0 bg-charcoal/95 backdrop-blur-xl z-40 md:hidden border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif text-cream hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gold text-charcoal px-6 py-3 rounded-sm text-center font-semibold hover:bg-gold-hover"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-charcoal z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-charcoal to-charcoal"></div>
          <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 -left-1/4 w-2/3 h-1/2 bg-white/5 blur-[100px] rounded-full"></div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute right-[-10%] top-[10%] w-full max-w-[800px] pointer-events-none hidden lg:block"
          >
            <MannequinDrawing className="w-full h-auto text-cream" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1 
              variants={fadeUp}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-cream mb-6"
            >
              Wear What's Yours.<br />
              Made to Order,<br />
              <span className="text-gold italic pr-4">Made for You.</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="text-lg sm:text-xl text-cream/70 font-light mb-10 max-w-xl leading-relaxed"
            >
              Bespoke fashion boutique &amp; professional tailoring training — crafted with precision.
            </motion.p>
            <motion.div 
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-5"
            >
              <a 
                href="#shop" 
                className="inline-flex items-center justify-center bg-gold text-charcoal px-8 py-4 text-sm font-semibold tracking-wide hover:bg-gold-hover transition-all duration-300 rounded-sm"
              >
                Explore the Boutique
              </a>
              <a 
                href="#skilling-centre" 
                className="inline-flex items-center justify-center border border-white/30 text-cream px-8 py-4 text-sm font-semibold tracking-wide hover:border-gold hover:text-gold transition-all duration-300 rounded-sm"
              >
                Join Skilling Centre
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-24 bg-white/5 mx-4 sm:mx-8 rounded-3xl my-12 border border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={fadeUp} className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">About Glance</motion.h2>
              <motion.h3 variants={fadeUp} className="font-serif text-4xl sm:text-5xl mb-8 leading-tight">Crafted with intention, precision, and modern sensibility.</motion.h3>
              <motion.p variants={fadeUp} className="text-cream/70 text-lg mb-6 leading-relaxed">
                Glance Nagaland is a contemporary fashion boutique offering made-to-order custom garments, quality footwear, and household linens — designed by an independent certified designer. Every piece is crafted with intention, precision, and modern sensibility.
              </motion.p>
              <motion.p variants={fadeUp} className="text-cream/70 text-lg leading-relaxed">
                Alongside the boutique, <strong className="text-cream font-medium">Glance Skilling Centre</strong> empowers individuals with professional tailoring and cutting skills, turning passion into profession.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="relative h-full min-h-[400px] flex items-center justify-center bg-charcoal rounded-2xl border border-white/10 p-12 overflow-hidden group">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent mix-blend-screen transition-opacity duration-700 group-hover:opacity-40"></div>
              <MannequinDrawing className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] text-white opacity-5" />
              <div className="relative z-10 text-center">
                <Scissors className="w-12 h-12 text-gold mx-auto mb-6" strokeWidth={1} />
                <p className="font-serif text-2xl italic text-cream leading-relaxed">
                  "Fashion is not just what you wear, but how it's made. We believe in building garments and futures."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. SHOP / PRODUCTS SECTION */}
      <section id="shop" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">The Boutique</motion.h2>
            <motion.h3 variants={fadeUp} className="font-serif text-4xl sm:text-5xl">What We Offer</motion.h3>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group flex flex-col h-full">
              <div className="w-14 h-14 bg-charcoal border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-gold/50 transition-colors">
                <Scissors className="text-gold" size={24} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-2xl mb-4">Custom Tailoring<br/><span className="text-sm font-sans text-cream/50 italic">(Made to Order)</span></h4>
              <p className="text-cream/70 mb-8 flex-grow leading-relaxed">
                Garments designed and stitched to your exact measurements and style. Consultation → Design → Fitting → Delivery.
              </p>
              <a href="#contact" className="text-gold font-medium text-sm flex items-center group-hover:text-gold-hover">
                Book a Fitting <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group flex flex-col h-full">
              <div className="w-14 h-14 bg-charcoal border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-gold/50 transition-colors">
                <Footprints className="text-gold" size={24} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-2xl mb-4">Footwear<br/><span className="text-sm font-sans text-cream/50 italic opacity-0 selection:text-transparent">_</span></h4>
              <p className="text-cream/70 mb-8 flex-grow leading-relaxed">
                Curated collection of quality footwear to complement your wardrobe. Ready to wear, selected for style and comfort.
              </p>
              <a href="#contact" className="text-gold font-medium text-sm flex items-center group-hover:text-gold-hover">
                Browse Collection <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group flex flex-col h-full">
              <div className="w-14 h-14 bg-charcoal border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-gold/50 transition-colors">
                <BedDouble className="text-gold" size={24} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-2xl mb-4">Household Linens<br/><span className="text-sm font-sans text-cream/50 italic opacity-0 selection:text-transparent">_</span></h4>
              <p className="text-cream/70 mb-8 flex-grow leading-relaxed">
                Premium household linens including bed covers, cushion covers, curtains, and elegant table linen.
              </p>
              <a href="#contact" className="text-gold font-medium text-sm flex items-center group-hover:text-gold-hover">
                Shop Linens <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. HOW IT WORKS (Timeline) */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 variants={fadeUp} className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">The Process</motion.h2>
            <motion.h3 variants={fadeUp} className="font-serif text-4xl sm:text-5xl">Your Custom Garment Journey</motion.h3>
          </motion.div>

          <div className="relative">
            {/* Connecting line desktop */}
            <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0"></div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-12 md:grid-cols-4 relative z-10"
            >
              {[
                { step: '01', title: 'Consultation', desc: 'Share your vision, occasion, and preferences.' },
                { step: '02', title: 'Measurement', desc: 'Precise measurements taken, design finalized.' },
                { step: '03', title: 'Crafting', desc: 'Stitched by expert hands with quality fabric.' },
                { step: '04', title: 'Fitting', desc: 'Final fitting and delivery to you.' }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="relative flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-charcoal border-2 border-white/10 flex items-center justify-center mb-6 z-10 shadow-xl shadow-black/40">
                    <span className="font-serif text-3xl text-gold">{item.step}</span>
                  </div>
                  <h4 className="font-serif text-xl mb-3">{item.title}</h4>
                  <p className="text-cream/60 max-w-[200px] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. SKILLING CENTRE SECTION */}
      <section id="skilling-centre" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2 variants={fadeUp} className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Learn With Us</motion.h2>
            <motion.h3 variants={fadeUp} className="font-serif text-4xl sm:text-5xl mb-6">Glance Skilling Centre</motion.h3>
            <motion.p variants={fadeUp} className="text-xl font-serif italic text-cream/90 mb-6">"Professional Tailoring Training by a Certified Designer"</motion.p>
            <motion.p variants={fadeUp} className="text-cream/70 leading-relaxed">
              Glance Skilling Centre offers structured, hands-on tailoring and cutting courses designed to take you from beginner to professional. Trained by a certified designer, our courses focus on real-world skills that help you build a career or start your own tailoring unit.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-8 mb-24"
          >
            {/* Course 1 */}
            <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col items-start relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-10%] w-[80%] opacity-5 pointer-events-none">
                <SewingMachineDrawing className="w-full h-auto text-white" />
              </div>
              <span className="bg-white/10 text-cream px-3 py-1 rounded text-xs font-semibold tracking-wider uppercase mb-6 relative z-10">Level: Beginner</span>
              <h4 className="font-serif text-3xl mb-6 text-gold relative z-10">Basic Cutting &amp; Tailoring</h4>
              
              <ul className="space-y-4 mb-8 flex-grow relative z-10 w-full">
                {['Introduction to sewing on industrial and manual machines', 'Basic pattern drafting', 'Garment construction fundamentals', 'Fabric knowledge and tools', 'Basic finishing techniques'].map((item, i) => (
                  <li key={i} className="flex items-start text-cream/80">
                    <span className="text-gold mr-3 mt-1 text-sm">✦</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="grid grid-cols-2 gap-4 w-full pt-6 border-t border-white/10 mb-8 relative z-10">
                <div>
                  <p className="text-xs text-cream/50 uppercase tracking-widest mb-1">Duration</p>
                  <p className="font-medium">145 Hours</p>
                </div>
                <div>
                  <p className="text-xs text-cream/50 uppercase tracking-widest mb-1">Eligibility</p>
                  <p className="font-medium">Basic Education</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-cream/50 uppercase tracking-widest mb-1">Certification</p>
                  <p className="font-medium flex items-center text-gold"><CheckCircle2 size={16} className="mr-2" /> Yes, on completion</p>
                </div>
              </div>
              
              <a href="#contact" className="w-full text-center bg-transparent border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 py-4 font-semibold text-sm tracking-wide rounded-sm z-10">
                Enroll Now
              </a>
            </motion.div>

            {/* Course 2 */}
            <motion.div variants={fadeUp} className="bg-charcoal border border-gold/30 rounded-2xl p-8 sm:p-10 flex flex-col items-start relative overflow-hidden shadow-[0_0_40px_rgba(201,168,76,0.05)]">
               <div className="absolute top-[10%] right-[-10%] w-[60%] opacity-5 pointer-events-none">
                <ShearsDrawing className="w-full h-auto text-white" />
              </div>
              <span className="bg-gold text-charcoal px-3 py-1 rounded text-xs font-bold tracking-wider uppercase mb-6 relative z-10">Level: Advanced</span>
              <h4 className="font-serif text-3xl mb-6 relative z-10">Advanced Cutting &amp; Tailoring</h4>
              
              <ul className="space-y-4 mb-8 flex-grow relative z-10 w-full">
                {['Advanced pattern drafting and grading', 'Complex garment construction', 'Sewing on industrial and manual machines', 'How to start your own tailoring unit or boutique', 'Client handling and business basics', 'Quality control and finishing'].map((item, i) => (
                  <li key={i} className="flex items-start text-cream/80">
                    <span className="text-gold mr-3 mt-1 text-sm">✦</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="grid grid-cols-2 gap-4 w-full pt-6 border-t border-white/10 mb-8">
                <div>
                  <p className="text-xs text-cream/50 uppercase tracking-widest mb-1">Duration</p>
                  <p className="font-medium">300 Hours</p>
                </div>
                <div>
                  <p className="text-xs text-cream/50 uppercase tracking-widest mb-1">Eligibility</p>
                  <p className="font-medium">Basic Education</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-cream/50 uppercase tracking-widest mb-1">Certification</p>
                  <p className="font-medium flex items-center text-gold"><CheckCircle2 size={16} className="mr-2" /> Yes, on completion</p>
                </div>
              </div>
              
              <a href="#contact" className="w-full text-center bg-gold border border-gold text-charcoal hover:bg-gold-hover transition-all duration-300 py-4 font-semibold text-sm tracking-wide rounded-sm z-10">
                Enroll Now
              </a>
            </motion.div>
          </motion.div>

          {/* Why Train With Us */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Award, text: 'Trained by a Certified Designer' },
              { icon: Scissors, text: 'Hands-on Industrial & Manual Training' },
              { icon: Briefcase, text: 'Real-World Business Guidance' },
              { icon: BookOpen, text: 'Certificate Awarded on Completion' },
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center p-6 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center">
                <feature.icon className="w-8 h-8 text-gold mb-4" strokeWidth={1.5} />
                <p className="font-medium text-sm text-cream/90">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 bg-white/5 mx-4 sm:mx-8 rounded-3xl mb-12 border border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-5xl">What Our Clients Say</motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { q: "The attention to detail is unmatched. My custom jacket fits perfectly and the fabric quality is excellent. They truly understand modern tailoring.", n: "A. K.", l: "Custom Tailoring Client" },
              { q: "Joining the Skilling Centre changed my life. I started with zero knowledge and now I'm confident enough to take my own orders. The hands-on training via industrial machines was invaluable.", n: "S. T.", l: "Course Graduate" },
              { q: "I ordered a set of custom curtains and bed linens. The finishing was impeccable and gave my room that premium boutique feel I was looking for.", n: "M. P.", l: "Boutique Customer" }
            ].map((test, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-charcoal p-8 rounded-xl border border-white/10 relative">
                <span className="absolute top-6 left-6 font-serif text-6xl text-gold/20 leading-none">"</span>
                <p className="text-cream/80 relative z-10 mb-8 italic text-lg leading-relaxed pt-4">
                  {test.q}
                </p>
                <div className="border-t border-white/10 pt-6">
                  <p className="font-serif text-lg text-cream">{test.n}</p>
                  <p className="text-xs tracking-widest uppercase text-gold mt-1">{test.l}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Answers</motion.h2>
            <motion.h3 variants={fadeUp} className="font-serif text-4xl sm:text-5xl">Frequently Asked Questions</motion.h3>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                className="border border-white/10 rounded-xl overflow-hidden bg-white/5"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={activeFaq === i}
                >
                  <span className="font-serif text-lg pr-8">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-cream/70 leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. CONTACT SECTION */}
      <section id="contact" className="py-24 bg-charcoal border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Inquiries & Bookings</motion.h2>
            <motion.h3 variants={fadeUp} className="font-serif text-4xl sm:text-5xl">Get in Touch</motion.h3>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Contact Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-gold w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-serif text-xl mb-2">Address</h5>
                    <p className="text-cream/70 leading-relaxed">
                      123 Fashion Avenue<br />
                      Dimapur, Nagaland 797112<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-gold w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-serif text-xl mb-2">Phone</h5>
                    <p className="text-cream/70 leading-relaxed">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-gold w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-serif text-xl mb-2">Email</h5>
                    <p className="text-cream/70 leading-relaxed">hello@glancenagaland.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-gold w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-serif text-xl mb-2">Hours</h5>
                    <p className="text-cream/70 leading-relaxed">Mon–Sat, 10:00 AM – 6:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300">
                  <MessageCircle size={20} />
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-3"
            >
              <form className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-cream/70 font-semibold flex items-center">
                      Full Name <span className="text-gold ml-1">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-cream/70 font-semibold flex items-center">
                      Phone Number <span className="text-gold ml-1">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors"
                      placeholder="+91..."
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-cream/70 font-semibold">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2 mb-6">
                  <label htmlFor="enquiry" className="text-xs uppercase tracking-widest text-cream/70 font-semibold flex items-center">
                    Enquiry Type <span className="text-gold ml-1">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      id="enquiry" 
                      required
                      defaultValue=""
                      className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors appearance-none"
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="tailoring">Custom Tailoring</option>
                      <option value="footwear">Footwear</option>
                      <option value="linens">Linens</option>
                      <option value="basic_crs">Basic Course Enrollment</option>
                      <option value="advanced_crs">Advanced Course Enrollment</option>
                      <option value="general">General</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cream/50 pointer-events-none w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-cream/70 font-semibold">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us more about what you're looking for..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gold text-charcoal font-semibold tracking-wide py-4 rounded-sm hover:bg-gold-hover transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <a href="#home" className="flex flex-col items-start mb-6 inline-block">
                <span className="font-serif text-3xl font-semibold tracking-wider text-cream leading-none">Glance</span>
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold mt-1">Nagaland</span>
              </a>
              <p className="text-cream/50 text-sm max-w-sm font-serif italic text-lg">
                "Crafted with precision. Worn with pride."
              </p>
            </div>
            
            <div>
              <h6 className="text-xs font-bold uppercase tracking-widest text-cream mb-6">Quick Links</h6>
              <ul className="space-y-4">
                <li><a href="#home" className="text-cream/60 hover:text-gold text-sm transition-colors">Home</a></li>
                <li><a href="#about" className="text-cream/60 hover:text-gold text-sm transition-colors">About</a></li>
                <li><a href="#skilling-centre" className="text-cream/60 hover:text-gold text-sm transition-colors">Courses</a></li>
                <li><a href="#contact" className="text-cream/60 hover:text-gold text-sm transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="text-xs font-bold uppercase tracking-widest text-cream mb-6">Services</h6>
              <ul className="space-y-4">
                <li><a href="#shop" className="text-cream/60 hover:text-gold text-sm transition-colors">Custom Tailoring</a></li>
                <li><a href="#shop" className="text-cream/60 hover:text-gold text-sm transition-colors">Premium Footwear</a></li>
                <li><a href="#shop" className="text-cream/60 hover:text-gold text-sm transition-colors">Household Linens</a></li>
                <li><a href="#skilling-centre" className="text-cream/60 hover:text-gold text-sm transition-colors">Skilling Centre</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center text-xs text-cream/40">
            <p>&copy; {new Date().getFullYear()} Glance Nagaland. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
