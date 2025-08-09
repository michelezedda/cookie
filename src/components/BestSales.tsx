import { cookies, milks } from "../data/products";
import CookieCard from "./CookieCard";

const BestSales = () => {
  const discountedCookies = cookies.filter((cookie) => cookie.discount !== 0);
  const discountedMilks = milks.filter((milk) => milk.discount !== 0);
  const discountedProducts = [...discountedCookies, ...discountedMilks];

  return (
    <div className="flex flex-col justify-center items-center mt-35">
      <h2 className="text-5xl font-[Caprasimo] mb-6">Best Sales</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:md:grid-cols-3 gap-y-35 gap-x-10 mt-25">
        {discountedProducts.map((discountedProduct) => (
          <CookieCard key={discountedProduct.id} {...discountedProduct} />
        ))}
      </div>
    </div>
  );
};

export default BestSales;
