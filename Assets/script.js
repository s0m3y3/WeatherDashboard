// let APIKey = "40c69ea1d7b0101e5044f901e840aebc";
let cityname ="";
let lat = "";
let lon = "";
let weatherAPI = 'api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid=40c69ea1d7b0101e5044f901e840aebc';
let geocodingAPI = 'http://api.openweathermap.org/geo/1.0/direct?q='+cityname+'&appid=40c69ea1d7b0101e5044f901e840aebc';

todayEl = document.getElementById("today");
date1El = document.getElementById("date1");
// date1E2 = document.getElementById("date2");
// date1E3 = document.getElementById("date3");
// date1E4 = document.getElementById("date4");
// date1E5 = document.getElementById("date5");
//run for loop?? 

Minneapolis = {	//weather api info for Minneapolis
  "name": "Minneapolis",
  "lat": 44.9772995,
  "lon": -93.2654692,
  "country": "US",
  "state": "Minnesota"
}
//API GEO example. delete later. 
apigeo = [
	{
		"name": "Minneapolis",
		"local_names": {
			"hi": "मिन्यापोलिस्",
			"kn": "ಮಿನ್ಯಾಪೋಲಿಸ್",
			"pt": "Mineápolis",
			"fa": "مینیاپولیس",
			"zh": "明尼阿波利斯",
			"eo": "Mineapolo",
			"en": "Minneapolis",
			"ar": "منيابولس",
			"ja": "ミネアポリス",
			"ru": "Миннеаполис",
			"uk": "Міннеаполіс",
			"oc": "Minneapòlis",
			"he": "מיניאפוליס",
			"oj": "Gakaabikaang"
		},
		"lat": 44.9772995,
		"lon": -93.2654692,
		"country": "US",
		"state": "Minnesota"
	}
];

// fetch(weatherAPI,)  //need work
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
// });

// today = dayjs();
// $('#todaydate').text(dayjs());
// console.log(today);
// console.log('hey');
// let day1 = dayjs('2023-11-29');
// $('#1a').text(day1.format('MMM D, YYYY'));

let cityInput = document.getElementById("cityinput");
  console.log(cityname);
const searchcity = document.getElementById('btn-primary'); 

searchcity.addEventListener("click",function(event){
  cityname = document.getElementById("cityinput");
  console.log(cityname);
});

let setweatherforcast = function(){
//code weekly grab
//update search histoy.
//get uv-index

};