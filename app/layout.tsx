import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* The 'data-theme' attribute controls which daisyUI theme is active */
    <html lang="en" data-theme="cupcake">
      <body>{children}</body>
    </html>
  );
}