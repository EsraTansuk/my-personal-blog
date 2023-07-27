"use client";
import "../../styles/global.css";
import { Provider } from "./Provider";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body">
        <Provider>
          <main className="flex min-h-screen flex-col items-center justify-between  border-black text-2xl text-black">
            <ThemeSwitcher />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
