import AllCookies from "./AllCookies";
import NewProducts from "./NewProducts";
import Vegan from "./Vegan";
import LowCalories from "./LowCalories";
import { useState } from "react";
import LimitedEd from "./LimitedEd";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CategorySelection = () => {
  const [category, setCategory] = useState(<AllCookies />);

  const categories = [
    { id: 0, title: "All", component: <AllCookies /> },
    { id: 1, title: "New", component: <NewProducts /> },
    { id: 2, title: "Vegan", component: <Vegan /> },
    { id: 3, title: "Low Cal.", component: <LowCalories /> },
    { id: 4, title: "Limited Ed.", component: <LimitedEd /> },
  ];

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#category-selection",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-cookie", { y: 800, x: 500 }, 0)
      .to(".left-cookie", { y: 800, x: -500 }, 0);
  }, []);

  return (
    <section
      id="category-selection"
      className="relative bg-stone-950 mx-4 rounded-4xl shadow-lg mt-35 min-h-400"
    >
      {/* Left cookie */}
      <img
        src="/media/white-macadamia.webp"
        alt="white chocolate macadamia cookie"
        className="left-cookie hidden 2xl:flex 2xl:absolute 2xl:left-15 2xl:top-45 2xl:w-80 -z-1"
      />
      {/* Right cookie */}
      <img
        src="/media/smarties.webp"
        alt="smarties cookie"
        className="right-cookie hidden 2xl:flex 2xl:absolute 2xl:right-10 2xl:top-200 2xl:w-80 -z-1"
      />
      <nav className="flex justify-center w-full p-10">
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 xl:text-xl">
          {categories.map((category) => (
            <li
              key={category.title}
              className="flex justify-center cursor-pointer p-4 rounded-4xl w-40 bg-stone-900/70 hover:text-[#a57431] hover:brightness-110 duration-300 active:scale-98"
              onClick={() => setCategory(category.component)}
            >
              {category.title}
            </li>
          ))}
        </ul>
      </nav>
      <div className="py-10"> {category}</div>
    </section>
  );
};

export default CategorySelection;
