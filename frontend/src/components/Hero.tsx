import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <div className="gradientBackground">
        <Navbar />
        <div className="flex justify-center px-[100px] pt-7">
          <div className="h-[25rem] w-1/2 border-red-500 border-2 flex flex-col gap-4 items-center justify-center px-10">
            <h3>FOREX MINERS ACADEMY</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui
              quae neque aut et fugiat obcaecati. Minus ea architecto impedit!
            </p>
            <div className="flex gap-10">
              <button className="w-36 h-10 bg-green-500 hover:bg-blue-600 duration-700 text-white rounded">
                Telegram channel
              </button>
              <button className="w-24 h-10  duration-700 text-black border-black border-[1.5px] rounded">
                Log in
              </button>
            </div>
          </div>

          <div className="h-full w-1/2 border-red-500 border-2"></div>
        </div>
      </div>
    </>
  );
};
export default Hero;
