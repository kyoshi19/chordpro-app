//En este bloque config solo se configuran las rutas
angular
  .module(appName)
  .config(config);

config.$inject = [
  '$stateProvider',
];

function config($stateProvider) {

  $stateProvider.state('index', {
    url: '/index',
    templateUrl: 'common/templates/main.html'
  });

}
