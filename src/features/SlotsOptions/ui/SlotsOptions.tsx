"use client";

import { NotepadText, Percent, Timer, Trash2 } from "lucide-react";
import { FC } from "react";
import { cn } from "@/src/shared/lib";
import { useAppDispatch, useAppSelector } from "@/src/shared/lib/hooks";
import { Button, Toggle } from "@/src/shared/shadcn";
import { slotsActions } from "@/src/entities/Slot";
import { optionsAction } from "../model/slice/optionsSlice";
import { Alert } from "@/src/shared/ui";

interface Props {
  className?: string;
}

export const SlotsOptions: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { slots } = useAppSelector((state) => state.slots);
  const { showPercent, showRules, showTimer } = useAppSelector(
    (state) => state.options
  );

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
      <Alert
        onClick={handlerClearAllSlots}
        title="Вы точно уверены?"
        description="Это действие нельзя отменить. Это приведет к необратимому удалению всех слотов."
      >
        <Button
          size="icon"
          variant="destructive"
          title="Удалить все слоты"
          disabled={slots.length === 0}
        >
          <Trash2 />
        </Button>
      </Alert>

      <div>
        <Toggle
          variant="outline"
          className="rounded-r-none"
          title="Показать правила аукциона"
          pressed={showRules}
          onPressedChange={handlerToggleRules}
        >
          <NotepadText />
          <span>ПРАВИЛА</span>
        </Toggle>
        <Toggle
          variant="outline"
          className="rounded-none -ml-[1px]"
          title="Показать проценты"
          pressed={showPercent}
          onPressedChange={handlerTogglePercent}
        >
          <Percent />
        </Toggle>
        <Toggle
          variant="outline"
          className="rounded-l-none -ml-[1px]"
          title="Показать таймер"
          pressed={showTimer}
          onPressedChange={handlerToggleTimer}
        >
          <Timer />
        </Toggle>
      </div>
    </div>
  );
};
