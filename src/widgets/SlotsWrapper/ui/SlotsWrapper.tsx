"use client";

import { FC, useEffect } from "react";
import { Slot, slotsActions } from "@/src/entities/Slot";
import { SLOTS_LOCALSTORAGE_KEY } from "@/src/shared/const/localstorage";
import { cn } from "@/src/shared/lib";
import { useAppDispatch, useAppSelector } from "@/src/shared/lib/hooks";
import { ScrollArea } from "@/src/shared/shadcn";

interface Props {
  className?: string;
}

export const SlotsWrapper: FC<Props> = ({ className }) => {
  const slots = useAppSelector((state) => state.slots.slots);
  const dispatch = useAppDispatch();
  const totalAmount = slots.reduce((acc, slot) => (acc += +slot.amount), 0);
  const sortedSlots = [...slots].sort((a, b) => +b.amount - +a.amount);
  const { searchValue } = useAppSelector((state) => state.search);

  useEffect(() => {
    const savedSlots = localStorage.getItem(SLOTS_LOCALSTORAGE_KEY);
    if (savedSlots) {
      dispatch(slotsActions.setSlots(JSON.parse(savedSlots)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(SLOTS_LOCALSTORAGE_KEY, JSON.stringify(slots));
  }, [slots]);

  const filteredSlots = sortedSlots.filter((slot) =>
    slot.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (sortedSlots.length === 0) {
    return (
      <h2 className="text-2xl font-semibold max-w-[500px] break-words h-full">
        Добавьте слоты
      </h2>
    );
  }

  if (filteredSlots.length === 0) {
    return (
      <h2 className="text-2xl font-semibold max-w-[500px] break-words h-full overflow-y-auto">
        По запросу &quot;{searchValue}&quot; ничего не найдено
      </h2>
    );
  }

  return (
    <ScrollArea className={cn("border rounded-md", className)}>
      {filteredSlots.map((slot, index) => (
        <Slot
          className="p-3"
          amount={slot.amount}
          fastId={slot.fastId}
          name={slot.name}
          number={index + 1}
          id={slot.id}
          key={slot.id}
          totalAmount={totalAmount}
        />
      ))}
    </ScrollArea>
  );
};
