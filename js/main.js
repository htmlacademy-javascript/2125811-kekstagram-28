import {getGallery} from './gallery.js';
import './form.js';
import './validation.js';
import './effects.js';
import './scale.js';
import {getData} from './api.js';
import { showAlert } from './util.js';
import {getFilterPictures, init} from './filters.js';
import {debounce} from './util.js';
import './upload-picture.js';

try {
  const data = await getData();
  const debouncegetGallery = debounce(getGallery);
  init(data, debouncegetGallery);
  getGallery(getFilterPictures());

} catch (err) {
  showAlert(err.message);
}
