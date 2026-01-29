import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeaderImg3 from "../assets/images/homepage/hero-image-3.png";
import Arrow from "../assets/images/homepage/arrow-down.svg?react";

export function Hero() {
  const leadRef = useRef<HTMLSpanElement>(null);
  const craftRef = useRef<HTMLSpanElement>(null);
  const playRef = useRef<HTMLSpanElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Ensure refs are available
    if (
      !leadRef.current ||
      !craftRef.current ||
      !playRef.current ||
      !textBlockRef.current ||
      !imageRef.current
    ) {
      console.log("Refs not ready yet");
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Simple fade in for reduced motion
      gsap.set(
        [
          leadRef.current,
          craftRef.current,
          playRef.current,
          textBlockRef.current,
          imageRef.current,
        ],
        {
          opacity: 0,
        }
      );
      gsap.to(
        [
          leadRef.current,
          craftRef.current,
          playRef.current,
          textBlockRef.current,
          imageRef.current,
        ],
        {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        }
      );
      return;
    }

    // Set initial states for counter-roll animation
    gsap.set(leadRef.current, {
      opacity: 0,
      y: 100,
      filter: "blur(4px)",
      transformOrigin: "center bottom",
    });

    gsap.set(craftRef.current, {
      opacity: 0,
      y: -100,
      filter: "blur(4px)",
      transformOrigin: "center top",
    });

    gsap.set(playRef.current, {
      opacity: 0,
      y: 100,
      filter: "blur(4px)",
      transformOrigin: "center bottom",
    });

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
    console.log("Starting GSAP animation");
    const tl = gsap.timeline({ delay: 0.5 });

    // Lead - rolls up from below, overshoots, settles
    tl.to(leadRef.current, {
      opacity: 1,
      y: -15, // overshoot
      filter: "blur(0px)",
      duration: 0.4,
      ease: "power2.out",
    })
      .to(
        leadRef.current,
        {
          y: 0, // settle to final position
          duration: 0.3,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
        "-=0.1"
      )

      // Craft - rolls down from above, passes baseline, settles (60ms stagger)
      .to(
        craftRef.current,
        {
          opacity: 1,
          y: 15, // pass baseline
          filter: "blur(0px)",
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.54"
      ) // 60ms stagger
      .to(
        craftRef.current,
        {
          y: 0, // settle to final position
          duration: 0.3,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
        "-=0.1"
      )

      // Play - rolls up from below again (60ms stagger)
      .to(
        playRef.current,
        {
          opacity: 1,
          y: -15, // overshoot
          filter: "blur(0px)",
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.54"
      ) // 60ms stagger
      .to(
        playRef.current,
        {
          y: 0, // settle to final position
          duration: 0.3,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
        "-=0.1"
      )

      // Text block - rolls up slightly from below, soft overshoot, gentle ease
      .to(
        textBlockRef.current,
        {
          opacity: 1,
          y: -8, // soft overshoot
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      )
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
    <div
      id="Header"
      className="flex justify-top items-center lg:flex-col flex-col bg-brand-primary-20 lg:w-screen lg:h-screen w-[100%] h-auto relative"
    >
      <div className="responsive-width mt-[100px] h-full flex flex-col">
        <h1
          className="w-full font-black leading-tight overflow-hidden"
          style={{
            fontSize: "clamp(3.75rem, 9vw, 10rem)",
          }}
        >
          <span ref={leadRef} className="inline-block overflow-hidden">
            Lead.
          </span>{" "}
          <span ref={craftRef} className="inline-block overflow-hidden">
            Craft.
          </span>{" "}
          <span ref={playRef} className="inline-block overflow-hidden">
            Play.
          </span>
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:-mt-24 mt-8 w-full flex-1 gap-8">
          <div ref={textBlockRef} className="text-left lg:w-1/2 w-full">
            <h5 className="w-full">
            I'm Fausto, a Senior Product Designer with 15+ years of experience.
              
            </h5>
            <br />
            <h5 className="w-full">
              {" "}
              I help teams design and scale marketplace and SaaS products. I blend  strategy, research, and craft to drive growth and launch 0–1 experiences.
            </h5>
            <br />
            <h5 className="w-full">
              {" "}
              Currently at Momentoos, previously at The Muse and Warner Bros Digital Labs.
            </h5>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center  lg:justify-end">
            <img
              ref={imageRef}
              src={HeaderImg3}
              alt="Hero Image"
              className=" w-[30%] md:w-[30%] lg:w-[250px] xlg:w-[30%]  max-w-md object-contain lg:mb-0 mb-4"
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
