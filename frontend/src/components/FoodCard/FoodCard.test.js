import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FoodCard from "./FoodCard";

import { screen, getByLabelText } from "@testing-library/dom";

describe("component/FoodCard", () => {
  test("Testing DrinksCardContainer accepting a child component", () => {
    render(<FoodCard />);
    const children = screen.getByLabelText(/allergens/);
    expect(children).toBeInTheDocument();
  });
});
