import { create } from "zustand";

export const useForm = create((set) => ({
  formData: {
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    phoneNumber: "",
    date: "",
  },
  setFormData: (formData) => set({ formData }),
  submitted: false,
  setSubmitted: (submitted) => set({ submitted }),
}));
