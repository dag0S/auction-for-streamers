import { ISlot } from "@/src/entities/Slot/model/types/slot";
import { randomColor } from "./randomColor";
import { IWheelItem } from "../types/wheelItem";

export const slotToWheelItem = (slot: ISlot): IWheelItem => {
  return {
    ...slot,
    color: randomColor(),
  };
};
