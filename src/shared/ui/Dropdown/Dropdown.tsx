import { FC, ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../shadcn";

export interface IDropdownMenuItem {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

interface Props {
  children: ReactNode;
  align?: "center" | "end" | "start";
  items: IDropdownMenuItem[];
}

export const Dropdown: FC<Props> = ({ children, align = "start", items }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        {items.length >= 0 &&
          items.map((item) => (
            <DropdownMenuItem
              disabled={item.disabled}
              key={item.title}
              onClick={item.onClick}
            >
              {item.title}
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
