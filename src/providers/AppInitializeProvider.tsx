// React Imports
import { FC, PropsWithChildren, useEffect } from "react";

// Hook Imports
import { useAppDispatch, useAppSelector } from "../hooks";

// Feature Imports
import { getLanguageState } from "../app/app/appSelector";
import { setLanguageAction } from "../app/app/appAction";

// Package Imports
import { languageMessages } from "./I18nProvider";

export const AppInitializeProvider: FC<PropsWithChildren> = ({ children }) => {
  const appLanguage = useAppSelector(getLanguageState());

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!appLanguage) {
      const deviceLocale = navigator.languages;

      let languageCode = deviceLocale[0];
      if (languageCode === "tr-US") languageCode = "tr-TR";

      dispatch(
        setLanguageAction({
          name: Object.entries(languageMessages).some(
            (key) => key[0] === languageCode
          )
            ? languageCode
            : "en-US",
          flag: "",
        })
      );
    }
  }, []);

  return <>{children}</>;
};
