import { useTranslations } from "next-intl";
import { FC } from "react";

const NotFoundPage: FC = () => {
  const t = useTranslations("NotFoundPage");

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-3xl">{t("title")}</div>
    </div>
  );
};

export default NotFoundPage;
