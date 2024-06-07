import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the header", () => {
  render(<App />);
  const header = screen.getByText(/Today's Top Hacker News!/i);
  expect(header).toBeInTheDocument();
});
