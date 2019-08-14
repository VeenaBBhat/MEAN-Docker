import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  private movieUrl = 'http://localhost:3000/autocomplete/';

  constructor(private http: HttpClient) { }
  
  getMovieList(keyName): Observable<any>{
    return this.http.get<any>(this.movieUrl+keyName);
  }
}
