import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SidebarMenu } from "../components/SidebarMenu/SidebarMenu";
import FStrings from "../strings/fa.json";
import EStrings from "../strings/en.json";
describe("Sidebar Menu", () => {
  it("should show navigation items", () => {
    const fn = jest.fn();
    const { getByText, queryByText } = render(
      <SidebarMenu
        open={true}
        closeSidebar={fn}
        navigationItems={FStrings.nav}
      />
    );
    expect(getByText(FStrings.nav.home)).toBeInTheDocument();
    expect(getByText(FStrings.nav.aboutUs)).toBeInTheDocument();
    expect(getByText(FStrings.nav.contactUs)).toBeInTheDocument();
    expect(getByText(FStrings.nav.events)).toBeInTheDocument();
    expect(queryByText(EStrings.nav.home)).not.toBeInTheDocument();
  });
});
