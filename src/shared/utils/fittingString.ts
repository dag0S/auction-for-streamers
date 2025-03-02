export const fittingString = (
  ctx: CanvasRenderingContext2D,
  str: string,
  maxWidth: number
) => {
  let width = ctx.measureText(str).width;
  const ellipsis = "…";
  const ellipsisWidth = ctx.measureText(ellipsis).width;

  if (width <= maxWidth || width <= ellipsisWidth) {
    return str;
  } else {
    let len = str.length;

    while (width >= maxWidth - ellipsisWidth && len-- > 0) {
      str = str.substring(0, len);
      width = ctx.measureText(str).width;
    }

    return str + ellipsis;
  }
};
