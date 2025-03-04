"use client";

import { FC, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/src/shared/lib";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { ISlot } from "@/src/entities/Slot/model/types/slot";
import { fittingString } from "../../utils";
import { IWheelItem } from "../../types/wheelItem";
import { wheelControlsAction } from "@/src/features/WheelControls";

interface Props {
  className?: string;
  onSpinEnd: (winner: ISlot) => void;
  slots: IWheelItem[];
}

export const RandomWheel: FC<Props> = ({ className, onSpinEnd, slots }) => {
  const wheelRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);
  const [currentSlot, setCurrentSlot] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const { selectedEmotion } = useAppSelector((state) => state.emotion);
  const {
    duration,
    isRandomTime,
    isSpinning,
    isStartedSpin,
    timeFrom,
    timeTo,
  } = useAppSelector((state) => state.wheelControls);
  const totalAmount = slots.reduce((acc, slot) => (acc += +slot.amount), 0);
  const spinDuration = isRandomTime
    ? Math.floor(
        Math.random() * (Math.abs(timeFrom - timeTo) + 1) +
          Math.min(timeFrom, timeTo)
      ) * 1000
    : duration * 1000;

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

    slots.forEach((slot, i) => {
      const endAngle = startAngle + (+slot.amount / totalAmount) * 2 * Math.PI;

      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = slot.color;
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.stroke();

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate((startAngle + endAngle) / 2);
      ctx.fillStyle = "#fff";
      ctx.font = "20px roboto";
      ctx.textAlign = "right";

      if (+slot.amount / totalAmount > 0.04) {
        ctx.fillText(
          fittingString(
            ctx,
            `${i + 1} | ${Math.trunc((+slot.amount / totalAmount) * 100)}% ${
              slot.name
            }`,
            200
          ),
          radius - 10,
          5
        );
      }

      ctx.restore();

      startAngle = endAngle;
    });
  }, [slots, totalAmount]);

  const getCurrentSlot = useCallback(
    (rotationAngle: number) => {
      const normalizedRotation = 360 - (rotationAngle % 360);
      let cumulativeAngle = 90;

      for (const slot of slots) {
        const slotAngle = (+slot.amount / totalAmount) * 360;

        if (
          (normalizedRotation >= cumulativeAngle &&
            normalizedRotation < cumulativeAngle + slotAngle) ||
          (cumulativeAngle + slotAngle > 360 &&
            (normalizedRotation >= cumulativeAngle ||
              normalizedRotation < (cumulativeAngle + slotAngle) % 360))
        ) {
          return slot.name;
        }

        cumulativeAngle += slotAngle;
      }

      return null;
    },
    [slots, totalAmount]
  );

  const determineWinner = useCallback(
    (finalRotation: number) => {
      const normalizedRotation = 360 - (finalRotation % 360);
      let cumulativeAngle = 90;

      for (const slot of slots) {
        const slotAngle = (+slot.amount / totalAmount) * 360;

        if (
          (normalizedRotation >= cumulativeAngle &&
            normalizedRotation < cumulativeAngle + slotAngle) ||
          (cumulativeAngle + slotAngle > 360 &&
            (normalizedRotation >= cumulativeAngle ||
              normalizedRotation < (cumulativeAngle + slotAngle) % 360))
        ) {
          onSpinEnd(slot as ISlot);
          return slot.name;
        }

        cumulativeAngle += slotAngle;
      }

      return null;
    },
    [onSpinEnd, slots, totalAmount]
  );

  const spinWheel = useCallback(() => {
    if (isSpinning) return;

    dispatch(wheelControlsAction.setIsSpinning(true));
    const startTime = Date.now();

    const extraRotations = Math.random() * 2 + 3;
    const finalRotation = rotation + 360 * extraRotations;

    const spin = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / spinDuration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const newRotation = rotation + (finalRotation - rotation) * easeOut;

      setRotation(newRotation);
      setCurrentSlot(getCurrentSlot(newRotation));

      if (progress < 1) {
        requestAnimationFrame(spin);
      } else {
        dispatch(wheelControlsAction.setIsSpinning(false));
        dispatch(wheelControlsAction.setIsStartedSpin(false));
        determineWinner(newRotation);
      }
    };
    requestAnimationFrame(spin);
  }, [
    determineWinner,
    dispatch,
    getCurrentSlot,
    isSpinning,
    rotation,
    spinDuration,
  ]);

  useEffect(() => {
    if (isStartedSpin) spinWheel();
  }, [spinWheel, isStartedSpin]);

  useEffect(() => {
    const wheel = wheelRef.current;

    if (!wheel) return;

    const ctx = wheel.getContext("2d");

    if (!ctx) return;

    ctx.clearRect(0, 0, wheel.width, wheel.height);
    ctx.save();
    ctx.translate(wheel.width / 2, wheel.height / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.translate(-wheel.width / 2, -wheel.height / 2);
    drawWheel();
    ctx.restore();
  }, [drawWheel, rotation]);

  return (
    <div className={cn("", className)}>
      <div className="text-2xl mx-auto text-center truncate w-[400px]">
        {currentSlot || "Победитель"}
      </div>
      <div className="relative">
        <canvas ref={wheelRef} width={600} height={600} />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            width: "0px",
            height: "0px",
            borderLeft: "20px solid transparent",
            borderRight: "20px solid transparent",
            borderTop: "30px solid white",
          }}
        />
        <Image
          src={`/gifs/${selectedEmotion}.webp`}
          width={100}
          height={100}
          alt="emotion"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full select-none w-[100px] h-[100px] object-cover"
          unoptimized
        />
      </div>
    </div>
  );
};
