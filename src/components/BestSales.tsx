import { cookies, milks } from "../data/products";
import ProductCard from "./ProductCard";

const BestSales = () => {
  const discountedCookies = cookies.filter((cookie) => cookie.discount !== 0);
  const discountedMilks = milks.filter((milk) => milk.discount !== 0);

  return (
    <div className="flex flex-col justify-center items-center mt-15">
      <h2 className="text-5xl font-[Caprasimo] mb-6">Best Sales</h2>
      <div className="grid grid-cols-1 gap-35 mt-25">
        {discountedCookies.map((discountedCookie) => (
          <ProductCard key={discountedCookie.id} {...discountedCookie} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-35 mt-35">
        {discountedMilks.map((discountedMilk) => (
          <ProductCard key={discountedMilk.id} {...discountedMilk} />
        ))}
      </div>
    </div>
  );
};

export default BestSales;
