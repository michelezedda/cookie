import { useCart } from "../../store/cartStore";
import type { SuggestedCardProps } from "../../types/types";
import { TbPaperBag } from "react-icons/tb";
import { formatMoney } from "../../utils/money";

const SuggestedCard = ({ cookie }: SuggestedCardProps) => {
  // Access addToCart function from Zustand store
  const addToCart = useCart((state) => state.addToCart);

  return (
    <div className="relative flex flex-col justify-end items-center text-center bg-stone-950 shadow-lg rounded-4xl p-6 h-50 w-50 gap-3">
      {/* Cookie image */}
      <img
        src={cookie.pic}
        alt={cookie.name}
        data-testid="cookie-image"
        className="w-34 absolute -top-18"
      />
      {/* Calories label */}
      {cookie.calories && (
        <p className="text-stone-500 absolute top-16">
          {cookie.calories} kcals
        </p>
      )}
      {/* Cookie name */}
      <div className="flex flex-col absolute top-24 mx-4">
        <h3 className="text-xl font-bold">{cookie.name}</h3>
      </div>
      {/* Add to cart button */}
      <button
        className="flex gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer w-full shadow py-1 active:scale-98"
        onClick={() => addToCart(cookie)}
      >
        {/* Bag icon and price */}
        <TbPaperBag size={35} />
        <p className="text-2xl">{formatMoney(cookie.price)}</p>
      </button>
    </div>
  );
};

export default SuggestedCard;
