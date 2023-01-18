import { Languages, useLanguage } from "../../context/LanguageContext";
import { useCallback, useState } from "react";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import styles from "./LanguageDropdown.module.css";

const options = [Languages.farsi, Languages.english];
export function LanguageDropDown() {
  const [open, setOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const onFocusHandler = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const onChangeHandler = useCallback(
    (selected: Option) => {
      changeLanguage(selected.value as Languages);
      onFocusHandler();
    },
    [onFocusHandler]
  );

  return (
    <Dropdown
      className="bg-transparent mx-4"
      controlClassName="bg-transparent h-8 border-none flex items-center"
      menuClassName="text-center"
      placeholderClassName="text-sm text-white"
      arrowClassName={
        open
          ? styles["dropdown--arrow__open"]
          : styles["dropdown--arrow__close"]
      }
      options={options}
      onChange={onChangeHandler}
      onFocus={onFocusHandler}
      value={language}
    />
  );
}
