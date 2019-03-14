const logo = document.querySelector("#logo");
const logoText = logo.querySelector("h2");
logo.onmouseover = () => logoText.innerHTML = "alexander j albright";
logo.onmouseout = () => logoText.innerHTML = "alexanderjalbright";

const display = (a,b) => {
    a.style.display = b;
}

const navShow = document.querySelector("#nav-show");
const navHide = document.querySelector("#nav-hide");
const nav = document.querySelector("nav");
const dropdowns = document.querySelectorAll(".dropdown");
const sections = document.querySelectorAll("section");
const main = document.querySelector("main");

navShow.onclick = () => {
    // navShow.style.display = "none";
    // navHide.style.display = "block";
    display(navShow, "none");
    display(navHide, "block");
    nav.style.width = "10px";
    // dropdowns.forEach(dropdown => dropdown.style.display = "none");
    // logo.style.display = "none";
    dropdowns.forEach(dropdown => display(dropdown, "none"));
    display(logo, "none");
    sections.forEach(section => {
        section.style.margin = "0 auto";
        section.style.height = "100vh";
    });
    main.style.height = "100vh";
    main.style.marginTop = "0";
}

navHide.onclick = () => {
    // navHide.style.display = "none";
    // navShow.style.display = "block";
    display(navHide, "none");
    display(navShow, "block");
    nav.style.width = "100vw";
    // dropdowns.forEach(item => item.style.display = "block");
    // logo.style.display = "block";
    dropdowns.forEach(item => display(item, "block"));
    display(logo, "block");
    sections.forEach(section => {
        section.style.margin = "0 auto 18vh auto";
        section.style.height = "82vh";
    });
    main.style.height = "92vh";
    main.style.marginTop = "var(--nav-height)";
}


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

