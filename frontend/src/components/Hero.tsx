import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <div className="gradientBackground">
        <Navbar />
        <div className=" flex flex-col md:flex-row justify-center md:px-[100px] px-[20px] pt-20 ">
          <div className="md:h-[25rem] md:w-1/2 flex flex-col gap-4 items-center justify-center ">
            <div className="sm:pl-7 pl-5">
              <h3>FOREX MINERS ACADEMY</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui
                quae neque aut et fugiat obcaecati. Minus ea architecto impedit!
              </p>
            </div>
            <div className="sm:flex-row flex flex-col sm:gap-10 gap-2">
              <button className="w-36 h-10 bg-green-500 hover:bg-blue-600 duration-700 text-white rounded">
                Telegram channel
              </button>
              <button className="w-24 h-10  duration-700 text-black border-black border-[1.5px] rounded">
                Log in
              </button>
            </div>
          </div>

          <div className="h-full w-1/2 border-2"></div>
        </div>
      </div>
    </>
  );
};
export default Hero;
