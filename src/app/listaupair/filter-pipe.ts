import { Pipe } from '@angular/core';

@Pipe({
	name: "formfilter",
	pure: false
})
export class FilterPipe{

	toYears(value){
		console.log(value);
		var ageDifMs = Date.now() - value;
		console.log(ageDifMs);
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970).toString();
	}

	transform(value, filter){
		console.log("value pipe->"+JSON.stringify(value));
		console.log("value filter->"+JSON.stringify(filter));
		return value.filter(
			(item)=>{
				var filterCountry = true;
				var filterGender = true;
				var filterAge = true;
				var filgerEnglishLevel = true;
				var filterHasVideo = true;

				if(filter.country === 'Country'){
					filterCountry = true;
				} else{
					filterCountry = item.country === filter.country;
					
				}

				if(filter.gender === 'Gender'){
					filterGender = true;
				} else{
					filterGender = item.gender === filter.gender; 
				}

				if(filter.age === 'Age'){
					filterAge = true;
				} else{
					filterAge = this.toYears(item.dateOfBirth) === filter.age; 
				}

				if(filter.englishLevel === 'English Level'){
					filgerEnglishLevel = true;
				} else{
					filgerEnglishLevel = item.englishLevel.toString() === filter.englishLevel; 
				}

				if(filter.hasVideo === 'Has Video'){
					filterHasVideo = true;
				} else{
					filterHasVideo = item.hasVideo.toString() === filter.hasVideo; 
				}
					

				return filterGender && filterCountry && filterAge && filgerEnglishLevel && filterHasVideo ;
			});
	}
}

