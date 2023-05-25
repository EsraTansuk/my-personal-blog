import '../../styles/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-bodyDarkColor">
        <div className="color-block d-none d-lg-block bg-mainColor">

        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
