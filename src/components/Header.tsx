import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Itrans } from "../interfaces/common.interface";
import i18next from "../translations/i18n";

export const Header = () => {
  const [lang, setLang] = useState("en");

  const toggleLanguage = () => {
    console.log("buttonClicked");
    lang === "en" ? setLang("zh") : setLang("en");
    i18next.changeLanguage(lang);
  };

  const trans = useTranslation();
  const t = trans.t as Itrans;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <h1>{t("appName")}</h1>
      <button
        style={{
          textAlign: "center",
          height: "2rem",
          color: "white",
          backgroundColor: "green",
        }}
        onClick={toggleLanguage}
      >
        Convert Language
      </button>
    </div>
  );
};
