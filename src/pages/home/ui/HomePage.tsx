import { FC } from "react";
import { Separator } from "@/src/shared/shadcn";
import { Container } from "@/src/shared/ui";
import { SlotsHeader } from "@/src/widgets/SlotsHeader";
import { SlotsWrapper } from "@/src/widgets/SlotsWrapper";
import { Timer } from "@/src/widgets/Timer";

const HomePage: FC = () => {
  return (
    <div>
      <Container className="flex gap-3">
        <div className="h-screen flex flex-col w-full">
          <SlotsHeader className="mb-3 pt-3" />
          <Separator className="mb-3" />
          <SlotsWrapper className="flex-grow mb-3" />
        </div>
        <div>
          <Timer className="mt-3" />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
