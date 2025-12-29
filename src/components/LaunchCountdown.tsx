import { useState, useEffect } from 'react';

const COUNTDOWN_LOGO = "https://res.cloudinary.com/dbznj2cof/image/upload/v1766696133/Picsart_25-12-26_02-23-24-680-removebg-preview_rtwgku.png";

// ⚡ TOGGLE THIS TO ENABLE/DISABLE COUNTDOWN
export const COUNTDOWN_ENABLED = true;

// 🎯 SET YOUR LAUNCH DATE HERE (January 1st, 2026 at midnight IST)
const LAUNCH_DATE = new Date('2026-01-01T00:00:00+05:30');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LaunchCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = LAUNCH_DATE.getTime() - now.getTime();

      if (difference <= 0) {
        setIsLaunched(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isLaunched) {
    return null;
  }

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-financial-gold/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={COUNTDOWN_LOGO} 
            alt="Smart Investment Solutions" 
            className="h-24 md:h-32 mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-financial-gold to-primary">Amazing</span> is Coming
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          We're working hard to bring you the best financial solutions. Stay tuned for our grand launch!
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' },
          ].map((item, index) => (
            <div key={item.label} className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-financial-gold/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              
              {/* Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 md:p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 font-mono tracking-tight">
                  {formatNumber(item.value)}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-widest text-slate-400 font-medium">
                  {item.label}
                </div>
                
                {/* Animated line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
              </div>
            </div>
          ))}
        </div>

        {/* Launch Date */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center gap-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-slate-300 text-sm md:text-base">
              Launching on <span className="text-white font-semibold">January 1st, 2026</span>
            </span>
          </div>
        </div>

        {/* Social/Contact hint */}
        <p className="text-slate-500 text-sm mt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
          Smart Investment Solutions • Expert Financial Management
        </p>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
};

export default LaunchCountdown;
