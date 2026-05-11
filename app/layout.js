export const metadata = {
  title: "Mohammad Sakeer",
  description: "I help people grow and level up",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
