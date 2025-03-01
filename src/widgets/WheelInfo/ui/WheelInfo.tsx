import { ChooseEmotion } from "@/src/features/ChooseEmotion";
import { cn } from "@/src/shared/lib";
import { Button, Input, Toggle } from "@/src/shared/shadcn";
import { Dice5 } from "lucide-react";
import { FC } from "react";

interface Props {
  className?: string;
}

export const WheelInfo: FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-[400px]", className)}>
      <div className="flex justify-between items-center gap-2 mb-4">
        <div className="flex items-center gap-2">
          <Button>Крутить</Button>
          <Input placeholder="от" className="w-[60px]" />
          <div className="text-xl">-</div>
          <Input placeholder="до" className="w-[60px]" />
          <div className="text-xl">c.</div>
        </div>
        <Toggle variant="outline" title="Случайное время прокрутки">
          <Dice5 />
        </Toggle>
      </div>
      <ChooseEmotion />
    </div>
  );
};
