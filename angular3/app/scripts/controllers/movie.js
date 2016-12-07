'use strict';

angular.module('moviemaniaApp')
  .controller('MovieCtrl', function ($scope, $routeParams, $http) {
    var id = parseInt($routeParams.id, 10);
    var movieList = [{
      id: 23,
      title: 'Usual Suspects',
      searchTerms: 'the usual suspects',
      image: 'http://ia.media-imdb.com/images/M/MV5BMzI1MjI5MDQyOV5BMl5BanBnXkFtZTcwNzE4Mjg3NA@@._V1_SX214_AL_.jpg',
      description: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which begin when five criminals meet at a seemingly random police lineup.',
      category: 'Awesome',
      cast: [
        'McManus: Stephen Baldwin',
        'Fenster: Benicio del Toro',
        'Verbal: Kevin Spacey'
      ]
    },
    {
      id: 42,
      title: 'Star Wars',
      searchTerms: 'star wars 1977',
      image: 'http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX214_AL_.jpg',
      description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
      category: 'Epic',
      cast: [
        'Han Solo: Harrison Ford',
        'Luke Skywalker: Mark Hamill'
      ]
    },
    {
      id: 1,
      title: 'The Lego Movie',
      searchTerms: 'the lego movie',
      image: 'http://ia.media-imdb.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX214_AL_.jpg',
      description: "An ordinary Lego construction worker, thought to be the prophesied 'Special', is recruited to join a quest to stop an evil tyrant from gluing the Lego universe into eternal stasis.",
      category: 'Awesome',
      cast: [
        'Emmet Brickowoski: Chris Pratt',
        'Lucy: Elizabeth Banks'
      ]
    } ,

    {
        id: 34,
        title: "Ace Drummond",
         image: 'http://ia.media-imdb.com/images/M/MV5BMjEyNzg3MzcyNF5BMl5BanBnXkFtZTcwNjQ2NTQyMQ@@._V1_SY317_CR3,0,214,317_AL_.jpg',
         description: 'This 13 chapter serial is based on the comic strip character Ace Drummond created by Eddie Rickenbacker. Ace is a "G-Man of the sky" working out of Washington D.C. He is sent to Mongolia to find out why a mysterious villain known only as "The Dragon" is trying to prevent the newly formed International Airways from setting up an airport there. Ace meets Peggy Trainor (Jean Rogers) who is searching for her archaeologist father who has disappeared. Together they search for answers to the puzzles.',
         category:'Awesome'
      },
      {
        id: 9,
        title: "And Then There Were None",
        image: 'http://ia.media-imdb.com/images/M/MV5BMTMyMDA2ODE5M15BMl5BanBnXkFtZTcwNjg0NjIyMQ@@._V1_SY317_CR5,0,214,317_AL_.jpg',
        description: 'Based on a novel and subsequent stage play by Agatha Christie; ten people are invited to an isolated island, only to be killed one-by-one. Could one of them be the killer?',
        category: 'Epic',
        cast: [
          'Emmet Brickowoski: Chris Pratt',
          'Lucy: Elizabeth Banks'
        ]
      },
      {
        id: 18,
        title: "Captain Kidd",
        image: 'http://ia.media-imdb.com/images/M/MV5BMzMyMzk3Nzc3Nl5BMl5BanBnXkFtZTcwNzczMzU1MQ@@._V1_SY317_CR51,0,214,317_AL_.jpg',
        description: 'The unhistorical adventures of pirate Captain Kidd revolve around treasure and treachery.',
        category: 'Awesome',
        cast: [
          'Emmet Brickowoski: Chris Pratt',
          'Lucy: Elizabeth Banks'
        ]
      }]

    for(var index in movieList) {
      var movie = movieList[index];
      if(movie.id === id) {
        $scope.movie = movie;
      
      }
    }
  });
