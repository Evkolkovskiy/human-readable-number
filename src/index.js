
module.exports = function toReadable (number) {
//const numberStr = number.toString();
const data0_20 = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
}
const data20_90 = {
  20: "ten",
  30: "eleven",
  40: "twelve",
  50: "thirteen",
  60: "fourteen",
  70: "fifteen",
  80: "sixteen",
  90: "seventeen",
}
if (number < 20) {
  return data0_20[number - 1];
} 

}

