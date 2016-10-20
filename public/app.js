var app = angular.module('MyApp', ['ngRoute'])

  .config (($routeProvider, $locationProvider) => {
    $routeProvider
      .when('/', {
        controller: 'MovieSearch'
      })
      .when('/results/:title', {
        controller: 'MovieResults',
        templateUrl: '/search/search.template.html'
      })
      .when('/result/:movieId', {
        controller: 'SingleMovie',
        templateUrl: '/search/singleMovie.template.html'
      })
      $locationProvider.html5Mode(true);
  })
