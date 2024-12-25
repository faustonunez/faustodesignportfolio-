import CloudEstateImg from "../assets/images/cloudestate/hero-cloudestate.png";
import CEWireframeImg from "../assets/images/cloudestate/cs-wireframes.png";
import CEUserBkImg from "../assets/images/cloudestate/about-user-bk.png";
import CEUPersonaImg from "../assets/images/cloudestate/ce-persona.png";
import CEAbstractSystemImg from "../assets/images/cloudestate/ce-abstract-system.jpg";
import CEAIImg from "../assets/images/cloudestate/ce-ia.png";
import CESketchesImg from "../assets/images/cloudestate/ce-sketches.jpg";
import CEDesingPrinciplesImg from "../assets/images/cloudestate/ce-design-principles.png";
import CECashManagementImg from "../assets/images/cloudestate/ce-cash-management-iterations.png";
import CETableResearchtImg from "../assets/images/cloudestate/table-inspiration-2.gif";
import CETDesignSystemImg from "../assets/images/cloudestate/ce-design-system.png";
import { OtherProjects2 } from "@/components/other-projects";
import { Helmet } from "react-helmet-async";

import { MainTextBlock } from "@/components/main-text";
import { Subtitle } from "@/components/main-text";

import { HeaderMain } from "@/components/HeaderMain";
import { AboutProject } from "@/components/about-project";

