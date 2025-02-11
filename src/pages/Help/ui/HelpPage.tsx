import { Metadata } from "next";
import { FC } from "react";
import { ScrollArea } from "@/src/shared/shadcn";
import { Container } from "@/src/shared/ui";

export const metadata: Metadata = {
  title: "Аукцион для стримеров | О сайте",
  description: "Информация о сайте, стек технологий, функционал, контакты",
};

const HelpPage: FC = () => {
  return (
    <ScrollArea className="pt-2 min-h-0 h-screen">
      <Container className="max-w-[1000px]">
        <h2 className="text-6xl mb-2">О сайте</h2>
        <h3 className="text-2xl mb-2">
          Аукцион для стримеров -{" "}
          <a className="text-blue-400 underline hover:opacity-80" href="#">
            auction-for-streamers.com
          </a>
        </h3>
        <div className="mb-2">
          Этот сайт представляет собой учебную копию{" "}
          <a
            className="text-blue-400 underline hover:opacity-80"
            href="https://pointauc.com/"
            target="_blank"
          >
            pointauc.com
          </a>
          , и создан исключительно для обучения. Он разработан с использованием
          следующих технологий: React, Redux Toolkit, NextJS, Typescript, React
          Hook Form и Framer Motion. Полный исходный код можно найти в
          репозитории на GitHub по{" "}
          <a
            className="text-blue-400 underline hover:opacity-80"
            href="https://github.com/dag0S/auction-for-streamers"
            target="_blank"
          >
            ссылке
          </a>
          .
        </div>
        <div className="mb-6">
          Этот сайт предназначен для взаимодействия между стримером и его
          аудиторией, позволяя им совместно принимать решения во время стрима.
          Будь то выбор фильма, сериала или игры для развлечения.
        </div>
        <h3 className="text-2xl mb-2">Функционал</h3>
        <ol className="list-decimal pl-6 mb-6">
          <li className="mb-1">
            <b>Управление лотами:</b> Возможность добавлять, удалять, обновлять,
            искать и сохранять лоты в локальном хранилище.
          </li>
          <li className="mb-1">
            <b>Колесо Фортуны:</b> Определяет победителя в интерактивном режиме.
          </li>
          <li className="mb-1">
            <b>Таймер:</b> Позволяет устанавливать время для стрима.
          </li>
          <li className="mb-1">
            <b>Темы:</b> Смена темы приложения (темная/светлая).
          </li>
          <li>
            <b>Языки:</b> Возможность выбора языка интерфейса.
          </li>
        </ol>
        <h3 className="text-2xl mb-2">Контакты</h3>
        <div>
          Вы можете связаться с создателем сайта по следующим контактам:
        </div>
        <ul>
          <li>
            telegram -{" "}
            <a
              href="https://t.me/DanilaGosudarev"
              target="_blank"
              className="text-blue-400 underline hover:opacity-80"
            >
              @DanilaGosudarev
            </a>
          </li>
          <li>
            gmail -{" "}
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
