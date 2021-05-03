let requestURLApt = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=rental apartments by Creighton Unviersity&key=AIzaSyDuUBtuZWFkTeuxwGMYrCXPYdCoM8J2lcM&location=41.265331,-95.949364&radius=500"


var marker
var infowindow
var currentLat, currentLong
var apartments = []
var infoApartments = []


function onXHRLoadGoogle() {
    let message = ""
    
    // 'this' is another name for the object returned from the API call
    let apiDataApt = JSON.parse(this.responseText)

    for (i = 0; i < apiDataApt.results.length; i++)
        apartments[i] = {"description": apiDataApt.results[i].name, "lat": apiDataApt.results[i].geometry.location.lat, "lng": apiDataApt.results[i].geometry.location.lng, "address": apiDataApt.results[i].formatted_address}
    console.log(apartments[0].description)
}




function callAPIGoogle(URL) {
    var xhttp = new XMLHttpRequest();
    
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
    xhttp.open('GET', 'https://cors.bridged.cc/' + requestURLApt)
    
    // if you DON'T need cors use this code:
    //xhttp.open('GET',URL)
    
    /* Headers */
    // if you need to set the returned data type, use this line of code: 
    //xhttp.setRequestHeader('Content-Type', 'application/json')
    
    // if you need authorization token (stored in myToken) use this line of code: 
    // xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)
    
    // if you need a key and it's not in the url use code in one of the following
    // examples (think of headers as parameters)
    // or just use the Postman url which has all the parameters already added like I did here. 

    // make the API request
    xhttp.addEventListener('load', onXHRLoadGoogle)
    xhttp.send()
}


//call API 
window.onload = function() {
    callAPIGoogle(requestURLApt)
}


btnCL4.onclick = function() {
// description is what will show in Info window
  for (i = 0; i < apartments.length; i++)
    infoApartments[i] = {
      "description": apartments[i].description + "<br>" + apartments[i].address,
      "lat": apartments[i].lat,
      "lng": apartments[i].lng
    }
  LoadMap();
}




// make the map with markers
function LoadMap() {
  var mapOptions = {
    center: new google.maps.LatLng(infoApartments[0].lat, infoApartments[0].lng),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);
  //Create and open InfoWindow.
  var infoWindow = new google.maps.InfoWindow();
  var data
  var myLatlng
  for ( i = 0; i < infoApartments.length; i++) {
    data = infoApartments[i];
    myLatlng = new google.maps.LatLng(data.lat, data.lng);
    marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: data.description
    });
    //Attach click event to the marker.
    (function(marker, data) {
      google.maps.event.addListener(marker, "click", function(e) {
        //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
        infoWindow.setContent("<div style = 'width:150px;min-height:35px'>" + data.description + "</div>");
        infoWindow.open(map, marker);
      });
    })(marker, data);
  }
}




btnHomeMap.onclick=function(){
  ChangeForm(home)
}
