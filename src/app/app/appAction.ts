// Feature Imports
import {LanguageModel} from './models'
import {setLanguage, setDeviceKey} from './appSlice'

// Package Imports
import {createAsyncThunk} from '@reduxjs/toolkit'

export const setLanguageAction = createAsyncThunk(
  'app/setLanguage',
  (language: LanguageModel, {dispatch}) => {
    dispatch(setLanguage(language))
  }
)

export const setDeviceKeyAction = createAsyncThunk(
  'app/setDeviceKey',
  (deviceKey: string, {dispatch}) => {
    dispatch(setDeviceKey(deviceKey))
  }
)