import WBVideoPlayerImg from "../assets/images/homepage/wb-videoplayer-img.png";
import WarnerArchiveImg from "../assets/images/homepage/warnerarchive-img.png";
import BuildbookImg from "../assets/images/homepage/buildbook-img.png";
import CloudEstateImg from "../assets/images/homepage/cloudestate-img.png";
import TheMuseJpdImg from "../assets/images/homepage/themuse-jdp.png";
import TheMuseMayaImg from "../assets/images/homepage/themuse-maya.png";
import CompaniesLogoImg from "../assets/images/homepage/companies-logos.png";
import Arrow from "../assets/images/homepage/arrow-down.svg?react";
import { Helmet } from "react-helmet-async";

import HeaderImg from "../assets/images/homepage/hero-image-2.png";
import { HorizontalCard } from "../components/cards";

export function Homepage() {
  return (
    <div id="body" className="w-full flex justify-center">
      <Helmet>
        <title>Fausto Nuñez</title>
        <meta
          name="description"
          content="I’m a Senior Product Designer working with small and large, multi-disciplinary teams, leading large, end-to-end product initiatives with a holistic approach. I’m currently running my own UX/UI design consultancy, working with a variety of startups, enterprises, and agencies."
        />
      </Helmet>
      <div className=" flex-col justify-center">
        <div
          id="Header"
          className="flex justify-center items-center lg:flex-row flex-col bg-brand-primary-20 lg:w-screen lg:h-screen w-[100%] h-auto"
        >
          <div className=" responsive-width-pb responsive-width h-auto flex lg:flex-row flex-col items-center lg:mt-0 md:mt-16 mt-10">
            <div className="text-left lg:w-3/4 md:w-[90%] mr-[50px]">
              <h1 className="mb-[16px] mt-[124px] w-full">Hi, I’m Fausto</h1>
              <h5 className="lg:w-[80%] w-full">
                Thank you for stopping by! I’m a Senior Product Designer working
                with small and large multi-disciplinary teams, leading large
                end-to-end product initiatives with a holistic approach. I’m
                currently running my own UX/UI design consultancy, working with
                a variety of startups, enterprises, and agencies.
              </h5>
              <img
                src={CompaniesLogoImg}
                alt="Logos of companies Fausto has worked with"
                className="mt-5 md:pb-0 pb-6 lg:w-[80%] w-[100%] h-auto"
              ></img>
            </div>
            <img
              src={HeaderImg}
              alt="Hero Image"
              className="md:w-1/5 md:h-1/5 w-1/2 h-1/2 my-[0px] mt-[100px] md:pb-0 pb-0"
            ></img>
          </div>
          <Arrow className="lg:absolute lg:bottom-0 lg:mb-10 animate-bounce my-10" />
        </div>
        <div
          id="work"
          className=" lg:mt-[200px] my-[80px] flex justify-center items-center gap-x-6"
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
              link="https://www.figma.com/deck/DTPlhTWKgJky1YHkUobUY3/The-Muse---Maya-AI?node-id=17-59&viewport=-161%2C-1863%2C1&t=tpi3SA4oBlS3kkAN-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&hide-ui=1"
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
``;
