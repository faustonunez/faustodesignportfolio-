import { ResumeTextBlock } from "../components/resume-text-block.tsx";

export function Resume() {
  return (
    <div
      id="MainWrapper"
      className="w-full flex flex-col justify-center items-center mt-[124px]"
    >
      <div
        id="InnerWrapper"
        className="responsive-width flex flex-col justify-between"
      >
        <h2 className="mb-10 w-full">Resume</h2>
        <div className="w-full flex md:flex-row flex-col justify-between">
          <div
            id="work and education"
            className=" md:w-[60%] w-full   flex-col justify-center"
          >
            <div id="WorkExperience" className="w-full">
              <h6 className="mb-5 ">Work experience</h6>

              {/* Momentoos */}
              <ResumeTextBlock
                title="Momentoos"
                smallText="12/17 - Present | Founder and Principal Designer"
                description={
                  <>
                    Founder and principal product designer for design studio focusing on product strategy and UX/UI. Led selective product <strong> design engagements for 12+ companies </strong> across marketplace, e-commerce, fintech, and construction tech, working on both early-stage initiatives and established platforms. Delivered foundational design systems, user research, and conversion-focused improvements that enabled clients to launch, fundraise, and scale.
                  </>
                }
                showList={true}
                listItems={[
                  
                  {
                    title: "AppliedLabs.io:",
                    text: (
                      <>
                        A technology-based agency, where I led the conceptualization and design of multiple SaaS and eCommerce products.
                      </>
                    ),
                  },
                  {
                    title: "CloudEstate:",
                    text: (
                      <>
                       Led design for one of the first asset management applications, launching a beta MVP and creating a design system used for investor demos and client pitches.
                      </>
                    ),
                  },
                  {
                    title: "Buildbook.io:",
                    text: (
                      <>
                        Advanced the mobile native app visual language and expanded on the various Buildbook’s user flows. Established a foundational design system for their first mobile app launch.
                      </>
                    ),
                  },
                ]}
              />

              <ResumeTextBlock
                title="The Muse"
                smallText="09/21 - 06/25 | Senior Product Designer (Contract)"
                description={
                  <>
                   Led design efforts on the Candidate and Growth squads, for The Muse’s B2C and B2B audience  (5M+ jobseekers, 1,000 employers). Focusing on continuously improving the job seeker experience for growth, activation and retention. <strong>Spearheaded 66+ user interviews in one year</strong> that helped inform roadmap and product strategy direction for multiple key projects. 
                  </>
                }
                showList={true}
                listItems={[
                  {
                    title: "",
                    text: (
                      <>
                        Led design for Maya, an AI-powered career coach driving a 25% increase in content engagement.
                      </>
                    ),
                  },
                  {
                    title: "",
                    text: (
                      <>
                       Led the Search Page redesign, reducing time-to-application by 40% and driving a 150% increase in successful job applications
                      </>
                    ),
                  },
                  {
                    title: "",
                    text: (
                      <>
                        Redesigned and optimized the Job Details Page, contributing to the most successful year in company history for job applications, with a 40% increase post-launch.
                      </>
                    ),
                  },
                ]}
              />

              {/* Warner Bros. Digital Labs */}
              <ResumeTextBlock
                title="Warner Bros. Digital Labs"
                smallText="06/2015 - 11/2017 | Experience Designer"
                description={
                  <>
                    Responsible for the user experience of Warner Bros. Digital
                    Labs
                    <strong>international</strong> video streaming products,
                    working with stakeholders internally and externally to
                    design strategic plans for improving existing products as
                    well as launching new product initiatives. I helped conduct{" "}
                    <strong>qualitative and quantitative research,</strong>{" "}
                    facilitate <strong>UX workshops</strong>, and assisted in
                    team-building activities. Worked cross-functionally in
                    implementing designs across multiple platforms such as{" "}
                    <strong>web, mobile, and OTT.</strong>
                  </>
                }
                showList={true}
                listItems={[
                  {
                    title: "SEED project:",
                    text: (
                      <>
                        Helped streamline the process of launching new streaming
                        apps. By the end of the project, we had a strong
                        foundation for building future channels, proven by the
                        launch of Warner Archive, which was built 72% faster
                        than previous apps.
                      </>
                    ),
                  },
                  {
                    title: "Warner Archive:",
                    text: (
                      <>
                        Worked on a more intuitive and accessible experience for
                        the existing Warner Archive web app, increasing the
                        subscriber base by 6x within six months of the redesign.
                      </>
                    ),
                  },
                  {
                    title: "Internal tools:",
                    text: (
                      <>
                        Continuously improved internal tools, streamlining the
                        generation of subtitles from a multi-step process to a
                        single step, significantly improving the video team
                        workflow.
                      </>
                    ),
                  },
                ]}
              />

              {/* delivery.com */}
              <ResumeTextBlock
                title="delivery.com"
                smallText="01/2010 - 07/2015 | Senior Product Designer"
                description={
                  <>
                    Oversaw delivery.com's user experience for the client and
                    business-facing products. Helped establish a solid practice
                    for an agile design process with product-based sprints, as
                    well as a more research and data focus approach, and worked
                    cross-functionally to implement and test designs. Lead a
                    major initiative to redesign delivery.com’s web app,
                    optimized it for high SEO performance, and revamp our
                    merchant services tools which collectively resulted in
                    exponential user growth and business expansion.
                  </>
                }
                showList={true}
                listItems={[
                  {
                    title: "Team building:",
                    text: (
                      <>
                        Helped grow the product team from 2 to 10 members in one
                        year, mentored junior designers, and became a liaison
                        between design and other departments.
                      </>
                    ),
                  },
                  {
                    title: "delivery.com redesign:",
                    text: (
                      <>
                        Led design efforts for delivery.com's first responsive
                        website, optimizing it for SEO, which led to an 18%
                        increase in organic search in the months after launch.
                      </>
                    ),
                  },
                  {
                    title: "Order Confirmation System:",
                    text: (
                      <>
                        Worked closely with the sales team and merchants to
                        design a new order confirmation system, conducting user
                        interviews and iterating on the design for nationwide
                        launch.
                      </>
                    ),
                  },
                ]}
              />
            </div>
            <div id="Education">
              <h6 className="mb-5 ">Education</h6>
              <ResumeTextBlock
                title="B.A. Technology in Communication Design"
                smallText="New York City College of Technology"
                description={undefined}
              />
              <ResumeTextBlock
                title="Front-End Web Development Bootcamp"
                smallText="General Assembly"
                description={undefined}
              />
            </div>
          </div>
          <div id="Skills" className=" md:w-[30%] w-full">
            <h6 className="mb-5 ">Skills</h6>
            <div className="mb-10">
              <div className="mb-10">
                <h5>Coding</h5>
                <p>
                  HTML, CSS, Javascript, React JS, Git, GitHub, Vercel, VSCode,
                  Cursor AI, Lovable, Figma Make
                </p>
              </div>
              <h5>Tools</h5>
              <p>
                Adobe Creative Suite, Figma, Sketch, Abstract, Flinto,
                Procreate, Principle, Zeplin, Framer X, Lottie, Asana, Jira,
                Trello, Miro, Whimsical, Airtable, Webflow, Google Analytics,
                Optimizely, Google Suite
              </p>
            </div>

            <div className="mb-10">
              <h5>Visual</h5>
              <p>
                Composition, Interaction Design, Motion Design, Graphic Design,
                Design Standards, Design Systems, Atomic Design, Whiteboarding,
                Information Architecture, Prototyping, Story Telling, Material
                Design, Apple HIG, Gestalt Principles, Color, Typography
              </p>
            </div>
            <div className="mb-10">
              <h5>Research</h5>
              <p>
                Heuristic Evaluation, Product Design Thinking, Competitive, Lean
                UX, Design Sprints, User Interviews, Contextual Inquiry, Survey
                Design, Focus Groups, Participatory Design, Data Analysis:
                Quantitative & Qualitative, Journey Mapping, Card Sorting,
                Usability Testing, A/B Testing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
