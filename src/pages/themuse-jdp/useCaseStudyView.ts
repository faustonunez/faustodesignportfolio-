import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export type CaseStudyViewMode = "summary" | "full";

const PARAM = "view";

function parseView(raw: string | null): CaseStudyViewMode {
  if (raw === "full") return "full";
  if (raw === "summary") return "summary";
  return "summary";
}

export function useCaseStudyView() {
  const [searchParams, setSearchParams] = useSearchParams();

  const view = useMemo(
    () => parseView(searchParams.get(PARAM)),
    [searchParams],
  );

  const setView = useCallback((next: CaseStudyViewMode) => {
    setSearchParams(
      (prev) => {
        const p = new URLSearchParams(prev);
        if (next === "summary") p.delete(PARAM);
        else p.set(PARAM, "full");
        return p;
      },
      { replace: true },
    );
  }, [setSearchParams]);

  const viewSource = useMemo(():
    | "default"
    | "url_param" => {
    return searchParams.has(PARAM) ? "url_param" : "default";
  }, [searchParams]);

  return { view, setView, viewSource };
}
