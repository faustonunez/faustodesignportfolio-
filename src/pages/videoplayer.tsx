import VideoPlayerImg from "../assets/images/videoplayer/vp-hero-image0-flat.png";

export function VideoPlayer() {
  return (
    <div>
      <div className="flex  justify-center items-center  bg-[#1b1d27] md:w-screen md:h-screen w-[100%] h-auto ">
        <div
          id="Header"
          className=" responsive-width-pb  responsive-width  h-auto flex  flex-col justify-center  items-center 
            2xl:pt-[260px]   "
        >
          <div className=" xl:w-[60%] w-[90%]  flex justify-center items-center text-center mb-[2%] ">
            <h2 className="mb-[16px] lg:mt-[124px] w-full text-white">
              Designing an adaptable video player experience{" "}
            </h2>
          </div>
          <img
            src={VideoPlayerImg}
            alt="Hero Image"
            className=" 2xl:w-[60%] w-3/4 h-3/4 my-[0px] mt-[0px] md:pb-0 pb-6"
          ></img>
        </div>
      </div>
      Need content here
    </div>
  );
}
