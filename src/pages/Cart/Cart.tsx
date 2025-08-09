import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-35 h-screen">
        <h2 className="text-5xl font-[Caprasimo] mb-6">Your Cart</h2>
        <div className="flex flex-col border border-stone-950 rounded-4xl shadow w-100 h-100"></div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
