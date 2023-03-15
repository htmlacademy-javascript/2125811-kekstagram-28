
//Функция возвращает случайное число
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

//Функция возвращает случайный элемент массива
const getRandomArrayElements = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Функция для генерации уникального (неповторяющегося) числа из указанного дипазона
const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};
//Функция нажатия на клавишу Escape
const isEscapeKey = (evt) => evt.key === 'Escape';

export {
  getRandomInteger,
  getRandomArrayElements,
  createRandomIdFromRangeGenerator,
  isEscapeKey
};
