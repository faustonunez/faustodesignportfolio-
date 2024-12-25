import Lottie from "lottie-react";
import seedAnimation from "@/assets/images/warner/38729-seedling.json";
import { DesignProcessTable } from "@/components/design-process-table";

import WarnerArchiveImg from "@/assets/images/warner/vp-hero-image0-flat.png";
import WarnerProcessImg from "@/assets/images/warner/design-process-bk.jpg";
import SystemflowsImg from "../assets/images/warner/warner-system-flows-and-requirements.png";
import WarnerStickyNotesImg from "../assets/images/warner/wb-user-scenarios-sticky-notes.png";
import WarnerUserFlowImg from "../assets/images/warner/wb-user-flow.png";
import StatusUpate1Img from "../assets/images/warner/wb-states-and-statuses-1.jpg";
import StatusUpate2Img from "../assets/images/warner/wb-states-and-statuses-2.jpg";
import PatternLibraryImg from "../assets/images/warner/seed-pattern-library.jpg";
import SeedPatternLibraryImg from "../assets/images/warner/seed-pattern-library-2.png";
import WBOriginalDesignsImg from "../assets/images/warner/wb-original-designs.png";
import WBRedesign1Img from "../assets/images/warner/wb-redesign-1.png";
import WBRedesign2Img from "../assets/images/warner/wb-redesign-2.png";
import WBRedesign3Img from "../assets/images/warner/wb-redesign-3.png";
import WBFinalDesignsImg from "../assets/images/warner/wa-final-designs.png";

import { OtherProjects1 } from "@/components/other-projects";

import { MainTextBlock } from "@/components/main-text";
import { Subtitle } from "@/components/main-text";
import { HeaderMain } from "@/components/HeaderMain";
import { AboutProject } from "@/components/about-project";

