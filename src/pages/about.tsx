import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Resume } from "@/components/resume.tsx";
import HeaderImg from "../assets/images/homepage/about-portrait-image.png";
import { Helmet } from "react-helmet-async";

export function About() {
  const textBlockRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Ensure refs are available
    if (!textBlockRef.current || !imageRef.current) {
      console.log("Refs not ready yet");
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      // Simple fade in for reduced motion
      gsap.set([textBlockRef.current, imageRef.current], {
        opacity: 0,
      });
      gsap.to([textBlockRef.current, imageRef.current], {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      return;
    }

    // Set initial states for text block and image
    gsap.set(textBlockRef.current, {
      opacity: 0,
      y: 30,
      filter: "blur(4px)",
      transformOrigin: "center bottom",
    });

    gsap.set(imageRef.current, {
      opacity: 0,
      x: 20,
      filter: "blur(4px)",
      transformOrigin: "center right",
    });

    // Create timeline with custom easing
    console.log("Starting About page GSAP animation");
    const tl = gsap.timeline({ delay: 0.5 });

    // Text block - rolls up slightly from below, soft overshoot, gentle ease
    tl.to(textBlockRef.current, {
      opacity: 1,
      y: -8, // soft overshoot
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power2.out",
    })
      .to(
        textBlockRef.current,
        {
          y: 0, // settle to final position
          duration: 0.3,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
        "-=0.1",
      )

      // Image - slides in from right, starts 300ms after text begins
      .to(
        imageRef.current,
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2",
      );
  }, []);

  return (
    <div>
      <Helmet>
        <title>About Me</title>
        <meta name="description" content="About Fausto's Career" />
      </Helmet>
      <div className="flex  justify-center items-center  bg-brand-primary-20 md:w-screen md:h-screen w-[100%] h-auto">
        <div
          id="Header"
          className=" responsive-width-pb  responsive-width  h-auto flex md:flex-row flex-col  items-center  "
        >
          <div
            ref={textBlockRef}
            className="text-lef   md:w-3/4 md:mr-[200px]  w-full mr-0"
          >
            <h2 className="mb-[16px] mt-[124px] w-full">About Me</h2>
            <div className="w-full prose prose-[54px]">
              <h5 className=" mb-6 w-auto">
                Hi, I’m Fausto and I'm based in NYC. I've been in product design
                for the last 15 years. I'm a creative at heart. Ever since I was
                a kid, art and design have been a fundamental part of me and one
                of the lenses through which I see life.
              </h5>
              <h5 className=" mb-6">
                I specialize in Marketplace and SaaS with a focus on consumer
                growth and 0→1 products. More recently I've been diving into
                AI-Powered products.
              </h5>
              <h5 className=" mb-6">
                I'm currently working at my own design studio Momentoos,
                previously at The Muse and Warner Bros. Digital Labs.
              </h5>
              <h5 className=" mb-6">
                When I'm not at my desk, I love taking my Nikon F3 film camera
                or Fuji XT3 to{" "}
                <a
                  href="https://faustophotography.com/#/place/newyork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  {" "}
                  photograph the ordinary but profound moments of every day in
                  NYC
                </a>
                . I'm also an avid traveler and salsa dancer.
              </h5>
            </div>
          </div>
          <img
            ref={imageRef}
            src={HeaderImg}
            alt="Hero Image"
            className="w-[30%] md:w-[30%] lg:w-[250px] xlg:w-[30%]  max-w-md object-contain lg:mb-0 mb-4 my-[0px] mt-[0px] md:pb-0 pb-6 md:mt-[200px]"
          ></img>
        </div>
      </div>
      <Resume />
    </div>
  );
}
