import { useCart } from "../store/cartStore";
import { cookies } from "../data/products";
import type { PromoCardProps } from "../types/types";

const Promo = () => {
  const addToCart = useCart((state) => state.addToCart);

  // Grab specific products by ID
  const sugarCookie = cookies.find((cookie) => cookie.id === 0);
  const lemonZestCookie = cookies.find((cookie) => cookie.id === 8);

  if (!sugarCookie || !lemonZestCookie) return null;
  return (
    <section className="mt-10 mx-4 flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-25 gap-x-10">
        <PromoCard
          pic={sugarCookie.pic}
          name="20% Off Now On Sugar Cookies"
          description="Rock your taste buds with our cookies."
          onClick={() => addToCart({ ...sugarCookie, quantity: 1 })}
        />
        <PromoCard
          pic={lemonZestCookie.pic}
          name="15% Off Now On Lemon Zest Cookies"
          description="Rock your taste buds with our cookies."
          onClick={() => addToCart({ ...lemonZestCookie, quantity: 1 })}
        />
      </div>
    </section>
  );
};

export default Promo;

function PromoCard({ pic, name, description, onClick }: PromoCardProps) {
  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-start relative rounded-4xl shadow-lg shadow-black bg-gradient-to-tl from-stone-900 to-stone-950 p-10 w-full">
        <h3 className="text-2xl">{name}</h3>
        <img
          src="/media/crumbs.webp"
          alt="cookie crumbs"
          className="absolute w-90 -bottom-36 -right-10"
        />
        <img
          src={pic}
          alt={name}
          className="absolute w-50 -bottom-16 right-2"
        />
        <p className="text-stone-500">{description}</p>
        <button
          className="flex mt-10 gap-4 justify-center items-center rounded-2xl bg-[#a57431]/50 hover:brightness-150 duration-300 cursor-pointer px-6 shadow py-2 text-xl active:scale-98 z-10"
          onClick={onClick}
        >
          Order Now
        </button>
      </div>
    </>
  );
}
