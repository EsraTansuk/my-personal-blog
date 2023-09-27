import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setLanguageAction } from "../app/app/appAction";
import { getLanguageState } from "./app/appSelector";

import { LanguageModel } from "../app/app/models/languageModel";

//image Imports
import trFlag from "../../public/img/turkey.png";
import enFlag from "../../public/img/united-states-of-america.png";
import Image from "next/image";

const LanguageSwitcher = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(getLanguageState());

  const changeLanguage = () => {
    const newLanguage: LanguageModel =
      currentLanguage.name === "en-US"
        ? { name: "tr-TR", flag: "" }
        : { name: "en-US", flag: "" };
    dispatch(setLanguageAction(newLanguage));
  };

  return (
    <div className="right-9 pt-24 z-[99] absolute ">
      <button
        onClick={changeLanguage}
        className="pt-1 "
        type="button"
      >
        <Image
          src={currentLanguage.name === "en-US" ? enFlag : trFlag}
          alt="Language Flag"
          width={56}
          height={56}
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
