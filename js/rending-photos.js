const pictureTemplateElement = document.querySelector('#picture')
  .content
  .querySelector('.picture');

//Функция подставляет данные в элементы DOM и добавляет список миниатюр
const renderThumbnails = (pictures, container) => {
  container.querySelectorAll('.picture')
    .forEach((element) => element.remove());
  //сделал контейнер
  const picturesFragment = document.createDocumentFragment();

  pictures.forEach(({id, url, likes, comments}) => {
    //Клонирую шаблон
    const pictureElement = pictureTemplateElement.cloneNode(true);
    pictureElement.dataset.id = id;
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    picturesFragment.append(pictureElement);

  });
  container.append(picturesFragment);
};


export {renderThumbnails};
