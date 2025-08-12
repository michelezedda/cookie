import { create } from "zustand";
import type { FormStore } from "../types/types";

export const useForm = create<FormStore>((set) => ({
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
  formVisible: false,
  setFormVisible: (formVisible) => set({ formVisible }),
}));

// import { create } from "zustand";
// import type { FormStore } from "../types/types";

// export const useForm = create<FormStore>((set) => ({
//   formData: {
//     firstName: "",
//     lastName: "",
//     location: "",
//     email: "",
//     phoneNumber: "",
//     date: "",
//   },
//   setFormData:
//   submitted:
//   setSubmitted:
// }));
