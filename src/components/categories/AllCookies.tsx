import { cookies } from "../../data/products";
import CookieCard from "../CookieCard";

const AllCookies = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-5xl font-[Caprasimo] mb-10">All Of Them</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:md:grid-cols-3 gap-y-35 gap-x-10 mt-25">
        {cookies.map((cookie) => (
          <CookieCard key={cookie.id} cookie={{ ...cookie, quantity: 1 }} />
        ))}
      </div>
    </div>
  );
};

export default AllCookies;
