export const calcPercent = (amount: number, totalAmount: number) => {
  if (totalAmount === 0) return "0.0";
  const percent = (amount / totalAmount) * 100;
  return percent.toFixed(1);
};
