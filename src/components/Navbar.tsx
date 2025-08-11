import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";
import { TbPaperBag } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="fixed flex top-0 h-10 bg-stone-950 w-full p-4 justify-center items-center z-50 rounded-b-4xl">
      <div className="fixed -top-3 left-1/2 -translate-x-1/2 bg-stone-950 p-6 rounded-b-full">
        <Link to={"/"}>
          <img src="/media/logo.webp" alt="cookie logo" className="w-40" />{" "}
        </Link>
        <div className="fixed top-8 -right-8 bg-stone-950 w-14 h-16 rounded-b-full" />
        <div className="fixed top-10 -left-8 bg-stone-950 w-12 h-20 rounded-b-full" />
        <div className="fixed top-6 -left-28 bg-stone-950 w-22 h-20 rotate-50 rounded-b-full" />
        <Link to={"/cart"}>
          <div className="fixed top-2 -right-28 rounded-full p-6  bg-stone-950">
            <TbPaperBag size={45} />
            <CartBadge />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
