import { useRef } from "react";

import { Helmet } from "react-helmet-async";

export function TheLab() {
  const textBlockRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Helmet>
        <title>The Lab - Fausto Nuñez</title>
        <meta
          name="description"
          content="Explore Fausto's personal projects and experiments in The Lab."
        />
      </Helmet>
      <div className="flex justify-center items-start bg-brand-primary-20 md:w-screen md:h-screen w-[100%] h-auto">
        <div
          id="Header"
          className="responsive-width-pb responsive-width h-auto flex md:flex-row flex-col items-center"
        >
          <div
            ref={textBlockRef}
            className="text-left md:w-3/4 md:mr-[200px] w-full mr-0"
          >
            <h2 className="mb-[16px] mt-[124px] w-full">The Lab</h2>
            <div className="w-full prose prose-[54px]">
              <h5 className="mb-6 w-auto">
                A collection of personal projects for the purpose of learning
                and growing.
              </h5>
            </div>
            <div>
              <p>this is a test</p>
              <p>this is a test</p>
              <p>this is a test</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
