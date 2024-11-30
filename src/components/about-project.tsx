import { Subtitle, MainTextBlock, LabelDescription } from "./main-text";

interface AboutProjectProps {
  subtitleLabel: string;
  mainTextBlockProps: {
    className?: string;
    description: string;
    // Add other properties of mainTextBlockProps here
  };
  labelDescriptionProps: {
    className?: string;
    items: any[];
    // Add other properties of labelDescriptionProps here
  };
  sectionClassName?: string;
}

export function AboutProject({
  subtitleLabel,
  mainTextBlockProps,
  labelDescriptionProps,
  sectionClassName,
}: AboutProjectProps) {
  return (
    <div
      id="section-about"
      className={`responsive-section-y-case-study bg-brand-primary-20 flex lg:flex-col flex-col justify-center items-center ${sectionClassName || ""}`}
    >
      <div className="responsive-width-case-study flex flex-col space-y-4">
        {/* Subtitle component */}
        <Subtitle label={subtitleLabel} />

        {/* Main content */}
        <div className="flex md:flex-row flex-col">
          <MainTextBlock
            {...mainTextBlockProps}
            className={`md:w-[60%] w-full ${mainTextBlockProps.className || ""}`}
          />
          <LabelDescription
            {...labelDescriptionProps}
            className={`md:w-[40%] w-full ${labelDescriptionProps.className || ""}`}
          />
        </div>
      </div>
    </div>
  );
}
