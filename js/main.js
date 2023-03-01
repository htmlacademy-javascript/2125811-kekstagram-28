const PICTURE_OBJECTS_QUANTITY = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Это я фоткал',
  '#красивожитьнезапретишь',
  'Это мне муж купил',
  '#отдых',
  'Фотка с работы'
];

const NAMES = ['Михаил', 'Илья', 'Денис', 'Егор', 'Игорь', 'Татьяна', 'Максим', 'Артем'];

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

const generatePhotoId = createRandomIdFromRangeGenerator(1, PICTURE_OBJECTS_QUANTITY);
const generateUrl = createRandomIdFromRangeGenerator(1, PICTURE_OBJECTS_QUANTITY);
const generateCommentId = createRandomIdFromRangeGenerator(1, 1000);

const createObjectPicture = () => ({
  id: generatePhotoId(),
  url: `photos/${generateUrl()}.jpg`,
  description: getRandomArrayElements(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: {
    commentId: generateCommentId,
    avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
    message: getRandomArrayElements(MESSAGES),
    name: getRandomArrayElements(NAMES)
  }
});

const PhotoObjects = Array.from({length:PICTURE_OBJECTS_QUANTITY}, createObjectPicture);

//console.log(PhotoObjects)
