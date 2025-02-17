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
      <Container className="flex flex-col h-screen">
        <div className="flex gap-3 flex-grow h-full min-h-0">
          <RulesDescription className="mt-3" />
          <div className="flex flex-col w-full flex-grow">
            <SlotsHeader className="mb-3 pt-3" />
            <Separator className="mb-3" />
            <SlotsWrapper className="flex-1 min-h-0" />
          </div>
          <Timer className="mt-3" />
        </div>
        <SlotsOptions />
      </Container>
    </div>
  );
};

export default HomePage;
