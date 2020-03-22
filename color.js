function color() {
var elements = document.getElementsByClassName("changecolor");
  for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "red";
    }
};


$(document).ready(function(){
  $("button").click(function(){
    $("p").text("paragraph");
  });
});