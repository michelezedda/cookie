import { cookies } from "../data/products";
import CookieCard from "./CookieCard";

const LimitedEd = () => {
  const limitedCookies = cookies.filter((cookie) => cookie.limited);

  return (
    <div className="flex flex-col justify-center items-center mt-15">
      <h2 className="text-5xl font-[Caprasimo] mb-6">Limited Editions</h2>
      <div className="grid grid-cols-1 gap-35 mt-25">
        {limitedCookies.map((limitedCookie) => (
          <CookieCard key={limitedCookie.id} {...limitedCookie} />
        ))}
      </div>
    </div>
  );
};

export default LimitedEd;
