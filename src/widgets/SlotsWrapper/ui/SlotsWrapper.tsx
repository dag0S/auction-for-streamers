"use client";

import { Slot } from "@/src/entities/Slot";
import { cn } from "@/src/shared/lib";
import { useAppSelector } from "@/src/shared/lib/hooks";
import { ScrollArea } from "@/src/shared/shadcn";
import { FC } from "react";

interface Props {
  className?: string;
}

// const slots: ISlot[] = [
//   {
//     id: "1",
//     fastId: 1,
//     name: "Наруто",
//     amount: 1500,
//   },
//   {
//     id: "2",
//     fastId: 2,
//     name: "Саске",
//     amount: 1200,
//   },
//   {
//     id: "3",
//     fastId: 3,
//     name: "Сакура",
//     amount: 1000,
//   },
//   {
//     id: "4",
//     fastId: 4,
//     name: "Какаши",
//     amount: 2000,
//   },
//   {
//     id: "5",
//     fastId: 5,
//     name: "Хината",
//     amount: 900,
//   },
//   {
//     id: "6",
//     fastId: 6,
//     name: "Шикамару",
//     amount: 1300,
//   },
//   {
//     id: "7",
//     fastId: 7,
//     name: "Гаара",
//     amount: 1100,
//   },
//   {
//     id: "8",
//     fastId: 8,
//     name: "Рок Ли",
//     amount: 800,
//   },
//   {
//     id: "9",
//     fastId: 9,
//     name: "Орочимару",
//     amount: 2500,
//   },
//   {
//     id: "10",
//     fastId: 10,
//     name: "Джирайя",
//     amount: 1800,
//   },
//   {
//     id: "11",
//     fastId: 11,
//     name: "Джирайя",
//     amount: 1800,
//   },
//   {
//     id: "12",
//     fastId: 12,
//     name: "Джирайя",
//     amount: 1800,
//   },
//   {
//     id: "13",
//     fastId: 13,
//     name: "Джирайя",
//     amount: 1800,
//   },
//   {
//     id: "14",
//     fastId: 14,
//     name: "Джирайя",
//     amount: 1800,
//   },
//   {
//     id: "15",
//     fastId: 15,
//     name: "Джирайя",
//     amount: 1800,
//   },
//   {
//     id: "16",
//     fastId: 16,
//     name: "Джирайя",
//     amount: 1800,
//   },
// ];

// const slots: ISlot[] = [
//   {
//     id: "1",
//     fastId: 1,
//     name: "Наруто",
//     amount: 1500,
//   },
//   {
//     id: "2",
//     fastId: 2,
//     name: "Саске",
//     amount: 1200,
//   },
// ];

export const SlotsWrapper: FC<Props> = ({ className }) => {
  const slots = useAppSelector((state) => state.slots.slots);

  if (slots.length === 0) {
    return <h2 className="text-2xl font-semibold">Добавьте слоты</h2>;
  }

  return (
    <ScrollArea className={cn("border rounded-md", className)}>
      {slots.map((slot, index) => (
        <Slot
          className="p-3"
          amount={slot.amount}
          fastId={slot.fastId}
          name={slot.name}
          number={index + 1}
          id={slot.id}
          key={slot.id}
        />
      ))}
    </ScrollArea>
  );
};
