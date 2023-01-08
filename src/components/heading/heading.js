import './heading.scss';

export class Heading {
  static render() {
    const h1 = document.createElement('h1');
    const body = document.querySelector('body');
    h1.innerHTML = 'Everhtying is awesome';
    body.appendChild(h1);
  }
}
