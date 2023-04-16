import { renderThumbnails } from './rending-photos.js';
import { openBigPicture, closeBigPicture } from './rending-bigPhoto.js';

const containerElement = document.querySelector('.pictures');
const closeButtonElement = document.querySelector('.big-picture__cancel');


const getGallery = (currentPictures) => {
  renderThumbnails(currentPictures, containerElement);

  containerElement.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('.picture');
    if (thumbnail) {
      evt.preventDefault();
      const currentPicture = currentPictures.find((item) => item.id === Number(thumbnail.dataset.id));
      openBigPicture(currentPicture);
    }
  });
};


//Обработчик по крестику(ESC)
closeButtonElement.addEventListener('click', () => {
  closeBigPicture();
});

export {getGallery};
