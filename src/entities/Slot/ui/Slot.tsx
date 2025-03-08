"use client";

import { Plus, Trash } from "lucide-react";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/src/shared/lib";
import { Badge, Button, Form, FormField, Input } from "@/src/shared/shadcn";
import { ISlot, ISlotInputWithExtraMoney } from "../model/types/slot";
import { useAppDispatch, useAppSelector } from "@/src/shared/lib/hooks";
import { slotsActions } from "../model/slice/slotSlice";
import { calcPercent } from "@/src/shared/utils";

interface Props {
  className?: string;
  fastId: number;
  amount: string;
  name: string;
  id: string;
  number: number;
  totalAmount: number;
}

export const Slot = forwardRef<HTMLDivElement, Props>(
  ({ className, amount, fastId, name, id, number, totalAmount }, ref) => {
    const form = useForm<ISlotInputWithExtraMoney>({
      defaultValues: {
        amount,
        name,
        extraMoney: "",
      },
    });
    const dispatch = useAppDispatch();
    const { showPercent } = useAppSelector((state) => state.options);
    const t = useTranslations("Slot");
    const percent = calcPercent(+amount, totalAmount);

    const onSubmit = (values: ISlotInputWithExtraMoney) => {
      const newAmount = values.extraMoney
        ? String(+values.amount + +values.extraMoney)
        : values.amount;

      const updatedSlot: ISlot = {
        name: values.name,
        amount: newAmount,
        fastId,
        id,
      };

      form.setValue("extraMoney", "");
      form.setValue("amount", newAmount);
      dispatch(slotsActions.updateSlot(updatedSlot));
      console.log(`[Update slot] ${id}`);
    };

    const handleRemoveSlot = () => {
      dispatch(slotsActions.removeSlot(id));
      console.log(`[Remove slot] ${id}`);
    };

    return (
      <div
        className={cn(
          "flex items-start md:items-center gap-1 lg:gap-3",
          className
        )}
        ref={ref}
      >
        <div className="flex gap-1 lg:gap-3 pt-2 md:pt-0">
          <div>{number}.</div>
          <Badge>#{fastId}</Badge>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row md:items-center gap-1 lg:gap-3 w-full"
          >
            <div className="flex gap-1 lg:gap-3 w-full items-center">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <Input placeholder={t("placeholder-name-slot")} {...field} />
                )}
              />
              {showPercent && (
                <div className="min-w-14 text-center md:text-right ">
                  {percent}%
                </div>
              )}
            </div>
            <div className="flex md:items-center gap-1 lg:gap-3">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <Input
                    type="number"
                    placeholder={t("currency")}
                    className="w-full md:w-32"
                    {...field}
                  />
                )}
              />
              <Button
                type="submit"
                variant="ghost"
                title={t("title-btn-add-cost")}
              >
                <Plus hanging={24} width={24} />
              </Button>
              <FormField
                control={form.control}
                name="extraMoney"
                render={({ field }) => (
                  <Input
                    type="number"
                    placeholder={t("currency")}
                    className="w-full md:w-24"
                    {...field}
                  />
                )}
              />
              <Button
                variant="destructive"
                onClick={handleRemoveSlot}
                title={t("title-btn-delete-slot")}
                className="min-w-14 md:min-w-fit"
              >
                <Trash />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    );
  }
);

export const MotionSlot = motion(Slot);
