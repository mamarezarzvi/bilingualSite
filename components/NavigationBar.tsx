import { Languages } from "@/context/LanguageContext";
import Link from "next/link";
import { BurgerMenu } from "./BurgerMenu";
import { LanguageDropDown } from "./LanguageDropdown/LanguageDropdown";
import styles from "../styles/common.module.css";

const NavItem: React.FC<{ name: string; route: string; isLTR: boolean }> = (
  props
) => (
  <li
    key={props.name}
    className={`${
      props.isLTR ? "ml-8" : "mr-10"
    } min-w-10 text-sm font-bold text-white`}
  >
    <Link href={`/${props.route}`}>{props.name}</Link>
  </li>
);

export const NavigationBar: React.FC<{
  navigationItems: { [key: string]: string };
  language: Languages;
}> = ({ navigationItems, language }) => {
  const isLTR = language === Languages.english;
  return (
    <nav
      className={`bg-blue-700 w-full h-10 flex items-center ${
        isLTR ? styles.ltr : styles.rtl
      } justify-between`}
    >
      <BurgerMenu className="block h-6 w-6 md:hidden mx-4" />
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
  );
};
