import { Languages } from "../context/LanguageContext";
import { fireEvent, render, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavigationBar } from "../components/NavigationBar";
import FStrings from "../strings/fa.json";

const MobileContainer = document.createElement("div");
MobileContainer.setAttribute("style", "width: 300px;");

describe("Navigation Bar", () => {
  it("should show burger menu in mobile", () => {
    const fn = jest.fn();
    const { getByTestId } = render(
      <NavigationBar
        language={Languages.farsi}
        navigationItems={FStrings.nav}
      />,
      { container: MobileContainer }
    );
    expect(getByTestId("burger-menu-icon")).toHaveClass(`block`);
  });
});
