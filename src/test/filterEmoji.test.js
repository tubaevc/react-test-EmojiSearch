import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Search Emoji", () => {
  let emojiFilter;
  beforeEach(() => {
    render(<App />);
    emojiFilter = screen.getByLabelText("inputTest");
  });
  test("render after filter", () => {
    const value = "Grinning";
    fireEvent.click(emojiFilter, value);
    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
