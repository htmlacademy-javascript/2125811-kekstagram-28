import {getRandomPositiveInteger,
  getRandomArrayElements,
  getUniqueNumberFromRange
} from './util.js';

const PHOTO_OBJECTS_COUNT = 25;
const AVATAR_COUNT = 6;
const PHOTO_LIKES_MIN_COUNT = 15;
const PHOTO_LIKES_MAX_COUNT = 200;
const COMMENT_ID = 1000;
const COMMENTS_COUNT = 50;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Это я фоткал',
  '#красивожитьнезапретишь',
  'Это мне муж купил',
  '#отдых',
  'Фотка с работы',
  'бедолага еще и эдиком назвали АхАхахАХ',
  'Почему-то у них разговор как-то не задался',
  'Визит как всегда на высоте , спасибо Вам)'
];

const NAMES = ['Михаил', 'Илья', 'Денис', 'Егор', 'Игорь', 'Татьяна', 'Максим', 'Артем'];


const generatedPhotoId = getUniqueNumberFromRange(1, PHOTO_OBJECTS_COUNT);
const generatedCommentId = getUniqueNumberFromRange(1, COMMENT_ID);
const generatedPhotoUrl = getUniqueNumberFromRange(1, PHOTO_OBJECTS_COUNT);

const createComment = () => ({
  commentId: generatedCommentId(),
  avatar: `img/avatar-${getRandomPositiveInteger(1, AVATAR_COUNT)}.svg`,
  message: getRandomArrayElements(MESSAGES),
  name: getRandomArrayElements(NAMES)
});


const createObjectPicture = () => ({
  id: generatedPhotoId(),
  url: `photos/${generatedPhotoUrl()}.jpg`,
  description: getRandomArrayElements(DESCRIPTIONS),
  likes: getRandomPositiveInteger(PHOTO_LIKES_MIN_COUNT, PHOTO_LIKES_MAX_COUNT),
  comments: Array.from({length: getRandomPositiveInteger(1, COMMENTS_COUNT)}, createComment),
});


const createObjectsPictures = () => Array.from({length:PHOTO_OBJECTS_COUNT}, createObjectPicture);

export {createObjectsPictures};
