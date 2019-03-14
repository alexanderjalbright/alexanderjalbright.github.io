const logo = document.querySelector("#logo");
const logoText = logo.querySelector("h2");
logo.onmouseover = function(){ logoText.innerHTML = "alexander j albright"};
logo.onmouseout = function(){ logoText.innerHTML = "alexanderjalbright"};

const navShow = document.querySelector("#nav-show");
const navHide = document.querySelector("#nav-hide");
const nav = document.querySelector("nav");
const dropdowns = document.querySelectorAll(".dropdown");
const sections = document.querySelectorAll("section");
const main = document.querySelector("main");

navShow.onclick = function(){
    navShow.style.display = "none";
    navHide.style.display = "block";
    nav.style.width = "10px";
    dropdowns.forEach(function(dropdown){
        dropdown.style.display = "none";
    });
    logo.style.display = "none";
    sections.forEach(function(section){
        section.style.margin = "0 auto";
        section.style.height = "100vh";
    });
    main.style.height = "100vh";
    main.style.marginTop = "0";
}

navHide.onclick = function(){
    navHide.style.display = "none";
    navShow.style.display = "block";
    nav.style.width = "100vw";
    dropdowns.forEach(function(item){
        item.style.display = "block";
    });
    logo.style.display = "block";

    sections.forEach(function(section){
        section.style.margin = "0 auto 18vh auto";
        section.style.height = "82vh";
    });
    main.style.height = "92vh";
    main.style.marginTop = "var(--nav-height)";
}


dropdowns.forEach(function(dropdown){
    const content = dropdown.querySelector(".content");
    dropdown.onmouseover = function(){
        content.style.display = "block";
    }; 
    dropdown.onmouseout = function(){
        content.style.display = "none";
    };
});

const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");



rightArrow.onclick = function(){
    let projects = document.querySelectorAll(".project");
    let myProjects = projects[0].parentNode;
    let movingProject = projects[0];
    projects[0].remove();
    rightArrow.remove();
    myProjects.appendChild(movingProject);
    myProjects.appendChild(rightArrow);
}

leftArrow.onclick = function(){
    let projects = document.querySelectorAll(".project");
    let myProjects = projects[2].parentNode;
    let movingProject = projects[2];
    projects[2].remove();
    myProjects.insertBefore(movingProject,projects[0]);
}

