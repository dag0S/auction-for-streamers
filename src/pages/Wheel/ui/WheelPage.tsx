import { FC } from "react";
import { Container } from "@/src/shared/ui";
import { WheelInfo } from "@/src/widgets/WheelInfo";
import { Wheel } from "@/src/widgets/Wheel/ui/Wheel";

const WheelPage: FC = () => {
  return (
    <div>
      <Container className="p-3">
        <h3 className="text-6xl">Колесо</h3>
        <div className="flex justify-between gap-3">
          <Wheel />
          <WheelInfo />
        </div>
      </Container>
    </div>
  );
};

export default WheelPage;
