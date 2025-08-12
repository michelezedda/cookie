import { create } from "zustand";
import type { AppStore } from "../types/types";

export const useApp = create<AppStore>(() => ({
  scrollToTop: () => window.scrollTo({ top: 0, behavior: "smooth" }),
}));
