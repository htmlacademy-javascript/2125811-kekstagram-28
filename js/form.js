import {isEscapeKey} from './util.js';
import {resetValueScale} from './scale.js';
import {resetEffects} from './effects.js';

const bodyElement = document.querySelector('body');
const imgInputElement = document.querySelector('.img-upload__input');
const imgUploadPopupElement = document.querySelector('.img-upload__overlay');
const cancelButtonElement = document.querySelector('.img-upload__cancel');
const hashtagFieldElement = document.querySelector('.text__hashtags');
const commentFieldElement = document.querySelector('.text__description');
const formElement = document.querySelector('.img-upload__form');

//Функция проверяет, что текстовое поле в фокусе
const isTextFieldFocused = () => document.activeElement === hashtagFieldElement || document.activeElement === commentFieldElement;

//Функция открытия форма редактирования изображения
const showModal = () => {
  imgUploadPopupElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeyDown);
};

//Функция закрытия  форма редактирования изображения;
const hideModal = () => {
  formElement.reset();
  resetValueScale();
  resetEffects();
  //hashtagPristine.reset();
  imgUploadPopupElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
};

//Функция по нажатии ESC с проверкой (не в текстовом поле)
function onDocumentKeyDown (evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}
//Когда меняем загрузчик (загружаем картику) показать окно модалки
const onFileInputChange = () => showModal();

//Функции нажатия на крестик
const onCancelButtonClick = () => hideModal();

//обработчик на изменения input type='file'
imgInputElement.addEventListener('change', onFileInputChange);

cancelButtonElement.addEventListener('click', onCancelButtonClick);

export {onDocumentKeyDown, hideModal};
