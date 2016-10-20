
  app.controller('MovieSearch', function ($scope, $http, $location) {
    $scope.view = {}
    $scope.view.data
    $scope.searchMovies = () => {
      let title = $scope.title
      $location.path(`/results/${title}`)
    }
  })

  app.controller('MovieResults', function ($scope, $http, $location, $routeParams) {
    $scope.view = {}
    $scope.view.title = $routeParams.title
    let url = 'http://www.omdbapi.com/?s=' + $scope.view.title

    $http.get(url)
      .then((data) => {

        $scope.view.data = data.data.Search

      })
      .catch((err) => {
        console.error('There was an error', err)
      })
    $scope.searchMovieById = (movieId) => {

      $location.path(`/result/${movieId}`)
    }
  })

  app.controller('SingleMovie', function ($scope, $http, $location, $routeParams) {

    $scope.view = {}
    $scope.view.movieId = $routeParams.movieId
    let url2 = 'http://www.omdbapi.com/?i=' + $scope.view.movieId

    $http.get(url2)
      .then((data) => {
      
        $scope.movie = data.data
        console.log($scope.movie)
      })
      .catch((err) => {
        console.error('There was an error', err)
      })

  })




// angular.module('angularJWT') //dont include the dependencies
// .controller('login', function($scope,$http, $location){
//   $scope.create = function() {
//     const user = {
//       username: $scope.username,
//       password: $scope.password
//     }
//     console.log(user)
//     $http.post('/users/create', user)
//       .then(function(result) {
//         localStorage.setItem('user', JSON.stringify(result.data))
//         console.log(result)
//         $location.path('/dashboard')
//       })
//       .catch(function (err) {
//         console.error('There was an error', err)
//       })
//   }
// })
