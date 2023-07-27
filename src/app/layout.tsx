import "../../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-bodyDarkColor">
        <main className="flex min-h-screen flex-col items-center justify-between border-black text-2xl text-black">{children}</main>
      </body>
    </html>
  );
}
