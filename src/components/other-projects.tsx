import { CardOther } from "./cards-other";

import WBVideoPlayerImg from "../assets/images/homepage/wb-videoplayer-img.png";
import WarnerArchiveImg from "../assets/images/homepage/warnerarchive-img.png";
import BuildbookImg from "../assets/images/homepage/buildbook-img.png";
import CloudEstateImg from "../assets/images/homepage/cloudestate-img.png";

export function OtherProjects1() {
  return (
    <div>
      <div className=" w-full flex justify-center pt-10 ">
        <h3 className="responsive-width-case-study flex justify-center items-center ">
          Other Projects
        </h3>
      </div>
      <div className="flex justify-center space-x-0 mt-10">
        <CardOther
          image={BuildbookImg}
          title={"New approach to construction management"}
          className=" bg-[#f3f4f4]"
          link="/buildbook"
        />
        <CardOther
          image={CloudEstateImg}
          title={"Rethinking Asset Management"}
          className=" bg-brand-tertiary-20"
          link="/cloudestate"
        />
      </div>
    </div>
  );
}

export function OtherProjects2() {
  return (
    <div>
      <div className=" w-full flex justify-center pt-10 ">
        <h3 className="responsive-width-case-study flex justify-center items-center ">
          Other Projects
        </h3>
      </div>
      <div className="flex justify-center space-x-0 mt-10">
        <CardOther
          image={WBVideoPlayerImg}
          title={"Designing an adaptable video player"}
          className=" bg-[#f3f4f4]"
          link="/videoplayer"
        />
        <CardOther
          image={WarnerArchiveImg}
          title={"Systematizing a web video streaming experience"}
          className=" bg-brand-tertiary-20"
          link="/warner"
        />
      </div>
    </div>
  );
}
