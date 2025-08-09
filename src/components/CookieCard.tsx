import { PiHandbagDuotone } from "react-icons/pi";

const CookieCard = ({
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
    <div className="relative flex flex-col justify-end items-center text-center bg-stone-950 shadow-xl rounded-4xl p-6 h-110 w-80 gap-3">
      <img src={pic} alt={name} className="w-50 absolute -top-25" />
      {calories && (
        <p className="text-stone-500 absolute top-25">{calories} kcals</p>
      )}
      {isNew && (
        <span className="absolute flex justify-center items-center -top-5 -left-4 bg-[#a57431] w-15 h-15 rounded-full font-semibold -rotate-25 text-xl">
          New!
        </span>
      )}
      <div className="absolute top-34 grid grid-cols-2 gap-4 w-[90%]">
        {vegan && (
          <span className="bg-green-950 px-3 py-1 rounded-full">Vegan</span>
        )}
        {calories <= 150 && (
          <span className="bg-purple-950 px-3 py-1 rounded-full">
            Low calories
          </span>
        )}
        {limited && (
          <span className="bg-blue-950 px-3 py-1 rounded-full">
            Limited Ed.
          </span>
        )}
        {discount !== 0 && (
          <span className="bg-red-950 px-3 py-1 rounded-full">Sale</span>
        )}
      </div>
      <h3 className="text-3xl font-bold">{name}</h3>
      <p className="text-stone-500">{description}</p>
      <button className="flex gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer w-full shadow py-2">
        <PiHandbagDuotone size={35} />
        {discount !== 0 ? (
          <div className="flex gap-2 justify-center items-center">
            <p className="text-xl line-through text-white/30">$ {price}</p>
            <p className="text-3xl">
              $ {(price * (1 - discount / 100)).toFixed(2)}
            </p>
          </div>
        ) : (
          <p className="text-3xl">$ {price}</p>
        )}
      </button>
    </div>
  );
};

export default CookieCard;
