const MilkCard = ({ name, description, pic, price, vegan }) => {
  return (
    <div className="relative flex flex-col justify-end items-center text-center bg-stone-950 shadow-lg rounded-4xl p-6 h-90 w-80 gap-3">
      <img src={pic} alt={name} className="w-50 absolute -top-25" />
      <div className="absolute top-30 grid w-[90%]">
        {vegan && (
          <span className="bg-green-950 px-3 py-1 rounded-full">Vegan</span>
        )}
      </div>
      <h3 className="text-3xl font-bold">{name}</h3>
      <p className="text-stone-500">{description}</p>
      <button className="flex gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer w-full shadow py-2 active:scale-98">
        <lord-icon
          src="https://cdn.lordicon.com/zmvzumis.json"
          state="hover-shopping-bag-2"
          colors="primary:#a57431"
          style={{ width: "35px", height: "35px" }}
        />
        <p className="text-3xl">$ {price}</p>
      </button>
    </div>
  );
};

export default MilkCard;
