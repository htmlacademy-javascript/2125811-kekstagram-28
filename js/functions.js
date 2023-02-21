const getLengthString = (string, length) => string.length <= length;

getLengthString('проверяемая строка', 10);


const isPalindrom = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};

isPalindrom('Лёша на полке клопа нашёл');


const extractNumber = (string) => {
  if (typeof string === 'number'){
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++){
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};
extractNumber('1 кефир, 0.5 батона');

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) +
  pad.repeat(actualPad / pad.length) + string;
};
myPadStart('qwerty', 4, '0');
