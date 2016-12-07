'use strict';

/**
 * @ngdoc service
 * @name moviemaniaApp.Movies
 * @description
 * # Movies
 * Factory in the moviemaniaApp.
 */
angular.module('moviemaniaApp')
  .factory('Movies', function ($q) {

    // Private area good for cacheing
    //if the variable does not exist
    // it will be created in return function
    // ...
//
// var moviesRequest = null;
//
//
//     // Public API here
//          return {
//            // service to load movies
//           load: function() {
//             if(!moviesRequest){
//               moviesRequest = $http.get('/movies.json');
//             }
// return moviesRequest;
//       },
//              //utility function to get movies
//               find: function(id,movies) {
//
//              for(var i in movies) {
//              var movie = movies[i];
//              if(id === movie.id){
//
//             return movie;
//            }
//
//          }
//
//       }
//
//   });
var key = 'movimemania:movies';
function loadMovies() {
  return JSON.parse(localStorage.getItem(key)) || [];

}
return {
  load:function() {
    return $q.when(loadMovies());
  },
  get: function(id) {
    var foundMovie;
    var movies = loadMovies();
    for (var i in movies){
      var movie = movies[i];
      if(movie.id === id){
        foundMovie = movie;
        break;
      }
    }
    return $q.when(foundMovie);
  },
  add: function(obj) {
    var movies = loadMovies();
    obj.id = movies.length;
    obj.slug = obj.title.toLowerCase().replace(/ /g, '-');
    movies.push(obj);
    localStorage.setItem(key, JSON.stringify(movies));
  }
};
});
