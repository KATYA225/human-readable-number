const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
}

module.exports = function toReadable (number) {
  let result = '';

  if(number <= 20) result = numbers[number];

  if(number > 20 && number < 100) {
    let num1 = Number(number.toString()[0]) * 10;
    let num2 = Number(number.toString()[1]);
    if(num2 == 0) result = numbers[num1];
    else result = numbers[num1] + ' ' + numbers[num2];
  }

  if(number >= 100) {
    let num1 = Number(number.toString()[0]);
    let num2 = Number(number.toString()[1]) * 10;
    let num3 = Number(number.toString()[2]);

    if(num2 < 20) {
        if(num2 == 0 && num3 == 0) result = numbers[num1] + ' hundred';
        else result = numbers[num1] + ' hundred ' + numbers[num2 + num3];
    }
    else {
        if(num3 == 0) result = numbers[num1] + ' hundred ' + numbers[num2];
        else result = numbers[num1] + ' hundred ' + numbers[num2] + ' ' + numbers[num3];
    }  
  }

  return result;
}
