import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../store/cartStore";

const Cart = () => {
  const { cart } = useCart();
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-35 h-screen mx-auto max-w-screen-md">
        <h2 className="text-5xl font-[Caprasimo] mb-6">Your Cart</h2>
        <div className="flex flex-col w-full">
          {cart.map((cookie) => (
            <CartCard key={cookie.id} {...cookie} />
          ))}
        </div>
        <div className="flex flex-col w-full mt-8">
          <p className="text-2xl text-end">Total: $</p>
          <button className="flex gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer shadow py-3 active:scale-98 w-full text-xl">
            Check out
          </button>
        </div>
        <CheckoutForm />
      </div>
      <Footer />
    </>
  );
};

export default Cart;

function CartCard({ id, name, pic, quantity, price }) {
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
}

function CheckoutForm() {
  return (
    <form className="flex flex-col mt-10 p-4 rounded-4xl border w-full border-stone-950">
      <input type="text" placeholder="Your first name" />
      <input type="text" placeholder="Your last name" />
      <select name="location">
        <option
          defaultValue="-- Select a location --"
          disabled
          className="text-stone-400"
        />
        <option value="first" className="text-black" />
        <option value="second" />
      </select>
      <select name="date" id=""></select>
      <input type="submit" />
    </form>
  );
}
