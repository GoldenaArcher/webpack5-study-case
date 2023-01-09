import Lion from './lion_PNG3809.png';
import alt from './randomText.txt';
import './lion-img.scss';

export class LionImg {
  static render() {
    const img = document.createElement('img');
    img.src = Lion;
    img.alt = alt;
    img.classList.add('lion-img');
    const body = document.querySelector('body');
    body.appendChild(img);
  }
}
