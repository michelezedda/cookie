import { milks } from "../data/products";
import MilkCard from "./MilkCard";

const Milks = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-35">
      <h2 className="text-5xl font-[Caprasimo] mb-6">Milk Selection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:md:grid-cols-3 gap-y-35 gap-x-10 mt-25">
        {milks.map((milk) => (
          <MilkCard key={milk.id} {...milk} />
        ))}
      </div>
    </div>
  );
};

export default Milks;
