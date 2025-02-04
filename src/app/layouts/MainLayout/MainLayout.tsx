import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/src/shared/shadcn";

import "../../styles/globals.css";
import { AppSidebar } from "@/src/widgets/AppSidebar";

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
      <body className={`${roboto.variable} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
};

export default MainLayout;
