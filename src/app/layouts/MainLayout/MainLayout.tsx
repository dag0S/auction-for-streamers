import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { SidebarProvider, SidebarTrigger } from "@/src/shared/shadcn";
import { AppSidebar } from "@/src/widgets/AppSidebar";
import { StoreProvider } from "../../providers/StoreProvider";
import { ThemeProvider } from "../../providers/ThemeProvider";

import "../../styles/globals.css";
import { routing } from "@/src/shared/config/i18n/routing";
import { notFound } from "next/navigation";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title:
    "Аукцион для стримеров | Определите победителя с помощью Колеса Фортуны",
  description:
    "Аукцион стримеров | Определите победителя с помощью Колеса Фортуны",
};

const MainLayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) => {
  const locale = (await params).locale;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale} suppressHydrationWarning>
        <body className={`${roboto.variable} antialiased overflow-hidden`}>
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
    </NextIntlClientProvider>
  );
};

export default MainLayout;
