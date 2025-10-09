import TheMuseJDPImg from "../assets/images/maya/maya-hero-image.png";
import MayaExploration1 from "../assets/images/maya/maya-competitive-research-1.png";
import MayaExploration2 from "../assets/images/maya/maya-competitive-research-2.png";
import MayaApproach from "../assets/images/maya/maya-approach.png";
import MayaBrandExploration from "../assets/images/maya/maya-brand-exploration.png";

import MayaScreen01 from "../assets/images/maya/maya-screen-01.png";
import MayaScreen02 from "../assets/images/maya/maya-screen-02.png";
import MayaScreen03 from "../assets/images/maya/maya-screen-03.png";
import MayaScreen04 from "../assets/images/maya/maya-screen-04.png";
import MayaScreen05 from "../assets/images/maya/maya-screen-05.png";
import MayaScreen06 from "../assets/images/maya/maya-screen-06.png";

import MayaPromotion1 from "../assets/images/maya/Maya-Ads-1.png";
import MayaPromotion2 from "../assets/images/maya/Maya-Ads-2.png";

import MayaAdvicePopup from "../assets/images/maya/maya-advice-popup.mp4";
import MayaPrototype from "../assets/images/maya/maya-prototype.mp4";
import { VideoOnView } from "@/components/videoplayer.tsx";
import { ImageModal } from "@/components/ImageModal";

import { Helmet } from "react-helmet-async";

import { OtherProjects1 } from "@/components/other-projects";

import { MainTextBlock } from "@/components/main-text";
import { LabelDescription } from "@/components/main-text";
import { Subtitle } from "@/components/main-text";

import { HeaderMain } from "@/components/HeaderMain";

