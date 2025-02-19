"use client";

import { ISlot } from "@/src/entities/Slot/model/types/slot";
import { Container, RandomWheel } from "@/src/shared/ui";
import { FC } from "react";

const WheelPage: FC = () => {
  const handlerSpinEnd = (winner: ISlot) => {
    alert(`Победитель: ${winner.name}`);
  };

  return (
    <div>
      <Container>
        <RandomWheel onSpinEnd={handlerSpinEnd} />
      </Container>
    </div>
  );
};

export default WheelPage;
