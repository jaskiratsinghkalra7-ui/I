/* =========================================
   GET ELEMENTS
========================================= */

const welcomeScreen = document.getElementById("welcomeScreen");
const teaseScreen = document.getElementById("teaseScreen");
const surpriseScreen = document.getElementById("surpriseScreen");

const startBtn = document.getElementById("startBtn");
const teaseBtn = document.getElementById("teaseBtn");

const teaseTitle = document.getElementById("teaseTitle");
const teaseText = document.getElementById("teaseText");
const teaseEmoji = document.getElementById("teaseEmoji");

const counter = document.getElementById("counter");

let clickCount = 0;


/* =========================================
   START BUTTON
========================================= */

startBtn.addEventListener("click", function () {

    welcomeScreen.classList.remove("active");

    teaseScreen.classList.add("active");

});


/* =========================================
   TEASING BUTTON
========================================= */

teaseBtn.addEventListener("click", function () {

    clickCount++;

    counter.innerText = clickCount + " / 4";


    /* FIRST CLICK */

    if (clickCount === 1) {

        teaseEmoji.innerText = "😏";

        teaseTitle.innerText = "Ohooo... 👀";

        teaseText.innerText =
            "Itni jaldi surprise chahiye? Thoda wait karo madam 😂";

        teaseBtn.innerText =
            "Okay okay... Click again 😭";

    }


    /* SECOND CLICK */

    else if (clickCount === 2) {

        teaseEmoji.innerText = "😂";

        teaseTitle.innerText =
            "Patience Ishhhhhhh!";

        teaseText.innerText =
            "Abhi toh surprise shuru bhi nahi hua 😭✨";

        teaseBtn.innerText =
            "One more time 👀";

    }


    /* THIRD CLICK */

    else if (clickCount === 3) {

        teaseEmoji.innerText = "🤭";

        teaseTitle.innerText =
            "Okayyy okayyy...";

        teaseText.innerText =
            "Promise, ab next click mein actual surprise hai 🫣💗";

        teaseBtn.innerText =
            "LAST ONE, I SWEAR 😭";

    }


    /* FOURTH CLICK */

    else if (clickCount === 4) {

        teaseScreen.classList.remove("active");

        surpriseScreen.classList.add("active");

        startCelebration();

    }

});


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const container =
        document.querySelector(".confetti-container");

    const confetti = document.createElement("div");

    confetti.classList.add("confetti");


    const symbols = [
        "✨",
        "💖",
        "🎀",
        "⭐",
        "💕",
        "🌸",
        "🎉"
    ];

    confetti.innerText =
        symbols[Math.floor(Math.random() * symbols.length)];


    confetti.style.left =
        Math.random() * 100 + "vw";


    confetti.style.fontSize =
        (Math.random() * 15 + 10) + "px";


    confetti.style.animationDuration =
        (Math.random() * 3 + 3) + "s";


    container.appendChild(confetti);


    setTimeout(function () {

        confetti.remove();

    }, 6000);

}


/* =========================================
   SPARKLES
========================================= */

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.innerText = "✨";

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.fontSize =
        (Math.random() * 15 + 10) + "px";

    document.body.appendChild(sparkle);


    setTimeout(function () {

        sparkle.remove();

    }, 3000);

}


/* =========================================
   START CELEBRATION
========================================= */

function startCelebration() {

    /* Create lots of confetti */

    for (let i = 0; i < 60; i++) {

        setTimeout(function () {

            createConfetti();

        }, i * 80);

    }


    /* Keep confetti coming */

    setInterval(function () {

        createConfetti();

    }, 250);


    /* Sparkles */

    setInterval(function () {

        createSparkle();

    }, 300);

}
