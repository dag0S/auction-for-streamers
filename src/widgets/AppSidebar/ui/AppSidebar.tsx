"use client";

import { CircleHelp, Gavel, LoaderPinwheel } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
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

interface Props {
  className?: string;
}

const menuItems = [
  {
    title: "Аукцион",
    url: "/",
    icon: Gavel,
  },
  {
    title: "Колесо рандома",
    url: "/wheel",
    icon: LoaderPinwheel,
  },
  {
    title: "О сайте",
    url: "/help",
    icon: CircleHelp,
  },
];

export const AppSidebar: FC<Props> = ({ className }) => {
  const pathname = usePathname();

  return (
    <Sidebar className={cn("", className)} collapsible="icon">
      <SidebarContent className="pt-10">
        <SidebarGroup>
          <SidebarGroupLabel className="text-base">Меню</SidebarGroupLabel>
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
