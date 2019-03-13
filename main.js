var logo = document.querySelector(".logo");
var logoText = logo.querySelector("h2");
logo.onmouseover = function(){ logoText.innerHTML = "alexander j albright"};
logo.onmouseout = function(){ logoText.innerHTML = "alexanderjalbright"};

var dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(function(dropdown){
    var content = dropdown.querySelector(".content");
    
        dropdown.onmouseover = function(){
            content.style.display = "block";
        }; 
        dropdown.onmouseout = function(){
            content.style.display = "none";
        };
});



