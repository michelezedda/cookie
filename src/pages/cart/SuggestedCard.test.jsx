import { render, screen } from "@testing-library/react";
import { it } from "vitest";
import SuggestedCard from "./SuggestedCard";

describe("SuggestedCard", () => {
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
      quantity: 1,
    };

    render(<SuggestedCard cookie={cookie} />);

    expect(screen.getByText("Sugar")).toBeInTheDocument();
    expect(screen.getByText("150 kcals")).toBeInTheDocument();
    expect(screen.getByTestId("cookie-image")).toHaveAttribute(
      "src",
      "/media/sugar.webp"
    );
  });
});
