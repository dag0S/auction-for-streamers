"use client";

import { cn } from "@/src/shared/lib";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAppSelector } from "../../lib/hooks";
import { ISlot } from "@/src/entities/Slot/model/types/slot";
import { Button } from "../../shadcn";

interface Props {
  className?: string;
  onSpinEnd: (winner: ISlot) => void;
}

export const RandomWheel: FC<Props> = ({ className, onSpinEnd }) => {
  const wheelRef = useRef<HTMLCanvasElement>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const spinDuration = 5000;
  const { slots } = useAppSelector((state) => state.slots);
  const totalAmount = slots.reduce((acc, slot) => (acc += +slot.amount), 0);

  const slotsWithColors = useMemo(() => {
    return slots.map((slot) => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return { ...slot, color };
    });
  }, [slots]);

  const drawWheel = useCallback(() => {
    const wheel = wheelRef.current;

    if (!wheel) return;

    const ctx = wheel.getContext("2d");

    if (!ctx) return;

    const centerX = wheel.width / 2;
    const centerY = wheel.height / 2;
    const radius = Math.min(centerX, centerY) - 10;
    let startAngle = 0;

    ctx.clearRect(0, 0, wheel.width, wheel.height);

    slotsWithColors.forEach((slot) => {
      const endAngle = startAngle + (+slot.amount / totalAmount) * 2 * Math.PI;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = slot.color;
      ctx.fill();

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate((startAngle + endAngle) / 2);
      ctx.fillStyle = "#000";
      ctx.font = "16px";
      ctx.textAlign = "right";
      ctx.fillText(slot.name, radius - 10, 5);
      ctx.restore();

      startAngle = endAngle;
    });
  }, [slotsWithColors, totalAmount]);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const startTime = Date.now();

    const spin = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / spinDuration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const newRotation = rotation + 360 * 5 * easeOut;

      setRotation(newRotation);

      if (progress < 1) {
        requestAnimationFrame(spin);
      } else {
        setIsSpinning(false);
        determineWinner(newRotation);
      }
    };
    requestAnimationFrame(spin);
  };

  const determineWinner = (finalRotation: number) => {
    const normalizedRotation = finalRotation % 360;
    let cumulativeAngle = 0;

    for (const slot of slotsWithColors) {
      const slotAngle = (+slot.amount / totalAmount) * 360;

      if (
        normalizedRotation >= cumulativeAngle &&
        normalizedRotation < cumulativeAngle + slotAngle
      ) {
        onSpinEnd(slot as ISlot);
        break;
      }

      cumulativeAngle += slotAngle;
    }
  };

  useEffect(() => {
    const wheel = wheelRef.current;

    if (!wheel) return;

    const ctx = wheel.getContext("2d");

    if (!ctx) return;

    ctx.clearRect(0, 0, wheel.width, wheel.height);
    ctx.save();
    ctx.translate(wheel.width / 2, wheel.height / 2);
    ctx.rotate((rotation * Math.PI) / 100);
    ctx.translate(-wheel.width / 2, -wheel.height / 2);
    drawWheel();
    ctx.restore();
  }, [drawWheel, rotation]);

  return (
    <div className={cn("", className)}>
      <canvas ref={wheelRef} width={400} height={400} />
      <Button onClick={spinWheel} disabled={isSpinning}>
        {isSpinning ? "Крутится..." : "Крутить колесо"}
      </Button>
    </div>
  );
};
