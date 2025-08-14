import { locations } from "../../data/locations";
import { useCart } from "../../store/cartStore";
import { useForm } from "../../store/formStore";
import { useNavigate } from "react-router";
import { IoIosClose } from "react-icons/io";
import type { Location } from "../../types/types";

const CheckoutForm = () => {
  // Form store methods and data
  const { setSubmitted, formData, setFormData, setFormVisible } = useForm();
  // Cart store methods and data
  const { cart, setCart, setOrder } = useCart();
  // Navigation instance
  let navigate = useNavigate();
  // Handles form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setOrder(cart);
    setSubmitted(true);
    setCart([]);
    navigate("/receipt");
  };

  return (
    <>
      <div
        id="checkout-form"
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-950/90"
      >
        <div className="relative border-2 border-white rounded max-h-[95vh] overflow-y-auto" />
        {/* Form container */}
        <form className="relative flex flex-col p-4 gap-2 rounded-4xl border-4 mx-4 border-stone-400 bg-stone-950 lg:w-200">
          {/* Close form button */}
          <IoIosClose
            size={40}
            className="absolute top-3 right-5 text-white active:scale-95 cursor-pointer"
            onClick={() => setFormVisible(false)}
          />
          <h2 className="text-center mt-10 mb-4 text-3xl font-[Caprasimo]">
            Pick-up info
          </h2>
          {/* Full name */}
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
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="border-white border rounded-lg px-2 py-1"
            required
          />
          {/* Email */}
          <label htmlFor="email">Your email</label>
          <input
            type="text"
            id="email"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="border-white border rounded-lg px-2 py-1"
            required
          />
          {/* Phone number (only digits, spaces, +, (), -) */}
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
          {/* Location selection */}
          <label htmlFor="location">Location</label>
          <select
            name="location"
            id="location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
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
          {/* Pickup date (must be today or later) */}
          <label htmlFor="date">Pick-up date</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="border-2 border-white px-2 py-1 focus:outline-lime-600 w-full rounded-xl"
            min={new Date().toISOString().split("T")[0]}
            required
          />
          {/* Submit button */}
          <input
            type="submit"
            value="Submit"
            className="flex mt-4 gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer shadow py-3 active:scale-98 w-full text-xl"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </>
  );
};

export default CheckoutForm;
