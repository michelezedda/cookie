import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CookieCard from "./CookieCard";

describe("CookieCard component", () => {
  it("displays the cookie details correctly", () => {
    const cookie = {
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

    const mock = vi.fn();

    render(<CookieCard cookie={cookie} mock={mock} />);

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
});
