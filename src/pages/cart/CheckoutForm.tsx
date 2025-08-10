import { useState } from "react";
import { locations } from "../../data/locations";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    phoneNumber: "",
    date: "",
  });

  return (
    <form className="flex flex-col mt-10 p-4 gap-2 rounded-4xl border-4 w-full border-stone-400 mx-4">
      <label htmlFor="fullName">Full name</label>
      <input
        type="text"
        id="fullName"
        placeholder="Your first name"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
        className="border-white border rounded-lg px-2 py-1"
        required
      />
      <input
        type="text"
        id="fullName"
        placeholder="Your last name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        className="border-white border rounded-lg px-2 py-1"
        required
      />
      <label htmlFor="email">Full name</label>
      <input
        type="text"
        id="email"
        placeholder="Your email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="border-white border rounded-lg px-2 py-1"
        required
      />
      <label htmlFor="phoneNumber">Phone number</label>
      <input
        type="tel"
        id="phoneNumber"
        placeholder="Your phone number"
        value={formData.phoneNumber}
        onChange={(e) => {
          const cleaned = e.target.value.replace(/[^\d\s\-()+]/g, "");
          setFormData({ ...formData, phoneNumber: cleaned });
        }}
        pattern="^[+]?[\d\s\-()]{7,}$"
        title="Please enter a valid phone number"
        minLength={9}
        className="border-white border rounded-lg px-2 py-1"
        required
      />
      <label htmlFor="location">Location</label>
      <select
        name="location"
        id="location"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        className="border-2 border-white px-2 py-1 focus:outline-lime-600 w-full rounded-xl"
        required
      >
        <option value="" disabled>
          -- Select a location --
        </option>
        {locations.map((location: Location) => (
          <option
            key={location.id}
            value={location.street}
            className="text-black"
          >
            {location.street}
          </option>
        ))}
      </select>
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        className="border-2 border-white px-2 py-1 focus:outline-lime-600 w-full rounded-xl"
        min={new Date().toISOString().split("T")[0]}
        required
      />
      <input
        type="submit"
        className="flex mt-4 gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer shadow py-3 active:scale-98 w-full text-xl"
      />
    </form>
  );
};

export default CheckoutForm;
