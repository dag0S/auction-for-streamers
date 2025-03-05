"use client";

import { FC, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/src/shared/ui";
import { WheelInfo } from "@/src/widgets/WheelInfo";
import { Wheel } from "@/src/widgets/Wheel/ui/Wheel";
import { PreviewSlotWheel } from "@/src/features/PreviewSlotWheel";
import { useAppSelector } from "@/src/shared/lib/hooks";
import { IWheelItem } from "@/src/shared/types/wheelItem";
import { shuffleArray, slotToWheelItem } from "@/src/shared/utils";

const WheelPage: FC = () => {
  const { slots } = useAppSelector((state) => state.slots);
  const t = useTranslations("WheelPage");

  const slotsWithColors: IWheelItem[] = useMemo(
    () => shuffleArray(slots.map(slotToWheelItem)),
    [slots]
  );

  return (
    <div>
      <Container className="p-3 flex flex-col h-screen">
        <h3 className="text-6xl">{t("title")}</h3>
        <div className="flex justify-between gap-3 flex-1 min-h-0">
          <PreviewSlotWheel slots={slotsWithColors} />
          <Wheel slots={slotsWithColors} />
          <WheelInfo />
        </div>
      </Container>
    </div>
  );
};

export default WheelPage;
