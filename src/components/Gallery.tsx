import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: gallery1, alt: "Visite à l'hôpital avec Spider-Man et Batman", category: "Hôpital" },
    { src: gallery2, alt: "Notre mascotte Cosp'ital", category: "Mascotte" },
    { src: gallery3, alt: "Princesses Disney Elsa et Anna", category: "Disney" },
    { src: gallery4, alt: "Équipe Avengers en convention", category: "Convention" },
    { src: gallery5, alt: "Animation pour les enfants", category: "Événement" },
    { src: gallery6, alt: "Star Wars à l'hôpital", category: "Hôpital" },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
              Galerie photos
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Nos <span className="text-primary">moments</span> magiques
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Découvrez les sourires, les costumes et les moments de bonheur 
              que nous partageons lors de nos interventions.
            </p>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-soft hover:-translate-y-1 ${
                  index === 0 || index === 3 ? "md:col-span-2 md:row-span-1" : ""
                }`}
              >
                <div className={`aspect-square ${index === 0 || index === 3 ? "md:aspect-video" : ""}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="inline-block bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold mb-2">
                      {image.category}
                    </span>
                    <p className="text-primary-foreground text-sm font-semibold line-clamp-2">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Retrouvez plus de photos sur notre Instagram !
            </p>
            <a
              href="https://www.instagram.com/cospital/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition-all hover:scale-105"
            >
              📸 @cospital sur Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground p-2 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            className="absolute left-4 text-primary-foreground/80 hover:text-primary-foreground p-2 transition-colors"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            className="absolute right-4 text-primary-foreground/80 hover:text-primary-foreground p-2 transition-colors"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image */}
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Caption */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <span className="inline-block bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
              {images[selectedImage].alt}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
