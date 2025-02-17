"use client";

import { Languages } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { FC, useCallback, useMemo, useTransition } from "react";
import { usePathname, useRouter } from "@/src/shared/config/i18n/routing";
import { SidebarMenuButton } from "@/src/shared/shadcn";
import { Dropdown, IDropdownMenuItem } from "@/src/shared/ui";

export const SwitchLanguage: FC = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations("SwitchLanguage");

  const changeLanguage = useCallback(
    (locale: string) => {
      startTransition(() => {
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        router.replace({ pathname, params }, { locale });
      });
    },
    [params, pathname, router]
  );

  const langItems = useMemo<IDropdownMenuItem[]>(
    () => [
      {
        title: "Русский",
        onClick: () => changeLanguage("ru"),
        disabled: isPending,
      },
      {
        title: "English",
        onClick: () => changeLanguage("en"),
        disabled: isPending,
      },
    ],
    [changeLanguage, isPending]
  );

  return (
    <Dropdown items={langItems}>
      <SidebarMenuButton variant="outline" className="w-fit">
        <Languages />
        <span>{t("language")}</span>
      </SidebarMenuButton>
    </Dropdown>
  );
};
