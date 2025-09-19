// home.js

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");

    const homeDiv = document.createElement("div");
    homeDiv.classList.add("page-content");

    const headline = document.createElement("h1");
    headline.textContent = "Welcome";
    headline.classList.add("headline");

    const headline2 = document.createElement("h1");
    headline2.textContent = "to the";
    headline2.classList.add("headline2");

    const description = document.createElement("p");
    description.textContent = "We serve the best horse in town. Fresh, tasty, and made with love.";
    description.classList.add("description");

    const umacafe = document.createElement("div");
    umacafe.classList.add("umacafe");

    //bg
    const bg = document.createElement("div");
    bg.classList.add("background-img");

    //kitasan black
    const kitasanContainer = document.createElement("div");
    kitasanContainer.classList.add("kita-container");

    const kitasan = document.createElement("div");
    kitasan.classList.add("kita");

    //parallax shit
    document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30; 
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    bg.style.transform = `translate(${x/2}px, ${y/2}px)`;
    kitasanContainer.style.transform = `translate(${x/4}px, ${y/4}px)`;
    });

    //talking shit
    const kitaLines = [
        "Trainer-san! The weather’s so nice today, it feels like the start of a festival parade! Let’s charge ahead with energy!",
        "Whenever I’m with you, I feel like I can sprint endlessly. That’s why… let’s make today full of smiles and victories!",
        "The UmaCafe smells amazing again today! Maybe after training, we can stop by together. I heard they have new seasonal sweets!",
        "Festivals are fun, but being with you feels like a festival every day! My heart won’t stop pounding with excitement!",
        "Even if I stumble, even if the race feels tough, I’ll get back up! Because you’re watching over me, Trainer-san!",
        "The UmaCafe’s pudding is so fluffy! I almost ran three extra laps just thinking about it… wahaha!",
        "Sometimes, I wonder if I shine enough… but when you smile at me, I feel like the brightest lantern at the festival!",
        "I passed by the UmaCafe earlier—do you think we should try their new parfait? They said it’s as dazzling as fireworks!",
        "No matter how many times I fall behind, I’ll keep shouting ‘Wasshoi!’ and running forward with all I have!",
        "The cheers of the crowd, the smell of the track, and your voice calling my name… that’s what makes me want to keep winning!",
        "Trainer-san, let’s promise! No matter how hard the path is, we’ll keep running together until we reach the finish line!",
        "When I imagine crossing the goal line and seeing your proud smile… it makes every bit of effort worth it!",
        "Ah, the UmaCafe staff waved at me again! They said I always bring ‘festival energy’ with me. Ehehe, I’ll take that as a compliment!",
        "I may not be the fastest every day, but as long as I can make you proud, I’ll run with everything I have!",
        "Trainer-san, do you think we should invite everyone to the UmaCafe later? With good food and laughter, it’ll be like another festival!"
    ];


    document.addEventListener('click', e => {
    if (!e.target.closest('button') && !e.target.closest('nav')) { 
        kitasan.classList.add('kita-talk');
        const randomLine = kitaLines[Math.floor(Math.random() * kitaLines.length)];
        showTextbox(randomLine);

        // Remove class after animation ends so it can trigger again
        kitasan.addEventListener('animationend', () => {
            kitasan.classList.remove('kita-talk');

        });
    }
});

let textboxActive = false;

function showTextbox(text) {
    if (textboxActive) return; 
    textboxActive = true;

    const box = document.createElement('div');
    box.textContent = text;
    box.classList.add("textbox");

    homeDiv.appendChild(box);

    requestAnimationFrame(() => { box.classList.add("visible"); });

    setTimeout(() => {
        box.classList.remove("visible");
        box.addEventListener('transitionend', () => {
            box.remove();
            textboxActive = false; 
        }, { once: true });
    }, 2500);
}

//APPEND MY CHILDREN

    homeDiv.appendChild(headline);
    homeDiv.appendChild(headline2);
    homeDiv.appendChild(description);

    //homeDiv.appendChild(img);

    //content.appendChild(topnav);
    content.appendChild(homeDiv);

    homeDiv.appendChild(bg);
    kitasanContainer.appendChild(kitasan);
    homeDiv.appendChild(kitasanContainer);
    homeDiv.appendChild(umacafe);
}


export default createRestaurantHomePage;