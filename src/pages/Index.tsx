import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import LaunchCountdown, { COUNTDOWN_ENABLED } from "@/components/LaunchCountdown";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Leadership from "@/components/Leadership";
import Gallery from "@/components/Gallery";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Partners from "@/components/Partners";
import GroupBands from "@/components/GroupBands";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => {
  const [isLeadCaptured, setIsLeadCaptured] = useState(() => {
    return localStorage.getItem('lead_captured') === 'true';
  });
  
  const [isLaunched, setIsLaunched] = useState(() => {
    // Check if launch date has passed
    const launchDate = new Date('2026-01-01T00:00:00+05:30');
    return new Date() >= launchDate;
  });

  useEffect(() => {
    // Check launch status every second
    const checkLaunch = () => {
      const launchDate = new Date('2026-01-01T00:00:00+05:30');
      if (new Date() >= launchDate) {
        setIsLaunched(true);
      }
    };
    
    const timer = setInterval(checkLaunch, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Advanced scroll animation observer with multiple animation types
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const animationType = target.dataset.animation || "fade-in-up";
          
          // Add main animation to section
          target.classList.add(`animate-${animationType}`);
          target.style.opacity = "1";
          
          // Stagger animation for child elements
          const children = target.querySelectorAll('[data-stagger]');
          children.forEach((child, index) => {
            const element = child as HTMLElement;
            setTimeout(() => {
              element.style.opacity = "1";
              element.style.transform = "translateY(0)";
            }, index * 150); // 150ms delay between each child
          });
        }
      });
    }, observerOptions);

    // Observe all sections with data-animate attribute
    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => {
      const element = section as HTMLElement;
      element.style.opacity = "0";
      observer.observe(element);
    });

    // Observe stagger children
    const staggerElements = document.querySelectorAll('[data-stagger]');
    staggerElements.forEach((element) => {
      const el = element as HTMLElement;
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    });

    return () => observer.disconnect();
  }, []);

  // Show countdown if enabled and not yet launched
  if (COUNTDOWN_ENABLED && !isLaunched) {
    return <LaunchCountdown />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {!isLeadCaptured && (
        <LeadCapturePopup onComplete={() => setIsLeadCaptured(true)} />
      )}
      
      <div className={!isLeadCaptured ? "blur-sm pointer-events-none select-none" : ""}>
        <Navbar />
        <Hero />
        <div data-animate data-animation="fade-in-up">
          <About />
        </div>
        <div data-animate data-animation="slide-in-left">
          <Approach />
        </div>
        <div data-animate data-animation="fade-in-up">
          <Services />
        </div>
        <div data-animate data-animation="zoom-in">
          <Leadership />
        </div>
        <div data-animate data-animation="reveal">
          <Gallery />
        </div>
        <div data-animate data-animation="slide-in-right">
          <Achievements />
        </div>
        <div data-animate data-animation="fade-in-up">
          <Testimonials />
        </div>
        <div data-animate data-animation="slide-in-bottom">
          <FAQ />
        </div>
        <div data-animate data-animation="zoom-in">
          <Partners />
        </div>
        <div data-animate data-animation="fade-in-up">
          <GroupBands />
        </div>
        <div data-animate data-animation="fade-in-up">
          <Contact />
        </div>
        <Footer />
        {isLeadCaptured && <WhatsAppWidget />}
      </div>
    </div>
  );
};

export default Index;
