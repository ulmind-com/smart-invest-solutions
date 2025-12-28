import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import sisLogo from "@/assets/sis-logo.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Approach", href: "#approach" },
      { label: "Leadership", href: "#leadership" },
      { label: "Careers", href: "#" },
    ],
    services: [
      { label: "Wealth Management", href: "#services" },
      { label: "Investment Planning", href: "#services" },
      { label: "Insurance Solutions", href: "#services" },
      { label: "Retirement Planning", href: "#services" },
      { label: "Educational Planning", href: "#services" },
      { label: "Postal Investment", href: "#services" },
      { label: "Tax Planning", href: "#services" },
    ],
    resources: [
      { label: "Latest News", href: "#news" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact Us", href: "#contact" },
      { label: "FAQ", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Disclaimer", href: "#" },
      { label: "Regulatory", href: "#" },
    ],
  };

  return (
    <footer 
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-card border-t border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Brand Section */}
          <div 
            className={`col-span-2 lg:col-span-2 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img src={sisLogo} alt="Smart Investment Solutions" className="h-10 sm:h-12 w-auto object-contain mb-3 sm:mb-4" />
            <p className="text-foreground/70 mb-4 sm:mb-6 max-w-sm text-sm sm:text-base">
              Smart investment solutions. Your trusted partner in financial success since 1986.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <a href="https://wa.me/919641166805" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>+91 96411 66805</span>
              </a>
              <a href="mailto:smartinvest.solutions.supoort@gmail.com" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors text-xs sm:text-sm">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="break-all">smartinvest.solutions.supoort@gmail.com</span>
              </a>
              <a href="https://maps.app.goo.gl/GA2SQjgNssceaBmE6" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
                <span>Pakhanna Bus Stand, Bankura, West Bengal - 722208</span>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-foreground/70 hover:text-primary transition-colors text-xs sm:text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-foreground/70 hover:text-primary transition-colors text-xs sm:text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div 
            className={`col-span-2 sm:col-span-1 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-foreground/70 hover:text-primary transition-colors text-xs sm:text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div 
          className={`flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 py-4 sm:py-6 border-t border-border transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex gap-3 sm:gap-4">
            <a
              href="https://www.facebook.com/share/17aZjbfJhf/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/50 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-foreground group-hover:text-primary-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/smartinvest-solutions-93609b320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/50 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-foreground group-hover:text-primary-foreground" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-foreground/60">
            {footerLinks.legal.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div 
          className={`text-center pt-4 sm:pt-6 border-t border-border transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <p className="text-foreground/60 text-xs sm:text-sm">
            © {currentYear} Smart Investment Solutions. All rights reserved. | IRDAI & SEBI Registered Investment Advisor
          </p>
          <p className="text-foreground/50 text-[10px] sm:text-xs mt-1.5 sm:mt-2">
            Investments are subject to market risks. Please read all scheme related documents carefully before investing.
          </p>
          <p className="text-foreground/40 text-[10px] sm:text-xs mt-3 sm:mt-4">
            Website designed and developed by{" "}
            <a 
              href="https://www.ulmind.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-medium hover:text-primary/80 transition-colors underline-offset-2 hover:underline"
            >
              ULMiND
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
