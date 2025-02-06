import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/src/shared/shadcn";
import { AppSidebar } from "@/src/widgets/AppSidebar";
import { StoreProvider } from "../../providers/StoreProvider";

import "../../styles/globals.css";
import { ThemeProvider } from "../../providers/ThemeProvider";

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
    <html lang="ru" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
            <SidebarProvider className="relative">
              <AppSidebar />
              <main className="w-full">
                <SidebarTrigger className="absolute left-2 top-2 z-10 p-2" />
                {children}
              </main>
            </SidebarProvider>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default MainLayout;
