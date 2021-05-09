
var openWeather = "b495bcbac3159b21ad63450316b7b7e2";

/*var weatherData = {
  base: "stations",
  clouds: {
    all: 1
  },
  coord: {
    lat: 43.65,
    lon: -79.38
  },
  dt: 1508887542971,
  id: 6167863,
  main: {
    humidity: 77,
    pressure: 1014,
    temp: 17.99,
    temp_max: 20,
    temp_min: 16
  },
  name: 'Downtown Toronto',
  sys: {
    type: 1,
    id: 2117,
    message: 0.0041,
    country: 'CA',
    sunrise: 1507548290,
    sunset: 1507589027,
    type: 1
  },
  visibility: 16093,
  weather: [
    {
      description: 'clear sky',
      icon: '01n',
      id: 800,
      main: "Clear"
    }
  ],
  wind: {
    deg: 170,
    speed: 1.5
  }

};

*/
$(function(){


  $('header .img').animate({right: '30px'});

  $('form').hide().slideDown(400);
  $('form input').on('focus', function(){

      $(this).css('border', 'none');


  });

  if ( $(window).width() > 739) {

    $('header  .h1 h1').hide().animate({height: '100%'}).animate({width:'50%'}).show(500).fadeIn(500);

    $('header  .h1 .img').animate({height: '10%'}).animate({width:'10%'}).show(500).fadeIn(500);
    //Add your javascript for large screens here
  }
  else {

    $('header  .h1 h1').hide().animate({height: '100%'}).animate({width:'50%'}).show(500).fadeIn(500);

    $('header  .h1 .img').animate({height: '20%'}).animate({width:'20%'}).show(500).fadeIn(500);
  }

  

  $('form').click( function(){

      $('input').css('background-color', '#D3D3D3');
      $('header ').css({"-webkit-filter": "blur(5px)",
        "-moz-filter": "blur(5px)",
        "-o-filter": "blur(5px)",
        "-ms-filter": "blur(5px)",
        "filter":" blur(5px)",

        " -webkit-transition":" all 0.2s linear",
        "-moz-transition": "all 0.2s linear",
        "-ms-transition": "all 0.2s linear",
         "-o-transition": "all 0.2s linear",
        "transition": "all 0.2s linear",

        "-webkit-transition-delay": "0.2s",
          "transition-delay": "0.2s"});



  });


  $('#result').hide();

  $('form').on('submit', function(event) {

      event.preventDefault();

      //$('footer').hide().fadeIn(2000);
      $('.search').slideUp(1000);

      var searchValue = $('#search-Value').val();



      $('#result').delay().animate({height: '100%'}).animate({width: '100%'}).show(2000);


      $('#button12').fadeIn(1000);



      addWeather(openWeather, searchValue);



  });




  $('#button12').on('click', showSearchBarAndResult);

  function showSearchBarAndResult() {

      $('#result').slideUp(1000);
      $('.search').delay(100).slideDown(1000);


    };
});

function addWeather(openWeather, searchValue){

  $.get('https://api.openweathermap.org/data/2.5/weather?units=metric&q='+ searchValue + '&appid=b495bcbac3159b21ad63450316b7b7e2', function(openWeather) {

    var date = new Date(openWeather.dt * 1000);

    var descriptionData = "<h3 class = 'des'>  " + openWeather.weather[0].description + "</h3>";

    var resultData = "<div class = 'desAndDt' >" + "<h3 class = 'name' >"+ openWeather.name + "," +  openWeather.sys.country + "</h3>" + "<h3 class = 'dt' >"  + date.getDate()+ "-"
    + date.getMonth() + "-"+ date.getFullYear() + "</h3>"+ "</div>";

    resultData += "<div class = tempAndPress>" + "<h3 class= 'press'> Pressure : " + openWeather.main.pressure + "</h3>"+ "<h3 class = temp> "+ "Temperature : "+openWeather.main.temp + " Celsius </h3>" + "<h3 class= 'humid'> Humidity : " + openWeather.main.humidity + "%</h3>" + "</div>";




    if(openWeather.weather[0].description === "few clouds"){

      resultData += "<div id = imgAndDes>"+"<img class = 'weatherImage' src = './png/scattered.png' >"+ descriptionData + "</div>";


    }else if((openWeather.weather[0].description === "broken clouds" )||(openWeather.weather[0].description === "overcast clouds" )){

      resultData += "<div id = imgAndDes>"+"<img class = 'weatherImage' src = './png/broken.png' >"+ descriptionData + "</div>";


    }else if((openWeather.weather[0].description === "rain") ||(openWeather.weather[0].description === "moderate rain")){

      resultData += "<div id = imgAndDes>"+"<img class = 'weatherImage' src = './png/rain.png' >"+ descriptionData + "<img class = 'umbrellaImage' src = 'umbrella.png' >"+ "<h3>"+"Make sure to bring umbrella with you! "+"</h3>"+"</div>";


    }else if(openWeather.weather[0].description === "thunderstorm"){

      resultData += "<div id = imgAndDes>"+"<img class = 'weatherImage' src = './png/thunderstorm.png' >"+ descriptionData + "</div>";


    }else if(openWeather.weather[0].description === "snow"){

      resultData += "<div id = imgAndDes>"+"<img class = 'weatherImage' src = './png/snow.png' >"+ descriptionData + "</div>";


    }else if((openWeather.weather[0].description === "mist") || (openWeather.weather[0].description === "smoke" )|| (openWeather.weather[0].description === "haze") || (openWeather.weather[0].description ==="light smoke" )){

      resultData += "<div id = imgAndDes>"+"<img class = 'weatherImage' src = './png/mist.png' >"+ descriptionData + "</div>";


    }else if(openWeather.weather[0].description === "scattered clouds"){

      resultData += "<div id = imgAndDes>" + "<img class = 'weatherImage' src = './png/scattered.png' >" + descriptionData + "</div>";


    }else if(openWeather.weather[0].description === "clear sky"){

      resultData += "<div id = imgAndDes>"+"<img class = 'weatherImage' src = './png/night.png' >"+ descriptionData + "</div>";


    }else if(openWeather.weather[0].description === "light rain"){

      resultData += "<div id = imgAndDes>"+"<img class = 'weatherImage' src = './png/drop.png' >"+ descriptionData +"<img class = 'umbrellaImage' src = 'umbrella.png' >"+ "<h3>"+"Make sure to bring umbrella with you! "+"</h3>"+"</div>";


    }else{

      resultData += descriptionData;

    }



      resultData += "<div class = 'visiAndSpeed'>" + "<h3 class = 'visi' > Visibility : " + openWeather.visibility + " </h3>" + "<h3 class = 'speed'> Wind Speed : " + openWeather.wind.speed + " </h3>" + "</div>";



    $('#result').html(resultData);

  });


/*var resultData = '';

  for (var key in weatherData){
       var nextVal = weatherData[key];
       resultData += "<p>"+key + ":" + nextVal + "</p>";

}


      $('#result').html(resultData);
}
*/
    //var resultData = "<h1> " + openWeather.name +"</h1>";
    //resultData += "<h3> Temperature : " + weatherData.main.temp + " Celsius </h3>"



}
