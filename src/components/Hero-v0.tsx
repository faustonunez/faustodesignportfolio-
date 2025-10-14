import HeaderImg3 from "../assets/images/homepage/hero-image-3.png";
import Arrow from "../assets/images/homepage/arrow-down.svg?react";
import CompaniesLogoImg from "../assets/images/homepage/companies-logos.png";

export function HeroV0() {
  return (
    <div
      id="Header"
      className="flex justify-center items-center lg:flex-col flex-col bg-brand-primary-20 lg:w-screen lg:h-screen w-[100%] h-auto relative"
    >
      <div className="responsive-width-pb responsive-width h-auto flex lg:flex-row flex-col items-center lg:mt-0 md:mt-16 mt-1 place-content-between">
        <div className="text-left w-3/4 mr-[50px]">
          <h1 className="mb-[16px] mt-[124px] w-full">Hi, I'm Fausto</h1>
          <h5 className="lg:w-[80%] w-full">
            Thank you for stopping by! I'm a Senior Product Designer working
            with small and large multi-disciplinary teams, leading large
            end-to-end product initiatives with a holistic approach. At the
            moment, I'm running my own UX/UI design studio, working with a
            variety of startups, enterprises, and agencies.
          </h5>
          <img
            src={CompaniesLogoImg}
            alt="Logos of companies Fausto has worked with"
            className="mt-5 md:pb-0 pb-6 lg:w-[80%] w-[100%] h-auto"
          />
        </div>
        <img
          src={HeaderImg3}
          alt="Hero Image"
          className="md:w-[18%] w-[20%] my-[0px] md:mt-[100px] mt-0 md:pb-0 pb-0 object-contain lg:mb-0 mb-5"
        />
      </div>
      <Arrow
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:mb-10 mb-10 animate-bounce md:block hidden cursor-pointer"
        onClick={() => {
          document
            .getElementById("work")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
}
