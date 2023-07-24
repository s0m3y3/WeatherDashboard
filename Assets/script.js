let APIKey = "40c69ea1d7b0101e5044f901e840aebc";
let weatherAPI = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${APIKey}';
let geocodingAPI = 'http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${APIkey}';

const searchcity = document.getElementById('btn-primary'); 
let cityname = document.getElementById("cityinput");

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

fetch(weatherAPI,)  //need work
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
});

today = dayjs();



searchcity.addEventListener("click",function(event){
  //need work
})
