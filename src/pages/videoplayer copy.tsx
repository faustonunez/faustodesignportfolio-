import VideoPlayerImg from "../assets/images/videoplayer/vp-hero-image0-flat.png";
import WhiteboardImg from "../assets/images/videoplayer/kickoff-whiteboarding.png";
import CompetitiveImg from "../assets/images/videoplayer/competitive-research.png";
import OrgVideoPlayerImg from "../assets/images/videoplayer/original-video-player.png";
import EpisodeImg from "../assets/images/videoplayer/episode-ia.png";
import SeriesImg from "../assets/images/videoplayer/series-ia.png";
import TrelloImg from "../assets/images/videoplayer/vp-trello.png";
import { MainTextBlock } from "@/components/main-text";
import { LabelDescription } from "@/components/main-text";
import { Subtitle } from "@/components/main-text";

export function VideoPlayer() {
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
          <div className=" xl:w-[60%] w-[90%]  flex justify-center items-center text-center mb-[2%] ">
            <h2 className="mb-[16px] lg:mt-[124px] w-full text-white">
              Designing an adaptable video player experience{" "}
            </h2>
          </div>
          <img
            src={VideoPlayerImg}
            alt="Hero Image"
            className=" 2xl:w-[50%] w-3/4 h-3/4 my-[0px] mt-[0px] md:pb-0 lg:pb-24 pb-6"
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
                  "WB Digital Labs (subsidiary of Warner Bros.) was a fast-paced, innovative development division working to build the next generation of video-enabled entertainment brands"
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
                      "Prototyping, UI, UX,  Interaction Design, System Design, Qualitative Research",
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
            <div className="flex  flex-row justify-between ">
              <MainTextBlock
                title={"Kickoff meeting"}
                description={
                  "At the start of the project we had a meeting to understand the current state of the video player. In this meeting our video player engineer explained there  were some out of the box UI available for video.js , but for more advanced or what we called “boutique features”, third party plugins and custom work needed to be done. This gave us a good idea of the potential future limitations and constraints, and help us prioritized better later on."
                }
                className=" w-[40%]"
              />
              <img
                src={WhiteboardImg}
                alt="Whiteboard Image"
                className=" w-[40%] h-auto"
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
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}
