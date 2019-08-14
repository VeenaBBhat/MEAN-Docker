import { Component } from '@angular/core';
import { AutocompleteService } from './autocomplete.service';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
  constructor(private autoCompleter: AutocompleteService, private movieServer:MovieService) { }

  title = 'Online Movie Database App';
  movieList=[];
  errorMessage: string;
  myMovie;
  
  getList(keyName) {
	  console.log(keyName);
	  if(keyName.length>=3){
		  this.autoCompleter.getMovieList(keyName).subscribe(
		  movieList => {this.movieList=movieList},
		  error => {
			  console.log(error)
			  this.errorMessage = <any>error;});
	  }
	  else ;
  }
  
  getMovie(movieId){
	  console.log(movieId);
	  this.movieServer.getMovie(movieId).subscribe(
		  myMovie => {this.myMovie=myMovie;},
	  error => {
		  console.log(error)
		  this.errorMessage = <any>error;
	});
  }
}
