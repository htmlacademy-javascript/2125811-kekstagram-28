
import {hideModal} from './form.js';
import {sendData} from './api.js';
import {isEscapeKey} from './util.js';
import {createMessageSuccess, createMessageError} from './messages.js';

const MAX_HASHTAG_COUNT = 5;
const TAG_ERROR_TEXT = 'Не правильно заполнены хэштеги';

//Регулярное выражение с набором валидных знаков
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const formElement = document.querySelector('.img-upload__form');
const hashtagFieldElement = document.querySelector('.text__hashtags');
const commentFieldElement = document.querySelector('.text__description');
const submitButtonElement = document.querySelector('.img-upload__submit');


const hashtagPristine = new Pristine (formElement, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form__item--invalid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'text__hashtags-error',
});

//Функция проверяет количество тегов
const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

//Функция делает буквы маленькими, проверка кол-во уникальных тегов и тегов
const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

//Фунуция проверяет если тег проходит валидацию
const isValidTag = (tag) => VALID_SYMBOLS.test(tag);


//Функция возращает true если тегов не более MAX_HASHTAG_COUNT, уникальные, символы валидны
const validateTags = (value) => {
  const tags = value
    .trim() //убрать пробелы  в нач и конце
    .split(' ') //сделать масив
    .filter((tag) => tag.trim().length); //убираем пустые элементы массива
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

hashtagPristine.addValidator(
  hashtagFieldElement,
  validateTags,
  TAG_ERROR_TEXT
);

//Функция меняет состояния кнопки "Отправить форму"
const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Публикую...';

};
//Функция меняет состояния кнопки "Отправить форму"
const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Опубликовать';

};

const setUserFormSubmit = (onSuccess) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = hashtagPristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .then(createMessageSuccess)
        .catch(createMessageError)
        .finally(unblockSubmitButton);
    }
  });
};

hashtagFieldElement.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
    document.activeElement.blur();
  }
});

commentFieldElement.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
    document.activeElement.blur();
  }
});

setUserFormSubmit(hideModal);

