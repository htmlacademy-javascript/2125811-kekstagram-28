import {onDocumentKeyDown, hideModal} from './form.js';
import {isEscapeKey} from './util.js';


const errorMessageElement = document.querySelector('#error').content;
const successMessageElement = document.querySelector('#success').content;

//Создать сообщение с ошибкой
const createMessageError = () => {
  const errorClone = errorMessageElement.querySelector('section').cloneNode(true);
  document.body.insertAdjacentElement('beforeend', errorClone);

  document.removeEventListener('keydown', onDocumentKeyDown);
  document.addEventListener('keydown', onErrorKeydown);

  const removeErrorMessage = () => {
    errorClone.remove();
    document.removeEventListener('keydown', onErrorKeydown);
    document.addEventListener('keydown', onDocumentKeyDown);
  };

  const removeErrorOutside = (evt) => {
    if (!evt.target.closest('.error__inner')) {
      removeErrorMessage();
      document.removeEventListener('click', removeErrorOutside);
    }
  };

  function onErrorKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorClone.remove();
      document.removeEventListener('keydown', onErrorKeydown);
      document.addEventListener('keydown', onDocumentKeyDown);
      document.removeEventListener('click', removeErrorOutside);
    }
  }
  errorClone.querySelector('.error__button').addEventListener('click', () => {
    removeErrorMessage();
    document.removeEventListener('click', removeErrorOutside);
  });

  document.addEventListener('click', removeErrorOutside);
};

//Сщздать успешное сообщение
const createMessageSuccess = () => {
  const successClone = successMessageElement.querySelector('section').cloneNode(true);
  document.body.insertAdjacentElement('beforeend', successClone);

  const removeSuccessMessage = () => {
    hideModal();
    successClone.remove();
    document.removeEventListener('keydown', onSuccessKeydown);
  };


  const removeSuccessOutside = (evt) => {
    if (!evt.target.closest('.success__inner')) {
      removeSuccessMessage();
      document.removeEventListener('click', removeSuccessOutside);
    }
  };

  function onSuccessKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successClone.remove();
      document.removeEventListener('keydown', onSuccessKeydown);
      document.removeEventListener('click', removeSuccessOutside);
    }
  }

  document.addEventListener('keydown',onSuccessKeydown);

  successClone.querySelector('.success__button').addEventListener('click', () => {
    removeSuccessMessage();
    document.removeEventListener('click', removeSuccessOutside);
  });

  document.addEventListener('click', removeSuccessOutside);
};

export {createMessageError, createMessageSuccess};
