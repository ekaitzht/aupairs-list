import { Injectable } from '@angular/core';
import {AupairsDataService} from './aupairs-data.service'
import { AuPair } from './au-pair'
@Injectable()
export class AupairsService {

  auPairs: AuPair[];
  
  constructor(private aupairsDataService: AupairsDataService) { }

  ngOnInit() {

  }

  getAupairs(){
		return this.auPairs;
  }
}
