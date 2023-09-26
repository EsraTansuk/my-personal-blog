/* eslint-disable indent */
import {RootState} from '../../libs/reduxToolkit'

export const getLanguageState =
  () =>
  ({app: {language}}: RootState) =>
    language

export const getDeviceKeyState =
  () =>
  ({app: {deviceKey}}: RootState) =>
    deviceKey