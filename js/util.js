//Функция возвращает случайное целое положительное число
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Функция возвращает случайный элемент массива
const getRandomArrayElements = (elements) => elements [getRandomInteger(0, elements.length - 1)];

// Функция для генерации уникального (неповторяющегося) числа из указанного дипазона
function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}


export {
  getRandomInteger,
  getRandomArrayElements,
  createRandomIdFromRangeGenerator
};
