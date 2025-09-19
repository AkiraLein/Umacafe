import createRestaurantHomePage from './home';
import createMenuShit from './menu';
import createAboutShit from './about';

function initialLoad() {
    const content = document.querySelector("#content");

    content.appendChild(topnav());
    createRestaurantHomePage();
}

function topnav() {
    //top nav
    const topnav = document.createElement("nav");
    topnav.classList.add('top-nav');

    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    homeBtn.classList.add("homebtn");
    active(homeBtn);
    homeBtn.disabled = false;

    homeBtn.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        active(homeBtn);
        homeBtn.disabled = false;
        setPage(createRestaurantHomePage);
    })

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    menuBtn.classList.add("menubtn");

    menuBtn.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        active(menuBtn);
        menuBtn.disabled = false;
        setPage(createMenuShit);
    })

    const aboutBtn = document.createElement("button");
    aboutBtn.textContent = "About";
    aboutBtn.classList.add("aboutbtn");

    aboutBtn.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        active(aboutBtn);
        aboutBtn.disabled = false;
        setPage(createAboutShit);
    })

    topnav.appendChild(homeBtn);
    topnav.appendChild(menuBtn);
    topnav.appendChild(aboutBtn);

    return topnav;
}

function active(clicked) {
    const buttons = document.querySelectorAll(".homebtn, .menubtn, .aboutbtn");
    
    buttons.forEach((button) => {
        
            button.classList.remove("active");
            button.disabled = false; 
    })
    clicked.classList.add("active");
    clicked.disabled = true;
}

function setPage(pageshit) {
     pageTransition(); 

    setTimeout(() => {
        const content = document.querySelector("#content");
        content.querySelectorAll(".page-content").forEach(e => e.remove());
        pageshit();
    }, 450);
}

function pageTransition() {
    const transition = document.createElement("div");
    transition.classList.add("page-transition");
    document.body.appendChild(transition);

     transition.style.animation = "slideFull 1.5s";

        transition.addEventListener("animationend", () => {
        transition.remove(); 
    });
}

export default initialLoad;