import locations from "../data/locations";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  // Split locations into two columns for display
  const firstColumnLocations = locations.filter(
    (location) => location.id >= 0 && location.id <= 5
  );
  const secondColumnLocations = locations.filter(
    (location) => location.id > 5 && location.id <= 13
  );

  return (
    <footer className="footer flex flex-col bg-stone-950 p-10 mt-25 text-sm md:gap-8 md:justify-center items-center">
      <div className="flex flex-col gap-2">
        <span className="flex mb-4 text-4xl gap-2 text-neutral-300">
          <FaSquareFacebook className="cursor-pointer hover:brightness-70 duration-300" />
          <FaSquareInstagram className="cursor-pointer hover:brightness-70 duration-300" />
          <FaSquareXTwitter className="cursor-pointer hover:brightness-70 duration-300" />
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-2">
          <h5 className="text-neutral-400 text-xl mb-2">Our Locations</h5>
          {/* First column of locations */}
          {firstColumnLocations.map((location) => (
            <ul>
              <li
                key={location.id}
                className="hover:brightness-70 cursor-pointer"
              >
                &#9679; {location.street}
              </li>
            </ul>
          ))}
        </div>
        <div className="flex flex-col gap-2 md:mt-3">
          <br />
          {/* Second column of locations */}
          {secondColumnLocations.map((location) => (
            <ul>
              <li
                key={location.id}
                className="hover:brightness-70 cursor-pointer"
              >
                &#9679; {location.street}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
