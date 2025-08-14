import { useCart } from "../../store/cartStore";
import type { CartCardProps } from "../../types/types";

const CartCard = ({ cartItem }: CartCardProps) => {
  const { addQuantity, removeItem } = useCart();
  return (
    <div className="flex justify-between border-b border-stone-950 p-4 bg-gradient-to-t from-[#a57431]/10 to-[#181713] w-full">
      <div className="flex gap-6">
        <img src={cartItem.pic} alt={cartItem.name} className="w-28" />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl">{cartItem.name}</h3>
          <p className="text-stone-500">{cartItem.quantity} pcs</p>
          <div className="flex justify-center items-center gap-2 font-bold">
            <button
              className="flex gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer shadow py-1 px-8 active:scale-98"
              onClick={() => addQuantity(cartItem.id)}
            >
              +
            </button>
            <button
              className="flex gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer shadow py-1 px-8 active:scale-98"
              onClick={() => removeItem(cartItem.id)}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <p className="text-xl">
        $ {(cartItem.price * cartItem.quantity).toFixed(2)}
      </p>
    </div>
  );
};

export default CartCard;
