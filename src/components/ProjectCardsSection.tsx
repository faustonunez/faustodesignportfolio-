import { HorizontalCard } from "./cards";
import type { ProjectCardConfig } from "../data/projectCards";

interface ProjectCardsSectionProps {
  cards: ProjectCardConfig[];
  /** Zig-zag by row: image right, left, right, … (used when card order changes). */
  alternateLayout?: boolean;
}

export function ProjectCardsSection({
  cards,
  alternateLayout = false,
}: ProjectCardsSectionProps) {
  return (
    <div
      id="work"
      className="lg:mt-[200px] my-[80px] flex justify-center items-center gap-x-6"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className="flex responsive-width flex-col gap-40 justify-center items-center">
        {cards.map(
          ({ id, showOnProjects, projectsOrder, reverseOrder, ...cardProps }, index) => (
            <HorizontalCard
              key={id}
              {...cardProps}
              reverseOrder={
                alternateLayout ? index % 2 === 0 : reverseOrder
              }
            />
          ),
        )}
      </div>
    </div>
  );
}
