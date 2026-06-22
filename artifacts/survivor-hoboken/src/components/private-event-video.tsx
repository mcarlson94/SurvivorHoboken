import { useRef, useState } from "react";

export function PrivateEventVideo({
  videoId,
  src,
  poster,
  portrait = false,
}: {
  videoId?: string;
  src?: string;
  poster?: string;
  portrait?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="bg-foreground py-12 px-4 border-b-4 border-primary">
      <div className={`mx-auto ${portrait ? "max-w-sm" : "container max-w-4xl"}`}>
        <div
          className="relative w-full border-4 border-primary overflow-hidden"
          style={{ aspectRatio: portrait ? "9/16" : "16/9" }}
        >
          {videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="Survivor Hoboken"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : src ? (
            <>
              <video
                ref={videoRef}
                src={src}
                poster={poster}
                muted
                loop
                playsInline
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {!playing && (
                <button
                  onClick={handlePlay}
                  aria-label="Play video"
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <span className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-foreground/95 text-background/40 text-center px-8">
              <svg className="w-16 h-16 mb-4 opacity-30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              <p className="font-heading uppercase tracking-widest text-sm">Video coming soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
