import { cookies } from "../../data/products";
import SuggestedCard from "./SuggestedCard";

const AddMore = () => {
  const suggestions = cookies.filter((cookie) => cookie.suggested);

  return (
    <div className="flex flex-col justify-center items-center mt-15">
      <h2 className="text-4xl font-[Caprasimo] mb-6">Anything Else?</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-30 gap-x-5 md:gap-x-14 mt-25">
        {suggestions.map((cookie) => (
          <SuggestedCard key={cookie.id} cookie={{ ...cookie, quantity: 1 }} />
        ))}
      </div>
    </div>
  );
};

export default AddMore;
