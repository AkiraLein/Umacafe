// menu.js

const createMenuShit = () => {
    const content = document.querySelector("#content");

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("page-content");

    //bg
    const bg = document.createElement("div");
    bg.classList.add("background-img2");

    //oguri
    const oguri = document.createElement("div");
    oguri.classList.add("oguri");

    //overlay
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    
    //actual food
    const food1 = document.createElement("div");
    food1.classList.add("food1");
    
    const food2 = document.createElement("div");
    food2.classList.add("food2");

    const food3 = document.createElement("div");
    food3.classList.add("food3");

    const food4 = document.createElement("div");
    food4.classList.add("food4");

    const food5 = document.createElement("div");
    food5.classList.add("food5");

    //talking shit
    const ogurilines = [
    "Trainer-san! The weather’s perfect today! Let’s charge ahead and give it our all!",
    "I feel so fast when I’m with you, Trainer-san! Let’s win with smiles today!",
    "The UmaCafe smells amazing! Maybe we can grab a sweet treat after training?",
    "Festivals are fun, but being with you feels like a festival every day!",
    "Even if I stumble, I’ll get back up! You’re cheering me on, right Trainer-san?",
    "The UmaCafe pudding is so fluffy… I almost ran extra laps thinking about it!",
    "I wonder if I’m shining enough… but when you smile, I feel like a glowing lantern!",
    "I saw the new parfait at UmaCafe! Do you think we should try it together?",
    "Hearing the crowd cheer and your voice calling my name… that’s the best feeling!",
    "Trainer-san, let’s promise to run together until we reach the finish line!",
    "Crossing the goal line and seeing your proud smile… it makes every effort worth it!",
    "The UmaCafe staff waved at me again! They said I always bring festival energy!",
    "I may not be the fastest every day, but I’ll run with everything I have for you!",
    "Trainer-san, let’s invite everyone to UmaCafe later! Good food and laughs await!"
];

    document.addEventListener('click', e => {
    if (!e.target.closest('button') && !e.target.closest('nav')) { 
        oguri.classList.add('oguri-talk');
        const randomLine = ogurilines[Math.floor(Math.random() * ogurilines.length)];
        showTextbox(randomLine);

        // Remove class after animation ends so it can trigger again
        oguri.addEventListener('animationend', () => {
            oguri.classList.remove('oguri-talk');

        });
    }
});

let textboxActive = false;

function showTextbox(text) {
    if (textboxActive) return; 
    textboxActive = true;

    const box = document.createElement('div');
    box.textContent = text;
    box.classList.add("textbox2");

    menuDiv.appendChild(box);

    requestAnimationFrame(() => { box.classList.add("visible"); });

    setTimeout(() => {
        box.classList.remove("visible");
        box.addEventListener('transitionend', () => {
            box.remove();
            textboxActive = false; 
        }, { once: true });
    }, 2500);
}

    //APPEND MY CHILD
    content.appendChild(menuDiv);
    menuDiv.appendChild(bg);
    menuDiv.appendChild(oguri);
    menuDiv.appendChild(overlay);
    
    menuDiv.appendChild(food1);
    menuDiv.appendChild(food2);
    menuDiv.appendChild(food3);
    menuDiv.appendChild(food4);
    menuDiv.appendChild(food5);
}

export default createMenuShit;