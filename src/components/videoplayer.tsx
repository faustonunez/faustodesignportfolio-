import React, { useRef, useEffect, VideoHTMLAttributes } from "react";

interface VideoOnViewProps extends VideoHTMLAttributes<HTMLVideoElement> {
  /** How much of the video needs to be visible before it plays (0–1) */
  threshold?: number;
}

export const VideoOnView: React.FC<VideoOnViewProps> = ({
  threshold = 0.25,
  muted = true,
  loop = true,
  playsInline = true,
  className,
  ...videoProps
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.play().catch(() => {
            /* autoplay might be blocked; you could show a play button here */
          });
        } else {
          videoEl.pause();
        }
      },
      { threshold }
    );

    observer.observe(videoEl);
    return () => {
      observer.unobserve(videoEl);
    };
  }, [threshold]);

  return (
    <video
      ref={videoRef}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      className={className}
      {...videoProps}
    />
  );
};
