import React from "react";

// Utility to prevent typographic widows by replacing the space between the last two words with a non-breaking space
function preventWidows(text: string): string {
  const words = text.trim().split(/\s+/);
  if (words.length > 1) {
    // Remove last two words
    const lastTwo = words.splice(words.length - 2, 2);
    // Rejoin, inserting a non-breaking space between the last two words
    return [...words, lastTwo.join("\u00A0")].join(" ");
  }
  return text;
}

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
      className={`responsive-width-case-study flex mt-0 ${themeClass} ${className}`}
    >
      {label}
    </h6>
  );
}

export interface MainTextBlockProps {
  title?: React.ReactNode;
  description: React.ReactNode | React.ReactNode[];
  isDarkTheme?: boolean;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  showTitle?: boolean;
  showDescription?: boolean;
}

export function MainTextBlock({
  title,
  description,
  isDarkTheme = false,
  className = "",
  contentClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  showTitle = true,
  showDescription = true,
}: MainTextBlockProps) {
  const themeClass = isDarkTheme ? "text-white" : "text-black";
  // Process the title to avoid text widows
  const processedTitle =
    typeof title === "string" ? preventWidows(title) : title;

  return (
    <div className={`mb-10 ${className}`}>
      <div id="content" className={contentClassName}>
        {showTitle && title && (
          <h4 className={`md:mb-4 mb-2 ${themeClass} ${titleClassName}`}>
            {processedTitle}
          </h4>
        )}
        {showDescription &&
          (Array.isArray(description) ? (
            description.map((paragraph, index) => (
              <React.Fragment key={index}>
                <p className={`${themeClass} ${descriptionClassName}`}>
                  {paragraph}
                </p>
                {index < description.length - 1 && <br />}
              </React.Fragment>
            ))
          ) : (
            <p className={`${themeClass} ${descriptionClassName}`}>
              {description}
            </p>
          ))}
      </div>
    </div>
  );
}

export interface LabelDescriptionProps {
  items: { label: React.ReactNode; description: React.ReactNode }[];
  className?: string;
  itemClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  separatorClassName?: string;
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
    <div className={`flex flex-col ${className}`}>
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
