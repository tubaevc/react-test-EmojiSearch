import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";
import emojiList from "../emojiList.json";

describe("Emoji list render test", () => {
  let emojiList;
  beforeEach(() => {
    render(<App />);
    emojiList = [...document.querySelectorAll(".emoji-item")].slice(0, 10);
  });
  test("Emoji list render", () => {
    emojiList.map((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
