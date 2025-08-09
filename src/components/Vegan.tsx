import { cookies } from "../data/products";
import ProductCard from "./ProductCard";

const Vegan = () => {
  const veganCookies = cookies.filter((cookie) => cookie.vegan);

  return (
    <div className="flex flex-col justify-center items-center mt-15">
      <h2 className="text-5xl font-[Caprasimo] mb-6">Vegan Selection</h2>
      <div className="grid grid-cols-1 gap-35 mt-25">
        {veganCookies.map((veganCookie) => (
          <ProductCard key={veganCookie.id} {...veganCookie} />
        ))}
      </div>
    </div>
  );
};

export default Vegan;
