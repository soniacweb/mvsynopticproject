import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DrinksCard from "./DrinksCardContainer";

import { screen, getByLabelText } from "@testing-library/dom";

describe("component/DrinksCard", () => {
  test("Testing DrinksCardContainer accepting a child component", () => {
    render(<DrinksCard />);
    const children = screen.getByLabelText(/allergens/);
    expect(children).toBeInTheDocument();
  });
});
