"use client";

import { Plus } from "lucide-react";
import { FC, useRef } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/src/shared/lib";
import { useTranslations } from "next-intl";
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
  const inputRef = useRef<HTMLInputElement>(null);
  const t = useTranslations("AddSlot");

  const onSubmit = (values: ISlotInput) => {
    dispatch(slotsActions.addSlot(values));

    if (inputRef.current) {
      inputRef.current.focus();
    }

    form.reset();
    console.log(`[AddSlot] ${values}`);
  };

  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col md:flex-row gap-2 md:gap-3 md:items-center w-full", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder={t("placeholder")}
                  className="font-semibold"
                  {...field}
                  ref={inputRef}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex gap-2 md:gap-3">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder={t("currency")}
                    type="number"
                    className="md:w-32 font-semibold"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">
            <Plus /> {t("btn-add-slot")}
          </Button>
        </div>
      </form>
    </Form>
  );
};
