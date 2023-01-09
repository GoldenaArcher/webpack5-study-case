import Lion from './lion_PNG3809.png'
import alt from './randomText.txt'

export const addImage = () => {
    const img = document.createElement('img');
    img.src = Lion;
    img.alt = alt;
    img.width = '200';
    const body = document.querySelector('body')
    body.appendChild(img)
}