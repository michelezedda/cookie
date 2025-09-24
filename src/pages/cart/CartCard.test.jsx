import { it, expect, describe, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import CartCard from "./CartCard";

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
    quantity: 1,
  };
});

describe("CartCard", () => {
  it("displays the cookie details correctly", () => {
    render(<CartCard cartItem={cookie} />);

    expect(screen.getByText("Sugar")).toBeInTheDocument();
    expect(screen.getByText("$10.00")).toBeInTheDocument();
    expect(screen.getByTestId("cookie-image")).toHaveAttribute(
      "src",
      "/media/sugar.webp"
    );
  });
});
