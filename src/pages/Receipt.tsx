import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../store/cartStore";
import { useForm } from "../store/formStore";
import { useNavigate } from "react-router";
import { useApp } from "../store/appStore";
import { useEffect } from "react";

const Receipt = () => {
  const { order } = useCart();
  const { formData } = useForm();
  const orderId = Date.now();
  const scrollToTop = useApp((state) => state.scrollToTop);

  let navigate = useNavigate();

  const totalPrice = order.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center my-44 p-4 gap-2 mx-auto  min-h-screen max-w-screen-sm">
        <h1 className="text-center text-4xl font-[Caprasimo]">
          Your order has been successfully submitted!
        </h1>
        <div id="receipt" className="mt-10">
          <div className="flex justify-center items-center">
            <img
              src="/media/bw-logo.webp"
              alt="cookie logo black and white"
              className="w-30"
            />
          </div>
          <h2 className="mb-1 mt-10 border-b font-medium">
            ORDER N. <span className="font-bold">{orderId}</span>
          </h2>
          {order.map((orderItem) => (
            <div className="flex justify-between" key={orderItem.id}>
              <p>
                <span className="mr-1">{orderItem.quantity}x</span>
                {orderItem.name}
              </p>
              <p>$ {(orderItem.price * orderItem.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="flex flex-col">
            <h2 className="mb-1 border-b font-medium mt-6">TOTAL</h2>
            <span className="text-end">$ {totalPrice.toFixed(2)}</span>
          </div>
          <h2 className="mb-1 border-b font-medium mt-6">PICK UP</h2>
          <p>
            Your order will be ready to pick up on{" "}
            <span className="font-semibold">{formData.date}</span> from{" "}
            <span className="font-semibold">10 AM</span> to{" "}
            <span className="font-semibold">7 PM</span> at{" "}
            <span className="font-semibold">Cookie {formData.location}</span>
          </p>
          <h2 className="mb-1 border-b font-medium mt-6">PAYMENT</h2>
          <p>Payment is made directly in the store</p>
        </div>
        <button
          className="flex gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer shadow py-3 active:scale-98 text-xl mx-4 mt-12 w-[50%]"
          onClick={() => navigate("/")}
        >
          Make a new order
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Receipt;
