"use client";

import { Dice5 } from "lucide-react";
import { ChangeEvent, FC } from "react";
import { cn } from "@/src/shared/lib";
import { Button, Input, Toggle } from "@/src/shared/shadcn";
import { useAppDispatch, useAppSelector } from "@/src/shared/lib/hooks";
import { wheelControlsAction } from "../model/slice/wheelControlsSlice";

interface Props {
  className?: string;
}

export const WheelControls: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { isRandomTime, timeFrom, timeTo, duration } = useAppSelector(
    (state) => state.wheelControls
  );

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

  return (
    <div className={cn("flex justify-between items-center gap-2", className)}>
      <div className="flex items-center gap-2">
        <Button>Крутить</Button>
        {isRandomTime ? (
          <>
            <Input
              placeholder="От"
              type="number"
              className="w-[80px]"
              value={timeFrom}
              onChange={handleSetTimeFrom}
            />
            <div className="text-xl">-</div>
            <Input
              placeholder="До"
              type="number"
              className="w-[80px]"
              value={timeTo}
              onChange={handleSetTimeTo}
            />
          </>
        ) : (
          <Input
            placeholder="Длительность"
            type="number"
            className="w-[140px]"
            value={duration}
            onChange={handleSetDuration}
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
