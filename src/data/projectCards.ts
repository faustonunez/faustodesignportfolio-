import WBVideoPlayerImg from "../assets/images/homepage/wb-videoplayer-img.png";
import WarnerArchiveImg from "../assets/images/homepage/warnerarchive-img.png";
import BuildbookImg from "../assets/images/homepage/buildbook-img.png";
import CloudEstateImg from "../assets/images/homepage/cloudestate-img.png";
import TheMuseJpdImg from "../assets/images/homepage/themuse-jdp.png";
import TheMuseMayaImg from "../assets/images/homepage/themuse-maya.png";
import TheMuseRebrandHeroImg from "../assets/images/homepage/TM-Rebrand-cover-Img.png";
import type { HorizontalCardProps } from "../components/cards";

export type ProjectCardConfig = HorizontalCardProps & {
  id: string;
  showOnProjects: boolean;
  projectsOrder?: number;
};

export const PROJECT_CARDS: ProjectCardConfig[] = [
  {
    id: "maya",
    image: TheMuseMayaImg,
    subtitle: "The Muse",
    title: "Reimagining career guidance through AI",
    altText: "Screenshot of The Muse Maya AI content discovery",
    className: "w-full h-auto",
    reverseOrder: true,
    badges: ["AI", "UX", "UI", "Prototyping"],
    circleColor: "#F8F9FF",
    link: "/themuse-Maya",
    showOnProjects: true,
    projectsOrder: 2,
  },
  {
    id: "jdp",
    image: TheMuseJpdImg,
    subtitle: "The Muse",
    title: "Driving Job Apply Growth for The Muse’s JDP",
    altText: "Screenshot of The Muse Job Description Page",
    className: "w-full h-auto",
    reverseOrder: false,
    badges: ["User Research", "B2C", "UX", "UI", "Design System"],
    circleColor: "#F8F9FF",
    link: "/themuse-JDP",
    showOnProjects: true,
    projectsOrder: 3,
  },
  {
    id: "rebrand",
    image: TheMuseRebrandHeroImg,
    subtitle: "The Muse",
    title: "Unifying brand and system at The Muse ",
    altText: "The Muse rebrand hero visual",
    className: "w-full h-auto",
    reverseOrder: true,
    badges: ["Branding", "UX", "UI", "Design System"],
    circleColor: "#EDEEF5",
    link: "/themuse-rebrand",
    imageClassName: "shadow-[0px_8px_19px_0px_rgba(0,0,0,0.10)]",
    showOnProjects: false,
  },
  {
    id: "cloudestate",
    image: CloudEstateImg,
    subtitle: "CloudEstate",
    title: "Rethinking Asset Management",
    altText: "Screenshot of CloudEstate asset management design",
    className: "w-full h-auto",
    reverseOrder: false,
    badges: ["SaaS", "FinTech", "UX", "UI", "Design System"],
    circleColor: "#F6F3F3",
    link: "/cloudestate",
    showOnProjects: true,
    projectsOrder: 1,
  },
  {
    id: "buildbook",
    image: BuildbookImg,
    subtitle: "BUILDBOOK",
    title: "A New Approach to Construction Management",
    altText: "Screenshot of Buildbook construction management design",
    className: "w-full h-auto",
    reverseOrder: true,
    badges: ["Mobile", "B2B", "B2C", "UX", "UI", "Design System"],
    circleColor: "#F8F9FF",
    link: "/buildbook",
    showOnProjects: true,
    projectsOrder: 4,
  },
  {
    id: "videoplayer",
    image: WBVideoPlayerImg,
    subtitle: "WARNER BROS.",
    title: "Designing an Adaptable Video Player",
    altText: "Screenshot of Warner Bros adaptable video player design",
    className: "w-full h-auto",
    reverseOrder: false,
    badges: ["UX", "UI", "Design System"],
    circleColor: "#EDEEF5",
    link: "/videoplayer",
    showOnProjects: false,
  },
  {
    id: "warner",
    image: WarnerArchiveImg,
    subtitle: "WARNER BROS.",
    title: "Systematizing a Video Streaming Experience",
    altText: "Screenshot of Warner Bros video streaming system design",
    className: "w-full h-auto",
    reverseOrder: true,
    badges: ["UX", "UI", "Design System"],
    circleColor: "#FBF3EE",
    link: "/warner",
    showOnProjects: true,
    projectsOrder: 5,
  },
];

export const HOMEPAGE_CARD_IDS: string[] = [
  "maya",
  "jdp",
  "rebrand",
  "cloudestate",
  "buildbook",
  "videoplayer",
  "warner",
];

const cardsById = new Map(PROJECT_CARDS.map((card) => [card.id, card]));

export function getCardsForHomepage(): ProjectCardConfig[] {
  return HOMEPAGE_CARD_IDS.map((id) => cardsById.get(id)!);
}

export function getCardsForProjects(): ProjectCardConfig[] {
  return PROJECT_CARDS.filter((card) => card.showOnProjects).sort(
    (a, b) => (a.projectsOrder ?? 0) - (b.projectsOrder ?? 0),
  );
}
