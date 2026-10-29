import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { heroSlides, media } from "@/content/site";

/** Abertura: toca o vídeo institucional se configurado; senão, sequência cinematográfica das fotos reais. */
export function HeroMedia() {
  const [playing, setPlaying] = useState(true);
  const [i, setI] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const video = media.heroVideo;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  useEffect(() => {
    if (video) {
      const v = videoRef.current;
      if (!v) return;
      if (playing) v.play().catch(() => setPlaying(false));
      else v.pause();
      return;
    }
    if (!playing) return;
    const t = setInterval(() => setI((x) => (x + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, [playing, video]);

  return (
    <>
      <div className="absolute inset-0" aria-hidden={!video}>
        {video ? (
          <video ref={videoRef} className="h-full w-full object-cover" src={video.src} poster={video.poster ?? heroSlides[0]?.src} muted loop playsInline autoPlay>
            {video.captions && <track kind="captions" src={video.captions} srcLang="pt-BR" label="Português" default />}
          </video>
        ) : (
          heroSlides.map((s, idx) => (
            <img
              key={idx === i ? `on-${s.src}-${i}` : s.src}
              src={s.src}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${idx === i ? "opacity-100" : "opacity-0"} ${idx === i && playing ? "animate-kenburns" : ""}`}
            />
          ))
        )}
      </div>
      <div className="absolute bottom-6 right-5 z-10 flex items-center gap-3">
        {!video && (
          <span className="hidden font-display text-sm font-bold uppercase tracking-widest text-ink-foreground/80 sm:block">
            {String(i + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")} · {heroSlides[i]?.label}
          </span>
        )}
        <button
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pausar apresentação" : "Reproduzir apresentação"}
          className="rounded-full border border-ink-foreground/40 bg-ink/40 p-3 text-ink-foreground backdrop-blur transition-colors hover:bg-primary"
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
      </div>
    </>
  );
}
