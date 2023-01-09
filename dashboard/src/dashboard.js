const { NavigationBar } = require('./components/navigation-bar/navigation-bar');

const navigationItems = [
  {
    url: '/hello-world-page',
    title: 'Hello World Page',
  },
  {
    url: '/lion-page',
    title: 'Lion Pagee',
  },
];

const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

const url = window.location.pathname;

if (url === '/hello-world-page') {
  import('HelloWorldApp/HelloWorldPage').then((HelloWorldPageModule) => {
    const { HelloWorldPage } = HelloWorldPageModule;
    new HelloWorldPage().render();
  });
} else if (url === '/lion-page') {
  import('LionApp/LionPage').then((LionPageModule) => {
    console.log(LionPageModule);
    const { LionPage } = LionPageModule;
    new LionPage().render();
  });
}
