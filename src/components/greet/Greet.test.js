import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("greet", () => {
  test("render greet", () => {
    render(<Greet />);
    const divElement1 = screen.getByText("Greet");
    expect(divElement1).toBeInTheDocument();
  });
});
