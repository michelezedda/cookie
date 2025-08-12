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
    { id: 3, title: "Low Calories", component: <LowCalories /> },
    { id: 5, title: "Limited Editions", component: <LimitedEd /> },
    { id: 5, title: "Deals", component: <SweetestDeals /> },
  ];

  return (
    <div className="bg-stone-950 mx-4 rounded-4xl shadow-lg mt-35">
      <nav className="flex justify-center w-full shadow-lg bg-stone-900/50 rounded-4xl">
        <ul className="flex gap-1">
          {categories.map((category) => (
            <li
              key={category.title}
              className="bg-stone-900 p-4 rounded-4xl cursor-pointer active:scale-98"
              onClick={() => setCategory(category.component)}
            >
              {category.title}
            </li>
          ))}
        </ul>
      </nav>
      <div className="py-20"> {category}</div>
    </div>
  );
};

export default CategorySelection;
