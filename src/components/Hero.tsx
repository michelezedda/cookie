import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // GSAP scroll animation
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
      .to(".right-cookie", { y: 300, x: 70 }, 0)
      .to(".left-cookie", { y: 300, x: -70 }, 0);
  }, []);

  return (
    <header
      className="flex justify-center items-center w-full mt-40 relative"
      id="hero"
    >
      {/* Left decorative cookie */}
      <img
        src="/media/chips.webp"
        alt="chocolate chips cookie"
        className="left-cookie absolute -left-20 lg:-left-16 top-14 md:top-20 lg:-top-5 2xl:top-20 w-40 md:w-50 2xl:w-80"
      />
      {/* Right decorative cookie */}
      <img
        src="/media/double-white.webp"
        alt="double white chocolate cookie"
        className="right-cookie absolute -right-20 lg:-right-10 top-50 md:top-160 lg:top-25 2xl:top-150 w-40 md:w-50 2xl:w-80"
      />
      {/* Hero text container */}
      <div className="mx-auto max-w-screen-lg relative">
        <div className="flex flex-col lg:flex-row m-4">
          <h1 className="text-[90px] md:text-[100px] leading-24 text-white font-[Caprasimo]">
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
