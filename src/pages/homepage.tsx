import WBVideoPlayerImg from "../assets/images/homepage/wb-videoplayer-img.png";
import WarnerArchiveImg from "../assets/images/homepage/warnerarchive-img.png";
import BuildbookImg from "../assets/images/homepage/buildbook-img.png";
import CloudEstateImg from "../assets/images/homepage/cloudestate-img.png";
import CompaniesLogoImg from "../assets/images/homepage/companies-logos.png";
import Arrow from "../assets/images/homepage/arrow-down.svg?react";

import HeaderImg from "../assets/images/homepage/hero-image.png";
import { HorizontalCard } from "../components/cards";

export function Homepage() {
  return (
    <div id="body" className="w-full flex justify-center">
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
                with small and large multi-disciplinary teams, leading large end
                to end product initiatives with a holistic approach. I’m
                currently running my own UX/UI design consultancy working with a
                variety of startups, enterprises and agencies.
              </h5>
              <img
                src={CompaniesLogoImg}
                alt="Hero Image"
                className="mt-5 md:pb-0 pb-6 lg:w-[80%] w-[100%] h-auto"
              ></img>
            </div>
            <img
              src={HeaderImg}
              alt="Hero Image"
              className="md:w-1/4 md:h-1/4 w-1/2 h-1/2 my-[0px] mt-[0px] md:pb-0 pb-6"
            ></img>
          </div>
          <Arrow className="lg:absolute lg:bottom-0 lg:mb-10 animate-bounce my-10" />
        </div>
        <div
          id="Work"
          className=" lg:mt-[200px] my-[80px] flex justify-center items-center gap-x-6"
        >
          <div className="flex responsive-width flex-col gap-40 justify-center items-center">
            <HorizontalCard
              image={WBVideoPlayerImg}
              subtitle="WARNER BROS"
              title="Rethinking Asset Management"
              altText="Rethinking Asset Management"
              className="w-full h-auto"
              reverseOrder={false}
              badges={["UX", "UI", "Design System"]}
              circleColor="#EDEEF5"
            />
            <HorizontalCard
              image={WarnerArchiveImg}
              subtitle="WARNER BROS"
              title="Systemizing a video streaming experience"
              altText="Systemizing a video streaming experience"
              className="w-full h-auto"
              reverseOrder={true}
              badges={["UX", "UI", "Design System"]}
              circleColor="#FBF3EE"
            />
            <HorizontalCard
              image={BuildbookImg}
              subtitle="BUILDBOOK"
              title="New approach to construction management"
              altText="New approach to construction management"
              className="w-full h-auto"
              reverseOrder={false}
              badges={["Mobile", "B2b", "B2C", "UX", "UI", "Design System"]}
              circleColor="#F8F9FF"
            />
            <HorizontalCard
              image={CloudEstateImg}
              subtitle="CloudEstate"
              title="Rethinking Asset Management"
              altText="Rethinking Asset Management"
              className="w-full h-auto"
              reverseOrder={true}
              badges={["SaaS", "FinTech", "UX", "UI", "Design System"]}
              circleColor="#F6F3F3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
``;
