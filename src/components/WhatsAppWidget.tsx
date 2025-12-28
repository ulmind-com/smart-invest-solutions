import { useState } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import whatsappIcon from "@/assets/whatsapp-logo.png";
import sisLogo from "@/assets/sis-logo.png";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const adminNumber = "919641166805"; // WhatsApp format: country code + number
  const phoneNumber = "+919641166805"; // Phone number for calls

  const handleSend = () => {
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      setMessage("");
      setIsOpen(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[380px] max-w-[calc(100vw-3rem)] bg-background rounded-2xl shadow-2xl overflow-hidden z-50 animate-fade-in-up">
          {/* Header */}
          <div className="bg-[#00897B] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden p-1">
                <img src={sisLogo} alt="Smart Investment Solutions" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Smart Investment Solutions</h3>
                <p className="text-sm text-white/90">+91 96411 66805</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="bg-[#E5DDD5] p-4 min-h-[250px] max-h-[350px] flex flex-col justify-end">
            <div className="text-xs text-center text-gray-500 mb-4">11:18</div>
            <div className="space-y-2">
              <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[80%] animate-fade-in">
                <p className="text-sm text-gray-800">Hi there 👋</p>
              </div>
              <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[80%] animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <p className="text-sm text-gray-800">How can I help you?</p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-[#F0F0F0] p-4 flex items-center gap-2">
            <Input
              type="text"
              placeholder="Enter Your Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 bg-white border-none shadow-sm text-gray-900 placeholder:text-gray-500"
            />
            <Button
              onClick={handleSend}
              size="icon"
              className="bg-[#00897B] hover:bg-[#00796B] rounded-full w-12 h-12 shadow-lg"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-[7.5rem] right-6 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center z-50 transition-all hover:scale-110 animate-bounce-subtle overflow-hidden"
          aria-label="Open WhatsApp Chat"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full object-cover" />
        </button>
      )}

      {/* Floating Phone Button */}
      <button
        onClick={handlePhoneCall}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-all hover:scale-110 animate-bounce-subtle"
        aria-label="Call Now"
        style={{ animationDelay: "0.2s" }}
      >
        <Phone className="w-8 h-8" fill="currentColor" />
      </button>
    </>
  );
};

export default WhatsAppWidget;
