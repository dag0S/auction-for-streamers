"use client";

import { PreviewSlotWheel } from "@/src/features/PreviewSlotWheel";
import { cn } from "@/src/shared/lib";
import { FC, useMemo } from "react";
import { Wheel } from "../../Wheel/ui/Wheel";
import { WheelInfo } from "../../WheelInfo";
import { useAppSelector } from "@/src/shared/lib/hooks";
import { shuffleArray, slotToWheelItem } from "@/src/shared/utils";
import { IWheelItem } from "@/src/shared/types/wheelItem";

interface Props {
  className?: string;
}

export const WheelContent: FC<Props> = ({ className }) => {
  const { slots } = useAppSelector((state) => state.slots);
  const slotsWithColors: IWheelItem[] = useMemo(
    () => shuffleArray(slots.map(slotToWheelItem)),
    [slots]
  );

  return (
    <div className={cn("flex justify-between gap-3 flex-1 min-h-0", className)}>
      <PreviewSlotWheel slots={slotsWithColors} />
      <Wheel slots={slotsWithColors} />
      <WheelInfo />
    </div>
  );
};
