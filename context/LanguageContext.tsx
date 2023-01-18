import React, { createContext, useCallback, useContext, useState } from "react";

export enum Languages {
  farsi = "فارسی",
  english = "english",
}

const LanguageContext = createContext({
  language: Languages.farsi,
  changeLanguage: (item: Languages) => {},
});

export const LanguageContextProvider: React.FC<{
  children?: React.ReactNode;
}> = (props) => {
  const [lang, setLang] = useState(Languages.farsi);
  const changeLanguage = useCallback((item: Languages) => {
    setLang(item);
  }, []);

  return (
    <LanguageContext.Provider value={{ language: lang, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
