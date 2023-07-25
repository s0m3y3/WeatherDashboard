let cityname, latitude, longitude = "";
let cityInput = document.getElementById("cityinput");
const searchcity = document.getElementById('btn-primary'); 
let searchhistory = []; //array of search history. 
let APIkey = "40c69ea1d7b0101e5044f901e840aebc";

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

let kelvin2fahrenheit = function (kelvin){return((kelvin-273.15)*9/5+32)}; //converts kelvin to fahrenheit

let getweatherforcast = function(){
  if(cityname != ""){ //if cityinput is not blank, run get lat/lon of city name. 
  let geocodingAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${APIkey}`;

  fetch(geocodingAPI)
    .then(function (response) {
    return response.json();
    })
    .then(function(data){
      console.log(data);
      longitude = data[0].lon;
      latitude = data[0].lat;
      console.log(longitude + " lon&lat " + latitude); //delete me
      setweatherforcast();
    })
  }
  else{
    alert("No city input. Please try again");  //to do: convert this to modal.
    return;
  }
};

// document.getElementById("temperature").textContent = data.main.temp.toFixed(0);
// data.list[i].main.temp_max.toFixed(0);
// data.list[i].main.temp_min.toFixed(0);
// data.list[i].main.humidity;

let setweatherforcast = function(){
  //code weekly grab
  //update search histoy.
  //get uv-index

  let weatherAPI = `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIkey}`;
  fetch(weatherAPI)
    .then(function (response) {
    return response.json();
    })
    .then(function(data){
      console.log(data);

    })
  
};

$('.btn-primary').click(function(){
  //Below grabs clicked-btn hour and text and store in local. 
  cityname = $('#cityinput').val(); 
  console.log("city name: "+cityname);
  getweatherforcast();
});


// delete later
// delete later
//test code lines below; 
Minneapolis = {	//weather api info for Minneapolis. Set as default? 
  "name": "Minneapolis",
  "lat": 44.9772995,
  "lon": -93.2654692,
  "country": "US",
  "state": "Minnesota"
}
//API 
data1 = {
	"cod": "200",
	"message": 0,
	"cnt": 40,
	"list": [
		{
			"dt": 1690318800,
			"main": {
				"temp": 307.11,
				"feels_like": 307.79,
				"temp_min": 307.11,
				"temp_max": 308.94,
				"pressure": 1012,
				"sea_level": 1012,
				"grnd_level": 982,
				"humidity": 37,
				"temp_kf": -1.83
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 54
			},
			"wind": {
				"speed": 5.16,
				"deg": 168,
				"gust": 5.66
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-25 21:00:00"
		},
		{
			"dt": 1690329600,
			"main": {
				"temp": 306.32,
				"feels_like": 306.19,
				"temp_min": 306.32,
				"temp_max": 306.38,
				"pressure": 1010,
				"sea_level": 1010,
				"grnd_level": 981,
				"humidity": 35,
				"temp_kf": -0.06
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 73
			},
			"wind": {
				"speed": 4.72,
				"deg": 177,
				"gust": 5.65
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-26 00:00:00"
		},
		{
			"dt": 1690340400,
			"main": {
				"temp": 300.5,
				"feels_like": 300.98,
				"temp_min": 300.5,
				"temp_max": 300.5,
				"pressure": 1008,
				"sea_level": 1008,
				"grnd_level": 980,
				"humidity": 51,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 51
			},
			"wind": {
				"speed": 2.89,
				"deg": 173,
				"gust": 7.82
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2023-07-26 03:00:00"
		},
		{
			"dt": 1690351200,
			"main": {
				"temp": 297.19,
				"feels_like": 297.14,
				"temp_min": 297.19,
				"temp_max": 297.19,
				"pressure": 1008,
				"sea_level": 1008,
				"grnd_level": 979,
				"humidity": 57,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 61
			},
			"wind": {
				"speed": 2,
				"deg": 154,
				"gust": 5.61
			},
			"visibility": 10000,
			"pop": 0.21,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2023-07-26 06:00:00"
		},
		{
			"dt": 1690362000,
			"main": {
				"temp": 293.84,
				"feels_like": 294.37,
				"temp_min": 293.84,
				"temp_max": 293.84,
				"pressure": 1008,
				"sea_level": 1008,
				"grnd_level": 978,
				"humidity": 92,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 1.24,
				"deg": 182,
				"gust": 6.32
			},
			"visibility": 6149,
			"pop": 1,
			"rain": {
				"3h": 2.77
			},
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2023-07-26 09:00:00"
		},
		{
			"dt": 1690372800,
			"main": {
				"temp": 293.68,
				"feels_like": 294.14,
				"temp_min": 293.68,
				"temp_max": 293.68,
				"pressure": 1007,
				"sea_level": 1007,
				"grnd_level": 978,
				"humidity": 90,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 0.25,
				"deg": 204,
				"gust": 1.09
			},
			"visibility": 10000,
			"pop": 1,
			"rain": {
				"3h": 1.02
			},
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-26 12:00:00"
		},
		{
			"dt": 1690383600,
			"main": {
				"temp": 298.93,
				"feels_like": 299.23,
				"temp_min": 298.93,
				"temp_max": 298.93,
				"pressure": 1007,
				"sea_level": 1007,
				"grnd_level": 979,
				"humidity": 64,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				}
			],
			"clouds": {
				"all": 10
			},
			"wind": {
				"speed": 1.94,
				"deg": 356,
				"gust": 2.89
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-26 15:00:00"
		},
		{
			"dt": 1690394400,
			"main": {
				"temp": 305.26,
				"feels_like": 305.77,
				"temp_min": 305.26,
				"temp_max": 305.26,
				"pressure": 1007,
				"sea_level": 1007,
				"grnd_level": 979,
				"humidity": 41,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				}
			],
			"clouds": {
				"all": 6
			},
			"wind": {
				"speed": 1.94,
				"deg": 28,
				"gust": 3.94
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-26 18:00:00"
		},
		{
			"dt": 1690405200,
			"main": {
				"temp": 309.28,
				"feels_like": 309.03,
				"temp_min": 309.28,
				"temp_max": 309.28,
				"pressure": 1007,
				"sea_level": 1007,
				"grnd_level": 979,
				"humidity": 28,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 801,
					"main": "Clouds",
					"description": "few clouds",
					"icon": "02d"
				}
			],
			"clouds": {
				"all": 11
			},
			"wind": {
				"speed": 0.79,
				"deg": 294,
				"gust": 5.01
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-26 21:00:00"
		},
		{
			"dt": 1690416000,
			"main": {
				"temp": 308.41,
				"feels_like": 307.59,
				"temp_min": 308.41,
				"temp_max": 308.41,
				"pressure": 1006,
				"sea_level": 1006,
				"grnd_level": 978,
				"humidity": 27,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				}
			],
			"clouds": {
				"all": 8
			},
			"wind": {
				"speed": 0.9,
				"deg": 22,
				"gust": 2.54
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-27 00:00:00"
		},
		{
			"dt": 1690426800,
			"main": {
				"temp": 301.66,
				"feels_like": 302.41,
				"temp_min": 301.66,
				"temp_max": 301.66,
				"pressure": 1008,
				"sea_level": 1008,
				"grnd_level": 979,
				"humidity": 52,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				}
			],
			"clouds": {
				"all": 0
			},
			"wind": {
				"speed": 3.15,
				"deg": 140,
				"gust": 8.07
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2023-07-27 03:00:00"
		},
		{
			"dt": 1690437600,
			"main": {
				"temp": 298.97,
				"feels_like": 299.17,
				"temp_min": 298.97,
				"temp_max": 298.97,
				"pressure": 1010,
				"sea_level": 1010,
				"grnd_level": 981,
				"humidity": 60,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 801,
					"main": "Clouds",
					"description": "few clouds",
					"icon": "02n"
				}
			],
			"clouds": {
				"all": 11
			},
			"wind": {
				"speed": 1.77,
				"deg": 153,
				"gust": 5.08
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2023-07-27 06:00:00"
		},
		{
			"dt": 1690448400,
			"main": {
				"temp": 297.31,
				"feels_like": 297.48,
				"temp_min": 297.31,
				"temp_max": 297.31,
				"pressure": 1009,
				"sea_level": 1009,
				"grnd_level": 980,
				"humidity": 65,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 64
			},
			"wind": {
				"speed": 2.4,
				"deg": 176,
				"gust": 5.93
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2023-07-27 09:00:00"
		},
		{
			"dt": 1690459200,
			"main": {
				"temp": 297.1,
				"feels_like": 297.3,
				"temp_min": 297.1,
				"temp_max": 297.1,
				"pressure": 1010,
				"sea_level": 1010,
				"grnd_level": 981,
				"humidity": 67,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 802,
					"main": "Clouds",
					"description": "scattered clouds",
					"icon": "03d"
				}
			],
			"clouds": {
				"all": 34
			},
			"wind": {
				"speed": 2.54,
				"deg": 177,
				"gust": 7.53
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-27 12:00:00"
		},
		{
			"dt": 1690470000,
			"main": {
				"temp": 304.49,
				"feels_like": 304.83,
				"temp_min": 304.49,
				"temp_max": 304.49,
				"pressure": 1009,
				"sea_level": 1009,
				"grnd_level": 981,
				"humidity": 42,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				}
			],
			"clouds": {
				"all": 4
			},
			"wind": {
				"speed": 4.33,
				"deg": 188,
				"gust": 7.33
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-27 15:00:00"
		},
		{
			"dt": 1690480800,
			"main": {
				"temp": 310.73,
				"feels_like": 310.17,
				"temp_min": 310.73,
				"temp_max": 310.73,
				"pressure": 1008,
				"sea_level": 1008,
				"grnd_level": 981,
				"humidity": 24,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 801,
					"main": "Clouds",
					"description": "few clouds",
					"icon": "02d"
				}
			],
			"clouds": {
				"all": 14
			},
			"wind": {
				"speed": 4.59,
				"deg": 210,
				"gust": 7.38
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-27 18:00:00"
		},
		{
			"dt": 1690491600,
			"main": {
				"temp": 311.44,
				"feels_like": 312.1,
				"temp_min": 311.44,
				"temp_max": 311.44,
				"pressure": 1008,
				"sea_level": 1008,
				"grnd_level": 980,
				"humidity": 27,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 4.73,
				"deg": 246,
				"gust": 7.67
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-27 21:00:00"
		},
		{
			"dt": 1690502400,
			"main": {
				"temp": 297.03,
				"feels_like": 297.56,
				"temp_min": 297.03,
				"temp_max": 297.03,
				"pressure": 1009,
				"sea_level": 1009,
				"grnd_level": 980,
				"humidity": 80,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 501,
					"main": "Rain",
					"description": "moderate rain",
					"icon": "10d"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 2.18,
				"deg": 42,
				"gust": 5.1
			},
			"visibility": 10000,
			"pop": 0.4,
			"rain": {
				"3h": 3.51
			},
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-28 00:00:00"
		},
		{
			"dt": 1690513200,
			"main": {
				"temp": 298.25,
				"feels_like": 298.38,
				"temp_min": 298.25,
				"temp_max": 298.25,
				"pressure": 1009,
				"sea_level": 1009,
				"grnd_level": 980,
				"humidity": 60,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n"
				}
			],
			"clouds": {
				"all": 34
			},
			"wind": {
				"speed": 2.2,
				"deg": 159,
				"gust": 4.4
			},
			"visibility": 10000,
			"pop": 0.28,
			"rain": {
				"3h": 0.15
			},
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2023-07-28 03:00:00"
		},
		{
			"dt": 1690524000,
			"main": {
				"temp": 296.72,
				"feels_like": 296.88,
				"temp_min": 296.72,
				"temp_max": 296.72,
				"pressure": 1012,
				"sea_level": 1012,
				"grnd_level": 983,
				"humidity": 67,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 801,
					"main": "Clouds",
					"description": "few clouds",
					"icon": "02n"
				}
			],
			"clouds": {
				"all": 17
			},
			"wind": {
				"speed": 1.69,
				"deg": 338,
				"gust": 2.59
			},
			"visibility": 10000,
			"pop": 0.46,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2023-07-28 06:00:00"
		},
		{
			"dt": 1690534800,
			"main": {
				"temp": 293.83,
				"feels_like": 294.12,
				"temp_min": 293.83,
				"temp_max": 293.83,
				"pressure": 1011,
				"sea_level": 1011,
				"grnd_level": 982,
				"humidity": 83,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n"
				}
			],
			"clouds": {
				"all": 16
			},
			"wind": {
				"speed": 3.74,
				"deg": 354,
				"gust": 8.64
			},
			"visibility": 10000,
			"pop": 0.36,
			"rain": {
				"3h": 0.35
			},
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2023-07-28 09:00:00"
		},
		{
			"dt": 1690545600,
			"main": {
				"temp": 293.86,
				"feels_like": 293.87,
				"temp_min": 293.86,
				"temp_max": 293.86,
				"pressure": 1013,
				"sea_level": 1013,
				"grnd_level": 983,
				"humidity": 72,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 802,
					"main": "Clouds",
					"description": "scattered clouds",
					"icon": "03d"
				}
			],
			"clouds": {
				"all": 46
			},
			"wind": {
				"speed": 3.51,
				"deg": 33,
				"gust": 11.83
			},
			"visibility": 10000,
			"pop": 0.17,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-28 12:00:00"
		},
		{
			"dt": 1690556400,
			"main": {
				"temp": 297.55,
				"feels_like": 297.33,
				"temp_min": 297.55,
				"temp_max": 297.55,
				"pressure": 1015,
				"sea_level": 1015,
				"grnd_level": 986,
				"humidity": 49,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d"
				}
			],
			"clouds": {
				"all": 98
			},
			"wind": {
				"speed": 4.6,
				"deg": 41,
				"gust": 8.07
			},
			"visibility": 10000,
			"pop": 0.45,
			"rain": {
				"3h": 0.37
			},
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-28 15:00:00"
		},
		{
			"dt": 1690567200,
			"main": {
				"temp": 303.35,
				"feels_like": 301.95,
				"temp_min": 303.35,
				"temp_max": 303.35,
				"pressure": 1015,
				"sea_level": 1015,
				"grnd_level": 987,
				"humidity": 28,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 92
			},
			"wind": {
				"speed": 2.31,
				"deg": 56,
				"gust": 4.22
			},
			"visibility": 10000,
			"pop": 0.08,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-28 18:00:00"
		},
		{
			"dt": 1690578000,
			"main": {
				"temp": 306.93,
				"feels_like": 304.88,
				"temp_min": 306.93,
				"temp_max": 306.93,
				"pressure": 1014,
				"sea_level": 1014,
				"grnd_level": 985,
				"humidity": 20,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 802,
					"main": "Clouds",
					"description": "scattered clouds",
					"icon": "03d"
				}
			],
			"clouds": {
				"all": 42
			},
			"wind": {
				"speed": 2.88,
				"deg": 12,
				"gust": 4.22
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-28 21:00:00"
		},
		{
			"dt": 1690588800,
			"main": {
				"temp": 303.53,
				"feels_like": 301.98,
				"temp_min": 303.53,
				"temp_max": 303.53,
				"pressure": 1014,
				"sea_level": 1014,
				"grnd_level": 986,
				"humidity": 26,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 69
			},
			"wind": {
				"speed": 5.13,
				"deg": 0,
				"gust": 6.67
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-29 00:00:00"
		},
		{
			"dt": 1690599600,
			"main": {
				"temp": 297.08,
				"feels_like": 296.42,
				"temp_min": 297.08,
				"temp_max": 297.08,
				"pressure": 1017,
				"sea_level": 1017,
				"grnd_level": 987,
				"humidity": 34,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 801,
					"main": "Clouds",
					"description": "few clouds",
					"icon": "02n"
				}
			],
			"clouds": {
				"all": 15
			},
			"wind": {
				"speed": 5.44,
				"deg": 13,
				"gust": 11.09
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2023-07-29 03:00:00"
		},
		{
			"dt": 1690610400,
			"main": {
				"temp": 293.33,
				"feels_like": 292.68,
				"temp_min": 293.33,
				"temp_max": 293.33,
				"pressure": 1019,
				"sea_level": 1019,
				"grnd_level": 990,
				"humidity": 49,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				}
			],
			"clouds": {
				"all": 8
			},
			"wind": {
				"speed": 4.1,
				"deg": 34,
				"gust": 9.87
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2023-07-29 06:00:00"
		},
		{
			"dt": 1690621200,
			"main": {
				"temp": 290.46,
				"feels_like": 289.81,
				"temp_min": 290.46,
				"temp_max": 290.46,
				"pressure": 1020,
				"sea_level": 1020,
				"grnd_level": 990,
				"humidity": 60,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				}
			],
			"clouds": {
				"all": 0
			},
			"wind": {
				"speed": 2.91,
				"deg": 46,
				"gust": 6.49
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2023-07-29 09:00:00"
		},
		{
			"dt": 1690632000,
			"main": {
				"temp": 288.78,
				"feels_like": 288.17,
				"temp_min": 288.78,
				"temp_max": 288.78,
				"pressure": 1021,
				"sea_level": 1021,
				"grnd_level": 991,
				"humidity": 68,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				}
			],
			"clouds": {
				"all": 0
			},
			"wind": {
				"speed": 3.38,
				"deg": 23,
				"gust": 6.11
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-29 12:00:00"
		},
		{
			"dt": 1690642800,
			"main": {
				"temp": 294.34,
				"feels_like": 293.74,
				"temp_min": 294.34,
				"temp_max": 294.34,
				"pressure": 1021,
				"sea_level": 1021,
				"grnd_level": 992,
				"humidity": 47,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				}
			],
			"clouds": {
				"all": 3
			},
			"wind": {
				"speed": 3.47,
				"deg": 35,
				"gust": 4.73
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-29 15:00:00"
		},
		{
			"dt": 1690653600,
			"main": {
				"temp": 299.69,
				"feels_like": 299.69,
				"temp_min": 299.69,
				"temp_max": 299.69,
				"pressure": 1020,
				"sea_level": 1020,
				"grnd_level": 991,
				"humidity": 27,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 51
			},
			"wind": {
				"speed": 2.59,
				"deg": 34,
				"gust": 3.34
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-29 18:00:00"
		},
		{
			"dt": 1690664400,
			"main": {
				"temp": 302.29,
				"feels_like": 300.74,
				"temp_min": 302.29,
				"temp_max": 302.29,
				"pressure": 1018,
				"sea_level": 1018,
				"grnd_level": 990,
				"humidity": 21,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 69
			},
			"wind": {
				"speed": 1.21,
				"deg": 15,
				"gust": 2.55
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-29 21:00:00"
		},
		{
			"dt": 1690675200,
			"main": {
				"temp": 301.91,
				"feels_like": 300.49,
				"temp_min": 301.91,
				"temp_max": 301.91,
				"pressure": 1017,
				"sea_level": 1017,
				"grnd_level": 989,
				"humidity": 22,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 84
			},
			"wind": {
				"speed": 0.25,
				"deg": 48,
				"gust": 1.93
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-30 00:00:00"
		},
		{
			"dt": 1690686000,
			"main": {
				"temp": 295.72,
				"feels_like": 294.95,
				"temp_min": 295.72,
				"temp_max": 295.72,
				"pressure": 1019,
				"sea_level": 1019,
				"grnd_level": 989,
				"humidity": 35,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				}
			],
			"clouds": {
				"all": 2
			},
			"wind": {
				"speed": 1.8,
				"deg": 89,
				"gust": 2.64
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2023-07-30 03:00:00"
		},
		{
			"dt": 1690696800,
			"main": {
				"temp": 293.77,
				"feels_like": 292.93,
				"temp_min": 293.77,
				"temp_max": 293.77,
				"pressure": 1019,
				"sea_level": 1019,
				"grnd_level": 989,
				"humidity": 40,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				}
			],
			"clouds": {
				"all": 1
			},
			"wind": {
				"speed": 1.66,
				"deg": 121,
				"gust": 2.37
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2023-07-30 06:00:00"
		},
		{
			"dt": 1690707600,
			"main": {
				"temp": 291.9,
				"feels_like": 290.98,
				"temp_min": 291.9,
				"temp_max": 291.9,
				"pressure": 1019,
				"sea_level": 1019,
				"grnd_level": 989,
				"humidity": 44,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 801,
					"main": "Clouds",
					"description": "few clouds",
					"icon": "02n"
				}
			],
			"clouds": {
				"all": 17
			},
			"wind": {
				"speed": 1.67,
				"deg": 131,
				"gust": 3.55
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2023-07-30 09:00:00"
		},
		{
			"dt": 1690718400,
			"main": {
				"temp": 292.86,
				"feels_like": 291.96,
				"temp_min": 292.86,
				"temp_max": 292.86,
				"pressure": 1018,
				"sea_level": 1018,
				"grnd_level": 989,
				"humidity": 41,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 54
			},
			"wind": {
				"speed": 2.21,
				"deg": 138,
				"gust": 4.55
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-30 12:00:00"
		},
		{
			"dt": 1690729200,
			"main": {
				"temp": 295.79,
				"feels_like": 295.02,
				"temp_min": 295.79,
				"temp_max": 295.79,
				"pressure": 1019,
				"sea_level": 1019,
				"grnd_level": 990,
				"humidity": 35,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 1.7,
				"deg": 169,
				"gust": 3.01
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-30 15:00:00"
		},
		{
			"dt": 1690740000,
			"main": {
				"temp": 300.02,
				"feels_like": 299.41,
				"temp_min": 300.02,
				"temp_max": 300.02,
				"pressure": 1017,
				"sea_level": 1017,
				"grnd_level": 988,
				"humidity": 28,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 1.93,
				"deg": 148,
				"gust": 4.04
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2023-07-30 18:00:00"
		}
	],
	"city": {
		"id": 5037649,
		"name": "Minneapolis",
		"coord": {
			"lat": 44.9773,
			"lon": -93.2655
		},
		"country": "US",
		"population": 382578,
		"timezone": -18000,
		"sunrise": 1690282223,
		"sunset": 1690336108
	}
}

// console.log("8: ");
// console.log(data1.list[8].dt_txt);
// console.log(data1.list[8].main.temp);
// console.log(data1.list[8].main.temp_min);
// console.log(data1.list[8].main.temp_max);
// console.log(data1.list[8].wind.speed);
// console.log(data1.list[8].main.humidity);      

console.log(data1.list[0].weather[0].icon);
iconid =data1.list[0].weather[0].icon
let urlicon = `https://openweathermap.org/img/wn/${iconid}`;
  $('#date1').val(urlicon)

// for(i=0;i<41; i+=8 ){
//   console.log("This is: "+i);
//    console.log(data1.list[i].dt_txt);
//   console.log(data1.list[i].main.temp);
//   console.log(data1.list[i].weather.icon);
  // $('#date1').val(data1.list[i].weather.icon)
  // console.log(data1.list[i].main.temp_min);
  // console.log(data1.list[i].main.temp_max);
  // console.log(data1.list[i].wind.speed);
  // console.log(data1.list[i].main.humidity);   
// }

// below grabs temp
// data1.list[0].main.temp 



// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

