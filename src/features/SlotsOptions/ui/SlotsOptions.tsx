"use client";

import {
  Eye,
  EyeClosed,
  NotepadText,
  Percent,
  Timer,
  Trash2,
} from "lucide-react";
import { FC } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/src/shared/lib";
import { useAppDispatch, useAppSelector } from "@/src/shared/lib/hooks";
import { Button, Toggle } from "@/src/shared/shadcn";
import { slotsActions } from "@/src/entities/Slot";
import { optionsAction } from "../model/slice/optionsSlice";
import { Alert } from "@/src/shared/ui";

interface Props {
  className?: string;
}

export const SlotsOptions: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { slots } = useAppSelector((state) => state.slots);
  const { showPercent, showRules, showTimer, showTotalAmount } = useAppSelector(
    (state) => state.options
  );
  const t = useTranslations("SlotOptions");
  const totalAmount = slots.reduce((acc, slot) => (acc += +slot.amount), 0);

  const handlerTogglePercent = () => {
    dispatch(optionsAction.togglePercent());
  };

  const handlerToggleRules = () => {
    dispatch(optionsAction.toggleRules());
  };

  const handlerToggleTimer = () => {
    dispatch(optionsAction.toggleTimer());
  };

  const handlerToggleTotalAmount = () => {
    dispatch(optionsAction.toggleShowTotalAmount());
  };

  const handlerClearAllSlots = () => {
    dispatch(slotsActions.clearAllSlots());
  };

  return (
    <div className={cn("flex justify-center gap-3 py-3 relative", className)}>
      <div className="absolute t-0 left-0 flex gap-3 items-center">
        <Button
          variant="ghost"
          className="rounded-full"
          size="icon"
          onClick={handlerToggleTotalAmount}
          title={
            showTotalAmount
              ? t("title-btn-hide-total")
              : t("title-btn-show-total")
          }
        >
          {showTotalAmount ? <EyeClosed /> : <Eye />}
        </Button>
        {showTotalAmount && (
          <span>
            {t("total")}: {totalAmount}
            {t("currency")}
          </span>
        )}
      </div>
      <Alert
        onClick={handlerClearAllSlots}
        title={t("alert-title")}
        description={t("alert-description")}
      >
        <Button
          size="icon"
          variant="destructive"
          title={t("title-btn-delete-all-slots")}
          disabled={slots.length === 0}
        >
          <Trash2 />
        </Button>
      </Alert>

      <div>
        <Toggle
          variant="outline"
          className="rounded-r-none"
          title={t("title-btn-show-rules")}
          pressed={showRules}
          onPressedChange={handlerToggleRules}
        >
          <NotepadText />
          <span>{t("btn-rules")}</span>
        </Toggle>
        <Toggle
          variant="outline"
          className="rounded-none -ml-[1px]"
          title={t("title-btn-show-percent")}
          pressed={showPercent}
          onPressedChange={handlerTogglePercent}
        >
          <Percent />
        </Toggle>
        <Toggle
          variant="outline"
          className="rounded-l-none -ml-[1px]"
          title={t("title-btn-show-timer")}
          pressed={showTimer}
          onPressedChange={handlerToggleTimer}
        >
          <Timer />
        </Toggle>
      </div>
    </div>
  );
};
