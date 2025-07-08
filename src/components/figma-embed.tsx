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
  width = "w-[1000px]",
  height = "h-[600px]",
}) => (
  <div className={`${width} ${height} overflow-hidden rounded-lg shadow-lg`}>
    <iframe className="w-full h-full border-0" src={url} allowFullScreen />
  </div>
);
