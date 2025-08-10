import { useCart } from "../store/cartStore";

const CartBadge = () => {
  const cartQuantity = useCart((state) => state.cartQuantity());

  return (
    <div className="absolute top-4.5 left-5 -z-1 text-sm">{cartQuantity}</div>
  );
};

export default CartBadge;
