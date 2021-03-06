const logo = document.querySelector("#logo");
// const logoText = logo.querySelector("h2");
// logo.onmouseover = () => logoText.innerHTML = "alexander j albright";
// logo.onmouseout = () => logoText.innerHTML = "alexanderjalbright";

const display = (a,b) => {
    a.style.display = b;
}

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const content = dropdown.querySelector(".content");
    // dropdown.onmouseover = () => content.style.display = "block"; 
    // dropdown.onmouseout = () => content.style.display = "none";
    dropdown.onmouseover = () => display(content, "block"); 
    dropdown.onmouseout = () => display(content, "none");
});

const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");

rightArrow.onclick = () => {
    const projects = document.querySelectorAll(".project");
    const myProjects = projects[0].parentNode;
    const movingProject = projects[0];
    projects[0].remove();
    rightArrow.remove();
    myProjects.appendChild(movingProject);
    myProjects.appendChild(rightArrow);
}

leftArrow.onclick = () => {
    const projects = document.querySelectorAll(".project");
    const myProjects = projects[2].parentNode;
    const movingProject = projects[2];
    projects[2].remove();
    myProjects.insertBefore(movingProject,projects[0]);
}

const modal = document.querySelector("#modal");
const close = document.querySelector("#close");
logo.onclick = () => display(modal, "block");
close.onclick = () => display(modal, "none");
window.onclick = (event) => {
    if (event.target == modal) {
      display(modal,"none");
    }
}


const showSkills = document.querySelectorAll(".show-skill");
showSkills.forEach(function(showSkill){
    const description = showSkill.parentNode;
    const article = description.parentNode;
    const skill = article.querySelector(".skill");
    
    showSkill.onclick = () => {
        if(skill.style.display === "" || skill.style.display === "none"){
            display(skill, "block")
            showSkill.innerHTML = "less";
        }
        else{
            display(skill, "none");
            showSkill.innerHTML = "more";
        }
    };  
});
