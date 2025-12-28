import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

interface SwipeButtonProps {
  onSwipeComplete: () => void;
  label?: string;
}

const SwipeButton = ({ onSwipeComplete, label = "Swipe to Get Started" }: SwipeButtonProps) => {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);

  const maxDrag = containerRef.current ? containerRef.current.offsetWidth - 56 : 200;
  const threshold = maxDrag * 0.7;

  const handleStart = (clientX: number) => {
    if (isComplete) return;
    setIsDragging(true);
    startXRef.current = clientX - dragX;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || isComplete) return;
    const newX = Math.max(0, Math.min(clientX - startXRef.current, maxDrag));
    setDragX(newX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (dragX >= threshold) {
      setDragX(maxDrag);
      setIsComplete(true);
      setTimeout(() => {
        onSwipeComplete();
        // Reset after navigation
        setTimeout(() => {
          setDragX(0);
          setIsComplete(false);
        }, 500);
      }, 300);
    } else {
      setDragX(0);
    }
  };

  const progress = Math.min(dragX / maxDrag, 1);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-sm h-14 rounded-full bg-gradient-to-r from-primary/20 to-orange-500/20 border border-primary/30 overflow-hidden cursor-pointer select-none"
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      {/* Progress fill */}
      <div
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-orange-500 transition-all duration-100 rounded-full"
        style={{ 
          width: `${(dragX / maxDrag) * 100}%`,
          opacity: 0.3
        }}
      />

      {/* Label */}
      <div 
        className="absolute inset-0 flex items-center justify-center text-sm font-medium text-foreground/70 transition-opacity"
        style={{ opacity: 1 - progress }}
      >
        <span className="ml-8">{label}</span>
        <div className="ml-2 flex items-center gap-0.5">
          <ArrowRight className="w-4 h-4 animate-pulse" />
        </div>
      </div>

      {/* Success text */}
      <div 
        className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white transition-opacity"
        style={{ opacity: isComplete ? 1 : 0 }}
      >
        Redirecting...
      </div>

      {/* Draggable button */}
      <div
        className={`absolute top-1 bottom-1 left-1 w-12 rounded-full bg-gradient-to-r from-primary to-orange-500 shadow-lg flex items-center justify-center transition-all ${
          isDragging ? "scale-95" : "scale-100"
        } ${isComplete ? "bg-green-500" : ""}`}
        style={{
          transform: `translateX(${dragX}px) ${isDragging ? "scale(0.95)" : "scale(1)"}`,
          transition: isDragging ? "none" : "transform 0.3s ease-out",
        }}
      >
        <ArrowRight className={`w-5 h-5 text-white transition-transform ${isComplete ? "rotate-90" : ""}`} />
      </div>
    </div>
  );
};

export default SwipeButton;
