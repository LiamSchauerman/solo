var data = [
	{
			title: 'Con Air',
			imgUrl: '../images/conAir.jpg',
			score: 1000,
			imdbId: 'tt0118880'
		},
		{
			title: 'The Rock',
			imgUrl: '../images/theRock.jpg',
			score: 1000,
			imdbId: 'tt0117500'
		},
		{
			title: 'Raising Arizona',
			imgUrl: '../images/raisingArizona.jpg',
			score: 1000,
			imdbId: 'tt0093822'
		},
		{
			title: 'Gone in 60 Seconds',
			imgUrl: '../images/goneIn60Seconds.jpg',
			score: 1000,
			imdbId: 'tt0187078'
		},
		{
			title: 'National Treasure',
			imgUrl: '../images/nationalTreasure.jpg',
			score: 1000,
			imdbId: 'tt0368891'
		},
	];
$(document).on('ready', function(){
	$('.movieContainer').on('click', function(){
		var nums = twoRandomNumbers();
		renderMovie('#left', nums[0])
		renderMovie('#right', nums[1])
	});

var twoRandomNumbers = function(){
	var indexA = Math.floor(Math.random()*data.length);
	var indexB = Math.floor(Math.random()*data.length);
	while(indexA === indexB){ //no duplicates
		indexB = Math.floor(Math.random()*data.length);
	}
	return [indexA, indexB];
}

//renderMovie takes a dom destination and the index corresponding with the movie
var renderMovie = function(dest, index) {
	// access the values inside of data[index]
	// generage html to fill the div
	var thisMovie = data[index];
	var htmlTemplate = '<div class="title">'+thisMovie.title+'</div><div class="image"><img src="'+thisMovie.imgUrl+'"></div>'
	$(dest).html(htmlTemplate)
}







}) //end ready block

// todo:
// adjust score