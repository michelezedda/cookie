import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CheckoutForm from "./CheckoutForm";
import AddMore from "./AddMore";
import { useCart } from "../../store/cartStore";
import CartCard from "./CartCard";
import { useState } from "react";

const Cart = () => {
  const { cart, totalPrice } = useCart();
  const [formVisible, setFormVisible] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <div className="flex flex-col my-40 mx-auto max-w-screen-md">
        <h1 className="text-5xl font-[Caprasimo] mb-6 text-center">
          Your Cart
        </h1>
        <div className="flex flex-col w-full">
          {cart.map((cookie) => (
            <CartCard key={cookie.id} cookie={cookie} />
          ))}
        </div>
        <p className="text-2xl text-end mx-4 mt-6">
          Total: $ {totalPrice().toFixed(2)}
        </p>
        <AddMore />
        {formVisible ? (
          <CheckoutForm />
        ) : (
          <button
            className="flex gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer shadow py-3 active:scale-98 text-xl mx-4 mt-12"
            onClick={() => setFormVisible(true)}
          >
            Continue
          </button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
