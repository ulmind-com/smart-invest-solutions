import { ShieldCheck, HeartHandshake } from "lucide-react";
import aboutTeamMeeting from "@/assets/about-team-meeting.jpg";
import aboutProfessionalWork from "@/assets/about-professional-work.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import { useState, useEffect, useRef } from "react";
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedChars, setTypedChars] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const headingText = "The Journey Behind Our Business Success";
  const firstLineLength = "The Journey Behind Our ".length;

  // Initialize audio context
  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  // Play typing sound
  const playTypeSound = () => {
    if (!audioContextRef.current) return;
    
    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    // Create a subtle click sound
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.05);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && typedChars < headingText.length) {
      const timer = setTimeout(() => {
        setTypedChars((prev) => prev + 1);
        playTypeSound();
      }, 50); // 50ms per character for smooth typing effect
      return () => clearTimeout(timer);
    }
  }, [isVisible, typedChars, headingText.length]);


  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left Side - Images */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[700px] order-2 lg:order-1">
            {/* Main Image - Colored with teal border */}
            <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="absolute -inset-2 sm:-inset-3 bg-cyan-500/30 rounded-xl sm:rounded-[2rem] blur-sm" />
              <div className="relative rounded-xl sm:rounded-[2rem] border border-cyan-500 overflow-hidden">
                <img
                  src={aboutTeamMeeting}
                  alt="Team Meeting"
                  className="w-full h-[200px] sm:h-[280px] md:h-[320px] lg:h-[350px] object-cover"
                />
              </div>
            </div>

            {/* Bottom Left Small Image Strip - Hidden on very small screens */}
            <div className={`hidden sm:block absolute bottom-[180px] sm:bottom-[220px] md:bottom-[250px] lg:bottom-[280px] left-0 w-[40%] sm:w-[45%] z-10 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="absolute -inset-1.5 sm:-inset-2 bg-cyan-500/30 rounded-lg sm:rounded-[1.5rem] blur-sm" />
              <div className="relative rounded-lg sm:rounded-[1.5rem] border border-cyan-500 overflow-hidden">
                <img
                  src={aboutTeamMeeting}
                  alt="Office detail"
                  className="w-full h-[80px] sm:h-[100px] md:h-[110px] lg:h-[120px] object-cover object-center"
                />
              </div>
            </div>

            {/* Skilled Team Badge - Adjusted position for mobile */}
            <div className={`absolute bottom-[120px] sm:bottom-[160px] md:bottom-[190px] lg:bottom-[220px] left-[20%] sm:left-[35%] -translate-x-1/2 bg-[#1a3a3a] backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-2xl border border-cyan-500/30 z-20 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100 animate-float' : 'opacity-0 scale-90'}`}>
              <p className="text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">Skilled Team</p>
              <div className="flex -space-x-2">
                <img
                  src={teamMember1}
                  alt="Team member"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-[#1a3a3a] object-cover"
                />
                <img
                  src={teamMember2}
                  alt="Team member"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-[#1a3a3a] object-cover"
                />
                <img
                  src={teamMember3}
                  alt="Team member"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-[#1a3a3a] object-cover"
                />
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-[#1a3a3a] bg-[#a8d530] flex items-center justify-center text-[10px] sm:text-xs font-bold text-black">
                  9+
                </div>
              </div>
            </div>

            {/* Bottom Right Image - Grayscale with hover effect */}
            <div className={`absolute bottom-0 right-0 w-[55%] sm:w-[58%] transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="absolute -inset-2 sm:-inset-3 bg-cyan-500/30 rounded-xl sm:rounded-[2rem] blur-sm" />
              <div className="relative rounded-xl sm:rounded-[2rem] border border-cyan-500 overflow-hidden">
                <img
                  src={aboutProfessionalWork}
                  alt="Professional at work"
                  className="w-full h-[180px] sm:h-[240px] md:h-[280px] lg:h-[320px] object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-2">
            <div className={`inline-block transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary text-primary-foreground text-xs sm:text-sm font-semibold rounded-full uppercase tracking-wide">
                About Us
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
              <span className="inline-block">
                {headingText.split('').map((char, index) => {
                  const isVisible = index < typedChars;
                  const isGradientText = index >= firstLineLength;
                  
                  return (
                    <span
                      key={index}
                      className={`inline-block transition-all duration-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      } ${
                        isGradientText 
                          ? 'bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent' 
                          : ''
                      }`}
                      style={{
                        transitionDelay: `${index * 30}ms`
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  );
                })}
                <span className={`inline-block w-0.5 h-6 sm:h-7 md:h-8 ml-1 bg-primary ${typedChars >= headingText.length ? 'opacity-0' : 'opacity-100 animate-pulse'}`} />
              </span>
            </h2>

            <p className={`text-foreground/70 text-sm sm:text-base md:text-lg leading-relaxed transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              Smart Investment Solutions is the go-to hub for early adopters and innovation enthusiasts, 
              offering cutting-edge financial solutions that drive success.
            </p>

            {/* Trusted Financial Guidance */}
            <div className={`flex gap-3 sm:gap-4 items-start transition-all duration-1000 ease-out delay-[400ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-700 delay-[450ms] ${isVisible ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-50'}`}>
                <ShieldCheck className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className={`text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  Trusted Financial Guidance
                </h3>
                <p className={`text-foreground/60 text-sm sm:text-base transition-all duration-1000 delay-[550ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  We provide reliable, transparent, and personalized investment and insurance solutions to help clients secure and grow their financial future.
                </p>
              </div>
            </div>

            {/* Customer-Focused Service */}
            <div className={`flex gap-3 sm:gap-4 items-start transition-all duration-1000 ease-out delay-[600ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-700 delay-[650ms] ${isVisible ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-50'}`}>
                <HeartHandshake className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className={`text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  Customer-Focused Service
                </h3>
                <p className={`text-foreground/60 text-sm sm:text-base transition-all duration-1000 delay-[750ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  We focus on long-term relationships by offering continuous support, easy processes, and dedicated assistance for both new and existing clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
