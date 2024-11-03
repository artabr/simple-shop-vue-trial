export const toFixedNumber = (num: number, precision = 2) => {
  return parseFloat(num.toFixed(precision))
}
