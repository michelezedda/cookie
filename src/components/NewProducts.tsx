import { cookies } from "../data/products.ts";
import CookieCard from "./CookieCard.tsx";

const NewProducts = () => {
  const newCookies = cookies.filter((cookie) => cookie.new);

  return (
    <div className="flex flex-col justify-center items-center mt-35">
      <h2 className="text-5xl font-[Caprasimo] mb-6">New Entries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:md:grid-cols-3 gap-y-35 gap-x-10 mt-25">
        {newCookies.map((newCookie) => (
          <CookieCard key={newCookie.id} {...newCookie} />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
