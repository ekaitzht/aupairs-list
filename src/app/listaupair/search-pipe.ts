import { Pipe } from '@angular/core';

@Pipe({
	name: "search",
	pure: false
})
export class SearchPipe{
	transform(value, term){
		console.log("value pipe->"+JSON.stringify(value));
		console.log("value filter->"+JSON.stringify(term));
		return value.filter(
			(item)=>{
				return item.name.toLowerCase().includes(term.toLowerCase()) || item.about.toLowerCase().includes(term.toLowerCase());
			});
	}
}