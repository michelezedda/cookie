import { it, expect, describe, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CookieCard from "./CookieCard";
import { useCart } from "../store/cartStore";

let cookie;

beforeEach(() => {
  cookie = {
    id: 0,
    name: "Sugar",
    description:
      "A classic buttery cookie with a sweet, crisp texture and a hint of vanilla.",
    pic: "/media/sugar.webp",
    price: 1000,
    calories: 150,
    new: false,
    vegan: false,
    limited: false,
    suggested: true,
  };
});

describe("CookieCard component", () => {
  it("displays the cookie details correctly", () => {
    render(<CookieCard cookie={cookie} />);

    expect(
      screen.getByText(
        "A classic buttery cookie with a sweet, crisp texture and a hint of vanilla."
      )
    ).toBeInTheDocument();

    expect(screen.getByText("$10.00")).toBeInTheDocument();

    expect(screen.getByTestId("cookie-image")).toHaveAttribute(
      "src",
      "/media/sugar.webp"
    );
  });

  it("adds a cookie to the cart", async () => {
    render(<CookieCard cookie={cookie} />);

    const user = userEvent.setup();
    const addToCartButton = screen.getByTestId("add-to-cart-button");
    await user.click(addToCartButton);

    const { cart } = useCart.getState();
    expect(cart).toHaveLength(1);
    expect(cart[0]).toMatchObject({ id: 0, quantity: 1 });
  });
});
