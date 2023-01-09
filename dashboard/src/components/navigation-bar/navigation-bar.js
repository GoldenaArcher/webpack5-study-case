import './navigation-bar.scss';

export class NavigationBar {
  render(navitagionItems) {
    const liItems = navitagionItems.map((navitagionItem) => {
      return `
                <li>
                    <a href="${navitagionItem.url}">${navitagionItem.title}</a>
                </li>
            `;
    });

    const ul = document.createElement('ul');
    ul.innerHTML = liItems.join('');
    ul.classList.add('navigation-bar');
    document.querySelector('body').appendChild(ul);
  }
}
