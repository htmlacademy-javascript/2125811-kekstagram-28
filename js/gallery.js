//import {createObjectsPictures} from './data.js';
import {createPictures} from './rending-photos.js';
import {openBigPicture, closeBigPicture} from './rending-bigPhoto.js';
import {getData} from './api.js';
import {showAlert} from './util.js';


const pictureContainerElement = document.querySelector('.pictures');
const closeButtonElement = document.querySelector('.big-picture__cancel');


try {
  //Отрисовка миниатюр
  const pictures = await getData();
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

} catch (err) {
  showAlert(err.message);
}


//Обработчик по крестику(ESC)
closeButtonElement.addEventListener('click', () =>{
  closeBigPicture();
});


