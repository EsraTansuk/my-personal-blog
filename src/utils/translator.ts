// Util and Lib Imports
import "./stringExtensions";
import { store } from "../libs/reduxToolkit";
import en from "../libs/i18n/en.json";

// Package Imports
import {
  MessageDescriptor,
  PrimitiveType,
  createIntl,
  createIntlCache,
  useIntl,
} from "react-intl";

// Provider Imports
import { languageMessages } from "../providers";

/**
 *
 * @param key Dil dosyasında yazılı olan anahtar kelime. Örn: Common.Hello -> Türkçe Merhaba, İngilizce Hello şeklinde çıktı verir.
 * @param extraMessages Dil dosyasında kullanılan anahtar keline eğer ekstra parametre alıyorsa obje şeklinde verilmelidir. Örn, {name: 'Cindoruk'}}.
 *
 * @returns Seçilen dil içinde yer alan anahtar kelimeye karşılık geren çeviriyi ekrana getirir. Verilen key seçilen dil dosyasında yoksa "failed" olarak sonuç döner.
 *
 */

export const translator = (
  key: keyof typeof en,
  extraMessages?: Record<string, PrimitiveType | any | undefined>
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const intl = useIntl();

  if (!key.isEmpty()) {
    return intl.formatMessage({ id: key }, extraMessages);
  } else {
    return "failed";
  }
};

export const formatMessage = (
  descriptor: MessageDescriptor,
  extraMessages?: Record<string, PrimitiveType | any | undefined>
) => {
  const cache = createIntlCache();
  const selectedLang = store.getState().app.language;

  const intl = createIntl(
    {
      locale: selectedLang?.name ?? "tr-TR",
      messages:
        Object.entries(languageMessages).find(
          (key) => key[0] === selectedLang?.name
        )?.[1] ?? languageMessages["tr-TR"],
    },
    cache
  );

  return intl.formatMessage(descriptor, extraMessages);
};
