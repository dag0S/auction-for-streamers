"use client";

import { CircleHelp, Gavel, LoaderPinwheel } from "lucide-react";
import { usePathname } from "next/navigation";
import { FC, useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
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
import { SLOTS_LOCALSTORAGE_KEY } from "@/src/shared/const/localstorage";
import { slotsActions } from "@/src/entities/Slot";
import { useAppDispatch } from "@/src/shared/lib/hooks";

interface Props {
  className?: string;
}

export const AppSidebar: FC<Props> = ({ className }) => {
  const pathname = usePathname();
  const t = useTranslations("AppSidebar");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedSlots = localStorage.getItem(SLOTS_LOCALSTORAGE_KEY);
    if (savedSlots) {
      dispatch(slotsActions.setSlots(JSON.parse(savedSlots)));
    }
  }, [dispatch]);

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
          <SidebarMenuItem>
            <SidebarMenuButton className="w-fit">
              <a href="https://t.me/DanilaGosudarev" target="_blank">
                <Image src="/icons/tg.svg" alt="tg" width={24} height={24} />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-fit">
              <a href="https://github.com/dag0S" target="_blank">
                <Image
                  src="/icons/gitHub.svg"
                  alt="gitHub"
                  width={24}
                  height={24}
                />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
