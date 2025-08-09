import { milks } from "../data/products";
import ProductCard from "./ProductCard";

const Milks = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-15">
      <h2 className="text-5xl font-[Caprasimo] mb-6">Milk Selection</h2>
      <div className="grid grid-cols-1 gap-35 mt-25">
        {milks.map((milk) => (
          <ProductCard key={milk.id} {...milk} />
        ))}
      </div>
    </div>
  );
};

export default Milks;
