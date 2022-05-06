// navbar toggle
document.querySelector(".nav-toggle").addEventListener("click", function(){
  document.querySelector(".links").classList.toggle("show-links");
});

// navbar active link
var linkContainer = document.getElementById("links");
var links = linkContainer.getElementsByTagName('a');

for ( i = 0 ; i < links.length ; i++){
  links[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += "active";
  });
};
