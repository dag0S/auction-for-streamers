import { FC } from "react";
import { ChooseEmotion } from "@/src/features/ChooseEmotion";
import { cn } from "@/src/shared/lib";
import { WheelControls } from "@/src/features/WheelControls";

interface Props {
  className?: string;
}

export const WheelInfo: FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-[400px]", className)}>
      <WheelControls className="mb-4" />
      <ChooseEmotion />
    </div>
  );
};
