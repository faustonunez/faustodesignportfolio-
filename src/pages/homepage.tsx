import WBVideoPlayerImg from "../assets/images/homepage/wb-videoplayer-img.png";
import WarnerArchiveImg from "../assets/images/homepage/warnerarchive-img.png";
import BuildbookImg from "../assets/images/homepage/buildbook-img.png";
import CloudEstateImg from "../assets/images/homepage/cloudestate-img.png";
import TheMuseJpdImg from "../assets/images/homepage/themuse-jdp.png";
import TheMuseMayaImg from "../assets/images/homepage/themuse-maya.png";
import { Helmet } from "react-helmet-async";

import { HorizontalCard } from "../components/cards";

import { Hero } from "../components/Hero";

export function Homepage() {
  return (
    <div id="body" className="w-full flex justify-center">
      <Helmet>
        <title>Fausto Nuñez</title>
        <meta
          name="description"
          content="I’m a Senior Product Designer working with small and large, multi-disciplinary teams, leading large, end-to-end product initiatives with a holistic approach. I’m currently running my own UX/UI design studio, working with a variety of startups, enterprises, and agencies."
        />
      </Helmet>
      <div className=" flex-col justify-center">
        <Hero />
        <div
          id="work"
          className="lg:mt-[200px] my-[80px] flex justify-center items-center gap-x-6"
          style={{ scrollMarginTop: "150px" }}
        >
          <div className="flex responsive-width flex-col gap-40 justify-center items-center">
            <HorizontalCard
              image={TheMuseJpdImg}
              subtitle="The Muse"
              title="Driving Job Apply Growth for The Muse’s JDP"
              altText="Screenshot of Buildbook construction management design"
              className="w-full h-auto"
              reverseOrder={true}
              badges={["User Research", "B2C", "UX", "UI", "Design System"]}
              circleColor="#F8F9FF"
              link="/themuse-JDP"
            />
            <HorizontalCard
              image={TheMuseMayaImg}
              subtitle="The Muse"
              title="Rethinking Content Discovery Through AI"
              altText="Screenshot of Buildbook construction management design"
              className="w-full h-auto"
              reverseOrder={false}
              badges={["AI", "UX", "UI", "Prototyping"]}
              circleColor="#F8F9FF"
              link="/themuse-Maya"
            />
            <HorizontalCard
              image={BuildbookImg}
              subtitle="BUILDBOOK"
              title="New approach to construction management"
              altText="Screenshot of Buildbook construction management design"
              className="w-full h-auto"
              reverseOrder={true}
              badges={["Mobile", "B2b", "B2C", "UX", "UI", "Design System"]}
              circleColor="#F8F9FF"
              link="/buildbook"
            />
            <HorizontalCard
              image={CloudEstateImg}
              subtitle="CloudEstate"
              title="Rethinking Asset Management"
              altText="Screenshot of CloudEstate asset management design"
              className="w-full h-auto"
              reverseOrder={false}
              badges={["SaaS", "FinTech", "UX", "UI", "Design System"]}
              circleColor="#F6F3F3"
              link="/cloudestate"
            />
            <HorizontalCard
              image={WBVideoPlayerImg}
              subtitle="WARNER BROS"
              title="Designing an adaptable video player"
              altText="Screenshot of Warner Bros adaptable video player design"
              className="w-full h-auto"
              reverseOrder={true}
              badges={["UX", "UI", "Design System"]}
              circleColor="#EDEEF5"
              link="/videoplayer"
            />
            <HorizontalCard
              image={WarnerArchiveImg}
              subtitle="WARNER BROS"
              title="Systemizing a video streaming experience"
              altText="Screenshot of Warner Bros video streaming system design"
              className="w-full h-auto"
              reverseOrder={false}
              badges={["UX", "UI", "Design System"]}
              circleColor="#FBF3EE"
              link="/warner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
