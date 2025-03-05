"use client";

import { ISlot } from "@/src/entities/Slot/model/types/slot";
import { cn } from "@/src/shared/lib";
import { IWheelItem } from "@/src/shared/types/wheelItem";
import { RandomWheel } from "@/src/shared/ui";
import { FC } from "react";

interface Props {
  className?: string;
  slots: IWheelItem[];
}

export const Wheel: FC<Props> = ({ className, slots }) => {
  const handlerSpinEnd = (winner: ISlot) => {
    alert(`Победитель: ${winner.name}`);
  };

  return (
    <div className={cn("", className)}>
      <RandomWheel onSpinEnd={handlerSpinEnd} slots={slots} />
    </div>
  );
};
