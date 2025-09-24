import { render, screen } from "@testing-library/react";
import { it } from "vitest";
import ReceiptCard from "./ReceiptCard";

describe("SuggestedCard", () => {
  it("displays the cookie details correctly", () => {
    const order = [{ id: 0, name: "Sugar", price: 1000, quantity: 1 }];
    const orderId = "1234567890";
    const total = 10.0;
    const formData = {
      firstName: "John",
      lastName: "Smith",
      phoneNumber: "0123456789",
      email: "john@example.com",
      date: "2025-09-30",
      location: "2345 Market St, San Francisco, CA 94103, USA",
    };

    render(
      <ReceiptCard
        order={order}
        orderId={orderId}
        total={total}
        formData={formData}
      />
    );

    // Order item
    expect(screen.getByText(/1234567890/)).toBeInTheDocument();
    expect(screen.getByText(/1\s*x/)).toBeInTheDocument();
    expect(screen.getByText("Sugar")).toBeInTheDocument();
    expect(screen.getByText("$10.00")).toBeInTheDocument();

    // Customer info
    expect(screen.getByText(/John Smith/)).toBeInTheDocument();
    expect(screen.getByText(/0123456789/)).toBeInTheDocument();
    expect(screen.getByText(/john@example.com/)).toBeInTheDocument();

    // Pickup details
    expect(screen.getByText(/2025-09-30/)).toBeInTheDocument();
    expect(
      screen.getByText(/2345 Market St, San Francisco, CA 94103, USA/)
    ).toBeInTheDocument();

    // Payment
    expect(
      screen.getByText("Payment is made directly in the store")
    ).toBeInTheDocument();
  });
});
