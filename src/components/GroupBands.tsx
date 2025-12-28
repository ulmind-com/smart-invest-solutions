import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GroupBands = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const logos = [
    { name: "Trustedge Insurance", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766693850/Picsart_25-10-08_10-02-37-977-removebg-preview_gdkyny.png" },
    { name: "SmartInvest Secure", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766693850/Picsart_24-10-09_15-41-52-110-removebg-preview_mvqbwp.png" },
    { name: "SmartInvest Capital", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766693850/Picsart_24-10-09_15-43-19-788-removebg-preview_varkkc.png" },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Group{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Bands
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Trusted by leading companies worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`group bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 flex items-center justify-center ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg w-full">
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="w-full h-16 md:h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`mt-12 text-center transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-foreground/60">
            Regulated and compliant with all major financial authorities in India
          </p>
        </div>
      </div>
    </section>
  );
};

export default GroupBands;
