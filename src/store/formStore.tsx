import { create } from "zustand";
import type { FormStore } from "../types/types";

export const useForm = create<FormStore>((set) => ({
  // Object storing all form fields
  formData: {
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    phoneNumber: "",
    date: "",
  },
  // Setter for formData
  setFormData: (formData) => set({ formData }),
  // Track if the form has been submitted
  submitted: false,
  setSubmitted: (submitted) => set({ submitted }),

  // Track whether checkout form modal is visible
  formVisible: false,
  setFormVisible: (formVisible) => set({ formVisible }),
}));
