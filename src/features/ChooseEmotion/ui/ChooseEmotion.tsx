"use client";

import Image from "next/image";
import { FC } from "react";
import { cn } from "@/src/shared/lib";
import { Button } from "@/src/shared/shadcn";
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
    <div
      className={cn("border p-2 rounded-lg flex gap-2 flex-wrap", className)}
    >
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
          />
        </Button>
      ))}
    </div>
  );
};
