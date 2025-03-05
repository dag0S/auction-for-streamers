"use client";

import { FC } from "react";
import { cn } from "@/src/shared/lib";
import { useAppDispatch } from "@/src/shared/lib/hooks";
import { Button, ScrollArea, Separator } from "@/src/shared/shadcn";
import { IWheelItem } from "@/src/shared/types/wheelItem";
import { calcPercent } from "@/src/shared/utils";
import { previewSlotAction } from "../model/slice/PreviewSlotSlice";
import { Flashlight } from "lucide-react";

interface Props {
  className?: string;
  slots: IWheelItem[];
}

export const PreviewSlotWheel: FC<Props> = ({ className, slots }) => {
  const sortedSlots = [...slots].sort((a, b) => +b.amount - +a.amount);
  const totalAmount = slots.reduce((acc, slot) => (acc += +slot.amount), 0);
  const dispatch = useAppDispatch();

  return (
    <ScrollArea className={cn("w-[400px]", className)}>
      {sortedSlots.map((slot) => (
        <Button
          variant="ghost"
          key={slot.id}
          className="w-[400px] justify-between mb-2"
          onMouseEnter={() =>
            dispatch(previewSlotAction.setHoveredSlot(slot.id))
          }
          onMouseLeave={() => dispatch(previewSlotAction.setHoveredSlot(null))}
          style={{
            background: `linear-gradient(to right, transparent, ${slot.color})`,
          }}
        >
          <div className="overflow-hidden text-ellipsis">{slot.name}</div>
          <div className="flex gap-2">
            <div>{slot.amount}</div>
            <Separator orientation="vertical" className="h-3" />
            <div className="w-10">
              {calcPercent(+slot.amount, totalAmount)}%
            </div>
            <Flashlight />
          </div>
        </Button>
      ))}
    </ScrollArea>
  );
};
