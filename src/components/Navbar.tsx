import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed flex top-0 bg-stone-950 w-full p-4 justify-center items-center z-50 shadow shadow-stone-950">
      <Link to={"/"}>
        <img src="/media/logo.png" alt="cookie logo" className="w-30" />{" "}
      </Link>
    </nav>
  );
};

export default Navbar;
