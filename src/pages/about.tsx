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
      "(prefers-reduced-motion: reduce)"
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
        "-=0.1"
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
        "-=0.2"
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
                My journey started as a graphic designer working in a variety of
                projects, all the way from print to web. I quickly fell in love
                with designing digital products and making people’s lives a
                little easier, in the past 15 years I’ve been working with small
                and large multi-disciplinary teams, leading large end-to-end
                product initiatives with a holistic approach. Advocate for the
                user with a data-informed and research-guided mindset, flexible
                and adaptable, team player, and passionate for designing
                inclusive, usable, useful, and beautiful products.{" "}
              </h5>
              <h5 className=" mb-6">
                At the moment, I’m running my own UX/UI design studio, working
                with a variety of startups, enterprises, and agencies.
              </h5>
              <h5 className=" mb-6">
                If you don’t find me in my computer designing, you’ll find me
                around NYC with friends{" "}
                <a
                  href="https://www.instagram.com/faustonunez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" underline"
                >
                  taking photographs of the city or traveling somewhere in the
                  world.
                </a>
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
