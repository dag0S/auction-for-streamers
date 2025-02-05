"use client";

import { Plus } from "lucide-react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/src/shared/lib";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
} from "@/src/shared/shadcn";
import { ISlotInput, slotsActions } from "@/src/entities/Slot";
import { useAppDispatch } from "@/src/shared/lib/hooks";

interface Props {
  className?: string;
}

export const AddSlot: FC<Props> = ({ className }) => {
  const form = useForm<ISlotInput>({
    defaultValues: {
      amount: "",
      name: "",
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit = (values: ISlotInput) => {
    dispatch(slotsActions.addSlot(values));
    form.reset();
    console.log(`[AddSlot] ${values}`);
  };

  return (
    <Form {...form}>
      <form
        className={cn("flex gap-3 items-center w-full", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Название нового лота"
                  className="font-semibold"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="₽"
                  type="number"
                  className="w-32 font-semibold"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">
          <Plus /> ДОБАВИТЬ ЛОТ
        </Button>
      </form>
    </Form>
  );
};
