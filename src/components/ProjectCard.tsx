import React, { useState } from "react";

interface ProjectCardProps {
  image: string;
  video?: string;
  videoOnly?: boolean;
  title: string;
  description: string;
  link: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  video,
  videoOnly = false,
  title,
  description,
  link,
  className = "",
}) => {
  const [videoError, setVideoError] = useState(false);
  const [useVideo, setUseVideo] = useState(!!video);

  const handleVideoError = () => {
    setVideoError(true);
    setUseVideo(false);
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block group cursor-pointer ${className}`}
    >
      <div className="relative overflow-hidden">
        {useVideo && !videoError && video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            onError={handleVideoError}
            className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-110"
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0  transition-all duration-300" />

        {/* Toggle button - only show if both image and video are available and not videoOnly */}
        {image && video && !videoOnly && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setUseVideo(!useVideo);
            }}
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs hover:bg-opacity-70 transition-all duration-200"
          >
            {useVideo ? "IMG" : "VID"}
          </button>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 break-words  ">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
};
