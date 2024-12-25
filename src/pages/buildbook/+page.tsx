import BBHeroImg from "../assets/images/buildbook/buildbook-hero-image0-flat.png";
import BBWireframesImg from "../assets/images/buildbook/buildbook-wireframes.png";
import BBBrandingImg from "../assets/images/buildbook/buildbook-branding.png";

import BBBuilderSVG from "../assets/images/buildbook/avatar-builder.svg";
import BBContractorSVG from "../assets/images/buildbook/avatars-contractor.svg";
import BBBHomeownerSVG from "../assets/images/buildbook/avatars-home-owner.svg";
import BBBScopeImg from "../assets/images/buildbook/scope-contraints-bb.png";
import BBBInspirationImg from "../assets/images/buildbook/bb-inspiration.png";
import BBBCreateProjectImg from "../assets/images/buildbook/creating-a-project.png";
import BBBCreateNewMesssageImg from "../assets/images/buildbook/create-a-new-message.png";
import BBBPatternLibraryImg from "../assets/images/buildbook/pattern-library-3d.png";

import { OtherProjects2 } from "@/components/other-projects";

import { MainTextBlock, Subtitle } from "@/components/main-text";

import { HeaderMain } from "@/components/HeaderMain";
import { AboutProject } from "@/components/about-project";

