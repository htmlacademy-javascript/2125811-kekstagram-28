const picturesListElement = document.querySelector('.pictures');
const pictureTemplateElement = document.querySelector('#picture')
  .content
  .querySelector('.picture');

//Функция подставляет данные в элементы DOM и добавляет список миниатюр
const createPictures = (pictures) => {

  //сделал контейнер
  const picturesFragment = document.createDocumentFragment();

  pictures.forEach(({id, url, likes, comments}) => {
    //Клонирую шаблоjн
    const pictureElement = pictureTemplateElement.cloneNode(true);
    pictureElement.dataset.id = id;
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    picturesFragment.append(pictureElement);

  });
  picturesListElement.append(picturesFragment);
};

export {createPictures};
