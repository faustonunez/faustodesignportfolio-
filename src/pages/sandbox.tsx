import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { ProjectCard } from "../components/ProjectCard";
import TheLabColorSystemGenerator from "../assets/images/the-lab/the-lab-color-system-generator.png";
import TheLabEventParser from "../assets/images/the-lab/the-lab-event-parser.png";
import TheLabEventParserVideo from "../assets/images/the-lab/event-parser-video.mp4";
import TheLabFaustoPhotography from "../assets/images/the-lab/the-lab-fausto-photography.png";
import TheLabDonutModeling from "../assets/images/the-lab/the-lab-donut-modeling.png";
import TheLabDesignersHub from "../assets/images/the-lab/the-lab-designers-hub.png";

import { Helmet } from "react-helmet-async";

export function Sandbox() {
  const textBlockRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure refs are available
    if (!textBlockRef.current || !gridRef.current) {
      console.log("Refs not ready yet");
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Simple fade in for reduced motion
      gsap.set([textBlockRef.current, gridRef.current], {
        opacity: 0,
      });
      gsap.to([textBlockRef.current, gridRef.current], {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      return;
    }

    // Set initial states for text block and grid
    gsap.set(textBlockRef.current, {
      opacity: 0,
      y: 30,
      filter: "blur(4px)",
      transformOrigin: "center bottom",
    });

    gsap.set(gridRef.current, {
      opacity: 0,
      y: 30,
      filter: "blur(4px)",
      transformOrigin: "center bottom",
    });

    // Create timeline with custom easing
    console.log("Starting Sandbox page GSAP animation");
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

      // Grid - slides in from below, starts 300ms after text begins
      .to(
        gridRef.current,
        {
          opacity: 1,
          y: 0,
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
        <title>The Lab - Fausto Nuñez</title>
        <meta
          name="description"
          content="Explore Fausto's personal projects and experiments in The Lab."
        />
      </Helmet>
      <div className="flex justify-center items-start bg-brand-primary-20 md:w-screen  w-[100%] h-auto">
        <div
          id="Header"
          className="responsive-width-pb responsive-width h-auto flex md:flex-row flex-col items-center"
        >
          <div ref={textBlockRef} className="text-left   w-full mr-0">
            <h2 className="mb-[16px] mt-[124px] w-full">Sandbox</h2>
            <div className="w-full prose prose-[54px]">
              <h5 className="mb-6 w-auto">
                A collection of personal projects for the purpose of learning
                and growing.
              </h5>
            </div>
            {/* Projects Grid */}
            <div
              ref={gridRef}
              className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 mt-8"
            >
              {/* <ProjectCard
                image={TheLabColorSystemGenerator}
                title="Color System Generator"
                description="A tool for generating consistent color palettes and design systems for digital products."
                link="https://google.com"
              />
               */}
              <ProjectCard
                image={TheLabEventParser}
                video={TheLabEventParserVideo}
                title="AI Event Image Parser "
                description="Juno is a program that utilizes OpenAI's GPT -4 Vision to parse through an image event, extracting its information, which is then generated into a calendar link. I designed it and vibe-coded using Figma Make."
                link="https://perm-slaw-92786319.figma.site/"
                videoOnly={true}
              />
              <ProjectCard
                image={TheLabFaustoPhotography}
                title="Fausto’s photography redesign"
                description="I redesigned and coded my photography website from scratch, which gave more flexibility in the site’s organization and design. At this time, I was also learning React JS, Tailwind, Github, which is what I used to build the site."
                link="https://faustophotography.com/"
              />
              <ProjectCard
                image={TheLabDonutModeling}
                title="3D donut modeling"
                description="Even though I spend most of my time in 2D design, I enjoy 3D modeling. For a few years now, I’ve been learning Blender on and off. Finally, I dedicated the time to finish the famous donut tutorial by Andrew Price, better known as the Blender Guru."
                link="https://dribbble.com/shots/25404595-Donuts"
              />
              <ProjectCard
                image={TheLabDesignersHub}
                title="Designing a hub of learning resources for creatives "
                description="A little fun personal project . A hub of design resources for designers to get inspired and motivated with a wide range of materials to learn and grow. I used "
                link="https://dribbble.com/shots/20564886-Designers-Hub"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
