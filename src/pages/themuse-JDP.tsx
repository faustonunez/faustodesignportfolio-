import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import JdpBeforeImg from "../assets/images/jdp/jdp-before-design.png";
import JdpAfterImg from "../assets/images/jdp/jdp-after-design.png";
import RequirementsDoc from "../assets/images/jdp/jdp-requirements-doc.png";
import AuditDoc from "../assets/images/jdp/jdp-audit.png";
import JdpDesignExploration from "../assets/images/jdp/jpd-design-exploration.png";
import JdpResearch from "../assets/images/jdp/jdp-research-board.png";

import { FigmaEmbed } from "@/components/figma-embed.tsx";

import TheMuseJDPImg from "../assets/images/jdp/jpd-hero-image.png";
import JdpButtonABTesting from "../assets/images/jdp/jpd-button-AB-testing.jpg";

import JdpPerksBenefits from "../assets/images/jdp/jdp-perks-and-benefits-design.png";
import JdpVideo from "../assets/images/jdp/jdp-video.png";

import JdpQuickApply from "../assets/images/jdp/jpd-quick-apply.mp4";
import { VideoOnView } from "@/components/videoplayer.tsx";

import JobAlert from "../assets/images/jdp/jdp-job-alert.png";
import JobAlertComponent from "../assets/images/jdp/jdp-email-alert-components.jpg";
import JobAlertFlow from "../assets/images/jdp/JDP-email-alert-flow.png";

import { Helmet } from "react-helmet-async";

import { OtherProjects1 } from "@/components/other-projects";

import { MainTextBlock } from "@/components/main-text";
import { LabelDescription } from "@/components/main-text";
import { Subtitle } from "@/components/main-text";

import { HeaderMain } from "@/components/HeaderMain";
import NumberedItem from "@/components/numbered-item.tsx";

