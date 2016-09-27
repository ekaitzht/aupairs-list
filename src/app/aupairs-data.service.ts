import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuPair } from './au-pair'
import 'rxjs/add/operator/map';

@Injectable()
export class AupairsDataService {
   auPairs = [];

  constructor(private http: Http) { 
  	this.loadAuPairs();
  }


  loadAuPairs(){
		this.http.get('app/data.json')
		.map(response => response.json())
		.subscribe(
			auPairs => this.auPairs = auPairs

		
		);

  }



}
