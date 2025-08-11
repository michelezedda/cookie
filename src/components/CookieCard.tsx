import { useCart } from "../store/cartStore";
import type { CookieCardProps } from "../types/types";

const CookieCard = ({ cookie }: CookieCardProps) => {
  const addToCart = useCart((state) => state.addToCart);

  return (
    <div className="relative flex flex-col justify-end items-center text-center bg-stone-950 shadow-lg rounded-4xl p-6 h-115 w-80 gap-3">
      <img
        src={cookie.pic}
        alt={cookie.name}
        className="w-50 absolute -top-25"
      />
      {cookie.calories && (
        <p className="text-stone-500 absolute top-25">
          {cookie.calories} kcals
        </p>
      )}
      {cookie.new && (
        <span className="absolute flex justify-center items-center -top-5 -left-4 bg-[#a57431] w-15 h-15 rounded-full font-semibold -rotate-25 text-xl animate-pulse">
          New!
        </span>
      )}
      <div className="absolute top-34 grid grid-cols-2 gap-4 w-[90%]">
        {cookie.vegan && (
          <span className="bg-green-950 px-3 py-1 rounded-full">Vegan</span>
        )}
        {cookie.calories <= 150 && (
          <span className="bg-purple-950 px-3 py-1 rounded-full">
            Low calories
          </span>
        )}
        {cookie.limited && (
          <span className="bg-blue-950 px-3 py-1 rounded-full">
            Limited Ed.
          </span>
        )}
        {cookie.discount !== 0 && (
          <span className="bg-red-950 px-3 py-1 rounded-full">Sale</span>
        )}
      </div>
      <div className="flex flex-col absolute top-58 mx-4">
        <h3 className="text-3xl font-bold">{cookie.name}</h3>
        <p className="text-stone-500 mt-1">{cookie.description}</p>
      </div>
      <button
        className="flex gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer w-full shadow py-2 active:scale-98"
        onClick={() => addToCart(cookie)}
      >
        <lord-icon
          src="https://cdn.lordicon.com/zmvzumis.json"
          state="hover-shopping-bag-2"
          colors="primary:#a57431"
          style={{ width: "35px", height: "35px" }}
        />
        {cookie.discount !== 0 ? (
          <div className="flex gap-2 justify-center items-center">
            <p className="text-xl line-through text-white/30">
              $ {cookie.price}
            </p>
            <p className="text-3xl">
              $ {(cookie.price * (1 - cookie.discount / 100)).toFixed(2)}
            </p>
          </div>
        ) : (
          <p className="text-3xl">$ {cookie.price}</p>
        )}
      </button>
    </div>
  );
};

export default CookieCard;
