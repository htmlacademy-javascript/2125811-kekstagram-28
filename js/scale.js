const SCALE_STEP = 25;
const MAX_VALUE_SCALE = 100;
const MIN_VALUE_SCALE = 25;
const DEFAULT_VALUE_SCALE = 100;
let persentScale = DEFAULT_VALUE_SCALE;
let imageScale = DEFAULT_VALUE_SCALE;

const buttonScaleSmall = document.querySelector('.scale__control--smaller');
const buttonScaleBig = document.querySelector('.scale__control--bigger');
const valueControlField = document.querySelector('.scale__control--value');
const zoomableImage = document.querySelector('.img-upload__preview img');


const changeScale = (scale) => {
  valueControlField.value = `${scale}%`;
  zoomableImage.style.transform = `scale(${scale / 100})`;
};

//Функция уменишает  маштаб
const decreaseScale = () => {
  if (persentScale > MIN_VALUE_SCALE) {
    persentScale = persentScale - SCALE_STEP;
    imageScale = imageScale - SCALE_STEP;
    changeScale(persentScale);
  }
};

//Функция увеличивает маштаб
const increaseScale = () => {
  if (persentScale < MAX_VALUE_SCALE) {
    persentScale = persentScale + SCALE_STEP;
    imageScale = imageScale + SCALE_STEP;
    changeScale(persentScale);
  }
};

const resetValueScale = () => changeScale(DEFAULT_VALUE_SCALE);

buttonScaleSmall.addEventListener('click', decreaseScale);
buttonScaleBig.addEventListener('click', increaseScale);

export {resetValueScale};
