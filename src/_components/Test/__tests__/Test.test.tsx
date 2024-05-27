import { render } from "@testing-library/react";
import { Test } from "../Test";

describe("App", () => {
  it("renders the App component", () => {
    const { getByText } = render(<Test />);
    const text = getByText("Test");

    expect(text).toBeInTheDocument();
  });
});
