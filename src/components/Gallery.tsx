import { useState } from "react";
import { MapPin, User, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  location: string;
  cosplayers: string[];
  date: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images: GalleryImage[] = [
    {
      src: gallery1,
      alt: "Super-héros à l'hôpital Lenval",
      category: "Hôpital",
      location: "Hôpital Lenval, Nice",
      cosplayers: ["Spider-Man", "Batman"],
      date: "Décembre 2024",
    },
    {
      src: gallery2,
      alt: "Notre mascotte Cosp'ital",
      category: "Mascotte",
      location: "Convention Geek, Monaco",
      cosplayers: ["Mascotte Cosp'ital"],
      date: "Novembre 2024",
    },
    {
      src: gallery3,
      alt: "Princesses Disney pour les enfants",
      category: "Disney",
      location: "Hôpital Lenval, Nice",
      cosplayers: ["Elsa", "Anna"],
      date: "Octobre 2024",
    },
    {
      src: gallery4,
      alt: "Équipe Avengers en force",
      category: "Convention",
      location: "Comic Con, Cannes",
      cosplayers: ["Iron Man", "Captain America", "Thor"],
      date: "Septembre 2024",
    },
    {
      src: gallery5,
      alt: "Animation pour les enfants",
      category: "Événement",
      location: "Mairie de Nice",
      cosplayers: ["Miraculous", "Mario", "Luigi"],
      date: "Août 2024",
    },
    {
      src: gallery6,
      alt: "Star Wars débarque à l'hôpital",
      category: "Hôpital",
      location: "Hôpital Lenval, Nice",
      cosplayers: ["Dark Vador", "Stormtrooper", "R2-D2"],
      date: "Juillet 2024",
    },
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

          {/* Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div
                    onClick={() => openLightbox(index)}
                    className="group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-soft hover:-translate-y-2 bg-card border border-border"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {image.category}
                      </span>
                    </div>

                    {/* Info card */}
                    <div className="p-4 space-y-3">
                      <h3 className="font-display text-lg text-foreground line-clamp-1">
                        {image.alt}
                      </h3>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="line-clamp-1">{image.location}</span>
                      </div>

                      {/* Cosplayers */}
                      <div className="flex items-start gap-2 text-muted-foreground text-sm">
                        <User className="w-4 h-4 text-sky flex-shrink-0 mt-0.5" />
                        <div className="flex flex-wrap gap-1">
                          {image.cosplayers.map((cosplayer, idx) => (
                            <span
                              key={idx}
                              className="inline-block bg-sky/10 text-sky px-2 py-0.5 rounded-full text-xs font-medium"
                            >
                              {cosplayer}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Date */}
                      <p className="text-xs text-muted-foreground/70">
                        📅 {image.date}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-primary text-primary-foreground hover:bg-primary/90 border-none" />
            <CarouselNext className="hidden md:flex -right-12 bg-primary text-primary-foreground hover:bg-primary/90 border-none" />
          </Carousel>

          {/* Mobile navigation hint */}
          <p className="text-center text-muted-foreground text-sm mt-6 md:hidden">
            ← Glissez pour voir plus →
          </p>

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

          {/* Image and info */}
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full max-h-[65vh] object-contain rounded-lg"
            />

            {/* Info panel */}
            <div className="mt-4 bg-card/95 backdrop-blur-sm rounded-2xl p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <span className="inline-block bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold mb-2">
                    {images[selectedImage].category}
                  </span>
                  <h3 className="font-display text-xl text-foreground">
                    {images[selectedImage].alt}
                  </h3>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{images[selectedImage].location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="w-4 h-4 text-sky" />
                    <span>{images[selectedImage].cosplayers.join(", ")}</span>
                  </div>
                  <p className="text-muted-foreground/70">
                    📅 {images[selectedImage].date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
