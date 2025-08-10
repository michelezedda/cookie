import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";
import { PiHandbagDuotone } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="fixed flex top-0 bg-stone-950 w-full p-4 justify-center items-center z-50 shadow shadow-stone-950">
      <Link to={"/"}>
        <img src="/media/logo.png" alt="cookie logo" className="w-30" />
      </Link>

      <div className="absolute right-10">
        <Link to={"/cart"}>
          <PiHandbagDuotone
            size={50}
            className="cursor-pointer hover:text-[#a57431] active:scale-98 duration-300"
          />
          <CartBadge />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
