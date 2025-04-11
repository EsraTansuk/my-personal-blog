// React Imports
import { FC, PropsWithChildren } from "react";

// Util and Lib Imports
import { persistor } from "../libs/reduxToolkit";

// Package Imports
import { PersistGate } from "redux-persist/integration/react";

export const ReduxPersistProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  // TODO: Loading ekranı eklenmesi gerek.
  return (
    <PersistGate loading={<></>} persistor={persistor}>
      {children}
    </PersistGate>
  );
};
