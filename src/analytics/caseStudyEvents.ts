/**
 * Case study analytics — exploration stub. Replace console.log with PostHog/GA4/etc. in one place.
 * Do not import third-party SDKs on this branch.
 */

export type CaseStudyPageId = "themuse-jdp";

export type CaseStudyViewMode = "summary" | "full";

export function trackCaseStudyView(payload: {
  page: CaseStudyPageId;
  initial_view: CaseStudyViewMode;
  source: "default" | "url_param";
}) {
  console.log("case_study_view", payload);
}

export function trackCaseStudyToggle(payload: {
  page: CaseStudyPageId;
  from: CaseStudyViewMode;
  to: CaseStudyViewMode;
}) {
  console.log("case_study_toggle", payload);
}

export function trackCaseStudySummaryCtaClick(payload: {
  page: CaseStudyPageId;
}) {
  console.log("case_study_summary_cta_click", payload);
}

export function trackCaseStudyScrollDepth(payload: {
  page: CaseStudyPageId;
  view: CaseStudyViewMode;
  depth: 25 | 50 | 75 | 100;
}) {
  console.log("case_study_scroll_depth", payload);
}
