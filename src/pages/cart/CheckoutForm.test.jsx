import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock("react-router", () => ({
  useNavigate: () => mockNavigate,
}));

// Mock stores
const setFormData = vi.fn();
const setSubmitted = vi.fn();
const setFormVisible = vi.fn();
const setOrder = vi.fn();
const setCart = vi.fn();

vi.mock("../../store/formStore", () => ({
  useForm: () => ({
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      location: "",
      date: "",
    },
    setFormData,
    setSubmitted,
    setFormVisible,
  }),
}));

vi.mock("../../store/cartStore", () => ({
  useCart: () => ({
    cart: [{ id: 1, name: "Sugar", price: 1000, quantity: 1, pic: "" }],
    setCart,
    setOrder,
  }),
}));

describe("CheckoutForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all form fields", () => {
    render(<CheckoutForm />);
    expect(screen.getByLabelText("Full name")).toBeInTheDocument();
    expect(screen.getByLabelText("Your email")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone number")).toBeInTheDocument();
    expect(screen.getByLabelText("Location")).toBeInTheDocument();
    expect(screen.getByLabelText("Pick-up date")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("accepts input and submits correctly", async () => {
    render(<CheckoutForm />);
    const user = userEvent.setup();

    const [firstNameInput, lastNameInput] =
      screen.getAllByLabelText("Full name");
    await user.type(firstNameInput, "John");
    expect(setFormData).toHaveBeenCalledWith(
      expect.objectContaining({ firstName: "John" })
    );

    await user.type(lastNameInput, "Doe");
    expect(setFormData).toHaveBeenCalledWith(
      expect.objectContaining({ lastName: "Doe" })
    );

    await user.type(screen.getByLabelText("Your email"), "john@example.com");
    expect(setFormData).toHaveBeenCalledWith(
      expect.objectContaining({ email: "john@example.com" })
    );

    await user.type(screen.getByLabelText("Phone number"), "+123456789");
    expect(setFormData).toHaveBeenCalledWith(
      expect.objectContaining({ phoneNumber: "+123456789" })
    );

    await user.selectOptions(screen.getByLabelText("Location"), "Main Street");
    expect(setFormData).toHaveBeenCalledWith(
      expect.objectContaining({ location: "Main Street" })
    );

    const today = new Date().toISOString().split("T")[0];
    await user.type(screen.getByLabelText("Pick-up date"), today);
    expect(setFormData).toHaveBeenCalledWith(
      expect.objectContaining({ date: today })
    );

    const submitButton = screen.getByRole("button", { name: /submit/i });
    await user.click(submitButton);

    expect(setOrder).toHaveBeenCalledWith([
      { id: 1, name: "Sugar", price: 1000, quantity: 1, pic: "" },
    ]);
    expect(setSubmitted).toHaveBeenCalledWith(true);
    expect(setCart).toHaveBeenCalledWith([]);
    expect(mockNavigate).toHaveBeenCalledWith("/receipt");
  });
});
