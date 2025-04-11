"use client";
import {
  AppInitializeProvider,
  I18nProvider,
  ReduxPersistProvider,
  ReduxProvider,
} from "@/providers";
import "../../styles/global.css";
import { Provider } from "./Provider";
import { SwitchersWrapper } from "./components/switchers/SwitchersWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body">
        <ReduxProvider>
          <ReduxPersistProvider>
            <AppInitializeProvider>
              <I18nProvider>
                <Provider>
                  <main className="flex min-h-screen flex-col items-center justify-between border-black text-2xl text-black">
                    <SwitchersWrapper />
                    {children}
                  </main>
                </Provider>
              </I18nProvider>
            </AppInitializeProvider>
          </ReduxPersistProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
