import { cookies, milks } from "../data/products";
import CookieCard from "./CookieCard";
import MilkCard from "./MilkCard";

const BestSales = () => {
  const discountedCookies = cookies.filter((cookie) => cookie.discount !== 0);
  const discountedMilks = milks.filter((milk) => milk.discount !== 0);

  return (
    <div className="flex flex-col justify-center items-center mt-35">
      <h2 className="text-5xl font-[Caprasimo] mb-6">Best Sales</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:md:grid-cols-3 gap-y-35 gap-x-10 mt-25">
        {discountedCookies.map((discountedCookie) => (
          <CookieCard key={discountedCookie.id} {...discountedCookie} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:md:grid-cols-3 gap-y-35 gap-x-10 mt-35">
        {discountedMilks.map((discountedMilk) => (
          <MilkCard key={discountedMilk.id} {...discountedMilk} />
        ))}
      </div>
    </div>
  );
};

export default BestSales;
