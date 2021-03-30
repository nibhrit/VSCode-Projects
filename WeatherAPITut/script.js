
var city = "Abu Dhabi";

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&units=metric&appid=8bd2aac4c2498233a95cd64251a612f8", function(data){
    console.log(data);

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = data.main.temp;
    var weather = data.weather[0].main;
    var country = data.sys.country;
    console.log(icon);

    $('.place').append(city);
    $('.place').append(", "+country);
    $('.icon').attr('src', icon);
    $('.temp').append(temp + " \u00B0C");
    $('.weather').append(weather);
});