export function Page() {
  return (
    <div className="flex  justify-center items-center flex-col ">
      {/*   THIS IS THE HEADER  */}
      <HeaderMain
        headingText={"Systematizing a web video streaming experience"}
        imgSrc={WarnerArchiveImg}
      />
      {/*   THIS IS THE REST OF THE PAGE  */}
      <div className="w-full">
        {/*   ABOUT PROJECT 1 */}
        <AboutProject
          subtitleLabel={"Introduction"}
          mainTextBlockProps={{
            description:
              "DramaFever was a video streaming website owned by Warner Bros. that offered on-demand streaming videos of documentaries, movies, and TV shows with subtitles. DramaFever's content offering was both ad-supported for regular users and available in high definition for premium subscribers.",
            className: "custom-class",
          }}
          labelDescriptionProps={{
            items: [
              { label: "Client: ", description: "Warner Bros, DramaFever" },
              { label: "Role:", description: "Experience Designer" },
              {
                label: "Skills:",
                description:
                  "Prototyping, UI, UX,  Interaction Design, System Design, Research",
              },
            ],
            className: "custom-class",
          }}
        />

        {/*   SECTION 1  */}

        <div
          id="section 1"
          className="responsive-section-y-case-study  bg-brand-greys-0  flex  lg:flex-col flex-col justify-center items-center "
        >
          <div
            className=" responsive-width-case-study flex  flex-col space-y-4 justify-between 
          "
          >
            <Subtitle label="Discovery" />
            <MainTextBlock
              title={"The Problem"}
              description={
                "DramaFever's core business had always been video streaming. At the time that | joined, we had three different phad been to continue creating channels for niche audiences. The problem was that our existing infrastructure and workflow at that time did not allow us to quickly and easily create new channels. Every time, we had to start from scratch. We needed a faster and smarter way to work."
              }
              className="]"
            />
            roperties, DramaFever, Doc Club, and Shutter. The grand vision for
            the business
            <div className="flex  md:flex-row flex-col   pt-8 space-x-8 md:space-y-0 space-y-8 ">
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
              <div className="w-full flex justify-center">
                <div className="w-[30%] md:w-[60%]">
                  <Lottie animationData={seedAnimation} loop={false} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*   SECTION 2  */}

        <div
          id="section 2 "
          className="responsive-section-y-case-study bg-[#22292E] flex justify-center items-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${WarnerProcessImg})`,

            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"The design process"}
                description={[
                  "After stating the main problem, as well as doing our internal research, we did an audit session with the Creative Director and another UX Designer. During the session, we defined at a high level all the core flows, templates and micro-flows. ",
                  "With all this  on hand, we set a timeline to accomplish the goals in one-week design sprints,  we broke it down as follow:",
                ]}
                className=" responsive-width-case-study"
                isDarkTheme={true}
              />

              <DesignProcessTable />
            </div>
            <div />
          </div>
        </div>

        {/*   SECTION 3  */}
        <div
          id="section 3"
          className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 "
        >
          <Subtitle label="define" />
          <div className="flex  flex-col justify-between items-center ">
            <MainTextBlock
              title={"System flows and high-level requirements"}
              description={
                "| mapped out d all the unique flows across all of the properties at that time, as well as the core functionality, basically the most essentials functions that a video streaming service will need to accomplish the user’s goal. This gave us a high-level view of all the fundamental flows and requirements that we needed to tackle moving forward."
              }
              className=" responsive-width-case-study"
            />
            <div className="flex  flex-col justify-between items-center space-y-10 ">
              <div className="flex  flex-col justify-between items-center space-y-3 ">
                <img
                  src={SystemflowsImg}
                  alt=" System flows and high-level requirements"
                  className=" xl:w-[60%] w-[70%] h-auto "
                ></img>
              </div>
            </div>
          </div>
          <div />
        </div>

        {/*   SECTION 4  */}

        <div
          id="section-4"
          className="responsive-section-y-case-study bg-brand-secondary-10  flex  lg:flex-col flex-col justify-center items-center "
        >
          {/*   subsection 1 */}

          <div className="w-full flex flex-col justify-center items-center">
            <div
              className="  responsive-width-case-study flex  flex-col mt-10
            "
            >
              <MainTextBlock
                title={"Mapping system flows to most common user scenarios"}
                description={undefined}
                className=" w-full mb-[16px]"
                showDescription={false}
              />
              <MainTextBlock
                title={"User scenarios"}
                description={
                  "Once we had a high-level view of the system and its smaller components. We formulated several user scenarios based on the foundational knowledge that we already had about our users as well as our competitors."
                }
                className=" w-full"
                titleClassName=" text-[26px]"
              />
            </div>
            <img
              src={WarnerStickyNotesImg}
              alt="Warner Mapping Image"
              className="  xl:max-w-[1000px] w-[80%] h-auto "
            />
          </div>

          {/*   subsection 2 */}

          <div className=" responsive-width-case-study flex  flex-col mt-20">
            <MainTextBlock
              description={
                <>
                  Scenario: | just learned about DF, | clicked on a link from an
                  ad, <strong>| want to subscribe using the promotion</strong>.
                </>
              }
              className=" w-full"
              titleClassName=" text-[26px]"
            />
            <img
              src={WarnerUserFlowImg}
              alt="Warner User Flow Image"
              className=" xl:w-[1000px] w-[80%] h-auto "
            />
          </div>

          {/*   subsection 3 */}
          <div className=" responsive-width-case-study flex  flex-col mt-20">
            <MainTextBlock
              title={"States and Statuses "}
              description={
                <>
                  We worked closely with engineering in defining the technical
                  specifications of each element and component, and at the same
                  time assessing its feasibility and then prioritizing it. It
                  was really important to understand and define the different
                  data inputs/outputs so that the design, front-end, and
                  back-end align properly.
                </>
              }
              className=" w-full"
              titleClassName=" text-[26px]"
            />
            <img
              src={StatusUpate1Img}
              alt="Status and Statuses Image"
              className=" xl:w-[1000px] w-[80%] h-auto "
            ></img>
            <img
              src={StatusUpate2Img}
              alt="Status and Statuses Image"
              className=" xl:w-[1000px] w-[80%] h-auto pt-8"
            ></img>
          </div>
          {/*   subsection 4 */}

          <div className=" w-full flex flex-col justify-center items-center ">
            <div className=" responsive-width-case-study flex  flex-col mt-20">
              <MainTextBlock
                title={"Pattern Library and Templates "}
                description={
                  <>
                    After several weeks of working cross-functionally, we had
                    started to shape a pattern library, list of flows, and
                    templates that we could continue to shape and improve over
                    time.
                  </>
                }
                className=" w-full"
                titleClassName=" text-[26px]"
              />
            </div>

            <img
              src={PatternLibraryImg}
              alt="Pattern Library Image"
              className=" max-w-[1500px]   xl:w-[90%] w-[80%] h-auto "
            />
          </div>
        </div>
        {/*   subsection 5 */}
        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 ">
          <div className="flex  flex-col justify-between items-center ">
            <MainTextBlock
              title={"Bringing it all together"}
              description={
                "At the end of the project we had put together a design pattern library, and tech had also put together their own  that aligned with design."
              }
              className=" responsive-width-case-study"
            />
            <div className="flex  flex-col justify-between items-center space-y-10 ">
              <img
                src={SeedPatternLibraryImg}
                alt="Pattern Library Image"
                className=" max-w-[2000px] xl:w-[90%] w-[70%] h-auto "
              ></img>
            </div>
          </div>
          <div />
        </div>

        {/*   subsection 6 */}
        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 bg-brand-primary-20 ">
          <div className="flex  flex-col justify-between items-center ">
            <MainTextBlock
              title={"Utilizing Seed Project for Warner Archive redesign"}
              description={
                <>
                  Shortly after we had finished the first phase of the SEED
                  project, our parent company Warner Bros. brought up an
                  opportunity to improve one of their existing channels. This
                  was going to be our first time using the SEED project.
                  <br />
                  <br />
                  The goal was to make it simple and intuitive to explore and
                  discover. Also, since this was an older audience, improving
                  legibility and readability was incredibly important to reduce
                  friction. Finally, improving functionality to maximize SEO and
                  organic search.
                  <br />
                  <br />
                  On this project, we worked collaboratively and
                  cross-functionality. On the design side, we had art directors,
                  interaction designers, and experience design working
                  simultaneously.
                </>
              }
              className=" responsive-width-case-study"
            />
          </div>
          <div className="flex  flex-col justify-between items-center space-y-3 w-full">
            <img
              src={WBOriginalDesignsImg}
              alt="Original Warner Archive Designs"
              className=" xl:w-[70%] w-[90%] h-auto "
            />
            <p className="text-[#5D7180]">Original Warner Archive Designs</p>
          </div>
        </div>

        {/*   subsection 7 */}
        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 ">
          <div className="flex  flex-col justify-between items-center ">
            <MainTextBlock
              title={"Iterating and expanding the pattern library"}
              description={
                "We took the SEED project as our foundation to start designing and iterating. Even though we had a template for product building, we continue to iterate and if necessary expand the pattern library as we saw necessary. The intend was not to be lock into a set of pre-existing technical specifications but to use it as a foundation to continue building on top of it guided by research, adding to it, and using the newly added components and features for other channels within SEED if needed."
              }
              className=" responsive-width-case-study"
            />
            <div className="flex  flex-col justify-between items-center space-y-10 ">
              <img
                src={WBRedesign1Img}
                alt="WB Redesign 1"
                className=" max-w-[2000px] xl:w-[90%] w-[70%] h-auto mt-6"
              />
              <img
                src={WBRedesign2Img}
                alt="WB Redesign 2"
                className=" max-w-[2000px] xl:w-[90%] w-[70%] h-auto mt-6"
              />
              <img
                src={WBRedesign3Img}
                alt="WB Redesign 2"
                className=" max-w-[2000px] xl:w-[90%] w-[70%] h-auto mt-6"
              />
            </div>
          </div>
          <div />
        </div>

        {/*   subsection 8 */}
        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4   bg-[#1b1d27] ">
          <div className="flex  flex-col justify-between items-center ">
            <MainTextBlock
              isDarkTheme={true}
              title={"The Launching and Results"}
              description={
                "We completed the project in record time compared to previous projects. After launching, we had a very positive reaction from users. User feedback was that it was a lot easier and intuitive to use and they were happy we had removed all of the technical flaws that crippled their previous experience. However, there were some other comments, such as requesting to improve the filtering/sorting experience like the ability to browse by decades and add more movie content."
              }
              className=" responsive-width-case-study"
            />
          </div>
          <div className="flex  flex-col justify-between items-center space-y-3 w-full">
            <img
              src={WBFinalDesignsImg}
              alt="Final Designs"
              className="  w-[100%] h-auto "
            />
            <p className=" text-brand-greys-0">
              Original Warner Archive Designs
            </p>
          </div>
        </div>

        {/*   Learnings */}

        <div className="responsive-section-y-case-study bg-white  flex justify-center items-center ">
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
                    With the SEED project, we had a strong foundation to
                    continue building future channels. This was proved by the
                    launched of Warner Archive in just 12-weeks, 33-weeks less
                    than Shudder Channel, ~72% faster! Six months out from the
                    relaunch, we’d grown Warner Archive’s subscriber base by 6x
                  </p>
                </li>
                <li className="custom-li text-left">
                  <p>78% fewer bugs reported and $500k cheaper to build!</p>
                </li>
                <li className="custom-li text-left">
                  <p>
                    We learned that more education and better documentation
                    needed to be done around how to properly use the SEED
                    project. There were some significant misses, such not
                    including a cancellation flow and other important
                    functionality.
                  </p>
                </li>
                <li className="custom-li text-left">
                  <p>
                    These two projects gave us a lot of important insights which
                    made the original SEED project involve and mature, which
                    eventually ended be used for two more channels, Boom and DC
                    Universe.
                  </p>
                </li>
              </ol>
              <div className="flex  flex-col justify-between items-center space-y-10 "></div>
            </div>
            <div />
          </div>
        </div>

        {/*   OTHER PROJECTS  */}
        <OtherProjects1 />
      </div>
    </div>
  );
}
