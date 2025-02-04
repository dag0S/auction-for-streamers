import { cn } from "@/src/shared/lib";
import { Input } from "@/src/shared/shadcn";
import { Search } from "lucide-react";

import { FC } from "react";

interface Props {
  className?: string;
}

export const SlotSearch: FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-full relative", className)}>
      <Search className="absolute top-1/2 left-2 -translate-y-1/2" />
      <Input
        placeholder="Поис среди лотов ..."
        className="font-semibold pl-10"
      />
    </div>
  );
};
