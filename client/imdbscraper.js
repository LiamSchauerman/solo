// home for scraping of imdb and populating the cage_movies table in the cagematch db;

// input will be an actor's imdb ID - nm0000115
// output will be an array of objects of the format:
	// response = {
	// 	title: string,
	// 	year: int,
	// 	imdb_id: string,
	// 	img_url: string
	// }
$("#testButton").on('click', function(){
	console.log('in click')
	$.get('/scrape', function(html){
		console.log('in success')
		var children = html.getElementsByClassName('filmo-category-section')[0].children;
		console.log(children);
	})
})