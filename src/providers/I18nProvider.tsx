// React Imports
import {FC, PropsWithChildren} from 'react'

// Util and Lib Imports
import tr from '../libs/i18n/tr.json'
import en from '../libs/i18n/en.json'


// Package Imports
import {IntlProvider} from 'react-intl'
import {useAppSelector} from '../hooks'
import {getLanguageState} from '../app/app/appSelector'

export const languageMessages = {
  'tr-TR': tr,
  'en-US': en,
}

// TODO: Message propertysi düzenlenmelidir.
export const I18nProvider: FC<PropsWithChildren> = ({children}) => {
  const appLanguage = useAppSelector(getLanguageState())

  return (
    <IntlProvider
      defaultLocale='tr-TR'
      locale={appLanguage?.name ?? 'tr-TR'}
      messages={
        appLanguage?.name
          ? Object.entries(languageMessages).find((key) => key[0] === appLanguage?.name)?.[1]
          : languageMessages['en-US']
      }>
      {children}
    </IntlProvider>
  )
}