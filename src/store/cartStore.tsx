import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { CartStore } from "../types/types";

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      // Replace the current cart with a new array
      setCart: (cart) => set({ cart }),
      // Add a new item to the cart or increment its quantity if it already exists
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
      // Get total number of items in the cart
      cartQuantity: () =>
        get().cart.reduce((total, item) => total + item.quantity, 0),
      // Increase quantity of a specific item
      addQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),
      // Decrease quantity of a specific item, removing it if quantity becomes 0
      removeItem: (id) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0),
        })),
      // Calculate total price of all items in cart
      totalPrice: () =>
        get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
      // Store completed order
      order: [],
      setOrder: (order) => set({ order }),
    }),
    {
      name: "cart-storage", // Key in localStorage
      storage: createJSONStorage(() => localStorage), // Persist to localStorage
    }
  )
);
