import AllCookies from "./AllCookies";
import NewProducts from "./NewProducts";
import Vegan from "./Vegan";
import LowCalories from "./LowCalories";
import SweetestDeals from "./SweetestDeals";
import { useState } from "react";
import LimitedEd from "./LimitedEd";

const CategorySelection = () => {
  const [category, setCategory] = useState(<AllCookies />);

  const categories = [
    { id: 0, title: "All", component: <AllCookies /> },
    { id: 1, title: "New", component: <NewProducts /> },
    { id: 2, title: "Vegan", component: <Vegan /> },
    { id: 3, title: "Low Cal.", component: <LowCalories /> },
    { id: 5, title: "Limited Ed.", component: <LimitedEd /> },
    { id: 5, title: "Deals", component: <SweetestDeals /> },
  ];

  return (
    <div className="bg-stone-950 mx-4 rounded-4xl shadow-lg mt-35">
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
    </div>
  );
};

export default CategorySelection;
