"use client";

import { useState } from "react";
import Image from "next/image";
import { MasonryPhotoAlbum, RenderImageContext, RenderImageProps } from "react-photo-album";
import "react-photo-album/masonry.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Optional plugins for lightbox
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

type PhotoType = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

interface PhotographyGalleryProps {
  photos: PhotoType[];
}

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
      className="group overflow-hidden bg-muted/10 cursor-zoom-in"
    >
      <Image
        fill
        src={photo.src}
        alt={alt}
        title={title}
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Editorial overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
    </div>
  );
}

export function PhotographyGallery({ photos }: PhotographyGalleryProps) {
  const [index, setIndex] = useState(-1);

  return (
    <div className="w-full">
      <MasonryPhotoAlbum
        photos={photos}
        columns={(containerWidth) => {
          if (containerWidth < 640) return 1;
          if (containerWidth < 1024) return 2;
          return 3;
        }}
        spacing={24}
        render={{ image: renderNextImage }}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Zoom, Fullscreen]}
        carousel={{ padding: 0, spacing: 0 }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
        render={{
          slide: ({ slide }) => (
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <Image
                src={slide.src}
                alt={slide.alt || "Photography Lightbox"}
                width={slide.width}
                height={slide.height}
                className="max-w-full max-h-full object-contain"
                sizes="100vw"
                priority
              />
            </div>
          ),
        }}
      />
    </div>
  );
}
