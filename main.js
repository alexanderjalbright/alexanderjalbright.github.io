var logo = document.querySelector(".logo");
var logoText = logo.querySelector("h2");
logo.onmouseover = function(){ logoText.innerHTML = "alexander j albright"};
logo.onmouseout = function(){ logoText.innerHTML = "alexanderjalbright"};

var dropdowns = document.querySelectorAll(".dropdown");
var choices = [];
dropdowns.forEach(function(dropdown){
    choices.push(dropdown.querySelectorAll(".choice"));
    choices.forEach(function(choice){
        dropdown.onmouseover = function(){
            choice.forEach(function(item){
                item.style.display = "block";
            }); 
        }; 
        dropdown.onmouseout = function(){
            choice.forEach(function(item){
                item.style.display = "none";
            });
        };      
    });
});



