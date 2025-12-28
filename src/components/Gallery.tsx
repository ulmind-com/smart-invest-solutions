import { useState, useMemo } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const allImages = [
    {
      url: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766691464/IMG_20241108_140628_daonnm.jpg",
      title: "Meet with Sr. DM sir",
      category: "Events",
    },
    {
      url: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766691462/IMG_20240919_133546_rhxqqh.jpg",
      title: "Meet with Sr. DM sir",
      category: "Events",
    },
    {
      url: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766691462/IMG_20240822_123208_c48yv9.jpg",
      title: "Team Workshop",
      category: "Team",
    },
    {
      url: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766691452/IMG_20240822_121624_ky7xei.jpg",
      title: "Financial Planning",
      category: "Services",
    },
    {
      url: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766691448/IMG-20231219-WA0011_h3v8bx.jpg",
      title: "Unit Meeting",
      category: "Events",
    },
    {
      url: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766692081/IMG_20240726_211846_jt2t6p.jpg",
      title: "Strategy Session",
      category: "Team",
    },
    {
      url: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766691447/IMG_20240919_133258_bg8qur.jpg",
      title: "Meet with Mktg. Manager Sir",
      category: "Events",
    },
    {
      url: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766691445/FB_IMG_1766681381468_qve1au.jpg",
      title: "Joining day in LIC",
      category: "Events",
    },
    {
      url: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766691445/FB_IMG_1766681400651_xifhou.jpg",
      title: "Meet with Zonal Manager Sir",
      category: "Events",
    },
  ];

  // Shuffle images on each page load
  const images = useMemo(() => {
    const shuffled = [...allImages];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            A glimpse into our world of financial excellence and client success stories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-sm font-semibold">{image.category}</span>
                  <h3 className="text-xl font-bold text-foreground">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              className="max-w-full max-h-[90vh] rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
