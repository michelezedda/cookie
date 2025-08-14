import { cookies } from "../../data/products";
import SuggestedCard from "./SuggestedCard";

const AddMore = () => {
  const suggestions = cookies.filter((cookie) => cookie.suggested);

  return (
    <section
      id="add-more"
      className="flex flex-col justify-center items-center mt-15 lg:pt-25 w-full px-4"
    >
      <h2 className="text-4xl font-[Caprasimo] mb-2">Anything Else?</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-30 gap-x-5 md:gap-x-14 lg:gap-x-8 mt-25">
        {suggestions.map((cookie) => (
          <SuggestedCard key={cookie.id} cookie={{ ...cookie, quantity: 1 }} />
        ))}
      </div>
    </section>
  );
};

export default AddMore;
