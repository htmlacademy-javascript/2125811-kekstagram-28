import {picturesList, photoObjectsArray} from './rendering-pictures.js';
import {isEscapeKey} from './util.js';

const bodyElement = document.querySelector('body');
const pictureModalElement = document.querySelector('.big-picture');
const pictureCancelButton = pictureModalElement.querySelector('#picture-cancel');
const bigPictureImage = document.querySelector('.big-picture__img img');
const bigPictureLikes = document.querySelector('.likes-count');
const bigPictureCommentsNum = document.querySelector('.comments-count');
const bigPictureCommentsList = document.querySelector('.social__comments');
const bigPictureDescription = document.querySelector('.social__caption');
const socialCommentElement = bigPictureCommentsList.querySelector('.social__comment');
const socialCommentElementCounter = pictureModalElement.querySelector('.social__comment-count');
const socialCommentElementLoader = pictureModalElement.querySelector('.comments-loader');

//функция при нажатии Escape
const onBigPictureKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    pictureModalElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
    bigPictureCommentsList.innerHTML = '';
  }
};

//Генерируем коменты
const createComments = (comments) => {
  const commentsFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const socialCommentCopy = socialCommentElement.cloneNode(true);
    socialCommentCopy.querySelector('.social__picture').src = comment.avatar;
    socialCommentCopy.querySelector('.social__picture').alt = comment.name;
    socialCommentCopy.querySelector('.social__text').textContent = comment.message;
    bigPictureCommentsList.innerHTML = '';
    commentsFragment.append(socialCommentCopy);
  });
  bigPictureCommentsList.append(commentsFragment);
};

//Подставляю в большую фотку из массива
const bigPictureRending = (evt) => {
  const currentThumbnail = evt.target.closest('.picture__img');
  const thumbnailPointer = currentThumbnail.id;
  const {url, description, likes, comments} = photoObjectsArray[thumbnailPointer];
  bigPictureLikes.textContent = likes;
  bigPictureCommentsNum.textContent = comments.length;
  bigPictureImage.src = url;
  bigPictureDescription.textContent = description;
  createComments(comments);
};


//функция открывания большого фото
const openBigPicture = () => {
  pictureModalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onBigPictureKeydown);
  socialCommentElementCounter.classList.add('hidden');
  socialCommentElementLoader.classList.add('hidden');
};

//функция закрывания большого фото
const closeBigPicture = () => {
  pictureModalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureKeydown);
  bigPictureCommentsList.innerHTML = '';
};


//обработчик события клик по миниатюре
picturesList.addEventListener('click', (evt) => {
  if(evt.target.closest('.picture')) {
    evt.preventDefault();
    openBigPicture();
    bigPictureRending(evt);
  }
});

//обработчик события клик по кнопке
pictureCancelButton.addEventListener('click', () => {
  closeBigPicture();
});


