import { cn } from "@/src/shared/lib/utils";
import { Separator } from "@/src/shared/shadcn";
import { FC } from "react";
import { AddSlot } from "@/src/features/AddSlot";
import { SlotSearch } from "@/src/features/SlotSearch";

interface Props {
  className?: string;
}

export const SlotsHeader: FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex gap-3 items-center", className)}>
      <AddSlot />
      <Separator orientation="vertical" className="h-full" />
      <SlotSearch />
    </div>
  );
};
