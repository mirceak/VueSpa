import { registerApplication, start } from "single-spa";

// singleSpa.registerApplication(
//   'shell',
//   () => import('shell/AppModule'),
//   location => location.pathname.startsWith('/')
// );

registerApplication(
  "shell",
  () => System.import("parcels-shell"),
  (location) => location.pathname.startsWith("/")
);

registerApplication(
  "nav",
  () => System.import("parcels-components-nav"),
  (location) => location.pathname.startsWith("/")
);

start();
