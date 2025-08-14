import { create } from "zustand";
import type { AppStore } from "../types/types";

export const useApp = create<AppStore>(() => ({
  // Function to scroll the page smoothly to the top
  scrollToTop: () => window.scrollTo({ top: 0, behavior: "smooth" }),
}));
