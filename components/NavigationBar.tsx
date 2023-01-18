import { Languages } from "../context/LanguageContext";
import { BurgerMenu } from "./BurgerMenu";
import { LanguageDropDown } from "./LanguageDropdown/LanguageDropdown";
import styles from "../styles/common.module.css";
import { NavItem } from "./shared";
import { SidebarMenu } from "./SidebarMenu/SidebarMenu";
import React, { useCallback, useState } from "react";

export const NavigationBar: React.FC<{
  navigationItems: { [key: string]: string };
  language: Languages;
}> = ({ navigationItems, language }) => {
  const isLTR = language === Languages.english;
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuClickHandler = useCallback((event: React.MouseEvent) => {
    setMenuOpen((prev) => !prev);
    event.stopPropagation();
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);
  return (
    <>
      <nav
        data-testid="navigation-container"
        className={`bg-blue-700 w-full h-10 flex items-center ${
          isLTR ? styles.ltr : styles.rtl
        } justify-between`}
      >
        <BurgerMenu
          data-testid="burger-menu-icon"
          className="block h-6 w-6 md:hidden mx-4"
          onClick={menuClickHandler}
        />
        <ul className="hidden md:flex">
          {Object.entries(navigationItems).map(([route, item]) => (
            <NavItem
              key={route}
              name={item}
              route={route === "home" ? "/" : route}
              isLTR={isLTR}
            />
          ))}
        </ul>
        <LanguageDropDown />
      </nav>
      <SidebarMenu
        open={isMenuOpen}
        navigationItems={navigationItems}
        closeSidebar={closeMenu}
      />
    </>
  );
};
