import { FC } from "react";
import { Separator } from "@/src/shared/shadcn";
import { Container } from "@/src/shared/ui";
import { SlotsHeader } from "@/src/widgets/SlotsHeader";
import { SlotsWrapper } from "@/src/widgets/SlotsWrapper";
import { Timer } from "@/src/widgets/Timer";
import { SlotsOptions } from "@/src/features/SlotsOptions";
import { RulesDescription } from "@/src/features/RulesDescription";

const HomePage: FC = () => {
  return (
    <div>
      <Container className="flex flex-col h-screen-safe pt-11 md:pt-3">
        <div className="flex-col xl:flex-row flex gap-3 flex-grow h-full min-h-0">
          <RulesDescription />
          <div className="flex flex-col w-full flex-grow min-h-0">
            <SlotsHeader className="mb-2 md:mb-3 order-1 md:-order-1" />
            <Separator className="hidden md:block mb-3" />
            <SlotsWrapper className="flex-1 min-h-0 mb-2 md:mb-0" />
          </div>
          <Timer className="w-fit -order-1 xl:order-1" />
        </div>
        <SlotsOptions />
      </Container>
    </div>
  );
};

export default HomePage;
