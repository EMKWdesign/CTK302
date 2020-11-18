var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var a = 10;
var b = 30;
var c = 35;
var d = 0;
var windspeed = 0;
var humidity = 0;
var temperature = 0;


function setup() {
  createCanvas(400, 400);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Washington,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=4a4db28234637fc4a14ce7ccdb458e4d'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  humidity = weather.main.humidity;
  temperature = weather.main.temp;

}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background('lightBlue');
      fill('white');
      ellipse(315, 80, 75, 75);
      fill('black');
      textSize(20);
      text(weather.name + " Weather:", 100, 230);
      text("Temperature: " + weather.main.temp+"°F", 100, 270);
      text("Humidity: " + weather.main.humidity+ "%", 100, 310);
      text("Windspeed: " + weather.wind.speed + "mph", 100, 350);

//Borrowed cloud and temp gague idea from student example
//Cloud
      var color = 0;
            color = map(humidity, 0, 200, 2, height - 10);

            noStroke();
            fill(color);
            ellipse(a, 100, 60, 50);
            fill(color);
            ellipse(b, 110, 50, 50);
            fill(color);
            ellipse(c, 120, 70, 40);
            fill(color);
            ellipse(d, 115, 90, 50);
            a = a + windspeed / 16;
            if (a > width) a = 0;
            b = b + windspeed / 16;
            if (b > width) b = 0;
            c = c + windspeed / 16;
            if (c > width) c = 0;
            d = d + windspeed / 16;
            if (d > width) d = 0;
//Temp Gague
            fill('black');
            rect(30, height - 50, 40, -300);
            fill('black');
            ellipse(50, 50, 40, 40);
            fill('black');
            ellipse(50, height - 50, 40, 40);
            fill('red');
            ellipse(50, height - 50, 35, 35);

            fill('red');
            var temperature = 0;
            temperature = map(temperature, -10, 200, 5, height - 10);
            rect(32.5, height - 50, 35, -temperature * 3);


      // cloud
    //  fill('white');
    //  noStroke();
    //  ellipse(x, 300, 200, 100);

      // move the cloud's x position
  //    x = x + windspeed;
  //    if (x > width) x = 0;

      break;

  }
}
