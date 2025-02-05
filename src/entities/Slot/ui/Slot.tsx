"use client";

import { Plus, Trash } from "lucide-react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/src/shared/lib";
import { Badge, Button, Form, FormField, Input } from "@/src/shared/shadcn";
import { ISlot, ISlotInputWithExtraMoney } from "../model/types/slot";
import { useAppDispatch } from "@/src/shared/lib/hooks";
import { slotsActions } from "../model/slice/slotSlice";

interface Props {
  className?: string;
  fastId: number;
  amount: string;
  name: string;
  id: string;
  number: number;
}

export const Slot: FC<Props> = ({
  className,
  amount,
  fastId,
  name,
  id,
  number,
}) => {
  const form = useForm<ISlotInputWithExtraMoney>({
    defaultValues: {
      amount,
      name,
      extraMoney: "",
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit = (values: ISlotInputWithExtraMoney) => {
    const updatedSlot: ISlot = {
      ...values,
      amount: values.extraMoney
        ? String(+values.amount + +values.extraMoney)
        : values.amount,
      fastId,
      id,
    };

    dispatch(slotsActions.updateSlot(updatedSlot));
    console.log(`[Update slot] ${updatedSlot}`);
  };

  const handleRemoveSlot = () => {
    dispatch(slotsActions.removeSlot(id));
    console.log(`[Remove slot] ${id}`);
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div>{number}.</div>
      <Badge>#{fastId}</Badge>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center gap-3 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => <Input placeholder="Название" {...field} />}
          />
          <div>100.0%</div>
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <Input
                type="number"
                placeholder="₽"
                className="w-32"
                {...field}
              />
            )}
          />
          <Button type="submit" variant="ghost">
            <Plus hanging={24} width={24} />
          </Button>
          <FormField
            control={form.control}
            name="extraMoney"
            render={({ field }) => (
              <Input
                type="number"
                placeholder="₽"
                className="w-24"
                {...field}
              />
            )}
          />
        </form>
      </Form>
      <Button variant="ghost" onClick={handleRemoveSlot}>
        <Trash />
      </Button>
    </div>
  );
};
