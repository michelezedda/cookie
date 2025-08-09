import { PiHandbagDuotone } from "react-icons/pi";

const ProductCard = ({
  name,
  description,
  pic,
  price,
  calories,
  new: isNew,
  vegan,
  limited,
  discount,
}) => {
  return (
    <div className="relative flex flex-col justify-end items-center text-center bg-stone-950 shadow-xl rounded-4xl p-6 h-full w-80 gap-3">
      {isNew && (
        <span className="absolute flex justify-center items-center -top-5 -left-4 bg-[#a57431] w-15 h-15 rounded-full font-semibold -rotate-25 text-xl">
          New!
        </span>
      )}
      <div className="grid grid-cols-2 gap-4 mt-25">
        {vegan && (
          <span className="bg-green-950 px-3 py-1 rounded-full w-full">
            Vegan
          </span>
        )}
        {calories <= 150 && (
          <span className="bg-purple-950 px-3 py-1 rounded-full w-full">
            Low calories
          </span>
        )}
        {limited && (
          <span className="bg-blue-950 px-3 py-1 rounded-full w-full">
            Limited
          </span>
        )}
        {discount !== 0 && (
          <span className="bg-red-950 px-3 py-1 rounded-full w-full">Sale</span>
        )}
      </div>
      <img src={pic} alt={name} className="w-50 absolute -top-25" />
      <h3 className="text-3xl font-bold mt-2">{name}</h3>
      <p className="text-stone-500">{description}</p>

      <button className="flex gap-4 justify-center items-center rounded-4xl bg-[#a57431]/50 hover:brightness-120 duration-300 cursor-pointer w-full shadow">
        <PiHandbagDuotone size={30} />
        {discount !== 0 ? (
          <div className="flex gap-2 justify-center items-center">
            <p className="text-xl line-through text-white/30">$ {price}</p>
            <p className="text-3xl">$ {price * (1 - discount / 100)}</p>
          </div>
        ) : (
          <p className="text-3xl">$ {price}</p>
        )}
      </button>
    </div>
  );
};

export default ProductCard;
