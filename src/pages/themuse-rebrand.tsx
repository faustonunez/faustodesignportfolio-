import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { Helmet } from "react-helmet-async";

import { OtherProjects1 } from "@/components/other-projects";
import {
  LabelDescription,
  MainTextBlock,
  Subtitle,
} from "@/components/main-text";
import NumberedItem from "@/components/numbered-item";

import HeroImg from "../assets/images/rebrand/TM-Rebrand-Hero-Img.png";
import RebrandOverviewImg from "../assets/images/rebrand/tm-rebrand-img.png";
import RebrandDocsImg from "../assets/images/rebrand/tm-rebrand-documents.png";
import CoreTemplatesImg from "../assets/images/rebrand/tm-rebrand-core-templates.img.png";
import AuditAlignImg from "../assets/images/rebrand/tm-rebrand-audit-align.png";
import ColorSystemImg from "../assets/images/rebrand/tm-rebrand-color-system-img.png";
import ColorSystemLibraryImg from "../assets/images/rebrand/tm-rebrand-color-system.png";
import DesignSystemImg from "../assets/images/rebrand/tm-rebrand-design-system-img.png";
import GovernanceChartImg from "../assets/images/rebrand/tm-ds-governance-chart.png";
import RebrandV1Img from "../assets/images/rebrand/tm-regrand-v1.png";
import TmOldDesignImg from "../assets/images/rebrand/tm-old-design-img.png";
import DesignExplorationsImg from "../assets/images/rebrand/tm-design-explorations-img.png";
import EmployerHubImg from "../assets/images/rebrand/tm-employer-hub-img.png";
import HpBeforeImg from "../assets/images/rebrand/tm-hp-before-img.png";
import HpAfterImg from "../assets/images/rebrand/tm-hp-after-img.png";
import SearchBeforeImg from "../assets/images/rebrand/tm-search-page-before-img.png";
import SearchAfterImg from "../assets/images/rebrand/tm-search-page-after-img.png";
import JdpBeforeImg from "../assets/images/rebrand/tm-jdp-before-img.png";
import JdpAfterImg from "../assets/images/rebrand/tm-jdp-after-img.png";
import AdviceBeforeImg from "../assets/images/rebrand/tm-advice-before-img.png";
import AdviceAfterImg from "../assets/images/rebrand/tm-advice-after-img.png";

/** Matches themuse-JDP "A/B Testing to the smallest details" image width */
const caseStudyWideImageClass = "xl:w-[80%] w-[90%] h-auto max-w-none mx-auto";

const caseStudyWideImageRowClass =
  "flex flex-col space-y-10 w-[90%] xl:w-[80%] max-w-none mx-auto";

/** Case-study text width; don't pair with `w-full` — it overrides these widths in Tailwind. */
const caseStudyCopyClass = "responsive-width-case-study mx-auto shrink-0";

const designApproachCirclePaddingClass = "p-6 sm:p-8";

const DESIGN_APPROACH_PRINCIPLES_ITEMS = [
  {
    title: "Prioritize",
    body: "Prioritize pages and flows based on what engineering will be able to implement at first.",
  },
  {
    title: "Audit",
    body: "Audit pages (starting with the prioritized pages and flows) to know what elements, components, modules, and templates will be impacted and need to be updated.",
  },
  {
    title: "Align",
    body: "Align what currently exists on production with our internal design system in Figma, then document and recreate any missing elements, components.",
  },
] as const;

/**
 * Three principle circles: same square size for all, driven by whichever needs the largest
 * box to fit its text (no inner scroll). Layout matches `lg` row vs stacked column.
 */
