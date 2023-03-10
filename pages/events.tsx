import Head from "next/head";
import FStrings from "../strings/fa.json";
import EStrings from "../strings/en.json";
import { GetStaticProps } from "next";
import { Languages, useLanguage } from "@/context/LanguageContext";
import { NavigationBar } from "@/components/NavigationBar";
import styles from "../styles/common.module.css";

export type PageProps = {
  navItems: { en: { [key: string]: string }; fa: { [key: string]: string } };
};

export default function Events(props: PageProps) {
  const { language } = useLanguage();
  const navigationItems =
    language === Languages.english ? props.navItems.en : props.navItems.fa;
  const isLTR = language === Languages.english;

  return (
    <>
      <NavigationBar navigationItems={navigationItems} language={language} />
      <main
        className={`px-10 py-6 font-bold ${isLTR ? styles.ltr : styles.rtl}`}
      >
        <h1>{navigationItems.events}</h1>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      navItems: {
        en: EStrings.nav,
        fa: FStrings.nav,
      },
    },
  };
};
