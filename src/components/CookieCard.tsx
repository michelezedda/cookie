import { useCart } from "../store/cartStore";
import type { CookieCardProps } from "../types/types";
import { TbPaperBag } from "react-icons/tb";

const CookieCard = ({ cookie }: CookieCardProps) => {
  // Get addToCart function from store
  const addToCart = useCart((state) => state.addToCart);

  return (
    <div className="relative flex flex-col justify-end items-center text-center bg-gradient-to-t from-stone-900 via-stone-900 to-stone-800 shadow-lg shadow-black rounded-4xl p-6 h-115 w-80 gap-3">
      {/* Image */}
      <img
        src={cookie.pic}
        alt={cookie.name}
        className="w-50 absolute -top-25"
      />
      {/* Calories info */}
      {cookie.calories && (
        <p className="text-stone-500 absolute top-25">
          {cookie.calories} kcals
        </p>
      )}
      {/* "New!" badge */}
      {cookie.new && (
        <span className="absolute flex justify-center items-center -top-5 -left-4 bg-[#a57431] w-15 h-15 rounded-full font-semibold -rotate-25 text-xl animate-pulse">
          New!
        </span>
      )}
      {/* Tags section (vegan, low calories, limited) */}
      <div className="absolute top-34 grid grid-cols-2 gap-4 w-[90%]">
        {cookie.vegan && (
          <span className="bg-green-900 px-3 py-1 rounded-full">Vegan</span>
        )}
        {cookie.calories <= 120 && (
          <span className="bg-purple-900 px-3 py-1 rounded-full">
            Low calories
          </span>
        )}
        {cookie.limited && (
          <span className="bg-blue-900 px-3 py-1 rounded-full">
            Limited Ed.
          </span>
        )}
      </div>
      {/* Cookie name and description */}
      <div className="flex flex-col absolute top-58 mx-4">
        <h3 className="text-3xl font-bold">{cookie.name}</h3>
        <p className="text-stone-500 mt-1">{cookie.description}</p>
      </div>
      {/* Add to cart button */}
      <button
        className="flex gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer w-full shadow py-2 active:scale-98"
        onClick={() => addToCart(cookie)}
      >
        <TbPaperBag size={35} />
        <p className="text-3xl">$ {cookie.price}</p>
      </button>
    </div>
  );
};

export default CookieCard;
