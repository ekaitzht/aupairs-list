import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() update = new EventEmitter()
  constructor() { }

  ngOnInit() {
  	this.update.emit('');
  }

}

