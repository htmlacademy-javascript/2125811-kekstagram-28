import {photoObjects} from './data.js';

const picturesList = document.querySelector('.pictures');
const pictureContent = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photoObjectsArray = photoObjects();

const renderPhotoList = () => {
  const similarListFragment = document.createDocumentFragment();

  photoObjectsArray.forEach(({url, likes, comment}, index) => {
    const pictureElement = pictureContent.cloneNode(true);
    pictureElement.querySelector('.picture__img').id = index;
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comment.commentId;
    similarListFragment.appendChild(pictureElement);
  });

  picturesList.appendChild(similarListFragment);
};

export {renderPhotoList, picturesList, photoObjectsArray};


