import { Helmet } from "react-helmet-async";

import { OtherProjects1 } from "@/components/other-projects";

import { MainTextBlock } from "@/components/main-text";
import { LabelDescription } from "@/components/main-text";
import { Subtitle } from "@/components/main-text";

import { HeaderMain } from "@/components/HeaderMain";
import { VideoPlayerComp } from "@/components/videoplayercomp";

// Placeholder images - these will need to be replaced with actual assets
import TheMuseSearchHeroImg from "../assets/images/search/themuse-search-hero.png";
import OldSearchDesignImg from "../assets/images/search/themuse-search-page-old-design.png";
import SearchVideo from "../assets/images/search/themuse-search-page-video-reduce.mp4";
import ResponsiveSearchImg from "../assets/images/search/themuse-search-responsive.png";

export function TheMuseSearch() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Helmet>
        <title>The Muse - Search Page Redesign</title>
        <meta
          name="description"
          content="The Muse's Search Page Redesign"
        />
      </Helmet>
      
      {/* Hero Section */}
      <HeaderMain
        headingText={"The Muse Search Page Redesign"}
        imgSrc={TheMuseSearchHeroImg}
      />

      <div className="w-full">
        {/* Introduction Section */}
        <div
          id="intro-section"
          className="responsive-section-y-case-study bg-brand-primary-20 flex lg:flex-col flex-col justify-center items-center"
        >
          <div className="responsive-width-case-study mt-10 flex flex-col space-y-6">
            <Subtitle label="Introduction" />
            <div className="flex md:flex-row flex-col gap-10">
              <MainTextBlock
                title={"About The Muse"}
                description={
                  <>
                    <a href="https://www.themuse.com/" className="text-blue-600 hover:underline">
                      The Muse
                    </a>{" "}
                    is the go-to destination for the next-generation workforce to research companies and careers. More than 70 million visitors each year trust The Muse and Fairygodboss, to help them win at work.
                  </>
                }
                className="md:w-[60%] w-full"
              />
              <LabelDescription
                items={[
                  { label: "Client:", description: "The Muse" },
                  { label: "Role:", description: "Senior Product Designer" },
                  {
                    label: "Skills:",
                    description: "User Research, UX Design, UI Design, Prototyping, Usability Testing",
                  },
                ]}
                className="md:w-[40%] w-full"
              />
            </div>
          </div>
        </div>

        {/* The Challenge Section */}
        <div
          id="challenge-section"
          className="responsive-section-y-case-study bg-white flex flex-col justify-center items-center px-[320px]"
        >
          <div className="responsive-width-case-study flex flex-col space-y-6">
            <MainTextBlock
              title={"The Challenge"}
              description={
                "Job seekers struggled to find relevant positions due to poor filtering, inconsistent ranking, and cluttered layouts. The navigation forced users to leave search results entirely to view job details, disrupting their browsing flow and reducing engagement. This fragmented experience limited users' ability to explore multiple opportunities while undermining search visibility and the company's goal to increase applications."
              }
              className="w-full"
            />
            <div className="flex justify-center items-center">
              <img
                src={OldSearchDesignImg}
                alt="Old Search Design"
                className="w-full max-w-[1002px] h-auto shadow-[0px_4px_50px_0px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        </div>

        {/* The Solution Section */}
        <div
          id="solution-section"
          className="responsive-section-y-case-study bg-brand-tertiary-10 flex flex-col justify-center items-center"
        >
          <div className="responsive-width-case-study flex flex-col space-y-8 items-center">
            <MainTextBlock
              title={"The Solution"}
              description={
                "I redesigned the search with a split-panel layout displaying job details alongside results, keeping users in a single view. Machine learning-powered filters prioritized relevance, while new options for culture fit and remote work helped users identify matching positions quickly. This streamlined approach improved browsing efficiency, search engine discoverability, and business value."
              }
              className="w-full text-center"
            />
            <div className="flex justify-center items-center w-full">
              <div className="w-full max-w-[996px] shadow-[0px_4px_50px_0px_rgba(0,0,0,0.15)]">
                <VideoPlayerComp
                  videoSrc={SearchVideo}
                  className="w-full h-auto "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Design Section */}
        <div
          id="responsive-section"
          className="responsive-section-y-case-study bg-white flex justify-center items-center px-[101px] py-[154px]"
        >
          <div className="flex justify-center items-center">
            <img
              src={ResponsiveSearchImg}
              alt="Responsive Search Design"
              className="w-full max-w-[1201px] h-auto"
            />
          </div>
        </div>

        {/* Outcomes Section */}
        <div
          id="outcomes-section"
          className="responsive-section-y-case-study bg-white flex justify-center items-center px-[320px]"
        >
          <div className="responsive-width-case-study flex flex-col space-y-4">
            <MainTextBlock
              title={"Outcomes & Lessons Learned"}
              description={undefined}
              className="w-full mb-4"
            />
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-start">
                <div className="w-3 h-3 bg-brand-secondary-100-text rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[18px] leading-[1.3] text-[#0c0e10]">
                  After launching the redesigned search experience, we saw a{" "}
                  <strong>150% increase in successful job applications originating from search results</strong>.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <div className="w-3 h-3 bg-brand-secondary-100-text rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[18px] leading-[1.3] text-[#0c0e10]">
                  The streamlined interface <strong>reduced the average time from search to application by 40%</strong>, 
                  enabling job seekers to move more quickly from discovery to action.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <div className="w-3 h-3 bg-brand-secondary-100-text rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[18px] leading-[1.3] text-[#0c0e10]">
                  The search improvements <strong>impacted 5 million monthly job seekers</strong>, 
                  significantly expanding the reach and effectiveness of The Muse's core product offering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Section */}
        <OtherProjects1 />
      </div>
    </div>
  );
}
