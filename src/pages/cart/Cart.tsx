import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CheckoutForm from "./CheckoutForm";
import AddMore from "./AddMore";
import { useCart } from "../../store/cartStore";
import CartCard from "./CartCard";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../store/appStore";
import { useForm } from "../../store/formStore";

const Cart = () => {
  // Access cart items and price calculation from store
  const { cart, totalPrice } = useCart();
  // Access checkout form visibility state
  const { formVisible, setFormVisible } = useForm();
  // Scroll handler from app store
  const scrollToTop = useApp((state) => state.scrollToTop);

  // Scroll to the top when this page mounts
  useEffect(() => {
    scrollToTop();
  }, []);

  // Empty cart view
  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <main className="flex flex-col items-center my-40 mx-auto max-w-screen-md min-h-screen">
          <h1 className="text-5xl font-[Caprasimo] mb-8">Your Cart</h1>
          <p className="text-xl">Your cart is empty</p>
          <div className="relative">
            <img src="/media/dog.webp" alt="dog" className="w-50 mt-8" />
          </div>
          <Link to={"/"}>
            <button className="flex gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer shadow py-3 active:scale-98 text-xl mx-4 mt-14 px-4">
              Add something to your cart
            </button>
          </Link>
        </main>
        <Footer />
      </>
    );
  }
  // Cart with items view
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-1 xl:grid-cols-2 justify-center xl:gap-10 my-50 xl:my-10 mx-auto max-w-screen-2xl">
        {/* Left side: Cart items and total */}
        <section className="flex flex-col mx-4 xl:mt-42">
          <h1 className="text-5xl font-[Caprasimo] mb-6 text-center">
            Your Cart
          </h1>
          {/* List of cart items */}
          <div className="flex flex-col items-center">
            {cart.map((cartItem) => (
              <CartCard key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
          {/* Total price */}
          <div className="flex flex-col mx-4 text-end mt-6 px-4 xl:w-full">
            <p className="text-2xl">Total: $ {totalPrice().toFixed(2)}</p>
          </div>
          {/* Continue button triggers checkout form */}
          <a
            className="flex gap-4 justify-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer shadow py-3 active:scale-98 text-xl mt-12 w-full"
            onClick={() => setFormVisible(true)}
          >
            Continue
          </a>
        </section>
        {/* Right side: Add more products */}
        <AddMore />
        {/* Checkout form modal */}
        {formVisible && <CheckoutForm />}
      </main>
      <Footer />
    </>
  );
};

export default Cart;
