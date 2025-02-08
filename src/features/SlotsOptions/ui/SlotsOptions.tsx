"use client";

import { NotepadText, Percent, Timer, Trash2 } from "lucide-react";
import { FC } from "react";
import { cn } from "@/src/shared/lib";
import { useAppDispatch, useAppSelector } from "@/src/shared/lib/hooks";
import { Button, Toggle } from "@/src/shared/shadcn";
import { slotsActions } from "@/src/entities/Slot";
import { optionsAction } from "../model/slice/optionsSlice";

interface Props {
  className?: string;
}

export const SlotsOptions: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { percent, rules, timer } = useAppSelector((state) => state.options);

  const handlerTogglePercent = () => {
    dispatch(optionsAction.togglePercent());
  };

  const handlerToggleRules = () => {
    dispatch(optionsAction.toggleRules());
  };

  const handlerToggleTimer = () => {
    dispatch(optionsAction.toggleTimer());
  };

  const handlerClearAllSlots = () => {
    dispatch(slotsActions.clearAllSlots());
  };

  return (
    <div className={cn("flex justify-center gap-3 py-3", className)}>
      <Button
        size="icon"
        onClick={handlerClearAllSlots}
        variant="destructive"
        title="Удалить все слоты"
      >
        <Trash2 />
      </Button>

      <div>
        <Toggle
          variant="outline"
          className="rounded-r-none"
          title="Показать правила аукциона"
          pressed={rules}
          onPressedChange={handlerToggleRules}
        >
          <NotepadText />
          <span>ПРАВИЛА</span>
        </Toggle>
        <Toggle
          variant="outline"
          className="rounded-none -ml-[1px]"
          title="Показать проценты"
          pressed={percent}
          onPressedChange={handlerTogglePercent}
        >
          <Percent />
        </Toggle>
        <Toggle
          variant="outline"
          className="rounded-l-none -ml-[1px]"
          title="Показать таймер"
          pressed={timer}
          onPressedChange={handlerToggleTimer}
        >
          <Timer />
        </Toggle>
      </div>
    </div>
  );
};
