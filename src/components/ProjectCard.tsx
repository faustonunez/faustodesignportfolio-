import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  link,
  className = "",
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block group cursor-pointer ${className}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0  transition-all duration-300" />
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
