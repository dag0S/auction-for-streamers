import { FC } from "react";
import { ChooseEmotion } from "@/src/features/ChooseEmotion";
import { cn } from "@/src/shared/lib";
import { WheelControls } from "@/src/features/WheelControls";

interface Props {
  className?: string;
}

export const WheelInfo: FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-screen md:w-[400px] px-1 sm:px-0", className)}>
      <WheelControls className="mb-1 md:mb-4" />
      <ChooseEmotion />
    </div>
  );
};
