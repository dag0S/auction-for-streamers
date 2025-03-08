import { Link } from "@/src/shared/config/i18n/routing";
import { Button } from "@/src/shared/shadcn";
import { useTranslations } from "next-intl";
import { FC } from "react";

const NotFoundPage: FC = () => {
  const t = useTranslations("NotFoundPage");

  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen-safe">
      <div className="text-3xl">{t("title")}</div>
      <Button asChild>
        <Link href="/">{t("link-home")}</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
