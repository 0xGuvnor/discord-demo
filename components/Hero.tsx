import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <div className="text-white bg-blurple_dark">
      <div className="relative overflow-hidden py-9 px-7 md:flex h-[55vh] md:h-[60vh] lg:h-[50vh]">
        <div className="z-10 flex flex-col py-10 md:py-16 lg:text-center lg:max-w-3xl lg:mx-auto md:max-w-md gap-7">
          <h1 className="text-3xl font-black tracking-wide uppercase md:text-6xl">
            Imagine a place...
          </h1>
          <p className="text-base leading-8 md:tracking-wide md:text-lg">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>

          <div className="flex flex-wrap gap-6 md:flex-col md:items-start sm:items-center lg:justify-center sm:flex-row lg:flex-row">
            <button className="flex items-center justify-center px-8 py-4 text-lg font-medium text-black transition duration-200 ease-in-out bg-white rounded-full hover:shadow-2xl hover:text-blurple focus:outline-none hover:shadow-blurple">
              <ArrowDownTrayIcon className="w-6 mr-2 stroke-2" /> Download for
              Mac
            </button>
            <button className="bg-[#23272a] rounded-full font-medium px-8 py-4 text-lg hover:shadow-2xl hover:bg-gray-700 focus:outline-none hover:shadow-gray-700 transition duration-200 ease-in-out">
              Open Discord in your browser
            </button>
          </div>
        </div>

        <img src="background.svg" className="absolute inset-x-0 bottom-0" />
        <img
          src="foreground1.svg"
          className="absolute bottom-0 -left-16 left md:hidden lg:inline lg:left-72"
        />
        <img
          src="foreground2.svg"
          className="absolute bottom-0 -right-24 h-[380px] hidden md:inline lg:right-96"
        />
      </div>
    </div>
  );
};
export default Hero;
