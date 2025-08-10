const Hero = () => {
  return (
    <header className="flex justify-center items-center bg-stone-950 w-full pt-30 shadow shadow-stone-950">
      <div className="mx-auto max-w-screen-lg relative">
        <div className="flex flex-col lg:flex-row m-4 shadow shadow-stone-950">
          <h1 className="text-6xl text-white font-[Caprasimo]">
            Get A <br />
            <span className="ml-10 bg-gradient-to-t from-[#a57431] to-white bg-clip-text text-transparent">
              Craving
            </span>
            <br />
            Grab A <br />
            <span className="ml-10 bg-gradient-to-t from-[#a57431] to-white bg-clip-text text-transparent">
              Cookie!
            </span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Hero;
