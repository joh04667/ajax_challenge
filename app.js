$(function(){

var aGif = {}

function getGif() {
$.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC").done(function(response) {
  var aGif = response.data;
  empty();
   $(".gif").append("<img src=" + aGif.image_url + ">");
   $(".Title").append("<h2>" + aGif.caption + "</h2>");
   $(".Title").append("<h5>URL: " + aGif.url + "</h5>");
 }); // get giphy close
} // getGif close

function getRandomGif() {
  var randomSearch = $("#rsearch").val().replace(/\s/gi, "+");
empty();
 $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + randomSearch).done(function(response) {
   var aGif = response.data;
    $(".rs").append("<img src=" + aGif.image_url + ">");

 });

}

$(".gifbutton").on("click", function(){
getGif();
});

$("#randominput").on("submit", function(event){
event.preventDefault();

getRandomGif();
})


function empty() {
  $(".gif").empty();
  $(".title").empty();
  $(".rs").empty();
}
}); // jquery close
