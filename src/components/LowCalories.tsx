import { cookies } from "../data/products";
import ProductCard from "./ProductCard";

const LowCalories = () => {
  const lowCalCookies = cookies.filter((cookie) => cookie.calories <= 150);

  return (
    <div className="flex flex-col justify-center items-center mt-15">
      <h2 className="text-5xl font-[Caprasimo] mb-6">Low Calories</h2>
      <div className="grid grid-cols-1 gap-35 mt-25">
        {lowCalCookies.map((lowCalCookie) => (
          <ProductCard key={lowCalCookie.id} {...lowCalCookie} />
        ))}
      </div>
    </div>
  );
};

export default LowCalories;
