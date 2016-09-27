import { Pipe } from '@angular/core';

@Pipe({
	name: "years",
	pure: false
})
export class AgePipe{
	transform(value){
		console.log(value);
		var ageDifMs = Date.now() - value;
		console.log(ageDifMs);
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);


	}
}

