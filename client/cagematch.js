// var data = [
// 	{
// 			title: 'Con Air',
// 			imgUrl: 'images/conAir.jpg',
// 			score: 1000,
// 			imdbId: 'tt0118880'
// 		},
// 		{
// 			title: 'The Rock',
// 			imgUrl: 'images/theRock.jpg',
// 			score: 1000,
// 			imdbId: 'tt0117500'
// 		},
// 		{
// 			title: 'Raising Arizona',
// 			imgUrl: 'images/raisingArizona.jpg',
// 			score: 1000,
// 			imdbId: 'tt0093822'
// 		},
// 		{
// 			title: 'Gone in 60 Seconds',
// 			imgUrl: 'images/goneIn60Seconds.jpg',
// 			score: 1000,
// 			imdbId: 'tt0187078'
// 		},
// 		{
// 			title: 'National Treasure',
// 			imgUrl: 'images/nationalTreasure.jpg',
// 			score: 1000,
// 			imdbId: 'tt0368891'
// 		},
// 	];
// var inPlay;
// var winningIndex;
// var loser;
// $(document).on('ready', function(){
// 	// returns array of two random numbers
// 	// var twoRandomNumbers = function(){
// 	// 	var indexA = Math.floor(Math.random()*data.length);
// 	// 	var indexB = Math.floor(Math.random()*data.length);
// 	// 	while(indexA === indexB){ //no duplicates
// 	// 		indexB = Math.floor(Math.random()*data.length);
// 	// 	}
// 	// 	return [indexA, indexB];
// 	// }

// 	//renderMovie takes a dom destination and the index corresponding with the movie
// 	// var renderMovie = function(dest, index) {
// 	// 	// access the values inside of data[index]
// 	// 	// generage html to fill the div
// 	// 	var thisMovie = data[index];
// 	// 	var htmlTemplate = '<div class="title">'+thisMovie.title+'</div><div class="image"><img src="'+thisMovie.imgUrl+'"></div>'
// 	// 	$(dest).html(htmlTemplate)
// 	// }

// 	// generates 'rankings' html
// 	// var showRankings = function(){
// 	// 	var html = '';
// 	// 	for(var i=0; i<data.length; i++ ) {
// 	// 		html+='<div>'+data[i].title+': '+data[i].score
// 	// 	};
// 	// 	$('#rankings').html(html);
// 	// }
// 	inPlay = twoRandomNumbers();
// 	renderMovie('#left', inPlay[0])
// 	renderMovie('#right', inPlay[1])
// 	// showRankings();
// 	// CLICKING ON A MOVIE
// 	$('.movieContainer').on('click', function(){
// 		// declaring the winner
// 			// winner score+50
// 			// loser score-50
// 		// generate new movies

// 	// if this.hasId #left
// 		// inPlay[0] is winner
// 		winningIndex = $(this).attr('id')

// 		console.log(inPlay)
// 		if(inPlay){
// 			console.log(winningIndex)
// 			if (winningIndex === 'left') {
// 				data[inPlay[0]].score += 50;
// 				data[inPlay[1]].score -= 50;
// 			} else {
// 				data[inPlay[1]].score += 50;
// 				data[inPlay[0]].score -= 50;
// 			}
// 		}




// 		inPlay = twoRandomNumbers();
// 		renderMovie('#left', inPlay[0])
// 		renderMovie('#right', inPlay[1])
// 		// showRankings();
// 	});






// }) //end ready block

// // todo:
// // adjust score