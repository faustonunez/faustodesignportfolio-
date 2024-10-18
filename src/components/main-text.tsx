export interface SubtitleProps {
  label: React.ReactNode;
  isDarkTheme?: boolean;
  className?: string; // h6 element className
}

export function Subtitle({
  label,
  isDarkTheme = false,
  className = "",
}: SubtitleProps) {
  const themeClass = isDarkTheme ? "text-white" : "text-brand-secondary-40";

  return (
    <h6
      className={`responsive-width-case-study flex mt-10 ${themeClass} ${className}`}
    >
      {label}
    </h6>
  );
}

export interface MainTextBlockProps {
  title: React.ReactNode;
  description: React.ReactNode;
  isDarkTheme?: boolean;
  className?: string; // Root div className
  contentClassName?: string; // Content div className
  titleClassName?: string; // Title element className
  descriptionClassName?: string; // Description element className
}

export function MainTextBlock({
  title,
  description,
  isDarkTheme = false,
  className = "",
  contentClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: MainTextBlockProps) {
  const themeClass = isDarkTheme ? "text-white" : "text-black";

  return (
    <div className={`mb-10 ${className}`}>
      <div id="content" className={contentClassName}>
        <h4
          className={`md:mb-4 mb-2  font-bold ${themeClass} ${titleClassName}`}
        >
          {title}
        </h4>
        <p className={`${themeClass} ${descriptionClassName}`}>{description}</p>
      </div>
    </div>
  );
  ``;
}

export interface LabelDescriptionProps {
  items: { label: React.ReactNode; description: React.ReactNode }[];
  className?: string; // Root div className
  itemClassName?: string; // Item div className
  labelClassName?: string; // Label element className
  descriptionClassName?: string; // Description element className
  separatorClassName?: string; // Separator (hr) className
}

export function LabelDescription({
  items,
  className = "",
  itemClassName = "",
  labelClassName = "",
  descriptionClassName = "",
  separatorClassName = "",
}: LabelDescriptionProps) {
  return (
    <div className={`flex flex-col  ${className}`}>
      {items.map((item, index) => (
        <div key={index} className={`flex flex-col ${itemClassName}`}>
          <div className="flex items-start space-x-5 pb-3">
            <p className={`font-bold w-32 ${labelClassName}`}>{item.label}</p>
            <p className={`w-full ${descriptionClassName}`}>
              {item.description}
            </p>
          </div>
          {index < items.length - 1 && (
            <hr
              className={`border-t border-gray-300 w-full pt-3 ${separatorClassName}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
