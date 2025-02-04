import { Separator } from "@/src/shared/shadcn";
import { Container } from "@/src/shared/ui";
import { Slot } from "@/src/widgets/Slot";
import { SlotsHeader } from "@/src/widgets/SlotsHeader";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <div>
      <Container>
        <SlotsHeader className="mb-3" />
        <Separator className="mb-3"/>
        <Slot />
      </Container>
    </div>
  );
};

export default HomePage;
