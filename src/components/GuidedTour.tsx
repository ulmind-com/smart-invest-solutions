import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, HelpCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TourStep {
  target: string;
  title: string;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
}

interface GuidedTourProps {
  steps: TourStep[];
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const GuidedTour = ({ steps, isOpen, onClose, onComplete }: GuidedTourProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      return;
    }

    const updatePosition = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      
      const step = steps[currentStep];
      const element = document.querySelector(step.target);
      
      if (element) {
        const rect = element.getBoundingClientRect();
        setTargetRect(rect);
        
        // On mobile, always position tooltip at bottom of screen as a modal
        if (mobile) {
          setTooltipStyle({
            position: 'fixed',
            bottom: '16px',
            left: '16px',
            right: '16px',
            top: 'auto',
            width: 'auto',
            maxWidth: 'calc(100vw - 32px)',
          });
        } else {
          // Desktop positioning
          const tooltipWidth = Math.min(320, window.innerWidth - 32);
          const position = step.position || "bottom";
          let top = 0;
          let left = 0;

          switch (position) {
            case "top":
              top = rect.top - 200 + window.scrollY;
              left = rect.left + rect.width / 2 - tooltipWidth / 2;
              break;
            case "bottom":
              top = rect.bottom + 16 + window.scrollY;
              left = rect.left + rect.width / 2 - tooltipWidth / 2;
              break;
            case "left":
              top = rect.top + rect.height / 2 - 100 + window.scrollY;
              left = rect.left - tooltipWidth - 16;
              break;
            case "right":
              top = rect.top + rect.height / 2 - 100 + window.scrollY;
              left = rect.right + 16;
              break;
          }

          // Keep tooltip within viewport with proper margins
          const margin = 16;
          left = Math.max(margin, Math.min(left, window.innerWidth - tooltipWidth - margin));
          top = Math.max(margin, Math.min(top, window.innerHeight + window.scrollY - 280));

          setTooltipStyle({
            position: 'absolute',
            top: `${top}px`,
            left: `${left}px`,
            width: `${tooltipWidth}px`,
          });
        }
        
        // Scroll element into view
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);
    
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [isOpen, currentStep, steps]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    onClose();
  };

  if (!isOpen) return null;

  const step = steps[currentStep];

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-[9998] bg-black/60 transition-opacity duration-300" />
      
      {/* Spotlight on target element */}
      {targetRect && !isMobile && (
        <div
          className="fixed z-[9999] pointer-events-none"
          style={{
            top: targetRect.top - 8,
            left: targetRect.left - 8,
            width: targetRect.width + 16,
            height: targetRect.height + 16,
            boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.6)",
            borderRadius: "12px",
            border: "3px solid hsl(var(--primary))",
            animation: "pulse-border 2s infinite",
          }}
        />
      )}

      {/* Mobile spotlight - simplified */}
      {targetRect && isMobile && (
        <div
          className="fixed z-[9999] pointer-events-none rounded-lg border-2 border-primary"
          style={{
            top: targetRect.top - 4,
            left: targetRect.left - 4,
            width: targetRect.width + 8,
            height: targetRect.height + 8,
            boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.6)",
          }}
        />
      )}

      {/* Tooltip */}
      <div
        className="z-[10000] bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-fade-in"
        style={tooltipStyle}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground font-semibold text-sm">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={handleSkip}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{step.content}</p>
        </div>

        {/* Progress bar */}
        <div className="px-4">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSkip}
            className="text-muted-foreground hover:text-foreground text-xs sm:text-sm order-2 sm:order-1"
          >
            Skip tour
          </Button>
          <div className="flex gap-2 w-full sm:w-auto order-1 sm:order-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="flex-1 sm:flex-none sm:w-20"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
            <Button
              size="sm"
              onClick={handleNext}
              className="flex-1 sm:flex-none sm:w-20"
            >
              {currentStep === steps.length - 1 ? "Finish" : "Next"}
              {currentStep < steps.length - 1 && <ChevronRight className="w-4 h-4 ml-1" />}
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-border {
          0%, 100% {
            box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.6), 0 0 0 0 hsl(var(--primary) / 0.4);
          }
          50% {
            box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.6), 0 0 20px 4px hsl(var(--primary) / 0.6);
          }
        }
      `}</style>
    </>
  );
};

export default GuidedTour;

// Tour button component to trigger the tour
export const TourButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/10"
    >
      <HelpCircle className="w-4 h-4 text-primary" />
      <span className="hidden sm:inline">Take a Tour</span>
      <span className="sm:hidden">Tour</span>
    </Button>
  );
};
