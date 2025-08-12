import { create } from "zustand";
import type { CartStore } from "../types/types";

export const useCart = create<CartStore>((set, get) => ({
  cart: [],
  setCart: (cart) => set({ cart }),
  addToCart: (newItem) =>
    set((state) => {
      let existingItem = false;

      const updatedCart = state.cart.map((item) => {
        if (newItem.id === item.id) {
          existingItem = true;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return {
        cart: existingItem
          ? updatedCart
          : [...state.cart, { ...newItem, quantity: 1 }],
      };
    }),
  cartQuantity: () =>
    get().cart.reduce((total, item) => total + item.quantity, 0),
  addQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  removeItem: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    })),
  totalPrice: () =>
    get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
  order: [],
  setOrder: (order) => set({ order }),
}));

// import { create } from "zustand";
// import type { CartStore } from "../types/types";

// export const useCart = create<CartStore>((set, get) => ({
//   cart:
//   setCart:
//   addToCart:
//   cartQuantity:
//   removeItem:
//   totalPrice:
//   order:
//   setOrder:
// }));
