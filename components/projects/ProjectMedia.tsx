"use client";

  import { useEffect, useState } from "react";
  import { ChevronLeft, ChevronRight } from "lucide-react";

  interface Props {
    gifs?: string[];
    image?: string;
    video?: string;
    youtubeId?: string;
}

export default function ProjectMedia({
  gifs,
  image,
  video,
  youtubeId,
}: Props) {
  const media = gifs ?? [];
  const nextMedia = () => {
  if (media.length <= 1) return;

  setCurrent((prev) => (prev + 1) % media.length);
};

const previousMedia = () => {
  if (media.length <= 1) return;

  setCurrent((prev) => (prev - 1 + media.length) % media.length);
};
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || media.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % media.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [paused, media.length]);

  return (
    <div
      className="group relative h-64 overflow-hidden bg-zinc-900"
      // onMouseEnter={() => setPaused(true)}
      // onMouseLeave={() => setPaused(false)}
      onClick={nextMedia}
    >
      {/* GIFs */}
      {media.length > 0 ? (
        <img
          src={media[current]}
          alt={`Preview ${current + 1}`}
          className="h-full w-full object-contain bg-black"
        />
      ) : youtubeId ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&playsinline=1&rel=0&enablejsapi=1`}
          title="Project Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : video ? (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      ) : image ? (
        <img
          src={image}
          alt="Project Preview"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
          <span className="text-zinc-500">Preview Coming Soon</span>
        </div>
      )}
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Navigation only for multiple GIFs */}
     {media.length > 1 && (
      <>
      <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {media.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-blue-500"
                : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
        {/* Left Half */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            previousMedia();
          }}
          className="absolute left-0 top-0 z-20 flex h-full w-1/2 items-center justify-start pl-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <div className="rounded-full bg-black/50 p-2 backdrop-blur">
            <ChevronLeft className="h-6 w-6 text-white" />
          </div>
        </button>

        {/* Right Half */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextMedia();
          }}
          className="absolute right-0 top-0 z-20 flex h-full w-1/2 items-center justify-end pr-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <div className="rounded-full bg-black/50 p-2 backdrop-blur">
            <ChevronRight className="h-6 w-6 text-white" />
          </div>
        </button>
      </>
      )}
        </div>
      );
}