var HRNumbers = require("human-readable-numbers");
module.exports = function toReadable (number) {
  return HRNumbers.toHumanString(number);
}
console.log(toReadable (12));