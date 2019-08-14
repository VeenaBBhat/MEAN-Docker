var express= require('express')
var cors=require('cors');
var module = require('./dbmodule');
var app=express();

app.set("views", "./views");
app.set('view engine', 'pug');

var originsWhitelist = [
  'http://localhost:4200'
];
var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}

app.use(cors(corsOptions));

app.get('/autocomplete/:key',function(request, response)
{
	module.autoCompleter(request.params.key,response);	
	
});
app.get('/movies/:movieId',function(request, response)
{
	
	module.getMovie(request.params.movieId,response);	
	
});
app.listen(3000); 
console.log("Server started");
