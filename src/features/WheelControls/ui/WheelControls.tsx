"use client";

import { Dice5 } from "lucide-react";
import { ChangeEvent, FC } from "react";
import { cn } from "@/src/shared/lib";
import { Button, Input, Toggle } from "@/src/shared/shadcn";
import { useAppDispatch, useAppSelector } from "@/src/shared/lib/hooks";
import { wheelControlsAction } from "../model/slice/wheelControlsSlice";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

export const WheelControls: FC<Props> = ({ className }) => {
  const t = useTranslations("WheelControls");
  const dispatch = useAppDispatch();
  const { isRandomTime, isSpinning, timeFrom, timeTo, duration } =
    useAppSelector((state) => state.wheelControls);

  const handleToggleIsRandomTime = () => {
    dispatch(wheelControlsAction.toggleIsRandomTime());
  };

  const handleSetTimeFrom = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(wheelControlsAction.setTimeFrom(+e.target.value));
  };

  const handleSetTimeTo = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(wheelControlsAction.setTimeTo(+e.target.value));
  };

  const handleSetDuration = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(wheelControlsAction.setDuration(+e.target.value));
  };

  const handleSpinWheel = () => {
    dispatch(wheelControlsAction.setIsStartedSpin(true));
  };

  return (
    <div className={cn("flex justify-between items-center gap-2", className)}>
      <div className="flex items-center gap-2">
        <Button onClick={handleSpinWheel} disabled={isSpinning}>
          {isSpinning ? t("spinning") : t("spin")}
        </Button>
        {isRandomTime ? (
          <>
            <Input
              placeholder="От"
              type="number"
              className="w-[80px]"
              value={timeFrom || ""}
              onChange={handleSetTimeFrom}
              min={0}
            />
            <div className="text-xl">-</div>
            <Input
              placeholder="До"
              type="number"
              className="w-[80px]"
              value={timeTo || ""}
              onChange={handleSetTimeTo}
              min={0}
            />
          </>
        ) : (
          <Input
            placeholder="Длительность"
            type="number"
            className="w-[140px]"
            value={duration || ""}
            onChange={handleSetDuration}
            min={0}
          />
        )}
        <div className="text-xl">c.</div>
      </div>
      <Toggle
        variant="outline"
        title="Случайное время прокрутки"
        pressed={isRandomTime}
        onPressedChange={handleToggleIsRandomTime}
      >
        <Dice5 />
      </Toggle>
    </div>
  );
};
