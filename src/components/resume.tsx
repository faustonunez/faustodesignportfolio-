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
                smallText="05/18 - Present | Owner and Principal Designer"
                description={
                  <>
                    Owner and principal designer for a design studio focusing on
                    product strategy, <strong>UX</strong>, and{" "}
                    <strong>UI design</strong> for web and mobile. Responsible
                    for day-to-day operations, project scoping, creating
                    <strong> design strategies</strong> and{" "}
                    <strong>user research</strong> plans, executing{" "}
                    <strong>designs</strong>,<strong> presenting</strong> to
                    clients, and <strong>testing</strong> design solutions.
                  </>
                }
                showList={true}
                listItems={[
                  {
                    title: "Momentoos:",
                    text: (
                      <>
                        Successfully launched a freelancing and consulting
                        business, set up a framework and business strategy by
                        partnering and working with a variety of startups,
                        enterprises, and agencies.
                      </>
                    ),
                  },
                  {
                    title: "AppliedLabs:",
                    text: (
                      <>
                        Supported in the design efforts for a technology-based
                        agency in the fintech and automation sector, assisted in
                        the conceptualization, design, and implementation of
                        multiple SaaS products.
                      </>
                    ),
                  },
                  {
                    title: "CloudEstate:",
                    text: (
                      <>
                        Led the design for one of the first asset management
                        apps, helping them launch a beta version of the product
                        and set up a design system that they used to pitch
                        potential clients and investors.
                      </>
                    ),
                  },
                  {
                    title: "Buildbook:",
                    text: (
                      <>
                        Contributed to the efforts of launching Buildbook’s
                        first mobile app and set up a foundational design
                        system.
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
                    Leading design efforts on the Candidate and Growth squad,
                    which serves 5 million monthly active job seekers,
                    continuously improving the job seeker experience through
                    strategic and iterative design.
                  </>
                }
                showList={true}
                listItems={[
                  {
                    title: "",
                    text: (
                      <>
                        Redesigned and optimized The Muse’s Job Details Page,
                        contributing to the most successful year in{" "}
                        <strong>
                          the company’s history for job applications—with a 40%
                          increase post-launch.
                        </strong>
                      </>
                    ),
                  },
                  {
                    title: "",
                    text: (
                      <>
                        Directed and{" "}
                        <strong>conducted over 66 user interviews </strong>{" "}
                        annually, generating strategic insights that informed
                        product development and improved the user experience.
                      </>
                    ),
                  },
                  {
                    title: "",
                    text: (
                      <>
                        Led the rebranding of all core pages on The Muse by
                        collaborating cross-functionally with the Marketing and
                        Product teams, resulting in a more modern, accessible,
                        and intuitive user experience.
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
              <h5>Tools</h5>
              <p>
                Adobe Creative Suite, Figma, Sketch, Invision, Abstract, Flinto,
                Procreate, Principle, Zeplin, Framer X, Lottie, Asana, Jira,
                Trello, Miro, Whimsical, Airtable, Webflow, Google Analytics,
                Optimizely, Google Suite, HTML, CSS, Javascript
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
                UX, Design Springs, User Interviews, Contextual Inquiry, Survey
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