export function CloudEstate() {
  return (
    <div className="flex  justify-center items-center flex-col ">
      <Helmet>
        <title> CloudEstate </title>
        <meta
          name="description"
          content=" Designing a SaaS App in the Fintech Sector"
        />
      </Helmet>
      {/*   THIS IS THE HEADER  */}
      <HeaderMain
        headingText={"Designing a SaaS App in the Fintech Sector"}
        imgSrc={CloudEstateImg}
      />
      {/*   THIS IS THE REST OF THE PAGE  */}
      <div className="w-full">
        {/*   ABOUT PROJECT 1 */}
        <AboutProject
          subtitleLabel={"Introduction"}
          mainTextBlockProps={{
            description:
              "SabalFin is an integrated real estate asset management business that has helped Oaktree to close over €6.2 billion of investments. We got to work on a solution to optimize their existing asset management workflow. It was a fully remote project with the entire team distributed in the US, London, Moscow, and Uzbekistan",
            className: "custom-class",
          }}
          labelDescriptionProps={{
            items: [
              { label: "Client: ", description: "SabalFin, RFA, AppliedLabs" },
              { label: "Role:", description: "Lead Product Designer" },
              {
                label: "Skills:",
                description:
                  "Information Architecture, Research, Wireframing, Prototyping, UI Design, Interactions, System Desig",
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
              title={"The Challenge"}
              description={
                "One of SabalFin’s biggest challenge was inputting, manipulating, and managing large amounts of data, their current solution with Microsoft 365 apps worked, but they looked for a more cater and efficient way to do it"
              }
              className=""
            />
            <MainTextBlock
              title={"Project Kick off"}
              description={
                "After conducting stakeholder interviews with all the parties involved, collected all their research, documentation, and wireframes, I proceed to review it and dive deep into the insights and requirements."
              }
              className="pt-4"
            />
            <div className="flex flex-col justify-centeritems-center w-full ">
              <div className="flex flex-col justify-center items-center ">
                <img
                  src={CEWireframeImg}
                  alt="Wireframes Image"
                  className=" w-full h-auto"
                ></img>
                <p className="text-[#5D7180] pt-4 ">
                  Client’s initial wireframes and working proof of concept
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*   SECTION 2  */}

        <div
          id="section 2 "
          className="responsive-section-y-case-study bg-[#22292E] flex justify-center items-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${CEUserBkImg})`,

            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" flex  flex-col justify-between items-center space-y-4 ">
            <div className=" responsive-width-case-study flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"About the user"}
                description={[
                  "To keep in the needs of the intended user in mind, I created a provisional user persona based on the existing insights provided by the client.",
                ]}
                className=" responsive-width-case-study"
                isDarkTheme={true}
              />
              <div className="flex flex-col">
                <img
                  src={CEUPersonaImg}
                  alt="User Persona"
                  className=" w-full h-auto"
                ></img>
                <p className="text-white pt-4 ">Provisional Persona</p>
              </div>
            </div>
            <div />
          </div>
        </div>

        {/*   SECTION 3 - Abstracting the system  */}

        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 ">
          <Subtitle label="Define" />
          <div className="flex  flex-col justify-between items-center ">
            <MainTextBlock
              title={"Abstracting the system"}
              description={
                "In order to better understand the system, I broke the app structure down to its simplest forms, from the very beginning we wanted to approach this with an atomic design thinking, we knew it was going to be a massive undertaking and the scalability of the system was essentials."
              }
              className=" responsive-width-case-study"
            />
            <div className="flex  flex-row justify-center items-center space-y-10 w-[80%] max-w-[1300px]  ">
              <img
                src={CEAbstractSystemImg}
                alt="Abstracting the system"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div />
        </div>

        {/*   SECTION 4 - The Project Scope  */}

        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 ">
          <div className="responsive-width-case-study flex  md:flex-row flex-col justify-between items-center gap-10 ">
            <div className=" flex flex-col ">
              <MainTextBlock
                title={"The Project Scope"}
                description={
                  "The CloudEstate app consisted of a suite of apps, but we focused in 3 of the them: "
                }
                className=" "
              />
              <ol className="custom-counter space-y-4">
                <li className="custom-li text-left">
                  <p>
                    <strong>Cash Management:</strong> Ability to manage the cash
                    flow from client’s deals, upload and input transactions and
                    allocate money within each transaction
                  </p>
                </li>
                <li className="custom-li text-left">
                  <p>
                    <strong>Asset Management:</strong> Enable asset managers to
                    keep track of all assets within a deal, a robust note taking
                    system to communicate with other asset managers and team
                    leads
                  </p>
                </li>
                <li className="custom-li text-left">
                  <p>
                    <strong> Admin Governance:</strong> Allow Admins to set user
                    permissions for all asset managers and setup deals
                    structures
                  </p>
                </li>
              </ol>
            </div>
            <div className="flex flex-col items-center w-full">
              <img
                src={CEAIImg}
                alt="Admin Interface"
                className="w-3/4 h-auto"
              />
            </div>
          </div>
          <div />
        </div>

        {/* SECTION 5 - Brainstorming ideas | Grid 

        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4  bg-brand-primary-20">
          <div className="responsive-width-case-study flex justify-center items-center">
            <div className="responsive-width-case-study mx-auto px-4 py-8">
              <div className="grid grid-cols-2 justify-center items-center">
                <div className="w-full h-2 bg-white p-24">This is a test</div>
                <div className="w-full h-auto bg-slate-700 ">
                  <img
                    src={CESketchesImg}
                    alt="Brainstorming Sketches"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/*   SECTION 5 - Brainstorming ideas | flex */}

        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4  bg-brand-primary-20">
          <div className=" xl:w-[50%] lg:w-[70%] md:w-[50%] w-full flex justify-center items-center">
            <div className="mx-auto px-4 py-8">
              <div className="flex md:flex-row flex-col justify-center items-center">
                <div className="  w-full h-auto bg-white p-8 z-10 item">
                  <MainTextBlock
                    title={"Brainstorming ideas"}
                    showTitle={true}
                    description={
                      "Once we had a good understanding of the system architecture, I proceeded to conceptualize the app’s overall experience. I went through various round sketching exploring different solutions, then narrowed them down to a few and discussed it with the client."
                    }
                    className=" w-full h-auto"
                  />
                </div>
                <div className="w-full h-auto bg-slate-700 md:ml-[-200px] min-w-[3q00px] ">
                  <img
                    src={CESketchesImg}
                    alt="Sketches"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*   SECTION 6 - Design Principles  */}

        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 ">
          <Subtitle label="Define" />
          <div className="responsive-width-case-study flex  flex-col justify-between items-center ">
            <MainTextBlock
              title={"Design Principles"}
              description={
                "As we set to start creating higher fidelity mockups, we agreed on a set of design principles to help guide and anchor us on what was important"
              }
              className=" "
            />
            <div className="flex  flex-row justify-center items-center space-y-10 w-full max-w-[1300px]  ">
              <img
                src={CEDesingPrinciplesImg}
                alt="Design Principles"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div />
        </div>

        {/*   SECTION 7 - Cash Management App */}

        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 ">
          <div
            className="responsive-width-case-study flex  
           flex-col justify-between items-center gap-10 "
          >
            {/*   Cash Management App */}
            <div className=" flex flex-col ">
              <MainTextBlock
                title={"Cash Management App"}
                description={
                  "The Cash Management app was the first one to be work on.  After collecting the user insights, we proceed to turn those into user stories. A few samples of those were, as an Asset Manager: "
                }
                className=" "
              />
              <ol className="custom-counter space-y-4">
                <li className="custom-li text-left">
                  <p>
                    I need to add a transaction to a deal so that I can keep a
                    record of it
                  </p>
                </li>
                <li className="custom-li text-left">
                  <p>
                    I want to add an allocation to a transaction so that I can
                    distribute money and keep a record
                  </p>
                </li>
                <li className="custom-li text-left">
                  <p>
                    I need to be able to edit transactions so that I update the
                    transaction information
                  </p>
                </li>
                <li className="custom-li text-left">
                  <p>
                    I need to sort transactions by month and week so that I can
                    find information faster
                  </p>
                </li>
              </ol>
            </div>

            {/*   Design Exploration */}
            <div className=" flex flex-col mt-8 ">
              <MainTextBlock
                title={"Design Exploration"}
                description={
                  "We went through multiple rounds of design iterations. One thing that we wanted to define well from the very beginning was the overall navigational structures since this was going to set the foundations for all the following apps. "
                }
                titleClassName=" text-[26px]  "
              />
              <img
                src={CECashManagementImg}
                alt="Cash Management Iterations"
                className="w-full h-auto"
              />
            </div>

            {/*   Table Research */}
            <div className=" flex flex-col mt-8 ">
              <MainTextBlock
                title={"Table Research"}
                description={
                  "interactions, and information architecture. This helped me and the rest of the team have a better understanding of what we needed to account for and apply it within our own user’s context. "
                }
                titleClassName=" text-[26px]  "
              />
              <img
                src={CETableResearchtImg}
                alt="Table Research"
                className="w-full h-auto"
              />
            </div>

            {/*   Final Cash Management Designs */}
            <div className=" flex flex-col mt-8 ">
              <MainTextBlock
                title={"Final Cash Management Designs"}
                description={
                  "After various rounds of design iterations and feedback loops, we had designed our MVP for the Cash Management app. "
                }
                titleClassName=" text-[26px]   "
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <video
              src="https://dl.dropboxusercontent.com/s/h7jatusqd76pjvn/cash-management-high-res.mp4?dl=0"
              loop
              autoPlay
              className="w-[80%] h-auto"
              muted
            />
          </div>
          <div />
        </div>

        {/*   SECTION 8 - Asset Management App  */}

        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 ">
          <div className="flex  flex-col justify-between items-center ">
            <MainTextBlock
              title={"Asset Management App"}
              description={
                "The asset management app was the second app we worked on. It dealt with complex strings of data that users typically have to review in their day-to-day. The streamlining of the data was going to be key for easy parsing and analyzing during the reviewing process. Also, the ability for Asset Managers to attached notes along each level of the data structure was essentials for maintaining transparency and keeping everyone in the know of what’s happening within each deal."
              }
              className=" responsive-width-case-study"
            />
            <div className="flex flex-col items-center w-full">
              <video
                src="https://dl.dropboxusercontent.com/s/xqhbivgbgnyed0k/ce-admin-prototype.mp4?dl=0"
                loop
                autoPlay
                className="w-[80%] h-auto"
                muted
              />
            </div>
          </div>
          <div />
        </div>

        {/*   SECTION 9 - Admin  */}

        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 ">
          <div className="flex  flex-col justify-between items-center ">
            <MainTextBlock
              title={"Admin"}
              description={
                "The Admin Governance app allowed Asset Managers and Team Leads to setup deal structures and permissions at each level of the data structure. A user goal was to make the whole table configuration experience as intuitive as possible to lessen the learning curve. We use WYSIWYG(What you see is what you get) approach, allowing managers to see visually configure tables and seeing what they were building instantly."
              }
              className=" responsive-width-case-study"
            />
            <div className="flex flex-col items-center w-full">
              <video
                src="https://dl.dropboxusercontent.com/s/ccfx1lk47gnelv8/ce-asset-manager-prototype.mp4?dl=0"
                loop
                autoPlay
                className="w-[80%] h-auto"
                muted
              />
            </div>
          </div>
          <div />
        </div>

        {/*   SECTION 10 - Design System  */}

        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 bg-[#1b1d27]">
          <div className="flex  flex-col justify-between items-center ">
            <MainTextBlock
              title={"Design System"}
              description={
                "Towards the end of having worked on the three apps, we ended with a design system which it worked harmoniously across the three app and which it was flexible as the product kept growing."
              }
              className=" responsive-width-case-study"
              isDarkTheme={true}
            />
            <div className="flex  flex-row justify-center items-center space-y-10 w-[80%] max-w-[1300px]  ">
              <img
                src={CETDesignSystemImg}
                alt="Design System"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div />
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
                    We’ve had design and build 3 modules which Sabal employees
                    had started to use as a beta version.
                  </p>
                </li>
                <li className="custom-li text-left">
                  <p>
                    We created a design system on which other designers and
                    developer could continue to build on
                  </p>
                </li>
                <li className="custom-li text-left">
                  <p>
                    We had a beta version of the product which SabalFin had to
                    started to pitch to other potential clients and investors
                  </p>
                </li>
                <li className="custom-li text-left">
                  <p>
                    Cross-team design collaboration was starting to become
                    challenging. We started to look into Invision Design Manager
                    to shared the design system and collaborate
                  </p>
                </li>
              </ol>
              <div className="flex  flex-col justify-between items-center space-y-10 "></div>
            </div>
            <div />
          </div>
        </div>

        {/*   OTHER PROJECTS  */}
        <OtherProjects2 />
      </div>
    </div>
  );
}
