import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "../../styles/globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Аукцион стримеров | Определите победителя с помощью Колеса Фортуны",
  description:
    "Аукцион стримеров | Определите победителя с помощью Колеса Фортуны",
};

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ru">
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
};

export default MainLayout;
