import "./globals.css";

export const metadata = {
  title: "Ochi Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
