import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import CheckoutForm from "./CheckoutForm";

// Mock navigate
const mockNavigate = vi.fn();
vi.mock("react-router", () => ({ useNavigate: () => mockNavigate }));

// Mock form store
const setFormData = vi.fn();
const setSubmitted = vi.fn();
const setFormVisible = vi.fn();
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

// Mock cart store
const setCart = vi.fn();
const setOrder = vi.fn();
vi.mock("../../store/cartStore", () => ({
  useCart: () => ({ cart: [{ id: 1 }], setCart, setOrder }),
}));

describe("CheckoutForm", () => {
  it("renders inputs and submits form", async () => {
    const user = userEvent.setup();
    render(<CheckoutForm />);

    // Fill fields
    await user.type(screen.getByPlaceholderText("Your first name"), "John");
    await user.type(screen.getByPlaceholderText("Your last name"), "Smith");
    await user.type(
      screen.getByPlaceholderText("Your email"),
      "john@smith.com"
    );
    await user.type(
      screen.getByPlaceholderText("Your phone number"),
      "123456789"
    );

    // Select location
    const select = screen.getByLabelText(/Location/i);
    await user.selectOptions(select, screen.getAllByRole("option")[1]);

    // Pick date (today)
    const today = new Date().toISOString().split("T")[0];
    await user.type(screen.getByLabelText(/Pick-up date/i), today);

    // Submit
    await user.click(screen.getByDisplayValue("Submit"));

    expect(setOrder).toHaveBeenCalled();
    expect(setSubmitted).toHaveBeenCalledWith(true);
    expect(setCart).toHaveBeenCalledWith([]);
    expect(mockNavigate).toHaveBeenCalledWith("/receipt");
  });

  it("closes when clicking X button", async () => {
    const user = userEvent.setup();
    render(<CheckoutForm />);

    const closeBtn = screen.getByTestId("close-btn");
    await user.click(closeBtn);

    expect(setFormVisible).toHaveBeenCalledWith(false);
  });
});
