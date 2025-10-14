import WBVideoPlayerImg from "../assets/images/homepage/wb-videoplayer-img.png";
import WarnerArchiveImg from "../assets/images/homepage/warnerarchive-img.png";
import BuildbookImg from "../assets/images/homepage/buildbook-img.png";
import CloudEstateImg from "../assets/images/homepage/cloudestate-img.png";
import TheMuseJpdImg from "../assets/images/homepage/themuse-jdp.png";
import TheMuseMayaImg from "../assets/images/homepage/themuse-maya.png";
import Arrow from "../assets/images/homepage/arrow-down.svg?react";
import { Helmet } from "react-helmet-async";

import HeaderImg3 from "../assets/images/homepage/hero-image-3.png";
import { HorizontalCard } from "../components/cards";

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
        <div
          id="Header"
          className="flex justify-top items-center lg:flex-col flex-col bg-brand-primary-20 lg:w-screen lg:h-screen w-[100%] h-auto relative"
        >
          <div className="responsive-width mt-[100px] h-full flex flex-col">
            <h1
              className="  w-full font-black leading-tight"
              style={{
                fontSize: "clamp(3.75rem, 9vw, 10rem)",
              }}
            >
              Lead. Craft. Play.
            </h1>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:-mt-24 mt-8 w-full flex-1 gap-8">
              <div className="text-left lg:w-1/2 w-full">
                <h5 className="w-full">
                  Hi, I’m Fausto, a multidisciplinary product designer with over
                  10 years of experience turning ideas into meaningful products.
                  I run my own UX/UI studio where I help brands bring bold ideas
                  to life.
                </h5>
                <br />
                <h5 className="w-full">
                  {" "}
                  I’m a <strong>
                    builder at heart, endlessly curious,
                  </strong>{" "}
                  and love turning complex problems into simple, beautiful
                  experiences.
                </h5>
              </div>
              <div className="lg:w-1/2 w-full flex justify-center  lg:justify-end">
                <img
                  src={HeaderImg3}
                  alt="Hero Image"
                  className=" w-[30%] md:w-[30%] lg:w-[34%] xlg:w-[30%]  max-w-md object-contain lg:mb-0 mb-4"
                ></img>
              </div>
            </div>
          </div>
          <Arrow
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:mb-10 mb-10 animate-bounce lg:block hidden cursor-pointer"
            onClick={() => {
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
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
