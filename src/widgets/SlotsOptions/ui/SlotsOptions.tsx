"use client";

import { Trash2 } from "lucide-react";
import { FC } from "react";
import { cn } from "@/src/shared/lib";
import { useAppDispatch } from "@/src/shared/lib/hooks";
import { Button } from "@/src/shared/shadcn";
import { slotsActions } from "@/src/entities/Slot";

interface Props {
  className?: string;
}

export const SlotsOptions: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();

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
    </div>
  );
};
