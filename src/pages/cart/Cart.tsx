import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CheckoutForm from "./CheckoutForm";
import AddMore from "./AddMore";
import { useCart } from "../../store/cartStore";
import CartCard from "./CartCard";
import { useState } from "react";

const Cart = () => {
  const { cart } = useCart();
  const [formVisible, setFormVisible] = useState(false);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-40 h-screen mx-auto max-w-screen-md">
        <h2 className="text-5xl font-[Caprasimo] mb-6">Your Cart</h2>
        <div className="flex flex-col w-full">
          {cart.map((cookie) => (
            <CartCard key={cookie.id} {...cookie} />
          ))}
        </div>
        <div className="flex flex-col mt-8 mx-4">
          <AddMore />
          <p className="text-2xl text-end">Total: $</p>
          <button
            className="flex gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer shadow py-3 active:scale-98 w-full text-xl"
            onClick={() => setFormVisible(true)}
          >
            Continue
          </button>
        </div>
        {formVisible && <CheckoutForm />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
