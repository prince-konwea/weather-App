$(document).ready(function(){


    var lat;
    var long;


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            
            lat = position.coords.latitude;
            long = position.coords.longitude;

            var api = 'https://fcc-weather-api.glitch.me/api/current?lat='+ lat + '&lon='+ long + " ";
            
            $.getJSON(api,function(res){
                
            })
        })
    }
});