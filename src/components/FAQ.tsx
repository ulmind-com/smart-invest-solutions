import { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import aboutTeamMeeting from "@/assets/about-team-meeting.jpg";
import GetQuotePopup from "./GetQuotePopup";

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "What services does SmartInvest Solutions provide?",
      answer:
        "We offer a complete range of Insurance and Investment solutions, including Life Insurance (LIC), Child Education Plans, Retirement Plans, Health Insurance, Term Insurance, and long-term investment planning—all under one roof.",
    },
    {
      question: "How do you help in financial planning?",
      answer:
        "We first understand your income, goals, risk profile, and family responsibilities, then suggest customized investment and insurance solutions to help you achieve short-term and long-term financial goals.",
    },
    {
      question: "Can I track all my investments in one place?",
      answer:
        "Yes. We aim to provide one-point solutions where you can manage and track your insurance and investment portfolio with ease and proper guidance.",
    },
    {
      question: "Do You Provide Remote Consulting Services?",
      answer:
        "Yes, we offer comprehensive remote consulting services using advanced collaboration tools and platforms. Our virtual consulting model ensures seamless communication, real-time updates, and effective project delivery regardless of geographical location.",
    },
    {
      question: "What Industries Do You Specialize In?",
      answer:
        "We specialize in financial services, wealth management, investment advisory, and fintech solutions. Our team has deep expertise in banking, insurance, asset management, and emerging financial technologies, helping clients navigate complex regulatory environments and market dynamics.",
    },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#0a1f3d] via-[#0d2847] to-[#0a1f3d] overflow-hidden"
    >
      {/* Dotted Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Blue glow effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-20" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#a8d530] rounded-full blur-[120px] opacity-15" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary rounded-full blur-[80px] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div
            className={`relative h-[500px] lg:h-[600px] transition-all duration-1000 group ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
              <img
                src="https://res.cloudinary.com/dbznj2cof/image/upload/v1766944590/WhatsApp_Image_2025-12-28_at_11.22.47_PM_ttfqoy.jpg"
                alt="Team collaboration"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              {/* Subtle dark overlay that fades on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700" />
              
              {/* Green accent border on hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#a8d530] group-hover:shadow-2xl group-hover:shadow-[#a8d530]/40 transition-all duration-700" />
            </div>
          </div>

          {/* Right Side - FAQ Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className={`inline-block transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="px-6 py-2 bg-[#a8d530] text-black text-sm font-bold rounded-full uppercase tracking-wide">
                FAQ'S
              </span>
            </div>

            {/* Heading */}
            <h2
              className={`text-4xl md:text-5xl font-bold leading-tight text-white transition-all duration-1000 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Frequently Asked Questions
            </h2>

            {/* Description */}
            {/* Description */}
            <p
              className={`text-white text-lg leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Smart Investment Solutions is the hub for early adopters and innovation
              enthusiasts, offering vibrant, imaginative technology before it
              becomes mainstream.
            </p>

            {/* CTA Button */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                size="lg"
                onClick={() => setIsQuotePopupOpen(true)}
                className="bg-[#a8d530] text-black hover:bg-[#a8d530]/90 hover:shadow-lg hover:shadow-[#a8d530]/50 font-bold px-8 rounded-md transition-all duration-300"
              >
                Get A Quote
              </Button>
            </div>

            <GetQuotePopup 
              isOpen={isQuotePopupOpen} 
              onClose={() => setIsQuotePopupOpen(false)} 
            />

            {/* FAQ Accordion */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm border-2 border-primary/30 rounded-xl px-6 py-2 hover:border-[#a8d530] hover:shadow-xl hover:shadow-[#a8d530]/30 hover:bg-gradient-to-r hover:from-primary/30 hover:to-primary/20 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-white hover:text-[#a8d530] text-left font-bold text-base py-4 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/90 text-sm leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
