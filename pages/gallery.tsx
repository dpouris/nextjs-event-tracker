import GSwap from "@dpouris/gswap";
import { GallerySwap } from "@dpouris/gswap/dist/types";
import { useEffect, useRef } from "react";

const Gallery = () => {
  const gallery = useRef<GallerySwap>();

  useEffect(() => {
    if (!document) return;

    const galleryOptions = {
      imgDimensions: { height: 500, width: 600 },
      styled: true,
      repeat: false,
      animation: "slide",
    };
    const imageUrls = [
      "https://media.istockphoto.com/photos/attending-a-conference-to-develop-their-careers-picture-id1141465434?k=20&m=1141465434&s=612x612&w=0&h=EcRkf0KwPhc7Mxy3iLlqdieniMabM2rLBDJl6XhTwb0=",
      "https://thumbs.dreamstime.com/b/developing-programmer-team-development-website-design-coding-technologies-working-software-company-office-140335451.jpg",
      "https://thumbs.dreamstime.com/b/website-design-development-project-conceptual-image-164232735.jpg",
    ];

    gallery.current = new GSwap("gallery", imageUrls, galleryOptions);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-3 my-4">
      <h1 className="text-3xl font-medium text-slate-700 mb-4 border-y-2 border-emerald-400 rounded-lg py-4 px-3 ">
        EVENT GALLERY
      </h1>
      <div id="gallery" className="mx-auto"></div>
      <button
        onClick={() => {
          gallery.current!.goTo(2);
        }}
      >
        GOTO 3RD IMAGE
      </button>
    </div>
  );
};

export default Gallery;
