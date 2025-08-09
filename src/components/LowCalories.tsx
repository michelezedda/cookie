import { cookies } from "../data/products";
import CookieCard from "./CookieCard";

const LowCalories = () => {
  const lowCalCookies = cookies.filter((cookie) => cookie.calories <= 150);

  return (
    <div className="flex flex-col justify-center items-center mt-35">
      <h2 className="text-5xl font-[Caprasimo] mb-6">Low Calories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:md:grid-cols-3 gap-y-35 gap-x-10 mt-25">
        {lowCalCookies.map((lowCalCookie) => (
          <CookieCard key={lowCalCookie.id} {...lowCalCookie} />
        ))}
      </div>
    </div>
  );
};

export default LowCalories;
