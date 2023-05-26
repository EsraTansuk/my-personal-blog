import "../../styles/global.css";
import { Header } from "./components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-bodyDarkColor">
        <main>{children}</main>
      </body>
    </html>
  );
}
