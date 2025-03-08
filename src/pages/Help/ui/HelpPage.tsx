import { Metadata } from "next";
import { FC } from "react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { ScrollArea } from "@/src/shared/shadcn";
import { Container } from "@/src/shared/ui";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("HelpPageMetadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

const HelpPage: FC = () => {
  const t = useTranslations("HelpPage");

  return (
    <ScrollArea className="pt-11 md:pt-2 h-svh">
      <Container className="max-w-[1000px]">
        <h2 className="text-4xl md:text-6xl mb-2">{t("title")}</h2>
        <h3 className="text-2xl mb-2">
          {t("sub-title-1")}
          <a className="text-blue-400 underline hover:opacity-80" href="#">
            auction-for-streamers.com
          </a>
        </h3>
        <div className="mb-2">
          {t("text-1")}
          <a
            className="text-blue-400 underline hover:opacity-80"
            href="https://pointauc.com/"
            target="_blank"
          >
            pointauc.com
          </a>
          {t("text-2")}
          <a
            className="text-blue-400 underline hover:opacity-80"
            href="https://github.com/dag0S/auction-for-streamers"
            target="_blank"
          >
            {t("link")}
          </a>
          .
        </div>
        <div className="mb-6">{t("text-3")}</div>
        <h3 className="text-2xl mb-2">{t("sub-title-2")}</h3>
        <ol className="list-decimal pl-6 mb-6">
          <li
            className="mb-1"
            dangerouslySetInnerHTML={{ __html: t.raw("list-item-1") }}
          ></li>
          <li
            className="mb-1"
            dangerouslySetInnerHTML={{ __html: t.raw("list-item-2") }}
          />
          <li
            className="mb-1"
            dangerouslySetInnerHTML={{ __html: t.raw("list-item-3") }}
          />
          <li
            className="mb-1"
            dangerouslySetInnerHTML={{ __html: t.raw("list-item-4") }}
          />
          <li dangerouslySetInnerHTML={{ __html: t.raw("list-item-5") }} />
        </ol>
        <h3 className="text-2xl mb-2">{t("sub-title-3")}</h3>
        <div>{t("text-4")}</div>
        <ul>
          <li>
            Telegram -{" "}
            <a
              href="https://t.me/DanilaGosudarev"
              target="_blank"
              className="text-blue-400 underline hover:opacity-80"
            >
              @DanilaGosudarev
            </a>
          </li>
          <li>
            Gmail -{" "}
            <a
              href="mailto:danidagosudarev@gmail.com"
              target="_blank"
              className="text-blue-400 underline hover:opacity-80"
            >
              danidagosudarev@gmail.com
            </a>
          </li>
          <li>
            GitHub -{" "}
            <a
              href="https://github.com/dag0S"
              target="_blank"
              className="text-blue-400 underline hover:opacity-80"
            >
              dag0S
            </a>
          </li>
        </ul>
      </Container>
    </ScrollArea>
  );
};

export default HelpPage;
