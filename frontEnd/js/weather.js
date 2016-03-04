$(document).ready(function () {
    if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        loadWeather(position.coords.latitude + ',' + position.coords.longitude);
    });
        
    } else {
        loadWeather("Kolkata, IN", "");
    }
});

function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'c',
        success: function (weather) {
            city = weather.city;
            temp = weather.temp + '&deg;';
            wcode = '<img class="weathericon" src="images/weathericons/' + weather.code + '.svg">';
            wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
            humidity = weather.humidity + ' %';
            alert("made it");
            $(".location").text(city);
            $(".temperature").html(temp);
            $(".climate_bg").html(wcode);
            $(".windspeed").html(wind);
            $(".humidity").text(humidity);
        },
        
        error: function (error) {
            alert("error:\n" + error);
        }
    });
}

document.getElementById("time").innerHTML = Date();