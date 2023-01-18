import { Languages, useLanguage } from "../../context/LanguageContext";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavItem } from "../shared";
const isBrowser = typeof window !== "undefined";

export const SidebarMenu: React.FC<{
  open: boolean;
  navigationItems: { [key: string]: string };
  closeSidebar: () => void;
}> = (props) => {
  const { language } = useLanguage();
  const [isVisible, setVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const isLTR = language === Languages.english;
  const ref = useRef<HTMLDivElement>(null);

  const tapOutHandler = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current?.contains(event.target as any)) {
      props.closeSidebar();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
        timeoutRef.current = undefined;
      }, 300);
    }
  }, []);

  useEffect(() => {
    if (isBrowser) window.addEventListener("click", tapOutHandler);
    return () => {
      if (isBrowser) window.removeEventListener("click", tapOutHandler);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-testid="sidebar-menu-wrapper"
      className={`${isVisible ? "!invisible" : "visible"} ${
        props.open
          ? isLTR
            ? "visible left-0"
            : "visible right-0"
          : isLTR
          ? "-left-1/2"
          : "-right-1/2"
      } ${
        isLTR ? "transition-left" : "transition-right"
      } fixed top-0 z-10 h-screen w-1/2 bg-blue-900 transition-visibility ease-in-out duration-300 md:hidden`}
    >
      <ul className="flex-column">
        {Object.entries(props.navigationItems).map(([route, item]) => (
          <NavItem
            key={route}
            name={item}
            route={route === "home" ? "/" : route}
            className="my-4 text-center"
          />
        ))}
      </ul>
    </div>
  );
};
