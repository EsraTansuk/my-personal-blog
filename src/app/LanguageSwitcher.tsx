import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setLanguageAction } from "../app/app/appAction";
import { getLanguageState } from "./app/appSelector";
import { LanguageModel } from "../app/app/models/languageModel";

const LanguageSwitcher = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(getLanguageState());

  const changeLanguage = () => {
    const newLanguage: LanguageModel =
      currentLanguage?.name === "en-US"
        ? { name: "tr-TR", flag: "" }
        : { name: "en-US", flag: "" };
    dispatch(setLanguageAction(newLanguage));
  };

  return (
    <span
      onClick={changeLanguage}
      className="cursor-pointer font-semibold text-sm sm:text-base lg:text-lg select-none"
    >
      {currentLanguage?.name === "en-US" ? "US" : "TR"}
    </span>
  );
};

export default LanguageSwitcher;
