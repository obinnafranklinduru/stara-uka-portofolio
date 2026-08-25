import { Metadata } from "next";
import manifest from "../../../public/images/photography/manifest.json";
import { PhotographyGallery } from "@/components/photography-gallery";

export const metadata: Metadata = {
  title: "Photography | Uka Stara Nnennaya",
  description: "Explore the editorial and environmental photography portfolio of Uka Stara Nnennaya.",
};

export default function PhotographyPage() {
  // Map the manifest to the format expected by react-photo-album
  const photos = manifest.map((item) => ({
    src: item.src,
    width: item.width,
    height: item.height,
    alt: `Photography by Uka Stara - ${item.category}`,
  }));

  return (
    <div className="flex flex-col w-full min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-wide">
          Selected Works
        </h1>
        <p className="text-muted max-w-2xl text-lg font-light leading-relaxed">
          An exploration of the human experience through an editorial lens. 
          Capturing authenticity, light, and narrative in every frame.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <PhotographyGallery photos={photos} />
      </div>
    </div>
  );
}
