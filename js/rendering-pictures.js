import {createPhotoObjects} from './data.js';

const picturesList = document.querySelector('.pictures');
const pictureContent = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photoObjectsArray = createPhotoObjects();

const renderPhotoList = () => {

  const similarListFragment = document.createDocumentFragment();

  photoObjectsArray.forEach(({url, likes, comments}, index) => {
    const pictureElement = pictureContent.cloneNode(true);
    pictureElement.querySelector('.picture__img').id = index;
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    similarListFragment.appendChild(pictureElement);
  });

  picturesList.appendChild(similarListFragment);
};

export {renderPhotoList, picturesList, photoObjectsArray};


