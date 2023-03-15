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

const renderingBigPicture = function () {
  const onBigPictureKeydown = (evt) => {
    if(isEscapeKey(evt)) {
      evt.preventDefault();
      pictureModalElement.classList.add('hidden');
      bodyElement.classList.remove('modal-open');
      bigPictureCommentsList.innerHTML = '';
    }
  };


  const bigPictureRending = function (evt) {
    const currentThumbnail = evt.target.closest('.picture__img');
    const thumbnailPointer = currentThumbnail.id;
    const {url, description, likes, comments} = photoObjectsArray[thumbnailPointer];
    bigPictureLikes.textContent = likes;
    bigPictureCommentsNum.textContent = comments.length;
    bigPictureImage.src = url;
    bigPictureDescription.textContent = description;
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

  const openBigPicture = function () {
    pictureModalElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    document.addEventListener('keydown', onBigPictureKeydown);
  };

  const closeBigPicture = function () {
    pictureModalElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
    document.removeEventListener('keydown', onBigPictureKeydown);
  };

  picturesList.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture();
    bigPictureRending(evt);
  });

  pictureCancelButton.addEventListener('click', () => {
    closeBigPicture();
  });

};

export {renderingBigPicture};
