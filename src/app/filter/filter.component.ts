import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AupairsDataService} from '../aupairs-data.service'
import 'rxjs/add/operator/map';
import { Filter } from './filter'



@Component({
  selector: 'app-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.scss']
})
export class FilterComponent  {
  

  countries = ['Burkina Faso', 'Virgin Islands (US)', 'Australia', 
  'Slovak Republic','Laos','United Kingdom','Norway','Reunion','Denmark','Georgia'];
  ages = Array.apply(null, {length: 85}).map(String.call, String);
  genders = ['M','F'];
  englishLevels = ['1','2','3','4','5'];
  hasVideos = [ 'false', 'true' ];
  filter = new Filter('Country','Age','Gender','English Level','Has Video');
 
  @Input()
  auPairs = []; 
  


  @Output() update = new EventEmitter();

  constructor(private aupairsDataService: AupairsDataService) {

   }


   ngOnInit(){
      this.update.emit(this.filter);
   }

 




  /*
  * Two way data-biding is doing a strange bug this is the reason I am *  using one function per select.
  */
  onChangeCountry(value) { 
    this.filter.country = value;
    this.update.emit(this.filter);
  }

  onChangeGender(value) {
    this.filter.gender = value;
    console.log(JSON.stringify(this.filter));
    this.update.emit(this.filter);
  }

  onChangeAge(value) {
    this.filter.age = value;
    this.update.emit(this.filter);
  }

  onChangeEnglishLevel(value) {
    this.filter.englishLevel = value;
    this.update.emit(this.filter);
  }
  onChangeHasVideo(value) {
    this.filter.hasVideo = value;
    this.update.emit(this.filter);
  }
  

}
