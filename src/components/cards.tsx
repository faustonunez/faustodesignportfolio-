export interface HorizontalCardProps {
  image: string;
  title: string;
  subtitle: string;
  altText?: string;
  className?: string;
  reverseOrder?: boolean; // New prop to control the order
}

export function HorizontalCard({
  image,
  title,
  subtitle,
  altText = "Image description",
  className = "",
  reverseOrder = false,
}: HorizontalCardProps) {
  return (
    <div className={`flex items-center lg:flex-row flex-col ${className}`}>
      <img
        src={image}
        alt={altText}
        className={` lg:w-1/2 w-full  h-auto ${reverseOrder ? "lg:order-2" : ""}`}
      />
      <div
        id="content"
        className={`lg:w-1/2 w-full pl-4 md:mt-5 mt-5 ${reverseOrder ? "lg:order-1" : ""}`}
      >
        <h6 className="w-full">{subtitle}</h6>
        <h3 className="mt-5 w-full">{title}</h3>
      </div>
    </div>
  );
}
