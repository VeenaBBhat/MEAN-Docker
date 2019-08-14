const omdb = new (require('omdbapi'))('8868b464');
var Regex = require("regex");
var message=null;

exports.autoCompleter = function(key,response) {
var mykey=`/${key}/`;
var pattern=new RegExp("^"+key,"i");
omdb.search({search:mykey}).then(res => {
	let i=0, mymovies=[];
	while(res[i]!=null){
		mymovies.push(res[i]);
		i++;
	}
	let resMovies=mymovies.filter((movie,index)=>pattern.test(movie.title));
	response.send(resMovies.slice(0,5));
}).catch(console.error);	
}

exports.getMovie=function(movieId,response){
	omdb.get({id:movieId}).then(res => {response.send(res);
	}).catch(console.error);
}