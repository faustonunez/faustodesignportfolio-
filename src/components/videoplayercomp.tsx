import React, { useEffect, useRef } from "react";

export interface VideoPlayerProps {
  videoSrc: string;
  className?: string;
}

export function VideoPlayerComp({
  videoSrc,
  className = "",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.loop = true;
          videoElement.play().catch((error) => {
            console.error("Error attempting to play", error);
          });
        } else {
          videoElement.pause();
        }
      });
    };

    const observerOptions = {
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="video-player-container flex items-center justify-center w-full">
      <video
        ref={videoRef}
        className={className}
        muted
        playsInline
        controls={false}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
