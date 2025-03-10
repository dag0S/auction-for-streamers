"use client";

import Image from "next/image";
import { FC } from "react";
import { cn } from "@/src/shared/lib";
import { Button, ScrollArea, ScrollBar } from "@/src/shared/shadcn";
import { useAppDispatch } from "@/src/shared/lib/hooks";
import { emotionAction } from "../model/slice/emotionSlice";

interface Props {
  className?: string;
}

export const ChooseEmotion: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();

  const handleSetEmotion = (emotionIndex: number) => {
    dispatch(emotionAction.setEmotion(emotionIndex));
  };

  return (
    <ScrollArea
      className={cn(
        "border p-2 rounded-lg whitespace-nowrap xl:whitespace-normal",
        className
      )}
    >
      <div className="flex gap-2 xl:flex-wrap">
        {new Array(10).fill(0).map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="overflow-hidden"
            onClick={() => handleSetEmotion(index + 1)}
          >
            <Image
              src={`/gifs/${index + 1}.webp`}
              alt="emotion"
              width={40}
              height={40}
              className="h-full object-cover select-none"
              unoptimized
            />
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
