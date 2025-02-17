"use client";

import { CircleHelp, Gavel, LoaderPinwheel } from "lucide-react";
import { usePathname } from "next/navigation";
import { FC, useMemo } from "react";
import { SwitchTheme } from "@/src/features/SwitchTheme";
import { cn } from "@/src/shared/lib";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/shared/shadcn";
import { SwitchLanguage } from "@/src/features/SwitchLanguage";
import { Link } from "@/src/shared/config/i18n/routing";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

export const AppSidebar: FC<Props> = ({ className }) => {
  const pathname = usePathname();
  const t = useTranslations("AppSidebar");

  const menuItems = useMemo(
    () => [
      {
        title: t("menu-item-auction"),
        url: "/",
        icon: Gavel,
      },
      {
        title: t("menu-item-wheel"),
        url: "/wheel",
        icon: LoaderPinwheel,
      },
      {
        title: t("menu-item-help"),
        url: "/help",
        icon: CircleHelp,
      },
    ],
    [t]
  );

  return (
    <Sidebar className={cn("", className)} collapsible="icon">
      <SidebarContent className="pt-10">
        <SidebarGroup>
          <SidebarGroupLabel className="text-base">
            {t("menu")}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className="text-lg py-5"
                  >
                    <Link href={item.url} className="flex items-center gap-4">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SwitchLanguage />
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SwitchTheme />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
