import { Resume } from "@/components/resume.tsx";
import HeaderImg from "../assets/images/homepage/hero-image.png";

export function About() {
  return (
    <div>
      <div className="flex  justify-center items-center  bg-brand-primary-20 md:w-screen md:h-screen w-[100%] h-auto">
        <div
          id="Header"
          className="   responsive-width  h-auto flex md:flex-row flex-col  items-center  "
        >
          <div className="text-left md:w-3/4 md:mr-[50px] w-full mr-0">
            <h2 className="mb-[16px] mt-[124px] w-full">About Me</h2>
            <div className="w-full prose prose-[54px]">
              <h5 className=" mb-6 w-auto">
                My journey started as a graphic designer working in a variety of
                projects, all the way from print to web. I quickly fell in love
                with designing digital products and making people’s lives a bit
                easier, in the past 10 years I’ve been working with small and
                large multi-disciplinary teams, leading large end-to-end product
                initiatives with a holistic approach. Advocate for the user with
                a data-informed and research-guided mindset, flexible and
                adaptable, team player, and passionate for designing inclusive,
                usable, useful, and beautiful products.{" "}
              </h5>
              <h5 className=" mb-6">
                At the moment, I’m running my own UX/UI design studio, working
                with a variety of startups, enterprises, and agencies.
              </h5>
              <h5 className=" mb-6">
                If you don’t find me in my computer designing, you’ll find me
                around NYC with friends taking photographs of the city or
                traveling somewhere in the world.
              </h5>
            </div>
          </div>
          <img
            src={HeaderImg}
            alt="Hero Image"
            className="md:w-1/4 md:h-1/4  w-1/2 h-1/2 my-[0px] mt-[0px] md:pb-0 pb-6"
          ></img>
        </div>
      </div>
      <Resume />
    </div>
  );
}
