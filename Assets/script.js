let APIkey = "40c69ea1d7b0101e5044f901e840aebc";
let cityname, lat, lon = "";
let weatherAPI = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`;
let geocodingAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${APIkey}`;

let cityInput = document.getElementById("cityinput");
const searchcity = document.getElementById('btn-primary'); 

todayEl = document.getElementById("today");
date1El = document.getElementById("date1");
// date1E2 = document.getElementById("date2");// date1E3 = document.getElementById("date3");// date1E4 = document.getElementById("date4");// date1E5 = document.getElementById("date5");
//run for loop?? 

// fetch(weatherAPI,)  //need work
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
// });

//set today's date. 
today = dayjs();
$('#todaydate').text(dayjs().format('MMMM DD'));

$('.btn-primary').click(function(){
  //Below grabs clicked-btn hour and text and store in local. 
  cityInput = $('#cityinput').val(); 
  getweatherforcast(cityInput);
});


let setweatherforcast = function(){
//code weekly grab
//update search histoy.
//get uv-index

};

let getweatherforcast = function(city){
  cityname = city;
  geocodingAPI
}

//test code lines below; 
Minneapolis = {	//weather api info for Minneapolis
  "name": "Minneapolis",
  "lat": 44.9772995,
  "lon": -93.2654692,
  "country": "US",
  "state": "Minnesota"
}




// delete later
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