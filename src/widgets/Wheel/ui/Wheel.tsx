import { cn } from "@/src/shared/lib";
import { IWheelItem } from "@/src/shared/types/wheelItem";
import { RandomWheel } from "@/src/shared/ui";
import { useTranslations } from "next-intl";
import { FC } from "react";

interface Props {
  className?: string;
  slots: IWheelItem[];
}

export const Wheel: FC<Props> = ({ className, slots }) => {
  const t = useTranslations("Wheel");

  return (
    <div className={cn("h-fit", className)}>
      {slots.length > 0 ? (
        <RandomWheel slots={slots} />
      ) : (
        <div className="text-2xl">{t("AddAtLeastOneLot")}</div>
      )}
    </div>
  );
};
