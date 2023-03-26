const MAX_HASHTAG_COUNT = 5;
const TAG_ERROR_TEXT = 'Не правильно заполнены хэштеги';

//Регулярное выражение с набором валидных знаков
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const form = document.querySelector('.img-upload__form');
const fileField = document.querySelector('#upload-file');
const body = document.querySelector('body');
const overlay = document.querySelector('.img-upload__overlay');
const buttonСloseForm = document.querySelector('#upload-cancel');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

//Функция открытия форма редактирования изображения
const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeyDown);
};

//Функция закрытия  форма редактирования изображения;
const hideModal = () => {
  form.reset();
  //resetScale();
  //resetEffects();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
};

//Функция проверяет, что текстовое поле в фокусе
const isTextFieldFocused = () => document.activeElement === hashtagField || document.activeElement === commentField;

//Функция по нажатии ESC с проверкой (не в текстовом поле)
function onDocumentKeyDown (evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

//Функции нажатия на крестик
const onCancelButtonClick = () => hideModal();

//Когда меняем загрузчик (загружаем картику) показать окно модалки
const onFileInputChange = () => showModal();

//Фунуция проверяет если тег проходит валидацию
const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

//Функция проверяет количество тегов
const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

//Функция делает буквы маленькими, проверка кол-во уникальных тегов и тегов
const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

//Функция возращает true если тегов не более MAX_HASHTAG_COUNT, уникальные, символы валидны
const validateTags = (value) => {
  const tags = value
    .trim() //убрать пробелы  в нач и конце
    .split(' ') //сделать масив
    .filter((tag) => tag.trim().length); //убираем пустые элементы массива
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  validateTags,
  TAG_ERROR_TEXT
);

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

fileField.addEventListener('change', onFileInputChange);
buttonСloseForm.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);
