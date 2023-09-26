// Feature Imports
import storage from 'redux-persist/lib/storage'
import { AppState, LanguageModel } from "./models";

// Package Imports
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

const initialState: AppState = {
  language: null,
  deviceKey: null,
};

const { reducer, actions } = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setLanguage: (
      state: AppState,
      { payload }: PayloadAction<LanguageModel>
    ) => {
      state.language = payload;
    },
    setDeviceKey: (state: AppState, { payload }: PayloadAction<string>) => {
      state.deviceKey = payload;
    },
  },
});

const appPersistConfig = {
  key: "app",
  storage: storage,
  whitelist: ["language", "deviceKey"],
};

export default persistReducer(appPersistConfig, reducer);
export const { setLanguage, setDeviceKey } = actions;
