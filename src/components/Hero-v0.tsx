import HeaderImg3 from "../assets/images/homepage/hero-image-3.png";
import Arrow from "../assets/images/homepage/arrow-down.svg?react";

export function HeroV0() {
  return (
    <div
      id="Header"
      className="flex justify-top items-center lg:flex-col flex-col bg-brand-primary-20 lg:w-screen lg:h-screen w-[100%] h-auto relative"
    >
      <div className="responsive-width mt-[100px] h-full flex flex-col">
        <h1
          className="w-full font-black leading-tight"
          style={{
            fontSize: "clamp(3.75rem, 9vw, 10rem)",
          }}
        >
          Lead. Craft. Play.
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:-mt-24 mt-8 w-full flex-1 gap-8">
          <div className="text-left lg:w-1/2 w-full">
            <h5 className="w-full">
              Hi, I'm Fausto, a multidisciplinary product designer with over 10
              years of experience turning ideas into meaningful products. I run
              my own UX/UI studio where I help brands bring bold ideas to life.
            </h5>
            <br />
            <h5 className="w-full">
              {" "}
              I'm a <strong>builder at heart, endlessly curious,</strong> and
              love turning complex problems into simple, beautiful experiences.
            </h5>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center  lg:justify-end">
            <img
              src={HeaderImg3}
              alt="Hero Image"
              className=" w-[30%] md:w-[30%] lg:w-[34%] xlg:w-[30%]  max-w-md object-contain lg:mb-0 mb-4"
            ></img>
          </div>
        </div>
      </div>
      <Arrow
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:mb-10 mb-10 animate-bounce lg:block hidden cursor-pointer"
        onClick={() => {
          document
            .getElementById("work")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
}
