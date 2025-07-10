import React from "react";

interface FigmaEmbedProps {
  /** Full Figma embed URL, including embed_host, file key, and node-id */
  url: string;
  /** Tailwind width class (e.g. 'w-full', 'max-w-screen-md') */
  width?: string;
  /** Tailwind height class (e.g. 'h-96', 'h-screen') */
  height?: string;
}

export const FigmaEmbed: React.FC<FigmaEmbedProps> = ({
  url,
  width = "2xl:w-[900px] xl:w-[800px] md:w-[720px] w-[100%]",
  height = "h-[600px]",
}) => (
  <div className={`${width} ${height} overflow-hidden rounded-lg shadow-lg`}>
    <iframe className="w-full h-full border-0" src={url} allowFullScreen />
  </div>
);
