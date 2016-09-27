import { Component, Input } from '@angular/core';
import {AupairsDataService} from '../aupairs-data.service'
import {AuPair} from '../au-pair'
import {Filter} from '../filter/filter'
import {FilterPipe} from './filter-pipe'
import {SearchPipe} from './search-pipe'
import {AgePipe} from './age-pipe'

@Component({
  selector: 'app-listaupair',
  pipes: [FilterPipe, SearchPipe, AgePipe],
  templateUrl: 'listaupair.component.html',
  styleUrls: ['listaupair.component.scss']
})
export class ListaupairComponent{
 @Input()
  auPairs = [];
 @Input()  haha;
 @Input()  term;
  constructor(private aupairsDataService: AupairsDataService) { }
}



