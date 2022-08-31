import {
  render,
  screen,
  act,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import Login from "./Login";

import { screen } from "@testing-library/dom";

describe("component/Login/Login", () => {
  //   test("Testing Login Form", () => {
  //     render(<Login />);
  //     const children = screen.getByLabelText(/allergens/);
  //     expect(children).toBeInTheDocument();
  //   });
  //   test("Testing Login Form", () => {
  //     render(<Login />);
  //     const children = screen.getByLabelText(/allergens/);
  //     expect(children).toBeInTheDocument();
  //   });
  beforeEach(async () => {
    await act(async () => {
      render(<Login />);
    });
  });

  describe("When the page is rendered", () => {
    test("It renders the Login link", () => {
      const loginBtn = screen.getByText(/Login/);
      expect(loginBtn).toBeInTheDocument();
    });
  });
});
