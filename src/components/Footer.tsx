import locations from "../data/locations";

const Footer = () => {
  const firstColumnLocations = locations.filter(
    (location) => location.id >= 0 && location.id <= 5
  );
  const secondColumnLocations = locations.filter(
    (location) => location.id > 5 && location.id <= 13
  );

  return (
    <footer className="footer grid md:grid-cols-2 bg-stone-950 p-10 mt-25 text-sm md:gap-8 md:justify-center items-center">
      <div className="flex flex-col gap-2">
        <h5 className="text-neutral-400 text-xl mb-2">Our Locations</h5>
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
      <div className="flex flex-col gap-2">
        <br />
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
    </footer>
  );
};

export default Footer;
