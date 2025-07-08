import WhiteboardImg from "../assets/images/videoplayer/kickoff-whiteboarding.png";
import CompetitiveImg from "../assets/images/videoplayer/competitive-research.png";
import TheMuseJDPImg from "../assets/images/jdp/jpd-hero-image.png";
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
import { Helmet } from "react-helmet-async";

import { OtherProjects1 } from "@/components/other-projects";

import { MainTextBlock } from "@/components/main-text";
import { LabelDescription } from "@/components/main-text";
import { Subtitle } from "@/components/main-text";
import { VideoPlayerComp } from "@/components/videoplayercomp";

import { HeaderMain } from "@/components/HeaderMain";

export function TheMuseJDP() {
  return (
    <div className="flex  justify-center items-center flex-col ">
      <Helmet>
        <title> The Muse - JDP </title>
        <meta
          name="description"
          content=" Driving 40% Job Apply Growth for The Muse’s Job Details Page"
        />
      </Helmet>
      <HeaderMain
        headingText={
          "Driving 40% Job Apply Growth for The Muse’s Job Details Page"
        }
        imgSrc={TheMuseJDPImg}
      />

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
                      "UX Design, UI Design, Prototyping, Usability Testing, User Research",
                  },
                ]}
                className="md:w-[40%] w-full"
              />
            </div>
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
              "We came up with a set of questions for the different departments, as well as liaisons for each channel to better understand their position and expectations about the video player. After speaking with 11 stakeholders, we analyzed and synthesized the information. This helped us keep in mind the top priorities for each stakeholder as we kept moving along."
            }
            className=" responsive-width-case-study"
          />
          <img
            src={TrelloImg}
            alt=" Trelllo Image"
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
          className="responsive-section-y-case-study  bg-[#CFDCE5] flex  lg:flex-col flex-col justify-center items-center "
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
            alt="Competitive Analysis Image"
            className=" xl:w-[70%] w-[90%] h-auto "
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
                    src={TheMuseJDPImg}
                    alt="Original Warner Archive Designs"
                    className=" xl:w-[70%] w-[90%] h-auto "
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
                        alt="Episode Video Object"
                        className=" xl:w-[70%]  w-[90%] h-auto "
                      ></img>
                      <p className="text-[#5D7180]">Episode Video Object</p>
                    </div>
                  </div>
                  <div className="flex  flex-col justify-between items-start space-y-3 ">
                    <div className="flex  flex-col items-start ">
                      <img
                        src={SeriesImg}
                        alt="Series Video"
                        className=" xl:w-[70%] w-[90%] h-auto "
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
                    alt="Design Principles"
                    className=" xl:w-[70%] w-[90%] h-auto "
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
                    alt="Sketches Image"
                    className=" xl:w-[70%] w-[90%] h-auto "
                  ></img>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div
          id="section 8 "
          className="responsive-section-y-case-study bg-[#22292E] flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Wire-framing and feature prioritization"}
                description={
                  "After having gone through a few rounds of sketching and wire-framing, I helped abstract all the  components of the new video player at an atomic level. I worked with our product manager and engineer to prioritized the 30+ features based on its viability and feasibility."
                }
                className=" responsive-width-case-study"
                isDarkTheme={true}
              />
              <div className="flex  flex-col justify-between items-center space-y-10 ">
                <div className="flex  flex-col justify-between items-center space-y-3 ">
                  <img
                    src={Sketches1Img}
                    alt="Sketches Image"
                    className=" xl:w-[70%] w-[90%] h-auto "
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
                alt="User Testing Image"
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
                alt="User Testing Image"
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
                      Proved that users often would not need an extensive set of
                      subtitles styling options
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
                alt="User Testing Image"
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
                    alt="Pattern Library Image"
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
                    alt="Video Player Future Image"
                    className=" xl:w-[1000px] lg:w-[800px]2 w-[90%] "
                  ></img>
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
                title={"Outcomes & Lessons Learned"}
                className=" responsive-width-case-study mb- .5"
                description={undefined}
              />
              <ol className="custom-counter space-y-4 responsive-width-case-study">
                <li className="custom-li text-left">
                  <p>
                    The results were a video player for which we had accounted
                    for 30+ features, adaptable and scalable for all of our
                    properties
                  </p>
                </li>
                <li className="custom-li text-left">
                  <p>
                    We had conducted 3 usability tests, with a total of 15 users
                    which helped us gain more confidence in our design decision
                    making and helped us align with the special needs of our
                    audience
                  </p>
                </li>
                <li className="custom-li text-left">
                  <p>
                    We only had validated our MVP with one our properties at
                    that time and further research needed to be done for the
                    more advanced features and other channels. However, this set
                    the ground for the start of the new video player experience
                    and getting closer to giving our users a more cater and
                    engaging experience.
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
