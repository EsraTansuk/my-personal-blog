import {LanguageModel} from './languageModel'

export interface AppState {
  language: Nullable<LanguageModel>
  deviceKey: Nullable<string>
}