"use client";

import { FC, useState } from "react";
import { cn } from "@/src/shared/lib";
import { useAppDispatch } from "@/src/shared/lib/hooks";
import { Button, ScrollArea, Separator } from "@/src/shared/shadcn";
import { IWheelItem } from "@/src/shared/types/wheelItem";
import { calcPercent } from "@/src/shared/utils";
import { previewSlotAction } from "../model/slice/PreviewSlotSlice";
import { ChevronsLeft, ChevronsRight, Flashlight } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
  slots: IWheelItem[];
}

export const PreviewSlotWheel: FC<Props> = ({ className, slots }) => {
  const t = useTranslations("PreviewSlotWheel");
  const dispatch = useAppDispatch();
  const [showPreview, setShowPreview] = useState(true);
  const sortedSlots = [...slots].sort((a, b) => +b.amount - +a.amount);
  const totalAmount = slots.reduce((acc, slot) => (acc += +slot.amount), 0);

  const handleToggleShowPreview = () => {
    setShowPreview((prev) => !prev);
  };

  return (
    <div className={cn("flex flex-col gap-1 md:gap-3 h-full", className)}>
      <div className="flex gap-3 items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleToggleShowPreview}
          title={showPreview ? t("hideSlotPreviews") : t("showSlotPreviews")}
        >
          {showPreview ? <ChevronsLeft /> : <ChevronsRight />}
        </Button>
        <div className="md:hidden">
          {t("numberOfParticipants")} - {slots.length}
        </div>
      </div>
      {showPreview && (
        <div className="flex flex-col flex-1 min-h-0">
          <ScrollArea className="w-full pr-3 md:w-[300px] xl:w-[400px] flex-1 min-h-0">
            {sortedSlots.map((slot) => (
              <Button
                variant="ghost"
                key={slot.id}
                className="w-full justify-between mb-2"
                onMouseEnter={() =>
                  dispatch(previewSlotAction.setHoveredSlot(slot.id))
                }
                onMouseLeave={() =>
                  dispatch(previewSlotAction.setHoveredSlot(null))
                }
                style={{
                  background: `linear-gradient(to right, transparent, ${slot.color})`,
                }}
              >
                <div className="text-left truncate w-[200px] md:w-[125px] xl:w-[220px]">
                  {slot.name}
                </div>
                <div className="flex items-center gap-2">
                  <div>{slot.amount}</div>
                  <Separator
                    orientation="vertical"
                    className="h-3 bg-foreground"
                  />
                  <div className="w-10">
                    {calcPercent(+slot.amount, totalAmount)}%
                  </div>
                  <Flashlight />
                </div>
              </Button>
            ))}
          </ScrollArea>
          <div className="mt-auto pt-3 hidden md:block">
            {t("numberOfParticipants")} - {slots.length}
          </div>
        </div>
      )}
    </div>
  );
};
