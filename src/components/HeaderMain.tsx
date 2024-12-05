interface HeaderMainProps {
  headingText: string;
  imgSrc: string;
}

export function HeaderMain({ headingText, imgSrc }: HeaderMainProps) {
  return (
    <div className="flex justify-center items-center bg-[#1b1d27] md:w-screen md:h-screen w-[100%] h-auto">
      <div className="responsive-width-pb  h-auto flex flex-col justify-center items-center sm:pt-[184px] pt-[124px]">
        <div className="xl:w-[80%] w-[80%] flex justify-center items-center text-center mb-[2%]"></div>
        <h2 className="mb-[16px] lg:mt-[124px] lg:w-[70%] w-[100%] text-white text-center">
          {headingText}
        </h2>
        <img
          src={imgSrc}
          alt="Hero Image"
          className="2xl:w-[60%] md:w-[80%] h-auto my-[0px] mt-[0px] md:pb-0 lg:pb-24 pb-6"
        />
      </div>
    </div>
  );
}
