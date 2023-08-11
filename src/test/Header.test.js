import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("header test", () => {
  let emojiSearch;
  beforeEach(() => {
    render(<App />);
    emojiSearch = screen.getByText("Emoji Search");
  });

  test("Header render edilmeli", () => {
    expect(emojiSearch).toBeInTheDocument();
  });
});