export function TheMuseJDP() {
  return (
    <div className="flex  justify-center items-center flex-col ">
      <Helmet>
        <title> The Muse - JDP </title>
        <meta
          name="description"
          content="Driving Job Apply Growth for The Muse’s Job Details Page"
        />
      </Helmet>
      <HeaderMain
        headingText={"Driving Job Apply Growth for The Muse’s Job Details Page"}
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
                      "UX Design, UI Design, Prototyping, Usability Testing, User Research",
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
              title={"My role"}
              description={
                "I was the Senior Product Designer on this project, responsible for user research, design exploration, user testing, prototyping and and final design execution. I collaborated closely with Engineering, and received strategic input from the Senior Product Manager and VP of Product, as well as feedback from stakeholders across Marketing and Sales."
              }
              className=" w-full bg-[#BCBABA33] p-[32px] rounded-[16px] "
            />
          </div>
        </div>
        <div
          id="section 2"
          className="responsive-section-y-case-study bg-brand-greys-20  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <Subtitle label="Discovery" />
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"The Problem? An underperforming page… "}
                description={
                  "JDP was an underperforming pages, there were some data signals and internal feedback pointing to the following:"
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10 responsive-width-case-study  ">
                <div className="flex  flex-col justify-between items-center space-y-3 gap-2  ">
                  <NumberedItem
                    number={1}
                    title="Declining apply conversion and Google Jobs indexing:"
                    description="Our conversion rate had declined significantly over the past 9 months (from 22% to 17%) and not enough of the jobs were being indexed by Google Jobs."
                  />
                  <NumberedItem
                    number={2}
                    title="Slow and hard to build on page: "
                    description="The page was build on top of legacy technology, which it made it slow, a poor experience for Job Seekers and harder for engineers to work on."
                  />
                  <NumberedItem
                    number={3}
                    title="No page differentiation for free and paying clients:"
                    description="There was not differentiation between our provisional (free) and paying clients' JDPs, which would give the sales team additional leverage for upselling."
                  />
                  <NumberedItem
                    number={4}
                    title="Miss opportunity to capture Job Seekers' info in our email ecosystem:"
                    description="Job seekers were leaving the site without any value exchange, preventing us from following up and providing additional value."
                  />
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>

        <div
          id="section 3"
          className="responsive-section-y-case-study bg-[#fff]  flex  lg:flex-col flex-col justify-center items-center "
        >
          <div
            className=" responsive-width-case-study flex  flex-col space-y-4 justify-between mt-10
          "
          >
            <div className="flex  md:flex-row flex-col justify-between ">
              <img
                src={RequirementsDoc}
                alt="Requirements Doc Image"
                className=" md:w-[50%] w-full h-auto"
              ></img>
              <div>
                <Subtitle label="Define" />
                <MainTextBlock
                  title={
                    "Defining the product goals, objectives and requirements"
                  }
                  description={
                    <>
                      At this point, we boiled down all data, insights and
                      feedback into the first phase designs.
                      <br />
                      <br />
                      Given all what we knew at this points, with the product
                      team we worked on prioritizing the v1 features and content
                      and subsequent versions.
                    </>
                  }
                  className=" md:w-[40%] w-[90%]"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          id="section 4"
          className="responsive-section-y-case-study bg-[#CFDCE5]  flex  lg:flex-col flex-col justify-center items-center "
        >
          <div
            className=" responsive-width-case-study flex  flex-col space-y-4 justify-between mt-10
          "
          >
            <div className="flex  md:flex-row flex-col justify-between ">
              <div className="w-full">
                <MainTextBlock
                  title={"Launching a lightweight qualitative research "}
                  description={
                    <>
                      In order to ensure that we were not missing anything,{" "}
                      <strong>
                        I helped run a Heuristic Evaluation of the existing JDP
                        and a competitive analysis
                      </strong>{" "}
                      to get general a picture of direct and indirect
                      competitors in order to understand where we stood.
                    </>
                  }
                  className=" w-full"
                />
                <div className="flex justify-between flex-col gap-4">
                  <h5>Key Insights</h5>
                  <NumberedItem
                    number={1}
                    title=""
                    description="Opportunity to optimize layout, space, and design at the top of the page (Audit)"
                  />
                  <NumberedItem
                    title=""
                    number={2}
                    description="Integrate company media such as images and video more meaningfully (Competitive Analysis)"
                  />
                  <NumberedItem
                    title=""
                    number={3}
                    description="Highlight company details such as culture, benefits, employee reviews/testimonials to aid job seeker decisions (Competitive Analysis)"
                  />
                </div>
              </div>
              <img
                src={AuditDoc}
                alt="Whiteboard Image"
                className="md:w-[50%] w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
        <div
          id="section 5 "
          className="responsive-section-y-case-study bg-white  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <Subtitle label="Explore" />
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Initial Design Exploration "}
                description={
                  "I then started by working on few design exploration based on our initial requirements and specifications of the project, while keeping in mind all our insights and feedback collected"
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10 ">
                <div className="flex  flex-col justify-between items-center space-y-3 ">
                  <img
                    src={JdpDesignExploration}
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
          id="section 6 "
          className="responsive-section-y-case-study bg-white  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Narrowing it down to the MVP and subsequent versions"}
                description={
                  "After reviewing the initial design exploration with all stakeholders, we narrowed it to the MVP that we set out to launch.  It was a stripped down version of the fully feature version, this was done strategically so that we can measure the impact of each new added feature."
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10 ">
                <div className="flex  flex-col justify-between items-center space-y-3 ">
                  {" "}
                  <FigmaEmbed url="https://embed.figma.com/design/urfbIGcvUMATl41EO05Oar/JDP-Website-Frames?node-id=1-912&embed-host=share" />
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div
          id="section 7 "
          className="responsive-section-y-case-study bg-white  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"A/B Testing to the smallest details "}
                description={
                  <>
                    One hypotheses that we had was that the CTA was not giving
                    user enough context, we took the opportunity of the first
                    launch to text a few copy variations.
                    <br />
                    <br />
                    The winner variant was "Apply on Company Site"
                  </>
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10 ">
                <div className="flex  flex-col justify-between items-center space-y-3 ">
                  <img
                    src={JdpButtonABTesting}
                    alt="Sketches Image"
                    className=" xl:w-[80%] w-[90%] h-auto "
                  ></img>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div
          id="section 8 "
          className="responsive-section-y-case-study bg-[#56CCF2]  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <Subtitle label="Research" />
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={
                  "We diverted to think about this experience more broadly. "
                }
                description={
                  "Even though we knew from the very beginning the technical constraints of the projects, we still wanted to approach the design exploration with an open mind and design for what believe it was the ideal experience based on a few hypotheses, validate it, and then from there narrow it down to what it was viable and feasible given our resources. After a few rounds of design exploration, I designed three design concepts to test. "
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10 ">
                <div className="flex  flex-col justify-between items-center space-y-3 ">
                  <FigmaEmbed url="https://embed.figma.com/design/urfbIGcvUMATl41EO05Oar/JDP-Website-Frames?node-id=1-9094&embed-host=share" />
                  {/* <img
                    src={JdpFutureDesigns}
                    alt="Sketches Image"
                    className=" xl:w-[90%] w-[90%] h-auto "
                  ></img> */}
                </div>
              </div>
            </div>
            <div className=" responsive-width-case-study flex  md:flex-col flex-col justify-between pt-8 space-x-8 md:space-y-0 space-y-8 ">
              <p>
                To validate these, I helped put together a user research plan to
                get user feedback for all three concepts. The research aimed to:
              </p>
              <ul className="list-disc list-outside   space-y-0">
                <li className="text-left">
                  <p>
                    Collect insights on how job seekers search for jobs, what
                    they care about, and what is of most value for them when
                    learning about jobs and companies
                  </p>
                </li>
                <li className="text-left">
                  <p>
                    Propose a set of information that we believe will
                    differentiate our job pages if we were to collect that
                    information from companies
                  </p>
                </li>
              </ul>
            </div>
            <img
              src={JdpResearch}
              alt="Sketches Image"
              className=" xl:w-[90%] w-[90%] h-auto "
            ></img>
            <div />
            <div className=" responsive-width-case-study flex  md:flex-col flex-col justify-between pt-8 gap-3 md:space-y-0 space-y-8 ">
              <h5 className="font-bold">Key Insights</h5>
              <p>
                After conducting <strong>8 user of interview</strong>, I got to
                analyze and synthesize all interviews, the main key takeaways:
              </p>
              <ul className="list-disc pl-6 bg-white p-4 rounded-lg space-y-1">
                <li className="text-left">
                  <span className="align-top">
                    <strong>Company characteristics:</strong> An opportunity to
                    present job seekers with a comprehensive set of data about a
                    company's culture characteristics.
                  </span>
                </li>
                <li className="text-left">
                  <span className="align-top">
                    <strong>Value Alignment:</strong> A connection with the
                    company’s values and mission is a major motivator in
                    deciding where to apply (or not).
                  </span>
                </li>
                <li className="text-left">
                  <span className="align-top">
                    <strong>Trust Issues:</strong> Job seekers express high
                    levels of distrust in Glassdoor reviews and wish there were
                    more reliable sources.
                  </span>
                </li>
                <li className="text-left">
                  <span className="align-top">
                    <strong>Work Environment:</strong> Job seekers were eager to
                    understand what the day-to-day environment is like within a
                    company.
                  </span>
                </li>
                <li className="text-left">
                  <span className="align-top">
                    <strong>Diversity & Inclusion:</strong> Diversity and
                    inclusion were top priorities; job seekers actively research
                    how companies approach these topics.
                  </span>
                </li>
              </ul>
            </div>
            <div className=" responsive-width-case-study flex  md:flex-col flex-col justify-between pt-8 gap-3 md:space-y-0 space-y-8 ">
              <h5 className="font-bold">Conclusion</h5>
              <p>
                After discussing this research with product, engineering, and
                upper management, we decided it was going to be a huge
                undertaking to create company culture characteristics at that
                moment, but this provided us with some other insights and make
                better use of some of our existing companies information that
                was relevant to job seekers at this point of their job search.
              </p>
            </div>
          </div>
        </div>
        <div
          id="section 9 "
          className="responsive-section-y-case-study bg-white  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Perks and Benefits Module"}
                description={
                  <>
                    We set out to solve a key problem:{" "}
                    <strong>
                      jobseekers struggle to find clear benefit and compensation
                      info in one place. The Muse brings that data front and
                      center on job pages, saving time and building trust
                    </strong>{" "}
                    For employers, it’s a chance to highlight unique perks and
                    attract value-aligned candidates. This focus gives The Muse
                    a clear edge over other boards that hide or overlook
                    benefits.
                  </>
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10 ">
                <div className="flex  flex-col justify-between items-center space-y-3 ">
                  <div className="p-2 rounded-[16px] bg-[#EDEEF5] xl:w-[70%] w-[90%] h-auto">
                    <img
                      src={JdpPerksBenefits}
                      alt="Sketches Image"
                      className=" rounded-[8px]  "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div
          id="section 10 "
          className="responsive-section-y-case-study bg-white  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Employee Videos"}
                description={
                  <>
                    <strong>
                      User research revealed jobseekers wanted to hear directly
                      from employees
                    </strong>
                    , but our library of company videos was underused. Although
                    video generated a third of revenue, many received very few
                    views. This low engagement made it harder to upsell and
                    retain clients.
                    <strong>
                      As a result, we brought employee testimonials directly
                      into the Job Description Page to boost visibility and
                      impact.
                    </strong>
                  </>
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10 ">
                <div className="flex  flex-col justify-between items-center space-y-3 ">
                  <div className="p-2 rounded-[16px] bg-[#EDEEF5] xl:w-[70%] w-[90%] h-auto">
                    <img
                      src={JdpVideo}
                      alt="Sketches Image"
                      className=" rounded-[8px]  "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>

        <div
          id="section 11 "
          className="responsive-section-y-case-study bg-white  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Job Alerts"}
                description={
                  <>
                    The main goal of this project was to design an engaging
                    job-alert sign-up experience for job seekers on JDP that led
                    to higher job engagement and more applications.
                  </>
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10 ">
                <div className="flex  flex-col justify-between items-center space-y-14 ">
                  <div className="p-2 rounded-[16px] bg-[#EDEEF5] xl:w-[70%] w-[90%] h-auto flex flex-col items-center">
                    <img
                      src={JobAlertFlow}
                      alt="Sketches Image"
                      className=" rounded-[8px]  "
                    />
                    <p>Job Alerts User Journey</p>
                  </div>
                  <div className="p-2 rounded-[16px] bg-[#EDEEF5] xl:w-[70%] w-[90%] h-auto flex flex-col items-center">
                    <img
                      src={JobAlertComponent}
                      alt="Sketches Image"
                      className=" rounded-[8px]  "
                    />
                    <p>Components Sheet</p>
                  </div>
                  <div className="p-2 rounded-[16px] bg-[#EDEEF5] xl:w-[70%] w-[90%] h-auto">
                    <img
                      src={JobAlert}
                      alt="Sketches Image"
                      className=" rounded-[8px]  "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>

        <div
          id="section 12 "
          className="responsive-section-y-case-study bg-white  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex  flex-col justify-between items-center ">
              <MainTextBlock
                title={"Direct Apply"}
                description={
                  <>
                    We introduced direct apply to increase our job applies, keep
                    us competitive in the market and increase job seeker
                    retention and applies per applicant.
                  </>
                }
                className=" responsive-width-case-study"
              />
              <div className="flex  flex-col justify-between items-center space-y-10 ">
                <div className="flex  flex-col justify-between items-center space-y-3 ">
                  <div className="p-2 rounded-[16px] bg-[#EDEEF5] xl:w-[70%] w-[90%] h-auto">
                    <VideoOnView
                      src={JdpQuickApply}
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
          id="section 13 "
          className="responsive-section-y-case-study bg-white  flex justify-center items-center "
        >
          <div className="flex  flex-col justify-between items-center space-y-4 ">
            <div className="flex flex-col justify-between items-center ">
              <MainTextBlock
                title={"Before & After"}
                description={<></>}
                className="responsive-width-case-study text-center"
              />
              <div className="w-full max-w-3xl my-8">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={JdpBeforeImg}
                      alt="Before Design"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={JdpAfterImg}
                      alt="After Design"
                    />
                  }
                  style={{ width: "100%", height: "auto" }}
                />
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
                    I helped conduct several user tests and research which
                    helped us get a better understanding of how Job Seekers
                    value the most when looking for jobs and gave us more
                    confidence in what we built.
                  </p>
                </li>
                <li className="custom-li text-left">
                  <>
                    After launching the new JDP,{" "}
                    <strong>
                      we saw a 40% YoY growth and 110% growth vs the previous
                      year.
                    </strong>
                  </>
                </li>
                <li className="custom-li text-left">
                  <p>
                    We had a JDP that was much faster to build on and optimized
                    for better SEO
                  </p>
                </li>
                <li className="custom-li text-left">
                  <p>
                    We had a better differentiated page between paying and free
                    clients, and sales had better leverage to show clients more
                    value for upselling.
                  </p>
                </li>
                <li className="custom-li text-left">
                  <p>
                    By introducing Job Alerts and Quick Apply, we could now
                    engage users better to continue providing them with more
                    value long after they come to The Muse.
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
