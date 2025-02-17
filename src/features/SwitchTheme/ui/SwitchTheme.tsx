import { useTheme } from "next-themes";
import { FC, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Moon, Sun } from "lucide-react";
import { SidebarMenuButton } from "@/src/shared/shadcn";
import { Dropdown, IDropdownMenuItem } from "@/src/shared/ui";

export const SwitchTheme: FC = () => {
  const { setTheme } = useTheme();
  const t = useTranslations("SwitchTheme");

  const themeItems = useMemo<IDropdownMenuItem[]>(
    () => [
      {
        title: t("theme-light"),
        onClick: () => setTheme("light"),
      },
      {
        title: t("theme-dark"),
        onClick: () => setTheme("dark"),
      },
      {
        title: t("theme-system"),
        onClick: () => setTheme("system"),
      },
    ],
    [setTheme, t]
  );

  return (
    <Dropdown items={themeItems}>
      <SidebarMenuButton variant="outline" className="w-fit">
        <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span>{t("btn-switch-theme")}</span>
      </SidebarMenuButton>
    </Dropdown>
  );
};
