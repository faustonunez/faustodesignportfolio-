import { Helmet } from "react-helmet-async";

import { ProjectCardsSection } from "../components/ProjectCardsSection";
import { Hero } from "../components/Hero";
import { getCardsForProjects } from "../data/projectCards";

const META_DESCRIPTION =
  "I’m a Senior Product Designer working with small and large, multi-disciplinary teams, leading large, end-to-end product initiatives with a holistic approach. I’m currently running my own UX/UI design studio, working with a variety of startups, enterprises, and agencies.";

export function Projects() {
  return (
    <div id="body" className="w-full flex justify-center">
      <Helmet>
        <title>Projects | Fausto Nuñez</title>
        <meta name="description" content={META_DESCRIPTION} />
      </Helmet>
      <div className=" flex-col justify-center">
        <Hero />
        <ProjectCardsSection
          cards={getCardsForProjects()}
          alternateLayout
        />
      </div>
    </div>
  );
}
