"use client";

import { ISlot } from "@/src/entities/Slot/model/types/slot";
import { cn } from "@/src/shared/lib";
import { useAppSelector } from "@/src/shared/lib/hooks";
import { IWheelItem } from "@/src/shared/types/wheelItem";
import { RandomWheel } from "@/src/shared/ui";
import { shuffleArray, slotToWheelItem } from "@/src/shared/utils";
import { FC, useMemo } from "react";

interface Props {
  className?: string;
}

export const Wheel: FC<Props> = ({ className }) => {
  const { slots } = useAppSelector((state) => state.slots);

  const slotsWithColors: IWheelItem[] = useMemo(
    () => shuffleArray(slots.map(slotToWheelItem)),
    [slots]
  );

  const handlerSpinEnd = (winner: ISlot) => {
    alert(`Победитель: ${winner.name}`);
  };

  return (
    <div className={cn("", className)}>
      <RandomWheel onSpinEnd={handlerSpinEnd} slots={slotsWithColors} />
    </div>
  );
};
