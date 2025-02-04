"use client";

import { cn } from "@/src/shared/lib";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/shared/shadcn";
import { CircleHelp, Gavel, LoaderPinwheel } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

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
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-base">Меню</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-3">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className="text-lg"
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
    </Sidebar>
  );
};
