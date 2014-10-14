angular.module('cageMatch', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/matchup.html',
      controller: 'MatchupController'
    })
    // .otherwise({
    //   redirectTo: '/links'
    // })
})

.controller('MatchupController', function ($scope, MakeMatchup){

	$scope.data = MakeMatchup.movies
	$scope.inPlay = MakeMatchup.twoRandomNumbers()
	$scope.declareWinner = function(winner, loser){
		MakeMatchup.declareWinner(winner, loser);
		$scope.inPlay = MakeMatchup.twoRandomNumbers();
	}

})

.factory('MakeMatchup', function(){
	var movies = [
		{
			title: 'Con Air',
			imgUrl: 'images/conAir.jpg',
			score: 1000,
			imdbId: 'tt0118880'
		},
		{
			title: 'The Rock',
			imgUrl: 'images/theRock.jpg',
			score: 1000,
			imdbId: 'tt0117500'
		},
		{
			title: 'Raising Arizona',
			imgUrl: 'images/raisingArizona.jpg',
			score: 1000,
			imdbId: 'tt0093822'
		},
		{
			title: 'Gone in 60 Seconds',
			imgUrl: 'images/goneIn60Seconds.jpg',
			score: 1000,
			imdbId: 'tt0187078'
		},
		{
			title: 'National Treasure',
			imgUrl: 'images/nationalTreasure.jpg',
			score: 1000,
			imdbId: 'tt0368891'
		}
	]

	var twoRandomNumbers = function(){
		var indexA = Math.floor(Math.random()*movies.length);
		var indexB = Math.floor(Math.random()*movies.length);
		while(indexA === indexB){ //no duplicates
			indexB = Math.floor(Math.random()*movies.length);
		}
		return [indexA, indexB];
	}

	var declareWinner = function(winner, loser) {
		// movies[winner].score += 100;
		// movies[loser].score -= 100;
		var winExp = 1/(1+Math.pow(10, ( movies[loser].score - movies[winner].score )/400));
		var K = 24;
		console.log(winExp);
		var winScore = movies[winner].score + K*(1-winExp);
		var diff = winScore - movies[winner].score;
		console.log("diff", diff)
		movies[winner].score += Math.floor(diff);
		movies[loser].score -= Math.floor(diff);


		// find the amount added to winner, subtract that from loser
	}

	return {
		twoRandomNumbers: twoRandomNumbers,
		movies: movies,
		declareWinner: declareWinner
	}

})

