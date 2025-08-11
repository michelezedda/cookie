import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-cookie", { y: 200, x: 70 }, 0)
      .to(".left-cookie", { y: 200, x: -70 }, 0);
  }, []);

  return (
    <header
      className="flex justify-center items-center w-full mt-40 relative"
      id="hero"
    >
      {/* Left cookie */}
      <img
        src="/media/chips.webp"
        alt="chocolate chips cookie"
        className="left-cookie absolute -left-14 lg:-left-16 top-10 md:top-20 w-40 md:w-50 2xl:w-70"
      />
      {/* Right cookie */}
      <img
        src="/media/double-white.webp"
        alt="double white chocolate cookie"
        className="right-cookie absolute  -right-14 lg:-right-10 top-1/2 md:top-150 lg:top-170 w-40 md:w-50 2xl:w-70"
      />
      <div className="mx-auto max-w-screen-lg relative">
        <div className="flex flex-col lg:flex-row m-4">
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
