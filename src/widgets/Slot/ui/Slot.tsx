import { cn } from "@/src/shared/lib";
import { Badge, Button, Input } from "@/src/shared/shadcn";
import { Plus, Trash } from "lucide-react";
import { FC } from "react";

interface Props {
  className?: string;
}

export const Slot: FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div>1.</div>
      <Badge>#5</Badge>
      <Input placeholder="Название" />
      <div>100.0%</div>
      <Input type="number" placeholder="₽" className="w-32" />
      <Button variant="ghost">
        <Plus hanging={24} width={24} />
      </Button>
      <Input type="number" placeholder="₽" className="w-24" />
      <Button variant="ghost">
        <Trash />
      </Button>
    </div>
  );
};
