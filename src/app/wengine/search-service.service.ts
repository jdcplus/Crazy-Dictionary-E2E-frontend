import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Word } from './word';
import {WORDS} from './word-data';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) { }

  getWord_(word:String){
    console.log("searching word:",word);
    return WORDS[0];
  }

  getWord(word: String){
    return this.http.get<Word>('https://crazy-dictionary.herokuapp.com/definition/'+word).pipe(catchError(this.handleError));
  }


  private handleError(err:HttpErrorResponse) {
    let errMsg:string='';
    if (err.error instanceof Error) {
       console.log('An error occurred:', err.error.message);
        errMsg=err.error.message;}
       else {
       console.log(`Backend returned code ${err.status}`);
          errMsg=err.error.status;
     }
        return throwError(errMsg);
  }

}
