import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export interface HorizontalCardProps {
  image: string;
  title: string;
  subtitle: string;
  altText?: string;
  className?: string;
  reverseOrder?: boolean;
  badges?: string[];
  circleColor?: string;
  link?: string;
}

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className="inline-block rounded-[8px] border border-brand-secondary-10 text-brand-secondary-40 px-[10px] py-[8px]">
      {text}
    </div>
  );
};

export function HorizontalCard({
  image,
  title,
  subtitle,
  altText = "Image description",
  className = "",
  reverseOrder = false,
  badges = [],
  circleColor = "#EDEEF5",
  link,
}: HorizontalCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    const circleElement = circleRef.current;

    if (!cardElement || !circleElement) return;

    const handleMouseEnter = () => {
      gsap.to(circleElement, {
        scale: 1.1, // Increase size by 10%
        duration: 0.5,
        ease: "power2.out",
        transformOrigin: "center",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(circleElement, {
        scale: 1, // Return to original size
        duration: 0.5,
        ease: "power2.out",
        transformOrigin: "center",
      });
    };

    cardElement.addEventListener("mouseenter", handleMouseEnter);
    cardElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      // Clean up event listeners
      cardElement.removeEventListener("mouseenter", handleMouseEnter);
      cardElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const cardContent = (
    <div
      ref={cardRef}
      className={`group relative flex items-center lg:flex-row flex-col ${className}`}
    >
      <div
        className={`relative flex justify-center items-center xl:w-[50%] lg:w-[40%] w-full h-auto ${
          reverseOrder ? "lg:order-2" : ""
        }`}
      >
        {/* Background Circle */}
        <div
          ref={circleRef}
          className="absolute rounded-full"
          style={{
            backgroundColor: circleColor,
            width: "60%", // Set explicit width
            height: "0", // Initialize height to 0
            paddingBottom: "60%", // Use padding-bottom to set height equal to width
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transformOrigin: "center",
            zIndex: 0,
          }}
        ></div>

        {/* Image */}
        <img
          src={image}
          alt={altText}
          className="relative z-10 lg:w-[80%] w-full h-auto"
        />
      </div>
      <div
        id="content"
        className={`xl:w-[50%] lg:w-[60%] w-full pl-4 md:mt-5 mt-5 ${
          reverseOrder ? "lg:order-1" : ""
        }`}
      >
        <h6 className="w-full">{subtitle}</h6>
        <h3 className="mt-5 w-full group-hover:underline">{title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {badges.map((badge, index) => (
            <Badge key={index} text={badge} />
          ))}
        </div>
      </div>
    </div>
  );

  return link ? (
    <a href={link} className="block">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
}