export default function Page() {
  return (
    <div className="flex  justify-center items-center flex-col ">
      {/*   THIS IS THE HEADER  */}
      <HeaderMain
        headingText={"New approach to construction management"}
        imgSrc={BBHeroImg}
      />
      {/*   THIS IS THE REST OF THE PAGE  */}
      <div className="w-full">
        {/*   ABOUT PROJECT 1 */}
        <AboutProject
          subtitleLabel={"Introduction"}
          mainTextBlockProps={{
            description:
              "BuildBook is a construction management platform for home builders and remodelers that put their client’s experience first. It eliminates miscommunication and simplifies residential construction projects for home builders, remodelers and their clients, all in a delightfully simple app.",
            className: "custom-class",
          }}
          labelDescriptionProps={{
            items: [
              { label: "Client: ", description: "Buildbook" },
              { label: "Role:", description: "UI, UX" },
              {
                label: "Skills:",
                description:
                  "Prototyping, UI Design, Interaction Design, System Design, Research",
              },
            ],
            className: "custom-class",
          }}
        />

        {/*   SECTION 1 - My Role  */}

        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 ">
          <div className="flex  flex-col justify-between items-center ">
            <MainTextBlock
              title={"My Role"}
              description={
                <>
                  "As Buildbook already had started materializing the app idea
                  into some initial wireframes for mobile and web, as well as
                  branding,{" "}
                  <strong>
                    I came on board to help advance the mobile native’s app
                    visual language and expand on the various Buildbook’s user
                    flows.
                  </strong>{" "}
                  I primarily worked with the head of product design who was
                  driving the overall UX strategy for the project."
                </>
              }
              className=" responsive-width-case-study"
            />
            <div className="flex  flex-row justify-center items-center space-y-10 w-[100%] max-w-[2000px]  ">
              <div className="flex flex-col items-center w-1/2">
                <img
                  src={BBWireframesImg}
                  alt="Buildbook Wireframes"
                  className="w-full h-auto"
                />
                <p className="text-[#5D7180]">Initial client’s wireframes</p>
              </div>
              <div className="flex flex-col items-center w-1/4">
                <img
                  src={BBBrandingImg}
                  alt="Buildbook Branding"
                  className="w-full h-auto"
                />
                <p className="text-[#5D7180]">Client’s branding guide</p>
              </div>
            </div>
          </div>
          <div />
        </div>

        {/*   SECTION 2 - Discovery */}

        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 ">
          <Subtitle label="Discovery" />
          <div className="responsive-width-case-study items-center ">
            <MainTextBlock
              title={"Project Insights"}
              showDescription={false}
              description={undefined}
              className=" responsive-width-case-study"
            />
            {/*   Subsection 1*/}
            <div className="bg-[#F6F3F3] rounded-[20px] p-8 w-full">
              <h5 className="  font-bold "> User Types</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-full h-auto ">
                    {" "}
                    <img
                      src={BBBuilderSVG}
                      alt="Builder Avatar"
                      className="w-full h-auto"
                    />
                  </div>

                  <p className="mt-2">Builders/Remodelers</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full h-auto ">
                    {" "}
                    <img
                      src={BBContractorSVG}
                      alt="Contractor Avatar"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="mt-2">Contractors</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full h-auto ">
                    {" "}
                    <img
                      src={BBBHomeownerSVG}
                      alt="Homeowner Avatar"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="mt-2">Homeowners</p>
                </div>
              </div>
            </div>
            {/*   Subsection 2*/}

            <div className="bg-brand-primary-20 rounded-[20px] p-8 w-full mt-10">
              <MainTextBlock
                title={"User Pain Points"}
                description={
                  <>
                    "The entire process of building for{" "}
                    <strong>
                      homeowners is often filled with feelings of doubt and
                      despair
                    </strong>
                    —where misunderstandings, miscommunications, and the lack of
                    transparency breed anxiety, suspicion, and frustration. As a
                    result of this,{" "}
                    <strong>
                      builders and contractors lose the owner's trust and create
                      internal conflicts which could result in money and time
                      lost.
                    </strong>
                    "
                  </>
                }
                className="w-full mb-[16px]"
                titleClassName="text-[26px] font-bold"
              />
            </div>
          </div>
          <div />
        </div>

        {/*   SECTION 3 - Scope and constraints  */}

        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 ">
          <div className="responsive-width-case-study flex  flex-row justify-between items-center gap-10 ">
            <MainTextBlock
              title={"Scope and constraints"}
              description={
                "The hight level architecture included the authentication, onboarding, dashboard, feed, post, photos, documents, and settings flows.  These were the most essentials features for the MVP.  "
              }
              className=" "
            />
            <div className="flex flex-col items-center w-full">
              <img
                src={BBBScopeImg}
                alt="Buildbook Scope of Work"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div />
        </div>

        {/*   SECTION 4 - App Design Approach  */}

        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 ">
          <Subtitle label="Explore" />
          <div className="flex  flex-col justify-between items-center ">
            <MainTextBlock
              title={"App Design Approach"}
              description={
                "The pattern library and design direction was starting to take shape. The biggest dilemma that we had was which design approach to go with, multi-platform, brand-based or a mix of both. As I was doing my research, I noticed most major brands took a mixed approach except for google or apple native apps who of course stay with their design guidelines. We decided to go with the mixed approach but leaning towards material design for certain core components."
              }
              className=" responsive-width-case-study"
            />
            <div className="flex  flex-row justify-center items-center space-y-10 w-[80%] max-w-[1300px]  ">
              <img
                src={BBBInspirationImg}
                alt="Buildbook Inspiration"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div />
        </div>

        {/*   SECTION 5 - The Projects Views  */}

        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 ">
          <div className="responsive-width-case-study flex  flex-row justify-between items-center gap-10 ">
            <div className="flex flex-col w-full gap-4">
              <Subtitle label="Prototype" className="w-full" />
              <MainTextBlock
                title={"The Projects View"}
                description={
                  "The purpose of the project's view is for builders to organize all their active and inactive projects. We worked on creating a card-based UI that would give everyone an instant look at every project as well as any recent activity within each of them. The main user actions were to create a new project or view an existing one. "
                }
                className=" w-full "
              />
            </div>
            <div className="flex flex-col items-center w-full">
              <video
                src="https://dl.dropboxusercontent.com/s/1zlk261dgbttao8/buildbook-project-view-small-2.mp4?dl=0"
                loop
                autoPlay
                className="w-[80%] h-auto"
                muted
              />
            </div>
          </div>
          <div />
        </div>

        {/*   SECTION 6 - Creating a Project  */}

        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 ">
          <div className="flex  flex-col justify-between items-center ">
            <MainTextBlock
              title={"Creating a Project"}
              description={
                "The process of creating a project required few pieces of information from builders."
              }
              className=" responsive-width-case-study"
            />
          </div>

          <div className="flex  flex-row justify-center items-center space-y-10 w-[90%] max-w-[2300px]  ">
            <img
              src={BBBCreateProjectImg}
              alt=" Buildbook Create Project"
              className="w-full h-auto"
            />
          </div>
          <div />
        </div>

        {/*   SECTION 7 - Project’s Feed and Messages  */}

        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 ">
          <div className="responsive-width-case-study flex  flex-row justify-between items-center gap-10 ">
            <div className="flex flex-col w-full gap-4">
              <MainTextBlock
                title={"Project’s Feed and Messages"}
                description={
                  "The project’s feed is where all the communication resides. All parties involved can see the various conversations happening during a giving project, along with a collection of any images, documents, and tags within a project."
                }
                className=" w-full "
              />
            </div>
            <div className="flex flex-col items-center w-full">
              <video
                src="https://dl.dropboxusercontent.com/s/1zlk261dgbttao8/buildbook-project-view-small-2.mp4?dl=0"
                loop
                autoPlay
                className="w-[80%] h-auto"
                muted
              />
            </div>
          </div>
          <div />
        </div>

        {/*   SECTION 8 - Creating a New Message  */}

        <div className="responsive-section-y-case-study flex  flex-col justify-between items-center space-y-4 ">
          <div className="flex  flex-col justify-between items-center ">
            <MainTextBlock
              title={"Creating a New Message"}
              description={
                "The creation of a new message facilitates customers to provide as enough details and context as possible. For instance, the ability to upload images for inspiration or simply to indicate a particular place where a fix or progress needs to be made. As well as being able to add tags for easier discoverability later on."
              }
              className=" responsive-width-case-study"
            />
          </div>
          <div className="flex  flex-row justify-center items-center space-y-10 w-[90%] max-w-[2300px]   ">
            <img
              src={BBBCreateNewMesssageImg}
              alt=" Buildbook Create Project"
              className="w-full h-auto"
            />
          </div>
          <div />
        </div>

        {/*   SECTION 9 - Patterns Library
         */}

        <div className="flex flex-col justify-center items-center bg-[#1b1d27]">
          <div className=" w-full md:pt-[96px] pt-[32px] flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Patterns Library"}
                description={
                  "The final results along with the screen flows was a pattern library with all the core components of the apps. This helped lay the ground for the visual language for Buildbook’s mobile app, and its later iterations."
                }
                className=" responsive-width-case-study"
                isDarkTheme={true}
              />
            </div>
            <div />
          </div>
          <div className="flex  flex-row justify-center items-center space-y-10 w-[100%] max-w-[1300px]  ">
            <img
              src={BBBPatternLibraryImg}
              alt="Buildbook Wireframes"
              className="w-full h-auto"
            />
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
                    We helped push Buildbook’s very first mobile app to the
                    market
                  </p>
                </li>
                <li className="custom-li text-left">
                  <p>
                    We put together a pattern library that helped shape the
                    future design iterations of the mobile app
                  </p>
                </li>
              </ol>
              <div className="flex  flex-col justify-between items-center space-y-10 "></div>
            </div>
          </div>
        </div>

        {/*   OTHER PROJECTS  */}

        <OtherProjects2 />
      </div>
    </div>
  );
}
