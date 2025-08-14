import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import { useApp } from "../store/appStore";
import ReceiptCard from "./ReceiptCard";
import { useEffect } from "react";
import { useCart } from "../store/cartStore";
import { useForm } from "../store/formStore";

const Receipt = () => {
  // Get submitted order and form data
  const { order } = useCart();
  const { formData } = useForm();
  // Scroll-to-top function from app store
  const scrollToTop = useApp((state) => state.scrollToTop);
  // React Router navigate function
  let navigate = useNavigate();
  // Generate a unique order ID (timestamp)
  const orderId = Date.now();
  // Calculate total price of the order
  const totalPrice = order.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  // Navigate back to homepage for a new order
  const handleClick = () => {
    navigate("/");
  };
  // Scroll to top when component mounts
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center my-44 p-4 gap-2 mx-auto min-h-screen max-w-screen-sm">
        <h1 className="text-center text-4xl font-[Caprasimo]">
          Your order has been successfully submitted!
        </h1>
        <ReceiptCard
          order={order}
          orderId={orderId}
          formData={formData}
          total={totalPrice}
        />
        <button
          className="flex gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer shadow py-3 active:scale-98 text-xl mx-4 mt-12 w-[50%]"
          onClick={handleClick}
        >
          Make a new order
        </button>
      </main>
      <Footer />
    </>
  );
};

export default Receipt;
