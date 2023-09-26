// Util and Lib Imports
import {reducers} from './reducers'

// Package Imports
import {configureStore} from '@reduxjs/toolkit'
import {persistStore} from 'redux-persist'
import {setupListeners} from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: true,
    }),
  devTools: true,
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)