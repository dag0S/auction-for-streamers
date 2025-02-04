import { FC } from "react";
import { Slot } from "@/src/entities/Slot";
import { Separator } from "@/src/shared/shadcn";
import { Container } from "@/src/shared/ui";
import { SlotsHeader } from "@/src/widgets/SlotsHeader";

const HomePage: FC = () => {
  return (
    <div>
      <Container>
        <SlotsHeader className="mb-3" />
        <Separator className="mb-3" />
        <Slot />
      </Container>
    </div>
  );
};

export default HomePage;
