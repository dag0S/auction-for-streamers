import { useTheme } from "next-themes";
import { FC, useMemo } from "react";
import { Moon, Sun } from "lucide-react";
import { SidebarMenuButton } from "@/src/shared/shadcn";
import { Dropdown, IDropdownMenuItem } from "@/src/shared/ui";

export const SwitchTheme: FC = () => {
  const { setTheme } = useTheme();

  const themeItems = useMemo<IDropdownMenuItem[]>(
    () => [
      {
        title: "Светлая",
        onClick: () => setTheme("light"),
      },
      {
        title: "Темная",
        onClick: () => setTheme("dark"),
      },
      {
        title: "Система",
        onClick: () => setTheme("system"),
      },
    ],
    [setTheme]
  );

  return (
    <Dropdown items={themeItems}>
      <SidebarMenuButton variant="outline" className="max-w-[140px]">
        <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span>Сменить тему</span>
      </SidebarMenuButton>
    </Dropdown>
  );
};
