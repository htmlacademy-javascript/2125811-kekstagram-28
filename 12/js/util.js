//Функция возвращает случайное число

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Функция возвращает случайный элемент массива

const getRandomArrayElements = (elements) => elements [getRandomPositiveInteger(0, elements.length - 1)];


// Функция для генерации уникального неповторяющегося числа из указанного дипазона
const getUniqueNumberFromRange = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length > (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

//Функция нажатия на клавишу Escape
const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomPositiveInteger,
  getRandomArrayElements,
  getUniqueNumberFromRange,
  isEscapeKey
};
