import {isEscapeKey} from './util.js';
const COMMENTS_COUNT_MIN = 5;

const bigPictureElement = document.querySelector('.big-picture');
const commentTemplateElement = document.querySelector('.social__comment');
const commentsListElement = document.querySelector('.social__comments');
const commentCountElement = document.querySelector('.social__comment-count');
const commentLoaderElement = document.querySelector('.comments-loader');

//Функция подставляет определеный объект в DOM элемент
const createBigPicture = ({url, description, likes, comments}) => {
  bigPictureElement.querySelector('.big-picture__img > img').src = url;
  bigPictureElement.querySelector('.social__caption').textContent = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.comments-count').textContent = comments.length;
};

//Функция очищает список комментов и скрывает кпопку "Загрузить еще"
const removeComments = () => {
  commentsListElement.innerHTML = '';
  commentLoaderElement.classList.remove('hidden');
};

//Подставляем данные определенного объекта в DOM, cоздаем список комментов
const createComments = (comments) => {
  //Создаем коробочку
  const commentsFragment = document.createDocumentFragment();

  //Создаем шаблон коммента
  const comment = commentTemplateElement.cloneNode(true);
  removeComments();

  comments.forEach(({avatar, message, name}) => {
    const commentClone = comment.cloneNode(true);
    commentClone.classList.add('hidden');
    commentClone.querySelector('.social__picture').src = avatar;
    commentClone.querySelector('.social__picture').alt = name;
    commentClone.querySelector('.social__text').textContent = message;

    commentsFragment.appendChild(commentClone);
  });
  commentsListElement.appendChild(commentsFragment);
};

//Функция загрузки комментов
const loadComments = () => {
  //Ищем живых потомков из списка
  const comments = commentsListElement.children;

  //Задаем пользовательские атрибуты для кнопки "Загрузить еще"
  const lowerLimit = Number(commentLoaderElement.dataset.value);
  let upperLimit = lowerLimit + COMMENTS_COUNT_MIN;
  const maxValue = Number(commentLoaderElement.dataset.maxValue);

  if (upperLimit >= maxValue) {
    upperLimit = maxValue;
    commentLoaderElement.classList.add('hidden');
  }

  for (let i = lowerLimit; i < upperLimit; i++) {
    comments[i].classList.remove('hidden');
  }
  commentLoaderElement.dataset.value = upperLimit;
  commentCountElement.innerHTML = `${upperLimit} из <span class="comments-count">${maxValue}</span> комментариев`;
};

//Функция вызова функции загрузки комментов
const onButtonClick = () => loadComments();

//Функция открытия большой фотки
const openBigPicture = (picture) => {
  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  createBigPicture(picture);
  createComments(picture.comments);

  //задаю начальные пользовательские атрибуты
  commentLoaderElement.dataset.value = 0;
  commentLoaderElement.dataset.maxValue = picture.comments.length;
  loadComments();

  //Обработчик кнопки "Загрузить еще"
  commentLoaderElement.addEventListener('click', onButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

//Функция закрытия большой фотки
const closeBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  removeComments();
  commentLoaderElement.removeEventListener('click', onButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

//Функция нажатия кнопки ESC на окне
function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}


export {openBigPicture, closeBigPicture};
