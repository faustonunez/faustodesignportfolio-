import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import JdpBeforeImg from "../../assets/images/jdp/jdp-before-design.png";
import JdpAfterImg from "../../assets/images/jdp/jdp-after-design.png";
import JdpHeroImg from "../../assets/images/jdp/jpd-hero-image.png";
import JdpPerksBenefits from "../../assets/images/jdp/jdp-perks-and-benefits-design.png";

import { Button } from "@/components/button.tsx";
import { MainTextBlock } from "@/components/main-text";
import { Subtitle } from "@/components/main-text";

export interface CaseStudySummaryProps {
  onExpandRequest: () => void;
}

/**
 * Condensed JDP narrative for hiring managers (~60s skim).
 * CSR-only site: full case study lives in `CaseStudyFull`; SEO tradeoff noted on page.
 */
export function CaseStudySummary({ onExpandRequest }: CaseStudySummaryProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="responsive-section-y-case-study bg-white flex flex-col justify-center items-center w-full">
        <div className="responsive-width-case-study flex flex-col gap-8 mt-6">
          <Subtitle label="At a glance" />
          <MainTextBlock
            title={"Problem"}
            description={
              "The Job Details Page (JDP) suffered from declining apply conversion (22% to 17%), weak Google Jobs coverage, a slow legacy stack, no clear upsell story between free and paid employer pages, and missed chances to grow our email ecosystem with job seekers."
            }
          />
          <MainTextBlock
            title={"Solution"}
            description={
              "I led research, ideation, testing, and execution—prioritizing an MVP, split-panel job discovery, stronger company storytelling (perks, video, job alerts), Quick Apply, and a rebuilt page that was faster for users and easier for engineering to iterate. We validated concepts with interviews and shipped iteratively."
            }
          />
          <MainTextBlock
            title={"Outcomes"}
            description={
              <>
                Post-launch we saw strong apply growth (40% YoY / 110% vs. prior
                year), a faster, more SEO-friendly JDP, clearer paid vs. free
                differentiation for sales, and—combined with Job Alerts and
                Quick Apply—roughly <strong>2× applications per applicant</strong>{" "}
                on the job-apply path we measured.
              </>
            }
          />
        </div>
      </div>

      <div className="responsive-section-y-case-study bg-brand-greys-20 flex flex-col items-center w-full">
        <div className="responsive-width-case-study flex flex-col gap-8 items-center">
          <p className="text-center text-brand-secondary-40 text-sm uppercase tracking-[0.2em]">
            Product
          </p>
          <img
            src={JdpHeroImg}
            alt=""
            className="w-full max-w-xl h-auto rounded-2xl shadow-lg bg-brand-tertiary-20 p-2"
          />
          <div className="w-full max-w-3xl my-4">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src={JdpBeforeImg}
                  alt="JDP before redesign"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={JdpAfterImg}
                  alt="JDP after redesign"
                />
              }
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="p-2 rounded-[16px] bg-[#EDEEF5] xl:w-[70%] w-[90%] h-auto">
            <img
              src={JdpPerksBenefits}
              alt=""
              className="rounded-[8px] w-full h-auto"
            />
          </div>
          <div className="flex justify-center pt-8 pb-4">
            <Button
              label="Read full case study"
              onClick={onExpandRequest}
              className="dark:bg-brand-primary-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
