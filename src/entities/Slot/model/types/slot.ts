export interface ISlotInput {
  name: string;
  amount: number;
}

export interface ISlot extends ISlotInput {
  id: string;
  fastId: number;
}
