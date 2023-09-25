// React Imports
import { FC } from "react";

// Next Imports
import Router, { useRouter } from "next/router";

// Package Imports
import { IntlProvider } from "react-intl";

import enMessages from "./en.json";
import trMessages from "./tr.json";

export const languageMessages = {
  en: enMessages,
  tr: trMessages,
};

export const i18nProvider: FC = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  const messages = languageMessages[locale];

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      {children}
    </IntlProvider>
  );
};
