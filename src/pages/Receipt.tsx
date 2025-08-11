import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../store/cartStore";
import { useForm } from "../store/formStore";
import { useNavigate } from "react-router";

const Receipt = () => {
  const { order } = useCart();
  const { formData } = useForm();
  const orderId = Date.now();

  let navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center my-44 p-4 gap-2 mx-auto  min-h-screen max-w-screen-sm">
        <h1 className="text-center text-5xl font-[Caprasimo]">
          Your order has been successfully submitted!
        </h1>
        <div id="receipt" className="mt-10">
          <h2 className="mb-1 border-b font-medium">
            ORDER N. <span className="font-bold">{orderId}</span>
          </h2>
          {order.map((orderItem) => (
            <div className="flex gap-2">
              <span>{orderItem.quantity}x</span>
              <p>{orderItem.name}</p>
            </div>
          ))}
          <h2 className="mb-1 border-b font-medium mt-6">TOTAL</h2>
          <h2 className="mb-1 border-b font-medium mt-6">PICK UP</h2>
          <p>
            Your order will be ready to pick up on{" "}
            <span className="font-semibold">{formData.date}</span> from{" "}
            <span className="font-semibold">10 AM</span> to{" "}
            <span className="font-semibold">7 PM</span> at{" "}
            <span className="font-semibold">Cookie {formData.location}</span>
          </p>
          <h2 className="mb-1 border-b font-medium mt-6">PAYMENT</h2>
          <p>You'll pay directly in store</p>
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