export function TheMuseMaya() {
  return (
    <div className="flex  justify-center items-center flex-col ">
      <Helmet>
        <title> The Muse - Maya </title>
        <meta
          name="description"
          content="Rethinking Content Discovery Through AI"
        />
      </Helmet>
      <HeaderMain
        headingText={"Rethinking Content Discovery Through AI"}
        imgSrc={TheMuseJDPImg}
      />

      <div className="w-full">
        <div
          id="section-overview"
          className="responsive-section-y-case-study bg-brand-primary-20 flex  lg:flex-col flex-col justify-center items-center "
        >
          <div className=" responsive-width-case-study  mt-10 flex flex-col space-y-4">
            <Subtitle label="Introduction" />
            <div className="flex md:flex-row flex-col gap-2">
              <MainTextBlock
                title={"About"}
                description={
                  "The Muse is the go-to destination for the next-generation workforce to research companies and careers. More than 70 million visitors each year trust The Muse, to help them win at work."
                }
                className="md:w-[60%] w-full"
              />
              <LabelDescription
                items={[
                  { label: "Client: ", description: "The Muse" },
                  { label: "Role:", description: "Senior Product Designer" },
                  {
                    label: "Skills:",
                    description:
                      "Branding,  User Research, Wireframing, Prototyping, UI Design, Interaction Design",
                  },
                ]}
                className="md:w-[40%] w-full"
              />
            </div>
          </div>
        </div>
        <div
          id="section-1"
          className="responsive-section-y-case-study bg-white  flex  lg:flex-col flex-col justify-center items-center "
        >
          <div
            className=" responsive-width-case-study flex  flex-col mt-10
          "
          >
            <MainTextBlock
              title={"The Problem "}
              description={
                "The Muse and FGB have over 24,000 career articles on job searches, career paths, and workplace success—but most were hard to find without Google. Internally, search was limited: articles weren’t indexed, and curated sections or pagination didn’t solve the problem."
              }
              className=" responsive-width-case-study"
            />
            <MainTextBlock
              title={"The Opportunity"}
              description={
                "AI was already transforming how people search and process information. Without adapting, The Muse risked losing visibility and trust. Improving content discovery was essential to deliver fast, reliable answers when users needed them most."
              }
              className=" responsive-width-case-study"
            />
          </div>
        </div>
        <div
          id="section 2"
          className="responsive-section-y-case-study bg-brand-primary-20  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Competitive Research"}
                description={
                  "To better understand the existing AI landscape within our competition and other industries, I conducted a competitive research that helped us shed light on our current position and how AI was being utilized at that time. "
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10 ">
                <div className="flex  flex-col justify-between items-center space-y-3 gap-2  ">
                  <img
                    src={MayaExploration1}
                    alt="Sketches Image"
                    className=" xl:w-[90%] w-[90%] h-auto "
                  ></img>
                  <img
                    src={MayaExploration2}
                    alt="Sketches Image"
                    className=" xl:w-[90%] w-[90%] h-auto "
                  ></img>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>

        <div
          id="section 3"
          className="responsive-section-y-case-study bg-[#56CCF2]  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <Subtitle label="Research" />
              <MainTextBlock
                title={"The approach"}
                description={
                  "Several different approaches were employed by companies when integrating AI into their products. One key piece of information from the research was that the form factor could be influenced by the granularity or specificity of the language model."
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10 responsive-width-case-study  ">
                <div className="flex  flex-col justify-between items-center space-y-3 gap-2  ">
                  <img
                    src={MayaApproach}
                    alt="Sketches Image"
                    className=" xl:w-[100%] w-[100%] h-auto "
                  ></img>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>

        <div
          id="section 4"
          className="responsive-section-y-case-study bg-[#fff]  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Designing an identity for our AI Agent"}
                description={
                  "We wanted to give our AI its own unique identity, we named it Maya. Along with this, I also helped explore a few logo design ideas, which we wanted to be based on The Muse’s existing branding, to feel familiar and differentiated enough."
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10   ">
                <div className="flex  flex-col justify-between items-center space-y-3 gap-2  ">
                  <img
                    src={MayaBrandExploration}
                    alt="Sketches Image"
                    className=" xl:w-[70%] w-[90%] h-auto rounded-[16px]"
                  ></img>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>

        <div
          id="section 4"
          className="responsive-section-y-case-study bg-[#fff]  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"The Standalone chatbot interface"}
                description={
                  "After several rounds of design explorations, we landed on this design.  We started with a Chatbot interface in a standalone page that prompts the user to get started. All answers were going to be from Muse articles, company pages, job posts, and link to relevant pages."
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10   ">
                <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 md:px-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    <div className="flex justify-center">
                      <ImageModal
                        src={MayaScreen01}
                        alt="Maya Screen 01"
                        className="w-full"
                      >
                        <img
                          src={MayaScreen01}
                          alt="Maya Screen 01"
                          className="w-full h-auto shadow-lg"
                        />
                      </ImageModal>
                    </div>
                    <div className="flex justify-center">
                      <ImageModal
                        src={MayaScreen02}
                        alt="Maya Screen 02"
                        className="w-full"
                      >
                        <img
                          src={MayaScreen02}
                          alt="Maya Screen 02"
                          className="w-full h-auto shadow-lg"
                        />
                      </ImageModal>
                    </div>
                    <div className="flex justify-center">
                      <ImageModal
                        src={MayaScreen03}
                        alt="Maya Screen 03"
                        className="w-full"
                      >
                        <img
                          src={MayaScreen03}
                          alt="Maya Screen 03"
                          className="w-full h-auto shadow-lg"
                        />
                      </ImageModal>
                    </div>
                    <div className="flex justify-center">
                      <ImageModal
                        src={MayaScreen04}
                        alt="Maya Screen 04"
                        className="w-full"
                      >
                        <img
                          src={MayaScreen04}
                          alt="Maya Screen 04"
                          className="w-full h-auto shadow-lg"
                        />
                      </ImageModal>
                    </div>
                    <div className="flex justify-center">
                      <ImageModal
                        src={MayaScreen05}
                        alt="Maya Screen 05"
                        className="w-full"
                      >
                        <img
                          src={MayaScreen05}
                          alt="Maya Screen 05"
                          className="w-full h-auto shadow-lg"
                        />
                      </ImageModal>
                    </div>
                    <div className="flex justify-center">
                      <ImageModal
                        src={MayaScreen06}
                        alt="Maya Screen 06"
                        className="w-full"
                      >
                        <img
                          src={MayaScreen06}
                          alt="Maya Screen 06"
                          className="w-full h-auto shadow-lg"
                        />
                      </ImageModal>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 rounded-[16px] bg-[#EDEEF5] xl:w-[70%] w-[90%] h-auto mt-20">
                <VideoOnView
                  src={MayaPrototype}
                  className="rounded-[8px]"
                  // optionally override threshold:
                  threshold={0.5}
                />
              </div>
            </div>
            <div />
          </div>
        </div>

        <div
          id="section 5"
          className="responsive-section-y-case-study bg-[#fff]  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Promoting it across the site"}
                description={
                  "We also came up with a strategy to promote Maya across the different parts of the site such as the Homepage and Advice."
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10   ">
                <div className="flex  flex-col justify-between items-center space-y-3 gap-2  ">
                  <img
                    src={MayaPromotion1}
                    alt="Sketches Image"
                    className=" xl:w-[70%] w-[90%] h-auto shadow-lg mb-16"
                  ></img>
                  <img
                    src={MayaPromotion2}
                    alt="Sketches Image"
                    className=" xl:w-[70%] w-[90%] h-auto shadow-lg"
                  ></img>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>

        <div
          id="section 5"
          className="responsive-section-y-case-study bg-[#fff]  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Maya Widget"}
                description={
                  "For future iterations, we planned on building an Maya Widget that would give user access to Maya throughout different parts of the site experience. "
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10   ">
                <div className="flex  flex-col justify-between items-center space-y-3 gap-2  ">
                  <div className="p-2 rounded-[16px] bg-[#EDEEF5] xl:w-[70%] w-[90%] h-auto">
                    <VideoOnView
                      src={MayaAdvicePopup}
                      className="rounded-[8px]"
                      // optionally override threshold:
                      threshold={0.5}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>

        <div
          id="section 10"
          className="responsive-section-y-case-study bg-white  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Outcomes & Lessons Learned"}
                className=" responsive-width-case-study mb- .5"
                description={undefined}
              />
              <ol className="custom-counter space-y-4 responsive-width-case-study">
                <li className="custom-li text-left">
                  <p>
                    We trained Maya on our database of over 24,000 career
                    articles, enabling it to surface highly relevant content for
                    job seekers with greater accuracy and speed.
                  </p>
                </li>
                <li className="custom-li text-left">
                  <>
                    Within the first few months of launch,{" "}
                    <strong>
                      6,000–7,000 users engaged with Maya to support their job
                      search efforts.
                    </strong>
                  </>
                </li>
                <li className="custom-li text-left">
                  <p>
                    Beyond content delivery, Maya also offered valuable insight
                    into emerging user needs, helping our editorial team
                    identify content gaps and prioritize new topics that aligned
                    with what job seekers were actively looking to learn.
                  </p>
                </li>
              </ol>
              <div className="flex  flex-col justify-between items-center space-y-10 "></div>
            </div>
            <div />
          </div>
        </div>

        <OtherProjects1 />
      </div>
    </div>
  );
}
