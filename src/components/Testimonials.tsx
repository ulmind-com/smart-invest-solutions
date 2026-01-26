import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, MessageSquarePlus } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import FeedbackPopup from "./FeedbackPopup";

const testimonials = [
  {
    id: 1,
    name: "Surya Dutta",
    role: "Professor",
    text: "I had a good experience with SmartInvest Solutions. The team explained everything clearly and helped me choose the right investment and insurance options. Their service is professional, supportive, and trustworthy. I am satisfied with their guidance and support.",
    rating: 4,
    reviews: 52,
    image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766934315/IMG-20251228-WA0053_mgaxs0.jpg",
    quote: "Good Experience"
  },
  {
    id: 2,
    name: "Shatadip Mukherjee",
    role: "Medical Representative",
    text: "Very Good Guidance & services. SmartInvest Solutions helped me understand my financial options clearly. Their professional approach and dedicated support made the entire process seamless. Highly recommended for anyone seeking reliable investment guidance.",
    rating: 5,
    reviews: 68,
    image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766944415/IMG_8758_-_Shatadip_Mukherjee_bwipjx.jpg",
    quote: "Very Good Guidance"
  },
  {
    id: 3,
    name: "Sayan Bagdi",
    role: "Engineer",
    text: "SmartInvest Solutions provided clear guidance and timely support for my investment and insurance needs. The process was smooth and well explained. I appreciate their honest advice and professional service.",
    rating: 5,
    reviews: 45,
    image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766935249/IMG_20231124_222416_-_Sayan_Bagdi_jjojvd.jpg",
    quote: "Very Good Guidance"
  },
  {
    id: 4,
    name: "Ayan Bagdi",
    role: "Engineer",
    text: "Very satisfied with the service of SmartInvest Solutions. Proper guidance, quick response, and smooth process. Thank you for your support.",
    rating: 5,
    reviews: 71,
    image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766940323/IMG-20251008-WA0002_-_Ayan_Bagdi_myaost.jpg",
    quote: "Very Satisfied"
  },
  {
    id: 5,
    name: "Somnath Dey",
    role: "Professional Photographer",
    text: "Service is so beautiful ... keep it.",
    rating: 5,
    reviews: 54,
    image: "Somnath Dey.jpg",
    quote: "Very Satisfied",
  }
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-rotate every 5 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <section id="testimonials" className="py-10 sm:py-14 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-teal-600 rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl">
          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-4 md:space-y-6">

                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                        <div className="flex-1">
                          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 md:mb-2">
                            What Our Customers Say
                          </h2>
                          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-light">
                            About Us
                          </p>
                        </div>
                        
                        <div className="hidden lg:flex gap-2">
                          <button
                            onClick={scrollPrev}
                            className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
                            aria-label="Previous testimonial"
                          >
                            <ChevronLeft className="w-6 h-6 text-white" />
                          </button>
                          <button
                            onClick={scrollNext}
                            className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
                            aria-label="Next testimonial"
                          >
                            <ChevronRight className="w-6 h-6 text-white" />
                          </button>
                        </div>
                      </div>

                      {/* Mobile Profile Image */}
                      <div className="flex lg:hidden items-center gap-3">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-lime-400">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-white/70">{testimonial.role}</p>
                        </div>
                      </div>

                      <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-light">
                        {testimonial.text}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2 md:pt-4">
                        <div className="hidden lg:block">
                          <h4 className="text-lg xl:text-xl font-semibold text-white">
                            {testimonial.name} <span className="text-white/70 font-normal">/ {testimonial.role}</span>
                          </h4>
                        </div>

                        <div className="bg-slate-700/80 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-2xl flex items-center gap-2 md:gap-3 sm:ml-auto">
                          <Star className="w-6 md:w-8 h-6 md:h-8 fill-green-500 text-green-500" />
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 md:w-5 h-4 md:h-5 ${
                                  i < Math.floor(testimonial.rating)
                                    ? "fill-green-500 text-green-500"
                                    : "fill-green-500/30 text-green-500/30"
                                }`}
                              />
                            ))}
                          </div>
                          <div className="text-white ml-1 md:ml-2">
                            <div className="font-bold text-base md:text-lg">{testimonial.rating} score,</div>
                            <div className="text-xs md:text-sm text-white/70">{testimonial.reviews} reviews</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Content - Large Image (Desktop Only) */}
                    <div className="hidden lg:flex relative items-center justify-center">
                      <div className="absolute top-0 right-0 w-16 xl:w-20 h-16 xl:h-20 bg-lime-400 rounded-full flex items-center justify-center z-10">
                        <Quote className="w-8 xl:w-10 h-8 xl:h-10 text-black" />
                      </div>

                      <div className="relative">
                        <div className="w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-blue-400/30 backdrop-blur-sm">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="absolute -bottom-6 xl:-bottom-8 -right-6 xl:-right-8 bg-lime-400 text-black px-6 xl:px-8 py-3 xl:py-4 rounded-full shadow-2xl transform rotate-[-5deg]">
                          <p className="text-xl xl:text-2xl font-bold whitespace-nowrap">"{testimonial.quote}"</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex lg:hidden justify-center gap-3 mt-6 md:mt-8">
                    <button
                      onClick={scrollPrev}
                      className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={scrollNext}
                      className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current ? "w-8 bg-lime-400" : "w-2 bg-white/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Feedback Button */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={() => setIsFeedbackOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <MessageSquarePlus className="w-5 h-5 mr-2" />
            Share Your Feedback
          </Button>
        </div>
      </div>

      <FeedbackPopup isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
    </section>
  );
};

export default Testimonials;
