"use client";
import {
  AppInitializeProvider,
  I18nProvider,
  ReduxPersistProvider,
  ReduxProvider,
} from "@/providers";
import "../../styles/global.css";
import { Provider } from "./Provider";
import { ThemeSwitcher } from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";

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
                  <main className="flex min-h-screen flex-col items-center justify-between  border-black text-2xl text-black">
                    <ThemeSwitcher />
                    <LanguageSwitcher />
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
