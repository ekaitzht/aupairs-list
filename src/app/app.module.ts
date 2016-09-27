import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { ListaupairComponent } from './listaupair/listaupair.component';
import { FormsModule }   from '@angular/forms';
import { RatingComponent } from './rating/rating.component';

@NgModule({
	declarations: [
		AppComponent,
		FilterComponent,
		SearchComponent,
		ListaupairComponent,
		RatingComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule
	],
	providers: [],
	entryComponents: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule {
}
