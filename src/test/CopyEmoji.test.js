import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Copy emoji test", () => {
  let copyEmoji;
  beforeEach(() => {
    render(<App />);
    copyEmoji = screen.getByText("Grinning");
  });
  test("Copy to clickboard test", () => {
    fireEvent.click(copyEmoji);
    expect(copyEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch(
      "😀"
    );
  });
});
