const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 20;
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

const NAMES = ['Михаил', 'Илья', 'Денис', 'Егор', 'Игорь', 'Татьяна'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>
elements[getRandomInteger(0, elements.length - 1)];


const createPicture = () => {
(
{
id: getRandomInteger(1, 25),
url: 'photos/${getRandomArrayElement(ID)}.jpg',
description: getRandomArrayElement(DESCRIPTIONS),
likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
comments:
{
commentId: getRandomArrayElement(ID),
avatar: 'img/avatar-${getRandomArrayIntengerElement(1, 6)}.svg',
message: getRandomArrayElement(MESSAGES),
name: getRandomArrayElement(NAMES)
}
} );

createPicture();

const getArrays = Array.from(
{length: PICTURES},
createPicture
);

function getResult() {
  return getArrays;
}

getResult();
