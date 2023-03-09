import {
  getRandomArrayElements,
  getRandomInteger,
  createRandomIdFromRangeGenerator
} from './util.js';

const PICTURE_OBJECTS_QUANTITY = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENTS_ID_QUANTITY = 1000;
export {PICTURE_OBJECTS_QUANTITY, COMMENTS_ID_QUANTITY};

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

const generatePhotoId = createRandomIdFromRangeGenerator(1, PICTURE_OBJECTS_QUANTITY);
const generateUrl = createRandomIdFromRangeGenerator(1, PICTURE_OBJECTS_QUANTITY);
const generateCommentId = createRandomIdFromRangeGenerator(1, COMMENTS_ID_QUANTITY);

const createObjectPicture = () => ({
  id: generatePhotoId(),
  url: `photos/${generateUrl()}.jpg`,
  description: getRandomArrayElements(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: {
    commentId: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
    message: getRandomArrayElements(MESSAGES),
    name: getRandomArrayElements(NAMES)
  }
});

const photoObjects = () => Array.from({length:PICTURE_OBJECTS_QUANTITY}, createObjectPicture);

export {photoObjects};
