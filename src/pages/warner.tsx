import Lottie from "lottie-react";
import seedAnimation from "../assets/images/warner/38729-seedling.json";

import WarnerArchiveImg from "../assets/images/warner/vp-hero-image0-flat.png";

import WhiteboardImg from "../assets/images/videoplayer/kickoff-whiteboarding.png";
import CompetitiveImg from "../assets/images/videoplayer/competitive-research.png";
import OrgVideoPlayerImg from "../assets/images/videoplayer/original-video-player.png";
import EpisodeImg from "../assets/images/videoplayer/episode-ia.png";
import SeriesImg from "../assets/images/videoplayer/series-ia.png";
import DesignPrinciplesImg from "../assets/images/videoplayer/design principles.png";
import TrelloImg from "../assets/images/videoplayer/vp-trello.png";
import SketchesImg from "../assets/images/videoplayer/sketches-vp.png";
import Sketches1Img from "../assets/images/videoplayer/Sketchs-1.png";
import Round1Img from "../assets/images/videoplayer/user-research-round1.png";
import Round2Img from "../assets/images/videoplayer/user-research-round2.png";
import Round3Img from "../assets/images/videoplayer/user-research-round3.png";
import VPPattern from "../assets/images/videoplayer/vp-pattern-library.png";
import Video1 from "../assets/images/videoplayer/video-player-mvp.mp4";
import Video2 from "../assets/images/videoplayer/video-player-future.png";

import BuildbookImg from "../assets/images/homepage/buildbook-img.png";
import CloudEstateImg from "../assets/images/homepage/cloudestate-img.png";

import { MainTextBlock } from "@/components/main-text";
import { LabelDescription } from "@/components/main-text";
import { Subtitle } from "@/components/main-text";
import { VideoPlayerComp } from "@/components/videoplayercomp";
import { CardOther } from "@/components/cards-other";

