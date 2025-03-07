import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import NextTopLoader from "nextjs-toploader";
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

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("LayoutMetadata");

  return {
    title: t("title"),
    description: t("description"),
    icons: "/icons/logo.svg",
  };
}

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
    <StoreProvider>
      <NextIntlClientProvider messages={messages}>
        <html lang={locale} suppressHydrationWarning>
          <body className={`${roboto.variable} antialiased overflow-hidden`}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <NextTopLoader color="#7b3aec" />
              <SidebarProvider className="relative">
                <AppSidebar />
                <main className="w-full">
                  <SidebarTrigger className="absolute left-2 top-2 z-10 p-2" />
                  {children}
                </main>
              </SidebarProvider>
            </ThemeProvider>
          </body>
        </html>
      </NextIntlClientProvider>
    </StoreProvider>
  );
};

export default MainLayout;
