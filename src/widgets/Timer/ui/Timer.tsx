"use client";

import { FC, useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronsUp,
  ChevronUp,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/src/shared/lib";
import { formatTime } from "@/src/shared/utils";
import { Button } from "@/src/shared/shadcn";
import { useAppSelector } from "@/src/shared/lib/hooks";

interface Props {
  className?: string;
  initialTime?: number;
}

export const Timer: FC<Props> = ({ className, initialTime = 600000 }) => {
  const [displayTime, setDisplayTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const timeLeftRef = useRef(initialTime);
  const startTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number>(0);
  const { showTimer } = useAppSelector((state) => state.options);

  const updateTimer = () => {
    if (timeLeftRef.current <= 0) {
      cancelAnimationFrame(animationFrameRef.current!);
      setIsRunning(false);
      return;
    }

    const now = Date.now();
    const elapsed = now - startTimeRef.current;
    timeLeftRef.current = initialTime - elapsed;

    setDisplayTime(timeLeftRef.current);

    animationFrameRef.current = requestAnimationFrame(updateTimer);
  };

  const handelResetTime = () => {
    setIsRunning(false);
    timeLeftRef.current = initialTime;
    setDisplayTime(initialTime);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const handleAdd10Sec = () => {
    timeLeftRef.current += 10000;
    setDisplayTime(timeLeftRef.current);
  };

  const handleAdd20Sec = () => {
    timeLeftRef.current += 20000;
    setDisplayTime(timeLeftRef.current);
  };

  const handleSubtract10Sec = () => {
    if (timeLeftRef.current > 10000) {
      timeLeftRef.current -= 10000;
      setDisplayTime(timeLeftRef.current);
    } else {
      timeLeftRef.current = 0;
      setDisplayTime(0);
    }
  };

  const handelStartTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      startTimeRef.current = Date.now() - (initialTime - timeLeftRef.current);
      animationFrameRef.current = requestAnimationFrame(updateTimer);
    }
  };

  const handleStopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
  };

  useEffect(() => {
    handleStopTimer();
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  if (!showTimer) {
    return null;
  }

  return (
    <div className={cn("", className)}>
      <div className="text-7xl text-center font-mono">
        {formatTime(displayTime)}
      </div>
      <div className="flex justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={isRunning ? handleStopTimer : handelStartTimer}
          title={isRunning ? "Пауза" : "Продолжить"}
        >
          {isRunning ? <Pause /> : <Play />}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handelResetTime}
          title="Обнулить"
        >
          <RotateCcw />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleAdd10Sec}
          title="+10 сек"
        >
          <ChevronUp />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleSubtract10Sec}
          title="-10 сек"
        >
          <ChevronDown />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleAdd20Sec}
          title="+20 сек"
        >
          <ChevronsUp />
        </Button>
      </div>
    </div>
  );
};
