"use client";

import { ChangeEvent, FC, useEffect } from "react";
import { Eraser } from "lucide-react";
import { cn } from "@/src/shared/lib";
import { Button, Textarea } from "@/src/shared/shadcn";
import { useAppDispatch, useAppSelector } from "@/src/shared/lib/hooks";
import { rulesDescAction } from "../model/slice/rulesDescriptionSlice";
import { RULES_DESC_LOCALSTORAGE_KEY } from "@/src/shared/const/localstorage";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

export const RulesDescription: FC<Props> = ({ className }) => {
  const { showRules } = useAppSelector((state) => state.options);
  const { descriptionValue } = useAppSelector((state) => state.rulesDesc);
  const dispatch = useAppDispatch();
  const t = useTranslations("RulesDescription");

  const handlerSetDesc = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(rulesDescAction.setDescription(e.target.value));
  };

  const handlerClearDesc = () => {
    dispatch(rulesDescAction.clearDescription());
  };

  useEffect(() => {
    const savedRulesDesc = localStorage.getItem(RULES_DESC_LOCALSTORAGE_KEY);
    if (savedRulesDesc) {
      dispatch(rulesDescAction.setDescription(savedRulesDesc));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(RULES_DESC_LOCALSTORAGE_KEY, descriptionValue);
  }, [descriptionValue]);

  if (!showRules) {
    return null;
  }

  return (
    <div className={cn("h-full", className)}>
      <div className="flex gap-3">
        <h2 className="text-4xl mb-3">{t("title")}</h2>
        <Button
          size="icon"
          variant="destructive"
          onClick={handlerClearDesc}
          title={t("btn-title-clear")}
        >
          <Eraser />
        </Button>
      </div>
      <Textarea
        placeholder={t("placeholder-rules")}
        className="w-80 md:text-xl placeholder:text-xl h-1/2 max-h-full"
        value={descriptionValue}
        onChange={handlerSetDesc}
      />
    </div>
  );
};
