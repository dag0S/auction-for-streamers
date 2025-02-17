import { FC, ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../shadcn";
import { useTranslations } from "next-intl";

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
  onClick?: () => void;
}

export const Alert: FC<Props> = ({ children, description, title, onClick }) => {
  const t = useTranslations("Alert");

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("btn-cancel")}</AlertDialogCancel>
          <AlertDialogAction onClick={onClick}>
            {t("btn-continue")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
