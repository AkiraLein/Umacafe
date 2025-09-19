// about.js

const createAboutShit = () => {
    const content = document.querySelector("#content");

    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("page-content");

    //bg
    const bg = document.createElement("div");
    bg.classList.add("background-img3");

    //about text shit
    const aboutext = document.createElement("div");
    aboutext.classList.add("aboutext");

    aboutext.textContent = 
    `Welcome to the UmaCafe Experience!

    At UmaCafe, we serve the finest treats and drinks inspired by the world of Uma Musume. 
    Our mission is to bring joy, energy, and a touch of festival excitement to every visitor. 
    Whether you're here for the seasonal desserts, the freshly brewed coffee, or just to soak in the vibrant atmosphere, 
    you're guaranteed a unique experience filled with fun and flavor.

    Come join us, and let every moment be as lively as a race day! 🐎☕`;

    //APPEND MY CHILD
    content.appendChild(aboutDiv);
    aboutDiv.appendChild(bg);
    aboutDiv.appendChild(aboutext);
}

export default createAboutShit;