import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from './search-service.service';
import {Word} from './word';
@Component({
  selector: 'app-wengine',
  templateUrl: './wengine.component.html',
  styleUrls: ['./wengine.component.css']
})
export class WengineComponent{

  errorMessage:string;
  searchStr:string;
  wordHC: Word;
  submitted: boolean = false;

  constructor(private searchService: SearchServiceService) { }

  searchword(){
    this.submitted  = true;
    this.searchService.getWord(this.searchStr)
      .subscribe(resp => this.wordHC = resp, error=> this.errorMessage = error);

  }

  searchSuggestedWord(wordSuggested: string){
    this.searchStr = wordSuggested;
    this.searchword();
  }

}
