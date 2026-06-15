export function PrivateEventVideo({ videoId, src }: { videoId?: string; src?: string }) {
  return (
    <div className="bg-foreground py-12 px-4 border-b-4 border-primary">
      <div className="container mx-auto max-w-4xl">
        <div className="relative w-full aspect-video border-4 border-primary overflow-hidden">
          {videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="Survivor Hoboken"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : src ? (
            <video
              src={src}
              controls
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
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
