import { cn } from "@/src/shared/lib/utils";
import { Button, Input, Separator } from "@/src/shared/shadcn";
import { Plus } from "lucide-react";
import { FC } from "react";
import { SlotSearch } from "../../SlotSearch/ui/SlotSearch";

interface Props {
  className?: string;
}

export const SlotsHeader: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "flex gap-3 items-center")}>
      <Input placeholder="Название нового лота" className="font-semibold" />
      <Input placeholder="₽" type="number" className="w-32 font-semibold" />
      <Button>
        <Plus /> ДОБАВИТЬ ЛОТ
      </Button>
      <Separator orientation="vertical" className="h-7" />
      <SlotSearch />
    </div>
  );
};
