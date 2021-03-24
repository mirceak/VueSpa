import * as  singleSpa from 'single-spa';

window.singleSpa = singleSpa

singleSpa.registerApplication(
  'shell',
  () => import('shell/AppModule'),
  location => location.pathname.startsWith('/')
);

singleSpa.registerApplication(
  'nav',
  () =>
    System.import(
      "nav"
    ),
  location => location.pathname.startsWith('/')
);

singleSpa.start();
