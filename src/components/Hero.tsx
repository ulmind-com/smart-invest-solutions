import { useEffect, useState } from "react";
import { ChartLine } from "lucide-react";
import SwipeButton from "./SwipeButton";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSwipeComplete = () => {
    window.open('https://fundzbazar.com/Link/MjHqZqpf3UQ', '_blank');
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-sky-50/80 dark:from-background dark:via-background dark:to-background">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/40 to-amber-200/40 dark:from-primary/10 dark:to-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-sky-200/40 to-blue-200/40 dark:from-blue-500/10 dark:to-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-rose-200/30 to-pink-200/30 dark:from-pink-500/10 dark:to-pink-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE - Content */}
          <div className="order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Since 1986 Badge */}
            <div 
              className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-orange-500/10 dark:from-primary/20 dark:to-orange-500/20 border border-primary/20 mb-6 transition-all duration-700 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-primary">Since 1986</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <span className="text-sm font-medium text-foreground/80">40+ Years of Trust</span>
            </div>

            {/* Main Heading */}
            <h1 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] mb-6 transition-all duration-700 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <span className="inline-flex items-center gap-2 flex-wrap justify-center lg:justify-start">
                Manage your
                <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-orange-500 text-white shadow-lg shadow-primary/30">
                  <ChartLine className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
                finance easily with
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">
                SmartInvest Solutions
              </span>
            </h1>

            {/* Subheading */}
            <p 
              className={`text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-md transition-all duration-700 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              One point Solutions for Insurance & Investment
            </p>

            {/* Swipe CTA Button */}
            <div 
              className={`w-full max-w-sm transition-all duration-700 ease-out ${
                isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <SwipeButton 
                onSwipeComplete={handleSwipeComplete}
                label="Swipe to Get Started"
              />
              <p className="text-xs text-muted-foreground mt-3 text-center lg:text-left">
                Drag the button to start your investment journey →
              </p>
            </div>

            {/* Quick Stats */}
            <div 
              className={`flex flex-wrap justify-center lg:justify-start gap-6 mt-8 pt-8 border-t border-border/50 transition-all duration-700 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">40+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">₹50Cr+</div>
                <div className="text-xs text-muted-foreground">Assets Managed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">10,000+</div>
                <div className="text-xs text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Illustration */}
          <div 
            className={`order-2 lg:order-2 flex justify-center lg:justify-end transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 sm:-inset-8 rounded-full border-2 border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute -inset-8 sm:-inset-16 rounded-full border border-orange-300/20" />
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                <span className="text-white text-lg font-bold">₹</span>
              </div>
              <div className="absolute -bottom-2 -left-6 w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-sky-500 shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <span className="text-white text-sm font-bold">%</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg animate-float" style={{ animationDelay: "1.5s" }} />
              
              {/* Main illustration */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden p-4">
                <img 
                  src="https://res.cloudinary.com/dbznj2cof/image/upload/v1766513293/6573_jwaim7.png" 
                  alt="Financial planning illustration" 
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 w-20 h-20 border border-primary/20 rounded-2xl rotate-12 hidden lg:block" />
      <div className="absolute top-1/4 right-10 w-16 h-16 border border-primary/20 rounded-full hidden lg:block" />
    </section>
  );
};

export default Hero;
