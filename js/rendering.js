import {photoObjects} from './data.js';

const picturesList = document.querySelector('.pictures');
const pictureContent = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photoObjectsArray = photoObjects();
const similarListFragment = document.createDocumentFragment();

photoObjectsArray.forEach(({url, likes, comments}) => {
  const pictureElement = pictureContent.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.commentId;
  similarListFragment.appendChild(pictureElement);
});

picturesList.appendChild(similarListFragment);
