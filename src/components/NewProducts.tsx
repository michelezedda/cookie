import { cookies } from "../data/products.ts";
import ProductCard from "./ProductCard.tsx";

const NewProducts = () => {
  const newCookies = cookies.filter((cookie) => cookie.new);

  return (
    <div className="flex flex-col justify-center items-center mt-15">
      <h2 className="text-5xl font-[Caprasimo] mb-6">New Entries</h2>
      <div className="grid grid-cols-1 gap-35 mt-25">
        {newCookies.map((newCookie) => (
          <ProductCard key={newCookie.id} {...newCookie} />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
