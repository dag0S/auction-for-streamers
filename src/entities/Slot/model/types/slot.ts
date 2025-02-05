export interface ISlotInput {
  name: string;
  amount: string;
}

export interface ISlot extends ISlotInput {
  id: string;
  fastId: number;
}

export interface ISlotInputWithExtraMoney extends ISlotInput {
  extraMoney: string;
}
