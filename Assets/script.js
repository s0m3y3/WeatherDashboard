let cityname, latitude, longitude = "";
// let cityInput = document.getElementById("cityinput");
// const searchcity = document.getElementById('btn-primary'); 
let APIkey = "40c69ea1d7b0101e5044f901e840aebc";

function kelvin2fahrenheit (kelvin){return(Math.round((kelvin-273.15)*9/5+32))}; //converts kelvin to fahrenheit, then rounds to whole number

function getweatherforcast(){
  if(cityname != ""){ //if cityinput is not blank, run get lat/lon of city name. 
  let geocodingAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${APIkey}`;

  fetch(geocodingAPI)
    .then(function (response) {
    return response.json();
    })
    .then(function(data){
      longitude = data[0].lon;
      latitude = data[0].lat;
	  console.log("longitude: "+longitude+". & latitude: "+latitude)  //delete me.
      if(longitude!="" && latitude!=""){ //check if lon&lat are empty.

		//updates search history list
		console.log("button clicked running");  //delete me
		saveToLocalStorage(cityname);// Save the search query to local storage
		$('.cityinput').val(''); // Clear the search input field
		displaySearchHistory(); // Display the updated search history on the page
		
		setweatherforcast();
		} //using longitude & latitude above, search for weather API for info. 
    })
  }
  else{ //else, if 'city' is empty, and alert user. return function. 
    alert("No city input. Please try again");  //to-do: convert this to modal.
    return;
  }
};

function setweatherforcast (){
  //grabs weather API data. The coordinates are within the function of getweatherforcast. As this function will remain a sub-function. 
  let weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIkey}`;
  fetch(weatherAPI)
    .then(function (response) {
    return response.json();
    })
    .then(function(data){
      console.log(data);

  for(i=0;i<41; i+=7 ){ // i+=7, API data updates every 3hrs. i=7, so i*3= 21hrs + base3hr = 24hrs. Aka will work for this situation of searching 5 days. This is not an ideal solution, but temporarily.  
    index = i/7;
    //set date into html, in format "Januaray 01"
    $('#date'+index).text(dayjs(data.list[i].dt_txt).format('MMMM DD'));
    //insert weather icon from API into html
    iconid =data.list[i].weather[0].icon
    let urlicon = `https://openweathermap.org/img/wn/${iconid}.png`;
	$('#dateforcast'+index).append(`<img src='${urlicon}'>`);
    //first convert temperature, then insert into html
    $('#dateforcast'+index).append("<p> Temp: "+kelvin2fahrenheit(data1.list[i].main.temp_min)+"F </p>");
    //insert wind speed into html
    $('#dateforcast'+index).append("<p> Wind: "+data1.list[i].wind.speed+" MPH </p>");
    //insert humidity into html
    $('#dateforcast'+index).append("<p> Humidity: "+data1.list[i].main.humidity+" % </p>");
    }
  })
};

function saveToLocalStorage(searchQuery) {
    // Get the existing search history from local storage or initialize an empty array
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    searchHistory.push(searchQuery);
    // Limit the search history to a certain number of items (e.g., 5)
    const maxHistoryLength = 8;
    if (searchHistory.length > maxHistoryLength) {
      searchHistory = searchHistory.slice(searchHistory.length - maxHistoryLength);
    }
    // Save the updated search history to local storage
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }

// Function to display the search history on the page
function displaySearchHistory() {
let searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
let historyList = document.getElementById('historyList');
// Clear the existing history list
historyList.innerHTML = '';
// Loop through the search history and create list items to display
for (const query of searchHistory) {
	const listItem = document.createElement('p');
	listItem.textContent = query;
	historyList.appendChild(listItem);
}
}
displaySearchHistory(); 


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

// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with athe city name, the dte, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city