var movieObjects = [
	{
		Title: "In Bruges",
		Rating: "5 stars",
		hasWatched: "have watched"
	},
	{
		Title: "Frozen",
		Rating: "4.5 stars",
		hasWatched: "have not seen"
	},
	{
		Title: "Mad Max Fury Road",
		Rating: "5 stars",
		hasWatched: "have not seen"
	}		
];

movieObjects.forEach(function(movie) {
	console.log("You " + movie.hasWatched + " \"" + movie.Title + "\" - " + movie.Rating);
});