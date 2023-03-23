import {createObjectsPictures} from './data.js';
import {createPictures} from './rending-photos.js';
import {openBigPicture, closeBigPicture} from './rending-bigPhoto.js';

const pictureContainerElement = document.querySelector('.pictures');
const closeButtonElement = document.querySelector('.big-picture__cancel');

const pictures = createObjectsPictures();
createPictures(pictures);

pictureContainerElement.addEventListener ('click', (evt) => {
  const picture = evt.target.closest('.picture');
  if (picture) {
    const currentPicture = pictures.find((item) => item.id === Number(picture.dataset.id));
    openBigPicture(currentPicture);
  }
});

closeButtonElement.addEventListener('click', () =>{
  closeBigPicture();
});
