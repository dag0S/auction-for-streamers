"use client";

import { FC } from "react";
import { ISlot } from "@/src/entities/Slot/model/types/slot";
import { Container, RandomWheel } from "@/src/shared/ui";
import { WheelInfo } from "@/src/widgets/WheelInfo";

const WheelPage: FC = () => {
  const handlerSpinEnd = (winner: ISlot) => {
    alert(`Победитель: ${winner.name}`);
  };

  return (
    <div>
      <Container className="p-3">
        <h3 className="text-6xl">Колесо</h3>
        <div className="flex justify-between gap-3">
          <RandomWheel onSpinEnd={handlerSpinEnd} />
          <WheelInfo />
        </div>
      </Container>
    </div>
  );
};

export default WheelPage;
