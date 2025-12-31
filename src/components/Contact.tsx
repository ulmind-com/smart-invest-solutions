import { Mail, Phone, MapPin, Send, Car, Bike, Truck, Heart, Umbrella, TrendingUp, Mail as PostalIcon, Clock, GraduationCap, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const insuranceOptions = [
  { id: "car", label: "Car", icon: Car },
  { id: "bike", label: "Bike", icon: Bike },
  { id: "commercial", label: "Commercial Vehicle", icon: Truck },
  { id: "health", label: "Health", icon: Heart },
  { id: "life", label: "Life", icon: Umbrella },
  { id: "mutual-funds", label: "Mutual Funds", icon: TrendingUp },
  { id: "postal-investment", label: "Postal Investment", icon: PostalIcon },
  { id: "retirement-planning", label: "Retirement Planning", icon: Clock },
  { id: "educational-planning", label: "Educational Planning", icon: GraduationCap },
  { id: "tax-planning", label: "Tax Planning", icon: Calculator },
];

const Contact = () => {
  const [selectedInsurance, setSelectedInsurance] = useState<string[]>([]);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const toggleInsurance = (id: string) => {
    setSelectedInsurance(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "197edb17-367c-40e2-b40c-6db7467af55b");
    formData.append("insurance_interests", selectedInsurance.map(id => 
      insuranceOptions.find(opt => opt.id === id)?.label
    ).filter(Boolean).join(", "));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        (event.target as HTMLFormElement).reset();
        setSelectedInsurance([]);
      } else {
        setResult("Error submitting form");
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      setResult("Error submitting form");
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/10"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          className={`max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 px-2">
            Ready to take control of your financial future? Let's start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div 
            className={`space-y-4 sm:space-y-6 md:space-y-8 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">Contact Information</h3>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">WhatsApp</h4>
                    <a href="https://wa.me/919641166805" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base">+91 96411 66805</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">Email</h4>
                    <a href="mailto:smartinvest.solutions.supoort@gmail.com" className="text-foreground/70 hover:text-primary transition-colors text-xs sm:text-sm md:text-base break-all">smartinvest.solutions.supoort@gmail.com</a>
                  </div>
                </div>

                <a 
                  href="https://maps.app.goo.gl/GA2SQjgNssceaBmE6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 sm:gap-4 group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">Address</h4>
                    <p className="text-foreground/70 text-sm sm:text-base group-hover:text-primary transition-colors">
                      Pakhanna Bus Stand, Bankura,<br />
                      West Bengal - 722208
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">Office Hours</h3>
              <div className="space-y-1.5 sm:space-y-2 text-foreground/70 text-sm sm:text-base">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`bg-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">Send Us a Message</h3>

            <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Insurance Selection */}
              <div>
                <label className="text-xs sm:text-sm font-medium mb-2 sm:mb-3 block">
                  Select below the insurance you are interested in (Multi-select)
                </label>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {insuranceOptions.map((option) => {
                    const Icon = option.icon;
                    const isSelected = selectedInsurance.includes(option.id);
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => toggleInsurance(option.id)}
                        className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-full border-2 transition-all duration-300 font-medium text-xs sm:text-sm ${
                          isSelected
                            ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                            : "bg-background border-border hover:border-primary/50 text-foreground/80 hover:text-primary"
                        }`}
                      >
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 block">First Name</label>
                  <Input name="first_name" placeholder="John" className="bg-background text-sm sm:text-base" required />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 block">Last Name</label>
                  <Input name="last_name" placeholder="Doe" className="bg-background text-sm sm:text-base" required />
                </div>
              </div>

              <div>
                <label className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 block">Email</label>
                <Input type="email" name="email" placeholder="john@example.com" className="bg-background text-sm sm:text-base" required />
              </div>

              <div>
                <label className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 block">Phone</label>
                <Input type="tel" name="phone" placeholder="+91 98765 43210" className="bg-background text-sm sm:text-base" required />
              </div>

              <div>
                <label className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 block">Message</label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your financial goals..."
                  className="bg-background min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                  required
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group text-sm sm:text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              {result && (
                <p className={`text-center text-sm ${result.includes("Success") ? "text-green-600" : result.includes("Error") ? "text-red-500" : "text-foreground/70"}`}>
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
