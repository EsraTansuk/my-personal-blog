import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Inter } from "next/font/google";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body">
        <main>{children}</main>
      </body>
    </html>
  );
}
