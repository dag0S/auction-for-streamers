"use client";

import { FC, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { MotionSlot } from "@/src/entities/Slot";
import { SLOTS_LOCALSTORAGE_KEY } from "@/src/shared/const/localstorage";
import { cn } from "@/src/shared/lib";
import { useAppSelector } from "@/src/shared/lib/hooks";
import { ScrollArea } from "@/src/shared/shadcn";

interface Props {
  className?: string;
}

export const SlotsWrapper: FC<Props> = ({ className }) => {
  const slots = useAppSelector((state) => state.slots.slots);
  const totalAmount = slots.reduce((acc, slot) => (acc += +slot.amount), 0);
  const sortedSlots = [...slots].sort((a, b) => +b.amount - +a.amount);
  const { searchValue } = useAppSelector((state) => state.search);
  const t = useTranslations("SlotWrapper");

  useEffect(() => {
    localStorage.setItem(SLOTS_LOCALSTORAGE_KEY, JSON.stringify(slots));
  }, [slots]);

  const filteredSlots = sortedSlots.filter((slot) =>
    slot.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (sortedSlots.length === 0) {
    return (
      <h2 className="text-2xl font-semibold max-w-[500px] break-words h-full">
        {t("h2-add-slots")}
      </h2>
    );
  }

  if (filteredSlots.length === 0) {
    return (
      <h2 className="text-2xl font-semibold max-w-[500px] break-words h-full overflow-y-auto">
        {t("h2-nothing-found")}
      </h2>
    );
  }

  return (
    <ScrollArea className={cn("border rounded-md", className)}>
      <AnimatePresence>
        {filteredSlots.map((slot, index) => (
          <MotionSlot
            className="p-3"
            amount={slot.amount}
            fastId={slot.fastId}
            name={slot.name}
            number={index + 1}
            id={slot.id}
            key={slot.id}
            totalAmount={totalAmount}
            layout
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </AnimatePresence>
    </ScrollArea>
  );
};