export function Warner() {
  return (
    <div className="flex  justify-center items-center flex-col ">
      <div
        id="header"
        className="flex  justify-center items-center  bg-[#1b1d27] md:w-screen md:h-screen w-[100%] h-auto "
      >
        <div
          id="Header"
          className=" responsive-width-pb  responsive-width  h-auto flex  flex-col justify-center  items-center 
            2xl:pt-[260px]  pt-[124px] "
        >
          <div className=" xl:w-[90%] w-[90%]   flex justify-center items-center text-center mb-[2%] ">
            <h2 className="mb-[16px] lg:mt-[124px] w-full text-white">
              Systematizing a web video streaming experience{" "}
            </h2>
          </div>
          <img
            src={WarnerArchiveImg}
            alt="Hero Image"
            className=" 2xl:w-[70%] w-3/4 h-3/4 my-[0px] mt-[0px] md:pb-0 lg:pb-24 pb-6"
          ></img>
        </div>
      </div>
      <div className="w-full">
        <div
          id="section-1"
          className="responsive-section-y-case-study bg-brand-primary-20 flex  lg:flex-col flex-col justify-center items-center "
        >
          <div className=" responsive-width-case-study  mt-10 flex flex-col space-y-4">
            <Subtitle label="Introduction" />
            <div className="flex md:flex-row flex-col">
              <MainTextBlock
                title={"About"}
                description={
                  "DramaFever was a video streaming website owned by Warner Bros. that offered on-demand streaming videos of documentaries, movies, and TV shows with subtitles. DramaFever's content offering was both ad-supported for regular users and available in high definition for premium subscribers."
                }
                className="md:w-[60%] w-full"
              />
              <LabelDescription
                items={[
                  { label: "Client: ", description: "Warner Bros, DramaFever" },
                  { label: "Role:", description: "Experience Designer" },
                  {
                    label: "Skills:",
                    description:
                      "Prototyping, UI, UX,  Interaction Design, System Design, Research",
                  },
                ]}
                className="md:w-[40%] w-full"
              />
            </div>
          </div>
        </div>
        <div
          id="section 1"
          className="responsive-section-y-case-study bg-white  flex  lg:flex-col flex-col justify-center items-center "
        >
          <div
            className=" responsive-width-case-study flex  flex-col space-y-4 justify-between mt-10
          "
          >
            <Subtitle label="Discovery" />
            <MainTextBlock
              title={"The Problem"}
              description={
                "DramaFever's core business had always been video streaming. At the time that I joined, we had three different properties, DramaFever, Doc Club, and Shutter. The grand vision for the business had been to continue creating channels for niche audiences. The problem was that our existing infrastructure and workflow at that time did not allow us to quickly and easily create new channels. Every time, we had to start from scratch. We needed a faster and smarter way to work."
              }
              className="]"
            />
            <div className="flex  md:flex-row flex-col justify-between pt-8 space-x-8 md:space-y-0 space-y-8 ">
              <div className="space-y-4">
                <p>
                  {" "}
                  After internal research, stakeholder meetings, and user
                  insights gathering, we came up with 3 goals:
                </p>
                <ol className="custom-counter space-y-4">
                  <li className="custom-li text-left">
                    <p>
                      An expandable library of reusable modules and components,
                      a more systematic approach to design and build
                    </p>
                  </li>
                  <li className="custom-li text-left">
                    <p>Easier maintenance for design and engineering</p>
                  </li>
                  <li className="custom-li text-left">
                    <p>Better cross-team collaboration</p>
                  </li>
                </ol>
                <h5 className="pt-10 font-bold">
                  The “SEED” project was born.{" "}
                </h5>
              </div>
              <Lottie animationData={seedAnimation} loop={false} />
            </div>
          </div>
        </div>
        <div
          id="section 8 "
          className="responsive-section-y-case-study bg-[#22292E] flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"The design process"}
                description={
                  "After stating the main problem, as well as doing our internal research, we did an audit session with the Creative Director and another UX Designer. During the session, we defined at a high level all the core flows, templates and micro-flows. "
                }
                className=" responsive-width-case-study"
                isDarkTheme={true}
              />
              <MainTextBlock
                title={""}
                description={
                  "With all this  on hand, we set a timeline to accomplish the goals in one-week design sprints,  we broke it down as follow:on hand, we set a timeline to accomplish the goals in one-week design sprints,  we broke it down as follow:"
                }
                className=" responsive-width-case-study"
                isDarkTheme={true}
              />
              <div className="flex  flex-col justify-between items-center space-y-10 ">
                <div className="flex  flex-col justify-between items-center space-y-3 ">
                  <img
                    src={Sketches1Img}
                    alt="Whiteboard Image"
                    className=" xl:w-[70%] w-[90%] h-auto "
                  ></img>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div
          id="section-2"
          className="responsive-section-y-case-study bg-white  flex  lg:flex-col flex-col justify-center items-center "
        >
          <div
            className=" responsive-width-case-study flex  flex-col mt-10
          "
          >
            <MainTextBlock
              title={"What people’s problem were we trying to solve?"}
              description={
                "We had a wide-range audience, from a 7-year-old kid watching cartoons to a 70-year-old person watching old western movies. In this case, how could we create a watching experience that caters to each of these groups? Regardless of the demographics, they all have a common task and job to do when it comes to watching videos, that’s to explore, discover and watch in the most intuitive and frictionless way possible."
              }
              className=" w-full"
            />
            <MainTextBlock
              title={"My role"}
              description={
                "I got to work collaboratively with 2 interaction designers in the team. I was focusing on the overall discovery and user research phase, as well as participating during the design exploration."
              }
              className=" w-full"
            />
          </div>
        </div>

        <div
          id="section 3"
          className="responsive-section-y-case-study bg-[#CFDCE5]  flex  lg:flex-col flex-col justify-center items-center "
        >
          <div
            className=" responsive-width-case-study flex  flex-col space-y-4 justify-between mt-10
          "
          >
            <Subtitle label="Discovery" />
            <div className="flex  md:flex-row flex-col justify-between ">
              <MainTextBlock
                title={"Kickoff meeting"}
                description={
                  "At the start of the project we had a meeting to understand the current state of the video player. In this meeting our video player engineer explained there  were some out of the box UI available for video.js , but for more advanced or what we called “boutique features”, third party plugins and custom work needed to be done. This gave us a good idea of the potential future limitations and constraints, and help us prioritized better later on."
                }
                className=" md:w-[40%] w-[90%]"
              />
              <img
                src={WhiteboardImg}
                alt="Whiteboard Image"
                className=" md:w-[40%] w-full h-auto"
              ></img>
            </div>
          </div>
        </div>
        <div
          id="section 4"
          className="responsive-section-y-case-study bg-white  flex  lg:flex-col flex-col justify-center items-center "
        >
          <MainTextBlock
            title={"Interviewing stakeholders"}
            description={
              "At the start of the project we had a meeting to understand the current state of the video player. In this meeting our video player engineer explained there  were some out of the box UI available for video.js , but for more advanced or what we called “boutique features”, third party plugins and custom work needed to be done. This gave us a good idea of the potential future limitations and constraints, and help us prioritized better later on."
            }
            className=" responsive-width-case-study"
          />
          <img
            src={TrelloImg}
            alt="Whiteboard Image"
            className=" xl:w-[50%] w-[90%] h-auto "
          ></img>
          <div className="responsive-width-case-study grid md:grid-cols-2 grid-cols-1 gap-4 mt-10 text-center">
            <p className="text-[#5D7180]">
              “We are currently behind on a video player that is competitive
              enough against all the other video players out there” <br />{" "}
              <strong>Business</strong>
            </p>
            <p className="text-[#5D7180]">
              {" "}
              “Let’s not work on the boutique features just yet but first focus
              on the core features/functionality that will apply to all
              platforms and properties” <br /> <strong>Engineering</strong>
            </p>
            <p className="text-[#5D7180]">
              {" "}
              “One of the big recurring pieces feedback from users is that they
              want to automatically play the next episode in full-screen mode”{" "}
              <br /> <strong>Customer Service </strong>
            </p>
            <p className="text-[#5D7180]">
              {" "}
              “There are a handful of people that ask the jump ahead and behind
              10 seconds, if they missed the subtitles, it’s more of a
              Dramafever thing” <br /> <strong>Customer Service</strong>
            </p>
          </div>
        </div>
        <div
          id="section 5"
          className="responsive-section-y-case-study bg-white  flex  lg:flex-col flex-col justify-center items-center "
        >
          <MainTextBlock
            title={"Measuring our video player against the competition"}
            description={
              "We took some time to analyzed the video players for all the major VOD services at that time. This gave us a quick snapshot about what users were experiencing outside our channels, as well as a benchmark to compare what we were doing but always seeing it within the context of each channel and its special needs."
            }
            className=" responsive-width-case-study"
          />
          <img
            src={CompetitiveImg}
            alt="Whiteboard Image"
            className=" xl:w-[50%] w-[90%] h-auto "
          ></img>
        </div>
        <div
          id="section 6"
          className="responsive-section-y-case-study bg-white  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <Subtitle label="define" />
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Video Player IA"}
                description={
                  "I got to dive deeper into the existing video player architecture and functionality, I worked closely with the engineering team to define all the existing data inputs/outputs and functionality. Something we wanted to take into account for this new player was the addition of series within the video object."
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10 ">
                <div className="flex  flex-col justify-between items-center space-y-3 ">
                  <img
                    src={OrgVideoPlayerImg}
                    alt="Whiteboard Image"
                    className=" xl:w-[50%] w-[90%] h-auto "
                  ></img>
                  <p className="text-[#5D7180]">
                    Original Warner Archive Designs
                  </p>
                </div>
                <div className="flex  flex-row items-center space-y-3  ">
                  <div className="flex  flex-col items-end   ">
                    <div className="flex flex-col  items-center space-y-3">
                      <img
                        src={EpisodeImg}
                        alt="Whiteboard Image"
                        className=" xl:w-[50%]  w-[90%] h-auto "
                      ></img>
                      <p className="text-[#5D7180]">Episode Video Object</p>
                    </div>
                  </div>
                  <div className="flex  flex-col justify-between items-start space-y-3 ">
                    <div className="flex  flex-col items-start ">
                      <img
                        src={SeriesImg}
                        alt="Whiteboard Image"
                        className=" xl:w-[50%] w-[90%] h-auto "
                      ></img>
                      <p className="text-[#5D7180]">Series Video Object</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div
          id="section 7"
          className="responsive-section-y-case-study bg-white  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Design Principles"}
                description={
                  "After having done all the discovery and defining work, between the design team and other key stakeholders, we hashed out a set of principles to help guide us during the exploration and design phase"
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10 ">
                <div className="flex  flex-col justify-between items-center space-y-3 ">
                  <img
                    src={DesignPrinciplesImg}
                    alt="Whiteboard Image"
                    className=" xl:w-[50%] w-[90%] h-auto "
                  ></img>
                  <p className="text-[#5D7180]">
                    Original Warner Archive Designs
                  </p>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div
          id="section 8 "
          className="responsive-section-y-case-study bg-white  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <Subtitle label="Explore" />
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Design Studio Workshop"}
                description={
                  "To kickoff the exploration phase, we had a sketching session with the design team. The purpose of the workshop was to take into account all the different requirements, all the way from essential features to more blue sky ideas, and come up with as many ideas as possible. After being done with sketching, we discussed our ideas and went on our own to start wire-framing some of those."
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10 ">
                <div className="flex  flex-col justify-between items-center space-y-3 ">
                  <img
                    src={SketchesImg}
                    alt="Whiteboard Image"
                    className=" xl:w-[50%] w-[90%] h-auto "
                  ></img>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>

        <div
          id="section 9"
          className="responsive-section-y-case-study bg-white  flex  lg:flex-col flex-col justify-center items-center "
        >
          <div
            className=" responsive-width-case-study flex  flex-col space-y-4 justify-between mt-10
          "
          >
            <Subtitle label="Prototype and Test" />
            <MainTextBlock
              title={"Testing our video player assumptions"}
              description={
                "Once we had gone through a few design iterations and design critiques, we landed on one design and we set out to go test some of our hypotheses. We decided to start our test with our core features and decided to use our more mature property at that time which it was Dramafever. We went through 3 rounds of testing, these were our results:"
              }
              className="]"
            />
            <div className="flex  md:flex-row flex-col justify-between pt-8 space-x-8 md:space-y-0 space-y-8 ">
              <img
                src={Round1Img}
                alt="Whiteboard Image"
                className=" md:w-[40%] w-full h-fit"
              ></img>
              <div className="space-y-4">
                <h5 className="font-bold ">Round 1 - Key Insights</h5>
                <ul className="list-disc list-outside   space-y-4">
                  <li className="text-left">
                    <p>
                      Users did not understand what the “i” icon meant; they
                      thought it was the episode description.
                    </p>
                  </li>
                  <li className="text-left">
                    <p>
                      Overall, users had a hard time locating the main functions
                      in the top right of the player. People were used to having
                      all controls in one place.
                    </p>
                  </li>
                  <li className="text-left">
                    <p>
                      The next episode icon was intuitive and was where the user
                      expected to see it.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex  md:flex-row flex-col justify-between pt-8 space-x-8 md:space-y-0 space-y-8 ">
              <img
                src={Round2Img}
                alt="Whiteboard Image"
                className=" md:w-[40%] w-full  h-fit"
              ></img>
              <div className="space-y-4">
                <h5 className="font-bold ">Round 2 - Key Insights</h5>
                <ul className="list-disc list-outside  space-y-4">
                  <li className="text-left">
                    <p>
                      This test proved that users were able to locate and
                      recognize the core video player function.
                    </p>
                  </li>
                  <li className="text-left">
                    <p>
                      This test proved that users were able to locate and
                      recognize the core video player function.
                    </p>
                  </li>
                  <li className="text-left">
                    <p>
                      There are few things that were not as intuitive to users
                      such as “next episode” positioning and the episode summary
                      description showing on pause.
                    </p>
                  </li>
                  <li className="text-left">
                    <p>
                      We were able to identify some user behaviors, such as user
                      using the keyboard to perform some of the most basic
                      operations such as volume, play/pause and, going
                      full-screen rewinding/forwarding.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex  md:flex-row flex-col justify-between pt-8 space-x-8 md:space-y-0 space-y-8 ">
              <img
                src={Round3Img}
                alt="Whiteboard Image"
                className=" md:w-[40%] w-full  h-fit"
              ></img>
              <div className="space-y-4">
                <h5 className="font-bold ">Round 3 - Key Insights</h5>
                <ul className="list-disc list-outside  space-y-4">
                  <li className="text-left">
                    <p>
                      When it came to the video controls users were able to
                      successfully locate and recognize each function. However,
                      their primary response for each action usually was using
                      the keyboard commands or track-pad
                    </p>
                  </li>
                  <li className="text-left">
                    <p>
                      Showing episode description when hovering on the episode #
                      in the top left corner proved to be the most successful
                    </p>
                  </li>
                  <li className="text-left">
                    <p>
                      Navigating to a previous scene: In this case, users used
                      the scrubber or used the left/arrow keys
                    </p>
                  </li>
                  <li className="text-left">
                    <p>
                      Some of them watch k-dramas to learn Korean, being able to
                      quickly rewind is something helpful to do in case they
                      don’t immediately catch a word
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          id="section 10"
          className="responsive-section-y-case-study bg-white  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Video Player MVP Pattern Library"}
                description={
                  "I helped put together a design pattern library to address the different states, statuses, and permutations"
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10 ">
                <div className="flex  flex-col justify-between items-center space-y-3 ">
                  <img
                    src={VPPattern}
                    alt="Whiteboard Image"
                    className=" xl:w-[70%] w-[90%] h-auto "
                  ></img>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div
          id="section 11"
          className="responsive-section-y-case-study bg-[#22292E] flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center md:space-y-20 space-y-16">
            <div className="flex  flex-col justify-between items-center  ">
              <MainTextBlock
                title={"MVP"}
                description={
                  "After having validated our hypotheses, we wrapped up our design phase and applied all the learning to the final video player designs. It became our MVP and we felt more confident about our design decisions, as well as how they aligned with the business and user goals."
                }
                className=" responsive-width-case-study"
                isDarkTheme={true}
              />
              <div className="flex  flex-col justify-between items-center space-y-10 ">
                <div className="flex  flex-col justify-between items-center space-y-3 ">
                  <VideoPlayerComp
                    videoSrc={Video1}
                    className=" xl:w-[1000px] lg:w-[800px] w-[90%] "
                  />
                </div>
              </div>
            </div>
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Video Player 2.0"}
                description={
                  "Finally, we also explored how this same video player could adapt to other properties and how we could continue to expand the feature set."
                }
                className=" responsive-width-case-study"
                isDarkTheme={true}
              />
              <div className="flex  flex-col justify-between items-center space-y-10 ">
                <div className="flex  flex-col justify-between items-center space-y-3 ">
                  <img
                    src={Video2}
                    alt="Whiteboard Image"
                    className=" xl:w-[1000px] lg:w-[800px]2 w-[90%] "
                  ></img>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div className=" bg-white">
          <div className=" w-full flex justify-center pt-10 ">
            <h3 className="responsive-width-case-study flex justify-center items-center ">
              Other Projects
            </h3>
          </div>
          <div className="flex justify-center space-x-0 mt-10">
            <CardOther
              image={BuildbookImg}
              title={"New approach to construction management"}
              className=" bg-[#f3f4f4]"
            />
            <CardOther
              image={CloudEstateImg}
              title={"Rethinking Asset Management"}
              className=" bg-brand-tertiary-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
