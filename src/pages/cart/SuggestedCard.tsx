import { useCart } from "../../store/cartStore";

const SuggestedCard = ({ cookie }) => {
  const addToCart = useCart((state) => state.addToCart);
  return (
    <div className="relative flex flex-col justify-end items-center text-center bg-stone-950 shadow-lg rounded-4xl p-6 h-50 w-50 gap-3">
      <img
        src={cookie.pic}
        alt={cookie.name}
        className="w-34 absolute -top-18"
      />
      {cookie.calories && (
        <p className="text-stone-500 absolute top-16">
          {cookie.calories} kcals
        </p>
      )}
      <div className="flex flex-col absolute top-24 mx-4">
        <h3 className="text-xl font-bold">{cookie.name}</h3>
      </div>
      <button
        className="flex gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer w-full shadow py-1 active:scale-98"
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
            <p className="text-lg line-through text-white/30">
              $ {cookie.price}
            </p>
            <p className="text-xl">
              $ {(cookie.price * (1 - cookie.discount / 100)).toFixed(2)}
            </p>
          </div>
        ) : (
          <p className="text-2xl">$ {cookie.price}</p>
        )}
      </button>
    </div>
  );
};

export default SuggestedCard;
