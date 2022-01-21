module.exports = function toReadable(number) {
    const numberStr = number.toString();
    const numbersToTwenty = {
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
    };
    const dozens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    const getHundred = (countOfHundreds) => {
        return `${numbersToTwenty[countOfHundreds]} hundred`;
    };
    const getDozen = (countOfDozens) => {
        return ` ${dozens[countOfDozens]}`;
    };
    const getNumberUnits = (countOfUnits) => {
      return ` ${numbersToTwenty[countOfUnits]}`;
  };
    const getFirstDozen = (countOfFirstDozens) => {
      return ` ${numbersToTwenty[countOfFirstDozens]}`;
    }
    let result = "";

    for (let i = 0; i < numberStr.length; i++) {
        const degreeOfNumberDigit = numberStr.length - 1 - i;
        let numberDigit = Math.pow(10, degreeOfNumberDigit);
        switch (numberDigit) {
            case 100:
              result = result + getHundred(numberStr[i]);
              break;
            case 10:
              let dozenResult 
              if (numberStr[i] === '1') {
                dozenResult = getFirstDozen(numberStr.slice(-2));
                i++;
              } else if (numberStr[i] === '0') {
                dozenResult = '';
              } else {
                dozenResult = getDozen(numberStr[i]);
              }
              result = result + dozenResult;
              break;
            case 1:
              let units = (numberStr[i] === '0' && i > 0) ? '' : getNumberUnits(numberStr[i]);
              result = result + units;
              break;
            default: 
              break;
        }
    }

    return result.trim();
};
