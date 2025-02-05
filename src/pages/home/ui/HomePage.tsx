import { FC } from "react";
import { Separator } from "@/src/shared/shadcn";
import { Container } from "@/src/shared/ui";
import { SlotsHeader } from "@/src/widgets/SlotsHeader";
import { SlotsWrapper } from "@/src/widgets/SlotsWrapper";

const HomePage: FC = () => {
  return (
    <div>
      <Container className="h-screen flex flex-col">
        <SlotsHeader className="mb-3" />
        <Separator className="mb-3" />
        <SlotsWrapper className="flex-grow" />
      </Container>
    </div>
  );
};

export default HomePage;
