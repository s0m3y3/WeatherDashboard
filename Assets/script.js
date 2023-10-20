let cityname, latitude, longitude = "";
let APIkey = "40c69ea1d7b0101e5044f901e840aebc";
const { saveToLocalStorage, displaySearchHistory } = require('./searchedHistory');

//converts kelvin to fahrenheit, then rounds to whole number
function kelvin2fahrenheit (kelvin){return(Math.round((kelvin-273.15)*9/5+32))}; 
// Capitalize the first letter of each "word." This is for ease of user reading. 
function capitalizeWords(text) {
  // Split the text into words
  const words = text.toLowerCase().split(' ');
  const capitalizedWords = words.map(word => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
  });
  // Join the capitalized words back together
  const result = capitalizedWords.join(' ');
  return result;
}

function getweatherforcast(){
  if(cityname != ""){ //if cityinput is not blank, run get lat/lon of city name.
    cityname = capitalizeWords(cityname);
  let geocodingAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${APIkey}`;

  fetch(geocodingAPI)
    .then(function (response) {
    return response.json();
    })
    .then(function(data){
      if (data==""){
        alert("No city found. Please try again.")
      }
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
   
    //adds searched cityname into hmtl.
    $('#city_display').text(cityname);
  for(i=0;i<41; i+=7 ){ // i+=7, API data updates every 3hrs. i=7, so i*3= 21hrs + base3hr = 24hrs. Aka will work for this situation of searching 5 days. This is not an ideal solution, but temporarily.  
    index = i/7;
    //delete existing forcast data.
    $(`#dateforcast${i / 7}`).empty();
    //set date into html, in format "Januaray 01"
    $('#date'+index).text(dayjs(data.list[i].dt_txt).format('MMMM DD'));
    //insert weather icon from API into html
    iconid =data.list[i].weather[0].icon
    let urlicon = `https://openweathermap.org/img/wn/${iconid}.png`;
    //below insert the data into html.
    $('#dateforcast'+index).append(`<img src='${urlicon}'>`);
    $('#dateforcast'+index).append("<p> Temp: "+kelvin2fahrenheit(data.list[i].main.temp_min)+"F </p>");    
    $('#dateforcast'+index).append("<p> Wind: "+data.list[i].wind.speed+" MPH </p>");
    $('#dateforcast'+index).append("<p> Humidity: "+data.list[i].main.humidity+" % </p>");
    }
  })
};

displaySearchHistory();
cityname = "Minneapolis"; //this is default search. 
getweatherforcast();

//click button for search to find 5-day weather forcase for the inputed city. 
$('.btn-primary').click(function(){
  cityname = $('#cityinput').val();  
  getweatherforcast();
});