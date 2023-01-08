import './heading.scss';

export class Heading {
  static render(pageName) {
    const h1 = document.createElement('h1');
    const body = document.querySelector('body');
    h1.innerHTML = `Everhtying is awesome from ${pageName}`;
    body.appendChild(h1);
  }
}
