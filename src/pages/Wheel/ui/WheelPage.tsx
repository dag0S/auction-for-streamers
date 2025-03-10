import { FC } from "react";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { Container } from "@/src/shared/ui";
import { WheelContent } from "@/src/widgets/WheelContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("WheelPageMetadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

const WheelPage: FC = async () => {
  const t = await getTranslations("WheelPage");

  return (
    <div>
      <Container className="pt-2 px-1 md:p-3 flex flex-col h-screen-safe">
        <h3 className="text-4xl xl:text-6xl hidden md:block">{t("title")}</h3>
        <WheelContent />
      </Container>
    </div>
  );
};

export default WheelPage;