function DesignApproachCircles() {
  const shellRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<Array<HTMLDivElement | null>>([null, null, null]);

  const [edgePx, setEdgePx] = useState<number>(287);

  const measure = useCallback(() => {
    const shell = shellRef.current;
    const measureRoot = measureRef.current;
    const cells = cellRefs.current;
    if (!shell || !measureRoot || cells.some((c) => !c)) return;

    const lg =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(min-width: 1024px)").matches;

    const shellW = shell.clientWidth;
    if (shellW <= 0) return;

    const gapPx = 24;

    /**
     * `lg` row: clamp circle to one third of the shell so all 3 fit a single row (no wrap, no scroll).
     * stacked: tallest card sets the size, capped to the shell (or 287 default cap).
     */
    if (lg) {
      const edge = Math.floor((shellW - 2 * gapPx) / 3);
      if (Number.isFinite(edge) && edge > 0) setEdgePx(edge);
      return;
    }

    const colW = Math.min(287, shellW);
    const sides: number[] = [];
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      if (!cell) return;
      cell.style.width = `${colW}px`;
      void cell.offsetHeight;
      const need = Math.max(cell.offsetWidth, cell.offsetHeight);
      sides.push(need);
      cell.style.width = "";
    }

    let edge = Math.ceil(Math.max(...sides));
    if (!Number.isFinite(edge) || edge <= 0) return;
    edge = Math.min(edge, shellW);
    setEdgePx(edge);
  }, []);

  useLayoutEffect(() => {
    measure();
    const shell = shellRef.current;
    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(measure)
        : null;
    if (shell) ro?.observe(shell);

    let mq: MediaQueryList | undefined;
    const mqListener = () => measure();
    if (typeof window.matchMedia === "function") {
      mq = window.matchMedia("(min-width: 1024px)");
      mq.addEventListener?.("change", mqListener);
      mq.addListener?.(mqListener);
    }
    window.addEventListener("resize", measure);

    return () => {
      ro?.disconnect();
      mq?.removeEventListener?.("change", mqListener);
      mq?.removeListener?.(mqListener);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return (
    <div ref={shellRef} className="relative w-full">
      <div
        ref={measureRef}
        className="pointer-events-none invisible absolute left-0 top-0 -z-10 grid w-full grid-cols-1 gap-6 lg:grid-cols-3 [&>div]:mx-auto lg:[&>div]:mx-0"
        aria-hidden
      >
        {DESIGN_APPROACH_PRINCIPLES_ITEMS.map((item, i) => (
          <div
            key={`measure-${item.title}`}
            ref={(el) => {
              cellRefs.current[i] = el;
            }}
            className={`box-border flex flex-col items-center justify-center text-center ${designApproachCirclePaddingClass}`}
          >
            <div className="flex max-w-full min-w-0 flex-col items-center gap-4">
              <p className="font-lato shrink-0 font-bold text-brand-secondary-60 text-[24px] leading-none">
                {item.title}
              </p>
              <p className="font-lato text-brand-secondary-60 text-[16px] leading-[1.3]">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:flex-nowrap lg:justify-center lg:items-center">
        {DESIGN_APPROACH_PRINCIPLES_ITEMS.map((item) => (
          <div
            key={item.title}
            className={[
              "box-border flex shrink-0 flex-col items-center justify-center text-center rounded-full bg-light-divider",
              designApproachCirclePaddingClass,
            ].join(" ")}
            style={{ width: edgePx, height: edgePx }}
          >
            <div className="flex max-w-full min-w-0 flex-col items-center gap-4">
              <p className="font-lato shrink-0 font-bold text-brand-secondary-60 text-[24px] leading-none">
                {item.title}
              </p>
              <p className="font-lato text-brand-secondary-60 text-[16px] leading-[1.3]">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TheMuseRebrand() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Helmet>
        <title>The Muse - Rebrand & Design System Evolution</title>
        <meta
          name="description"
          content="How I led The Muse rebrand implementation and evolved a cross-functional design system workflow."
        />
      </Helmet>

      <div className="flex justify-center items-center bg-[#1b1d27] w-full h-screen">
        <div className="responsive-width h-full flex flex-col items-center pt-[124px] sm:pt-[156px] md:pt-[170px] lg:pt-[184px] pb-6 md:pb-10 box-border">
          <h2 className="mb-3 md:mb-5 lg:w-[90%] w-full text-white text-center shrink-0">
            Unifying The Muse's brand and design system
          </h2>
          <div className="w-full flex-1 min-h-0 flex items-end justify-center">
            <img
              src={HeroImg}
              alt="The Muse rebrand hero"
              className="w-full h-full max-w-[1200px] object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="responsive-section-y-case-study bg-brand-primary-20 flex flex-col justify-center items-center">
          <div className="responsive-width-case-study mt-10 flex flex-col space-y-4">
            <Subtitle label="Introduction" />
            <div className="flex md:flex-row flex-col gap-4">
              <MainTextBlock
                title={"About"}
                description={
                  <>
                    The Muse is the go-to destination for the next-generation
                    workforce to research companies and careers. More than 70
                    million visitors each year trust The Muse to help them win
                    at work.
                  </>
                }
                className="md:w-[60%] w-full"
              />
              <LabelDescription
                items={[
                  { label: "Client:", description: "The Muse" },
                  { label: "Role:", description: "Senior Product Designer" },
                  {
                    label: "Skills:",
                    description:
                      "Branding, Wireframing, Prototyping, UI Design, Interactions, System Design",
                  },
                ]}
                className="md:w-[40%] w-full"
              />
            </div>
          </div>
        </div>

        <div
          className="responsive-section-y-case-study bg-brand-greys-0 flex flex-col justify-center items-center !pb-0 md:!pb-0 [padding-block-end:0]"
          style={
            {
              /** Overrides global section bottom spacing (e.g. `padding` / custom properties on `.responsive-section-y-case-study`). */
              paddingBottom: 0,
            } satisfies CSSProperties
          }
        >
          <div className="responsive-width-case-study flex flex-col mt-10">
            <MainTextBlock
              title={"My role"}
              description={
                "I was the Senior Product Designer on this project, responsible for translating the agency's brand direction into a cohesive product experience. I worked directly with Product, Engineering and Marketing to drive implementation. I also introduced an updated workflow for how the team engages with the design system going forward."
              }
              className="!mb-0 w-full bg-[#BCBABA33] p-[32px] rounded-[16px]"
              style={{ marginBottom: 0 } satisfies CSSProperties}
            />
          </div>
        </div>

        <div className="responsive-section-y-case-study bg-brand-greys-0 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col items-center mt-10 space-y-6">
            <div className={`${caseStudyCopyClass} flex flex-col space-y-6`}>
              <Subtitle label="define" />
              <div className="flex flex-col space-y-4 max-w-full">
                <MainTextBlock
                  title={"The Challenge"}
                  description=""
                  className="!mb-0 max-w-full"
                  showDescription={false}
                />
                <ul className="list-disc pl-6 space-y-2 text-black text-[18px] leading-[1.4]">
                  <li>
                    <strong>Outdated visual identity:</strong> Aging design,
                    inconsistent components, no unified system
                  </li>
                  <li>
                    <strong>Fragmented technical architecture:</strong> The site
                    lived across multiple repos Design System (DS), Job
                    Renderer, the Muse Frontend (MFE)
                  </li>
                  <li>
                    <strong>No formal design system process existed:</strong>{" "}
                    There were no established rules for how to create, reuse, or
                    retire components
                    <br />
                    Every project started from scratch with no shared
                    decision-making framework for when to build new vs. reuse
                    what already existed
                  </li>
                </ul>
              </div>
            </div>
            <figure className="flex flex-col items-center justify-center gap-6 w-full">
              <img
                src={TmOldDesignImg}
                alt="The Muse product screens before the rebrand"
                className={`${caseStudyWideImageClass} shadow-[0px_8px_19px_0px_rgba(0,0,0,0.10)]`}
              />
              <figcaption className="text-center text-brand-secondary-40 text-[18px] leading-[1.2] responsive-width-case-study">
                The Muse's old designs.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="responsive-section-y-case-study flex flex-col justify-center items-center">
          <div className="responsive-width-case-study flex flex-col space-y-6 mt-10">
            <Subtitle label="Define" />
            <MainTextBlock
              title={"The Opportunity"}
              description={
                <>
                  An external marketing agency had recently completed a brand
                  refresh, providing a static style guide (new logo, colors,
                  typography, imagery) without translating it into a functional
                  digital UI or UX system.
                  <br />
                  <br />
                  <b>The task:</b> translate that agency output into a living,
                  scalable design system without disrupting existing UX or site
                  structure.
                </>
              }
              className="w-full"
            />
            <img
              src={RebrandOverviewImg}
              alt="Muse rebrand overview"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="responsive-section-y-case-study bg-[#D1F1FF] flex flex-col justify-center items-center">
          <div className="responsive-width-case-study flex lg:flex-row flex-col justify-between items-start gap-8 mt-10">
            <div className="lg:w-[58%] w-full">
              <MainTextBlock
                title={"Defining the Product Goals and Objectives"}
                description={
                  "Working cross-functionally with product and engineering, we translated the brand agency's style guide into a scoped, phased brief — defining what would change, what wouldn't, and in what order."
                }
                className="w-full"
              />
              <h5 className="mb-6">Key Insights</h5>
              <div className="flex flex-col gap-4">
                <NumberedItem
                  number={1}
                  title="Light Refresh:"
                  description="Execute an update on the job seeker site (advice and marketplace) to apply the new colors, typography, and logos without altering the underlying UX or site structure"
                />
                <NumberedItem
                  number={2}
                  title="Tech Foundation:"
                  description="Create a foundational base to support a more comprehensive future build and rebuild of the content site"
                />
                <NumberedItem
                  number={3}
                  title="Establishing the Workflow:"
                  description=" Develop a robust, documented workflow to govern how the design system would expand after the initial light refresh"
                />
              </div>
            </div>
            <div className="lg:w-[42%] w-full flex justify-center">
              <img
                src={RebrandDocsImg}
                alt="Muse rebrand planning documents"
                className="w-full h-auto  rounded-[8px]"
              />
            </div>
          </div>
        </div>

        <div className="responsive-section-y-case-study bg-white flex flex-col justify-center items-center">
          <div className="responsive-width-case-study flex flex-col space-y-6 mt-10">
            <MainTextBlock
              title={"Initial Design Approach"}
              description={
                "After having done all the discovery and defining work, between the design team and other key stakeholders, we hashed out a set of principles to help guide us during the exploration and design phase."
              }
              className="w-full mb-0"
              titleClassName="text-brand-secondary-60"
              descriptionClassName="text-brand-secondary-60"
            />

            <DesignApproachCircles />
          </div>
        </div>

        <div className="responsive-section-y-case-study bg-brand-primary-20 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col items-center mt-10 space-y-6">
            <MainTextBlock
              title={"Mapping the Core Page Templates"}
              description={
                "Conducted an audit of existing core pages to understand what templates would be impacted."
              }
              className={caseStudyCopyClass}
            />
            <div className="flex flex-col justify-center items-center w-full">
              <img
                src={CoreTemplatesImg}
                alt="Core template mapping"
                className={caseStudyWideImageClass}
              />
            </div>
          </div>
        </div>

        <div className="responsive-section-y-case-study bg-white flex flex-col justify-center items-center">
          <div className="w-full flex flex-col items-center mt-10 space-y-6">
            <MainTextBlock
              title={"Audit & Align "}
              description={
                <>
                  I started by identifying pages engineering could implement
                  first, then audited them to determine which elements,
                  components, and templates would be impacted.
                  <br />
                  <br />
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Gap Analysis (Production vs. Figma):</strong> I
                      compared the live site against the existing Figma designs
                      and discovered several live components were missing from
                      our files.
                    </li>
                    <li>
                      <strong>Consolidating Design Debt:</strong> I proactively
                      documented and recreated those missing live elements in
                      Figma. This ensured we had a true single source of truth
                      and accounted for everything before rolling out any new
                      brand updates.
                    </li>
                  </ul>
                </>
              }
              className={caseStudyCopyClass}
            />
            <div className="flex flex-col justify-center items-center w-full">
              <img
                src={AuditAlignImg}
                alt="Audit and alignment board"
                className={`${caseStudyWideImageClass} shadow-[0px_8px_19px_0px_rgba(0,0,0,0.10)]`}
              />
            </div>
          </div>
        </div>

        <div className="responsive-section-y-case-study bg-white flex flex-col justify-center items-center">
          <div className="w-full flex flex-col items-center mt-10 space-y-6">
            <MainTextBlock
              title={"Initial Design Exploration"}
              description={
                <>
                  Finding the right direction:
                  <br />
                  <br />
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Created multiple header variations in Figma: light blue
                      (&quot;Muse Blue&quot;) vs. midnight blue.
                    </li>
                    <li>Iterated on logo application across nav and footer.</li>
                    <li>
                      Explored color application across key templates: homepage,
                      search, JDP, company profile, advice articles.
                    </li>
                    <li>
                      Narrowed exploration to one unified direction through
                      cross-functional reviews with marketing and product.
                    </li>
                    <li>
                      We chose Muse Blue because it was the only option that
                      balanced both sides of the Magnetic Mentor personality -
                      credible enough to establish trust and approachable enough
                      to feel welcoming, validated across templates.
                    </li>
                  </ul>
                </>
              }
              className={caseStudyCopyClass}
            />
            <div className="flex flex-col justify-center items-center w-full">
              <img
                src={DesignExplorationsImg}
                alt="Initial design exploration across The Muse templates"
                className={caseStudyWideImageClass}
              />
            </div>
          </div>
        </div>

        <div className="responsive-section-y-case-study bg-brand-tertiary-20 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col items-center mt-10 space-y-6">
            <MainTextBlock
              title={"Selected Design Direction"}
              description={
                <>
                  For V1 the plan was to only update the main page elements such
                  as logo, nav, background colors and footer.
                </>
              }
              className={caseStudyCopyClass}
            />
            <div className="flex flex-col justify-center items-center w-full">
              <img
                src={RebrandV1Img}
                alt="Selected design direction for V1 rebrand"
                className={caseStudyWideImageClass}
              />
            </div>
          </div>
        </div>

        <div className="responsive-section-y-case-study  flex flex-col justify-center items-center">
          <div className="w-full flex flex-col items-center mt-10 space-y-6">
            <MainTextBlock
              title={"Defining the Design System Foundation"}
              description={
                "With the agency's palette in hand, I mapped each color to a specific use case — primary text, secondary text, placeholders, dividers, backgrounds — and tested every value for ADA compliance before locking anything in."
              }
              className={caseStudyCopyClass}
            />
            <div className="flex flex-col justify-center items-center w-full">
              <img
                src={ColorSystemImg}
                alt="Color system exploration"
                className={caseStudyWideImageClass}
              />
            </div>
          </div>
        </div>

        <div className="responsive-section-y-case-study bg-[#56CCF2] flex flex-col justify-center items-center">
          <div className="w-full flex flex-col items-center mt-10 space-y-6">
            <MainTextBlock
              title={"Defining the Design System Primitives"}
              description={""}
              className={`${caseStudyCopyClass} !mb-0`}
              showDescription={false}
            />
            <div className="flex flex-col justify-center items-center w-full">
              <img
                src={ColorSystemLibraryImg}
                alt="Color system library in Figma"
                className={`${caseStudyWideImageClass} rounded-[8px]`}
              />
            </div>
          </div>
        </div>

        <div className="responsive-section-y-case-study bg-white flex flex-col justify-center items-center">
          <div className="w-full flex flex-col items-center mt-10 space-y-6">
            <MainTextBlock
              title={"The Muse Design System"}
              description={
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>
                      The design system lived in Figma as a single source of
                      truth
                    </strong>{" "}
                    — organized into a Pattern Library and individual page
                    templates: Nav, Homepage, Search, JDP, Advice, and Company
                    Profile.
                  </li>
                  <li>
                    <strong>
                      Everything was fully componentized following Figma best
                      practices
                    </strong>{" "}
                    - colors, typography, and components published as a shared
                    library. Any new project file could sync to that library
                    instantly, meaning the team always had access to the latest
                    components, styles, and tokens without starting from
                    scratch.
                  </li>
                  <li>
                    <strong>One library. Every project stays in sync.</strong>
                  </li>
                </ul>
              }
              className={caseStudyCopyClass}
            />
            <div className="flex flex-col justify-center items-center w-full">
              <img
                src={DesignSystemImg}
                alt="The Muse design system in Figma"
                className={caseStudyWideImageClass}
              />
            </div>
          </div>
        </div>

        <div className="responsive-section-y-case-study bg-brand-tertiary-10 flex flex-col justify-center items-center">
          <div className="responsive-width-case-study flex lg:flex-row flex-col items-start gap-8 mt-10">
            <div className="lg:w-[40%] w-full">
              <MainTextBlock
                title={"Governance & Workflow"}
                description={
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>The Decision Tree:</strong> Created a strict
                      rulebook to eliminate ambiguity for future projects: Does
                      this component already exist? If yes, use it. If not,
                      create a new one.
                    </li>
                    <li>
                      <strong>Lifecycle Management:</strong> Mapped the specific
                      user flow for proposing a new component, building it into
                      production, and ensuring the central Figma pattern library
                      was updated accordingly to maintain the system.
                    </li>
                  </ul>
                }
                className="w-full mb-0"
              />
            </div>
            <div className="lg:w-[60%] w-full">
              <img
                src={GovernanceChartImg}
                alt="Governance and workflow chart"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="responsive-section-y-case-study bg-white flex flex-col justify-center items-center">
          <div className="w-full flex flex-col items-center mt-10 space-y-10">
            <MainTextBlock
              title={"Rebrand Before & After"}
              description=""
              className={`${caseStudyCopyClass} text-center !mb-0`}
              showDescription={false}
            />

            <div className={caseStudyWideImageRowClass}>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-full">
                <div className="flex flex-col gap-2">
                  <p className="text-brand-secondary-60 text-[22px] leading-[1.4]">
                    Before
                  </p>
                  <img
                    src={HpBeforeImg}
                    alt="Homepage before rebrand"
                    className="w-full h-auto shadow-[0px_8px_19px_0px_rgba(0,0,0,0.10)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-brand-secondary-60 text-[22px] leading-[1.4]">
                    After
                  </p>
                  <img
                    src={HpAfterImg}
                    alt="Homepage after rebrand"
                    className="w-full h-auto shadow-[0px_8px_19px_0px_rgba(0,0,0,0.10)]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-full">
                <div className="flex flex-col gap-2">
                  <p className="text-brand-secondary-60 text-[22px] leading-[1.4]">
                    Before
                  </p>
                  <img
                    src={SearchBeforeImg}
                    alt="Search page before rebrand"
                    className="w-full h-auto shadow-[0px_8px_19px_0px_rgba(0,0,0,0.10)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-brand-secondary-60 text-[22px] leading-[1.4]">
                    After
                  </p>
                  <img
                    src={SearchAfterImg}
                    alt="Search page after rebrand"
                    className="w-full h-auto shadow-[0px_8px_19px_0px_rgba(0,0,0,0.10)]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-full">
                <div className="flex flex-col gap-2">
                  <p className="text-brand-secondary-60 text-[22px] leading-[1.4]">
                    Before
                  </p>
                  <img
                    src={JdpBeforeImg}
                    alt="JDP before rebrand"
                    className="w-full h-auto shadow-[0px_8px_19px_0px_rgba(0,0,0,0.10)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-brand-secondary-60 text-[22px] leading-[1.4]">
                    After
                  </p>
                  <img
                    src={JdpAfterImg}
                    alt="JDP after rebrand"
                    className="w-full h-auto shadow-[0px_8px_19px_0px_rgba(0,0,0,0.10)]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-full">
                <div className="flex flex-col gap-2">
                  <p className="text-brand-secondary-60 text-[22px] leading-[1.4]">
                    Before
                  </p>
                  <img
                    src={AdviceBeforeImg}
                    alt="Advice page before rebrand"
                    className="w-full h-auto shadow-[0px_8px_19px_0px_rgba(0,0,0,0.10)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-brand-secondary-60 text-[22px] leading-[1.4]">
                    After
                  </p>
                  <img
                    src={AdviceAfterImg}
                    alt="Advice page after rebrand"
                    className="w-full h-auto shadow-[0px_8px_19px_0px_rgba(0,0,0,0.10)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="responsive-section-y-case-study bg-brand-primary-20 flex flex-col justify-center items-center">
          <div className="responsive-width flex flex-col space-y-8 mt-10">
            <MainTextBlock
              title="We also expanded the new branding and design system to our Employer Hub"
              description=""
              className="w-full text-center !mb-0"
              showDescription={false}
            />
            <img
              src={EmployerHubImg}
              alt="Employer hub screens reflecting the new branding and design system"
              className="w-full h-auto "
            />
          </div>
        </div>

        <div className="responsive-section-y-case-study bg-white flex flex-col justify-center items-center">
          <div className="responsive-width-case-study mt-10 flex flex-col gap-4">
            <h4 className="text-[#0C0E10]">Outcomes & Lessons Learned</h4>
            <ol className="custom-counter space-y-[18px]">
              <li className="custom-li">
                <p className="text-[#0C0E10] text-[18px] leading-[1.3]">
                  <strong>Consistent job seeker experience</strong> from Advice
                  {" \u2192 "}Marketplace
                </p>
              </li>
              <li className="custom-li">
                <p className="text-[#0C0E10] text-[18px] leading-[1.3]">
                  <strong>Faster design-to-engineering handoff</strong> - shared
                  vocabulary, less back-and-forth
                </p>
              </li>
              <li className="custom-li">
                <p className="text-[#0C0E10] text-[18px] leading-[1.3]">
                  A design system is only as strong as the process around it.
                  Clear rules for when to reuse vs. create new components
                </p>
              </li>
              <li className="custom-li">
                <p className="text-[#0C0E10] text-[18px] leading-[1.3]">
                  Cross-functional alignment (design, engineering, marketing)
                  was just as important as the visual output
                </p>
              </li>
              <li className="custom-li">
                <p className="text-[#0C0E10] text-[18px] leading-[1.3]">
                  Starting with primitives and governance - not just UI - is
                  what made this scalable
                </p>
              </li>
              <li className="custom-li">
                <p className="text-[#0C0E10] text-[18px] leading-[1.3]">
                  The light rebrand created a foundation that the team could
                  keep building on long after the initial release
                </p>
              </li>
            </ol>
          </div>
        </div>

        <OtherProjects1 />
      </div>
    </div>
  );
}
