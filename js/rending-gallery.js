import {createObjectsPictures} from './data.js';
import {createPictures} from './create-photos.js';
import {openBigPicture, closeBigPicture} from './create-bigPhoto.js';

const pictureContainerElement = document.querySelector('.pictures');
const closeButtonElement = document.querySelector('.big-picture__cancel');

//Отрисовка миниатюр
const pictures = createObjectsPictures();
createPictures(pictures);

//Обрабочик события по клику на миниатюру
pictureContainerElement.addEventListener ('click', (evt) => {
  //Делегирование потомку
  const picture = evt.target.closest('.picture');
  if (picture) {
    evt.preventDefault();
    //Ищу в массиве совпадение айдишника
    const currentPicture = pictures.find((item) => item.id === Number(picture.dataset.id));
    //Отрисовка большой фотки
    openBigPicture(currentPicture);
  }
});

//Обработчик по крестику(ESC)
closeButtonElement.addEventListener('click', () =>{
  closeBigPicture();
});
