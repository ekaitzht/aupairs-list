import { Component, ViewChild } from '@angular/core';
import { ListaupairComponent} from './listaupair/listaupair.component'
import { SearchComponent } from './search/search.component'
import { FilterComponent } from './filter/filter.component'
import { RatingComponent } from './rating/rating.component'
import { AupairsDataService } from './aupairs-data.service'
import { HTTP_PROVIDERS } from '@angular/http'


@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
	directives: [ListaupairComponent, SearchComponent, FilterComponent, RatingComponent],
	providers: [AupairsDataService, HTTP_PROVIDERS],

})
export class AppComponent {

    constructor(private aupairsDataService: AupairsDataService) {}
	title = 'Find an au pair';

	onAppliedFilter(filter){
		
		console.log(filter.country);
		console.log(filter);
	}
}
