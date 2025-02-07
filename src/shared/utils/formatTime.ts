export const formatTime = (time: number): string => {
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
