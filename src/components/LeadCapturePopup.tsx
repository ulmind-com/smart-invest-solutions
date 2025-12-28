import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { User, Phone, Mail } from 'lucide-react';

const STORAGE_KEY = 'lead_captured';

interface LeadCapturePopupProps {
  onComplete: () => void;
}

const LeadCapturePopup = ({ onComplete }: LeadCapturePopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const hasSubmitted = localStorage.getItem(STORAGE_KEY);
    if (hasSubmitted) {
      onComplete();
    } else {
      setIsOpen(true);
    }
  }, [onComplete]);

  const validatePhone = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length === 10;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your name.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.phone.trim() || !validatePhone(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append("access_key", "1217b98a-d1f2-438a-8ce9-2178c354cd57");
      form.append("subject", "🔔 New Visitor on SmartInvest Solutions Website");
      form.append("from_name", "SmartInvest Solutions Website");
      form.append("message", `A new member visit your website. Details below 👇

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
Source: Lead Capture Popup
Time: ${new Date().toLocaleString()}`);
      
      // Also include individual fields for structured data
      form.append("name", formData.name);
      form.append("phone", formData.phone);
      if (formData.email) {
        form.append("email", formData.email);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem(STORAGE_KEY, 'true');
        toast({
          title: "Welcome!",
          description: "Thank you for your interest. Enjoy exploring our services!"
        });
        setIsOpen(false);
        onComplete();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent 
        className="sm:max-w-md border-primary/20 bg-background/95 backdrop-blur-xl"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="flex flex-col items-center text-center space-y-4 pt-4">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img 
              src="https://res.cloudinary.com/dbznj2cof/image/upload/v1766931648/Picsart_25-12-28_00-37-21-307_zs5tar.jpg" 
              alt="SmartInvest Solutions"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Welcome to SmartInvest Solutions</h2>
            <p className="text-muted-foreground mt-2">
              Please share your details to explore our insurance solutions
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="popup-name" className="text-foreground">
              Name <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="popup-name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="pl-10 bg-background border-border focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-phone" className="text-foreground">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="popup-phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="pl-10 bg-background border-border focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-email" className="text-foreground">
              Email <span className="text-muted-foreground text-sm">(Optional)</span>
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="popup-email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pl-10 bg-background border-border focus:border-primary"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Continue to Website"}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Your information is secure and will only be used to serve you better.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCapturePopup;
