// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBUfF7ZjfoE6Fa0dYdI1HtNriv7gadeksc',
    authDomain: 'angular-gallery-7db2a.firebaseapp.com',
    databaseURL: 'https://angular-gallery-7db2a.firebaseio.com',
    projectId: 'angular-gallery-7db2a',
    storageBucket: 'angular-gallery-7db2a.appspot.com',
    messagingSenderId: '563179593652'
  }
};
