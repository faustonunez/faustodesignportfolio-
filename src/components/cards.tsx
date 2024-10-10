export interface HorizontalCardProps {
  image: string;
  title: string;
  subtitle: string;
  altText?: string;
  className?: string;
  reverseOrder?: boolean;
  badges?: string[];
  circleColor?: string; // New prop to control the background circle color
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
  circleColor = "#EDEEF5", // Default color for the circle
}: HorizontalCardProps) {
  return (
    <div
      className={`relative flex items-center lg:flex-row flex-col ${className}`}
    >
      <div
        className={`relative flex justify-center items-center xl:w-[50%] lg:w-[40%] w-full h-auto ${reverseOrder ? "lg:order-2" : ""}`}
      >
        {/* Background Circle */}
        <div
          className="absolute rounded-full"
          style={{
            backgroundColor: circleColor,
            width: "60%", // Matches the image's width for a 1:1 aspect ratio
            paddingTop: "60%", // Ensures the circle is perfectly square by setting the height relative to the width
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Centers the circle
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
        className={`xl:w-[50%] lg:w-[60%] w-full pl-4 md:mt-5 mt-5 ${reverseOrder ? "lg:order-1" : ""}`}
      >
        <h6 className="w-full">{subtitle}</h6>
        <h3 className="mt-5 w-full">{title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {badges.map((badge, index) => (
            <Badge key={index} text={badge} />
          ))}
        </div>
      </div>
    </div>
  );
}
