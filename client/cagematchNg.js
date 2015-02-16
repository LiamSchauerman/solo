var app = angular.module('cageMatch', ['ngRoute', 'firebase'])
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


// app.controller("SampleCtrl", function($scope, $firebase) {
//   var ref = new Firebase("https://burning-torch-5059.firebaseio.com/");
//   var sync = $firebase(ref);
//   $scope.messages = sync.$asArray();
//   $scope.addMessage = function(text) {
//     $scope.messages.$add({text: text});
//   }
// });



app.controller('MatchupController', function($scope, MakeMatchup, $firebase){
		//FIREBASE
	var ref = new Firebase("https://burning-torch-5059.firebaseio.com/");
	var sync = $firebase(ref);
	$scope.data = sync.$asArray();

	$scope.inPlay = MakeMatchup.twoRandomNumbers()
	$scope.declareWinner = function(winner, loser){
		var winExp = 1/(1+Math.pow(10, ( $scope.data[loser].score - $scope.data[winner].score )/400));
		var K = 24;
		var winScore = $scope.data[winner].score + K*(1-winExp);
		var diff = winScore - $scope.data[winner].score;
		console.log("diff", diff)
		$scope.diff = diff;
		$scope.data[winner].score += Math.floor(diff);
		$scope.data[loser].score -= Math.floor(diff);

		// syncing with firebase
		$scope.data.$save($scope.data[winner])
		$scope.data.$save($scope.data[loser])

		$scope.inPlay = MakeMatchup.twoRandomNumbers();
		$scope.toggleRankings = function() {
			console.log($scope.rankings)
			// show or hide the rankings div
			$scope.rankings === true ? $scope.rankings = false : $scope.rankings = true;
		}
	};
})

app.factory('MakeMatchup', function(){

	// generate two random index values
	var twoRandomNumbers = function(){
		var indexA = Math.floor(Math.random()*movies.length);
		var indexB = Math.floor(Math.random()*movies.length);
		while(indexA === indexB){ //no duplicates
			indexB = Math.floor(Math.random()*movies.length);
		}
		return [indexA, indexB];
	}

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
		},
		{
			title: 'The Boy in Blue',
			imgUrl: 'images/theBoyInBlue.jpg',
			imdbId: 'tt0090769',
			score: 1000
		},
		{
			title: 'Peggy Sue Got Married',
			imgUrl: 'images/peggySueGotMarried.jpg',
			imdbId: 'tt0091738',
			score: 1000
		},
		{
			title: 'Moonstruck',
			imgUrl: 'images/moonstruck.jpg',
			imdbId: 'tt0093565',
			score: 1000
		},
		{
			title: "Vampire\'s Kiss",
			imgUrl: 'images/vampiresKiss.jpg',
			imdbId: 'tt0098577',
			score: 1000
		},
		{
			title: 'Time to Kill',
			imgUrl: 'images/timeToKill.jpg',
			imdbId: 'tt0100762',
			score: 1000
		},
		{
			title: 'Wild at Heart',
			imgUrl: 'images/wildAtHeart.jpg',
			imdbId: 'tt0100935',
			score: 1000
		},
		{
			title: 'Fire Birds',
			imgUrl: 'images/fireBirds.jpg',
			imdbId: 'tt0099575',
			score: 1000
		},
		{
			title: 'Honeymoon in Vegas',
			imgUrl: 'images/honeyMoonInVegas.jpg',
			imdbId: 'tt0104438',
			score: 1000
		},
		{
			title: 'Face-Off',
			imgUrl: 'images/faceOff.jpg',
			imdbId: 'tt0119094',
			score: 1000
		},
		{
			title: 'Lord of War',
			imgUrl: 'images/lordOfWar.jpg',
			imdbId: 'tt0399295',
			score: 1000
		},
		{
			title: 'The Wicker Man',
			imgUrl: 'images/theWickerMan.jpg',
			imdbId: 'tt0450345',
			score: 1000
		}
	];
	return {
		twoRandomNumbers: twoRandomNumbers,
		movies: movies
		// declareWinner: declareWinner
	}

})

$(document).on('ready', function(){
	var imdbResponse = document.createElement('div');
	$("#testButton").on('click', function(){
		console.log('in click')
		$.get('/scrape', function(html){
			console.log('inside ajax success');
			// var children = html.getElementsByClassName('filmo-category-section')[0].children;
			imdbResponse.innerHTML = html;
			parseHTML(imdbResponse);
		})
	})
	function parseHTML(element){
		var children = imdbResponse.getElementsByClassName('filmo-category-section')[0].children;
		var titles = [];
		for( var i=0; i<children.length; i++){
			var name = children[i].querySelector('b > a').innerHTML;
			titles.push(name)
		}
		console.log(children.length);
		console.log(titles);
	}
	function getTitle(childEl){

	}
	
})