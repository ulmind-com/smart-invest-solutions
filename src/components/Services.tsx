import { Wallet, TrendingUp, Shield, PieChart, Building, Mail, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import GetQuotePopup from "./GetQuotePopup";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const handleGetQuote = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsQuotePopupOpen(true);
  };

  const services = [
    {
      icon: Wallet,
      title: "Wealth Management",
      description: "Comprehensive portfolio management strategies designed to grow and protect your wealth across market cycles.",
      features: ["Portfolio Diversification", "Risk Management", "Performance Tracking"],
    },
    {
      icon: TrendingUp,
      title: "Investment Planning",
      description: "Strategic investment solutions tailored to your risk tolerance and financial objectives.",
      features: ["Equity Investments", "Mutual Funds", "Alternative Assets"],
    },
    {
      icon: Shield,
      title: "Insurance Solutions",
      description: "Protect what matters most with comprehensive insurance coverage and risk mitigation strategies.",
      features: ["Life Insurance", "Health Coverage", "Motor Insurance", "Wealth Protection"],
    },
    {
      icon: GraduationCap,
      title: "Educational Planning",
      description: "Secure your child's future with strategic education funding and investment planning.",
      features: ["Early Start & Goal Setting", "Inflation Protection", "Right Asset Allocation", "Regular Review & Adjustment"],
    },
    {
      icon: PieChart,
      title: "Retirement Planning",
      description: "Build a secure retirement with strategic planning and disciplined wealth accumulation.",
      features: ["Pension Plans", "Retirement Funds", "Income Planning"],
    },
    {
      icon: Mail,
      title: "Postal Investment",
      description: "Secure your wealth with guaranteed returns through trusted government-backed schemes.",
      features: ["Fixed Deposit", "Recurring Deposit", "Monthly Income Scheme", "National Savings Certificate", "Kisan Vikash Patra"],
    },
    {
      icon: Building,
      title: "Tax Planning",
      description: "Optimize your tax efficiency with smart strategies and legal tax-saving instruments.",
      features: ["Tax Optimization", "Legal Compliance", "Strategic Planning"],
    },
  ];

  return (
    <section 
      id="services" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          className={`max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 px-2">
            Comprehensive financial solutions designed to meet every aspect of your wealth management needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 hover:scale-[1.02] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary to-primary/70 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-5 md:mb-6 group-hover:text-foreground/90 transition-colors">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 md:mb-6">
                {service.features.map((feature, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center text-xs sm:text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors"
                  >
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full mr-2 group-hover:scale-150 transition-transform" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20"
                onClick={() => handleGetQuote(service.title)}
              >
                Get A Quote
              </Button>
            </div>
          ))}
        </div>

        <div 
          className={`mt-8 sm:mt-12 md:mt-16 text-center transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="text-foreground/70 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
            Need help in finding the right policy?
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 text-sm sm:text-base"
            onClick={() => handleGetQuote("Custom Solution")}
          >
            Request a Call Back
          </Button>
        </div>
      </div>

      <GetQuotePopup 
        isOpen={isQuotePopupOpen} 
        onClose={() => setIsQuotePopupOpen(false)} 
        serviceTitle={selectedService}
      />
    </section>
  );
};

export default Services;
