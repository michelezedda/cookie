import { useCart } from "../store/cartStore";

const CartBadge = () => {
  const cartQuantity = useCart((state) => state.cartQuantity());

  return (
    <div className="absolute top-6 right-4 -z-1 text-md">
      {cartQuantity > 0 && cartQuantity}
    </div>
  );
};

export default CartBadge;
