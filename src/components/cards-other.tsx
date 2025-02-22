export interface CardOtherProps {
  image: string;
  title: string;
  altText?: string;
  className?: string;
  circleColor?: string; // New prop to control the background circle color
  link?: string; // New prop to add a link to the entire card
}

export function CardOther({
  image,
  title,
  altText = "Image description",
  className = "",
  link = "#", // Default link to "#"
}: CardOtherProps) {
  return (
    <a
      href={link}
      className={`py-32 relative flex flex-col items-center ${className}`}
    >
      <div className="relative flex justify-center items-center w-full h-auto">
        <img
          src={image}
          alt={altText}
          className=" z-10 lg:w-[100%] w-full h-auto"
        />
      </div>
      <div id="content" className="w-full pl-4 mt-5">
        <h4 className="w-full text-center font-bold ">{title}</h4>
      </div>
    </a>
  );
}
