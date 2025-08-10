import { useCart } from "../../store/cartStore";

const CartCard = ({ id, name, pic, quantity, price }) => {
  const { addQuantity, removeItem } = useCart();
  return (
    <div className="flex justify-between border-b border-stone-950 p-4 bg-gradient-to-t from-[#a57431]/10 to-[#181713]">
      <div className="flex gap-6">
        <img src={pic} alt={name} className="w-25" />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl">{name}</h3>
          <p className="text-stone-500">{quantity} pcs</p>
          <div className="flex justify-center items-center gap-2 font-bold">
            <button
              className="flex gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer shadow py-1 px-8 active:scale-98"
              onClick={() => addQuantity(id)}
            >
              +
            </button>
            <button
              className="flex gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer shadow py-1 px-8 active:scale-98"
              onClick={() => removeItem(id)}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <p className="text-xl">$ {(price * quantity).toFixed(2)}</p>
    </div>
  );
};

export default CartCard;
