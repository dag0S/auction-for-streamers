import { cn } from "@/src/shared/lib";
import { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export const Container: FC<Props> = ({ className, children }) => {
  return <div className={cn("w-full px-1 md:px-3", className)}>{children}</div>;
};
