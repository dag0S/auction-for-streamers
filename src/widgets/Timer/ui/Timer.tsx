"use client";

import { FC, useEffect, useState } from "react";
import { cn } from "@/src/shared/lib";

interface Props {
  className?: string;
  initialTime?: number;
}

export const Timer: FC<Props> = ({ className, initialTime = 600000 }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 10);
    }, 10);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((time % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    const milliseconds = Math.floor((time % 1000) / 10)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className={cn("w-[300px]", className)}>
      <div className="text-7xl">{formatTime(timeLeft)}</div>
    </div>
  );
};
