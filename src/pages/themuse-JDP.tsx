/**
 * JDP case study with Summary / Full toggle.
 *
 * SEO / no-JS: This portfolio is client-rendered (Vite SPA). Crawlers that execute
 * JS can still index the full case study when opened; users without JS see an empty
 * shell like the rest of the app. Prerender/SSR would be needed for first-byte HTML.
 */

import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { FileText, Layers } from "lucide-react";

import TheMuseJDPImg from "../assets/images/jdp/jpd-hero-image.png";

import { HeaderMain } from "@/components/HeaderMain";
import { MainTextBlock } from "@/components/main-text";
import { LabelDescription } from "@/components/main-text";
import { Subtitle } from "@/components/main-text";
import { Toggle } from "@/components/Toggle";
import {
  trackCaseStudyScrollDepth,
  trackCaseStudySummaryCtaClick,
  trackCaseStudyToggle,
  trackCaseStudyView,
} from "@/analytics/caseStudyEvents";
import { CaseStudyFull } from "./themuse-jdp/CaseStudyFull";
import { CaseStudySummary } from "./themuse-jdp/CaseStudySummary";
import { StickyToggleBar } from "./themuse-jdp/StickyToggleBar";
import { useCaseStudyView, type CaseStudyViewMode } from "./themuse-jdp/useCaseStudyView";

const PAGE: "themuse-jdp" = "themuse-jdp";
const PANEL_SUMMARY = "case-study-panel-summary";
const PANEL_FULL = "case-study-panel-full";
const TAB_SUMMARY = "case-study-tab-summary";
const TAB_FULL = "case-study-tab-full";

export function TheMuseJDP() {
  const { view, setView, viewSource } = useCaseStudyView();
  const fullPanelRef = useRef<HTMLDivElement>(null);
  const viewTracked = useRef(false);
  const scrollMarks = useRef(new Set<string>());
  const initialSnapshot = useRef<{ view: CaseStudyViewMode; source: typeof viewSource } | null>(
    null,
  );
  if (initialSnapshot.current === null) {
    initialSnapshot.current = { view, source: viewSource };
  }

  useEffect(() => {
    if (viewTracked.current) return;
    viewTracked.current = true;
    const snap = initialSnapshot.current!;
    trackCaseStudyView({
      page: PAGE,
      initial_view: snap.view,
      source: snap.source,
    });
  }, []);

  useEffect(() => {
    scrollMarks.current.clear();
  }, [view]);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight;
      const visible = el.clientHeight;
      const y = el.scrollTop;
      const ratio = total <= visible ? 1 : (y + visible) / total;
      const pct = ratio * 100;
      for (const m of [25, 50, 75, 100] as const) {
        const key = `${view}-${m}`;
        if (pct >= m - 1 && !scrollMarks.current.has(key)) {
          scrollMarks.current.add(key);
          trackCaseStudyScrollDepth({ page: PAGE, view, depth: m });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [view]);

  const onToggleChange = (v: string) => {
    const next: CaseStudyViewMode = v === "full" ? "full" : "summary";
    if (next !== view) {
      trackCaseStudyToggle({ page: PAGE, from: view, to: next });
    }
    setView(next);
  };

  const onExpandRequest = () => {
    trackCaseStudySummaryCtaClick({ page: PAGE });
    if (view !== "full") {
      trackCaseStudyToggle({ page: PAGE, from: view, to: "full" });
    }
    setView("full");
    requestAnimationFrame(() => {
      fullPanelRef.current?.focus();
    });
  };

  const liveMessage =
    view === "summary"
      ? "Showing summary view"
      : "Showing full case study view";

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
                  "The Muse is the go-to destination for the next-generation workforce to research companies and careers. More than 70 million visitors each year trust The Muse to help them win at work."
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

        <StickyToggleBar>
          <Toggle
            ariaLabel="Case study length"
            value={view}
            onChange={onToggleChange}
            panelId0={PANEL_SUMMARY}
            panelId1={PANEL_FULL}
            tabIds={[TAB_SUMMARY, TAB_FULL]}
            className="w-full max-w-md justify-center"
            options={[
              {
                value: "summary",
                label: "Summary",
                shortLabel: "Summary",
                icon: <FileText />,
              },
              {
                value: "full",
                label: "Full case study",
                shortLabel: "Full",
                icon: <Layers />,
              },
            ]}
          />
        </StickyToggleBar>

        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {liveMessage}
        </div>

        {view === "summary" ? (
          <div
            id={PANEL_SUMMARY}
            role="tabpanel"
            aria-labelledby={TAB_SUMMARY}
          >
            <CaseStudySummary onExpandRequest={onExpandRequest} />
          </div>
        ) : (
          <div
            ref={fullPanelRef}
            id={PANEL_FULL}
            role="tabpanel"
            aria-labelledby={TAB_FULL}
            tabIndex={-1}
            className="outline-none w-full"
          >
            <CaseStudyFull />
          </div>
        )}
      </div>
    </div>
  );
}
