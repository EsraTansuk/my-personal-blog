

// Feature Imports
import appSlice from '@/app/app/appSlice'

// Package Imports
import {combineReducers} from '@reduxjs/toolkit'

export const reducers = combineReducers({
  app: appSlice,
})