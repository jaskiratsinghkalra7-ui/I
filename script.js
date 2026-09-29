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
   SCREEN SWITCHING
========================================= */

function showScreen(screenToShow) {

    // Hide all screens first
    welcomeScreen.classList.remove("active");
    teaseScreen.classList.remove("active");
    surpriseScreen.classList.remove("active");

    // Show only the selected screen
    screenToShow.classList.add("active");
}


/* =========================================
   LET'S GO BUTTON
========================================= */

startBtn.addEventListener("click", function () {

    // Move from welcome screen
    // to teasing screen

    showScreen(teaseScreen);

});


/* =========================================
   TEASING BUTTON
========================================= */

teaseBtn.addEventListener("click", function () {

    clickCount++;

    // Update click counter
    counter.innerText = clickCount + " / 4";


    /* -------------------------------------
       CLICK 1
    ------------------------------------- */

    if (clickCount === 1) {

        teaseEmoji.innerText = "😏";

        teaseTitle.innerText =
            "Ohooo... 👀";

        teaseText.innerText =
            "Itni jaldi surprise chahiye? Thoda wait karo madam 😂";

        teaseBtn.innerText =
            "Okay okay... Click again 😭";
    }


    /* -------------------------------------
       CLICK 2
    ------------------------------------- */

    else if (clickCount === 2) {

        teaseEmoji.innerText = "😂";

        teaseTitle.innerText =
            "Patience Ishhhhhhh!";

        teaseText.innerText =
            "Abhi toh surprise shuru bhi nahi hua 😭✨";

        teaseBtn.innerText =
            "One more time 👀";
    }


    /* -------------------------------------
       CLICK 3
    ------------------------------------- */

    else if (clickCount === 3) {

        teaseEmoji.innerText = "🤭";

        teaseTitle.innerText =
            "Okayyy okayyy...";

        teaseText.innerText =
            "Promise, ab next click mein actual surprise hai 🫣💗";

        teaseBtn.innerText =
            "LAST ONE, I SWEAR 😭";
    }


    /* -------------------------------------
       CLICK 4 — FINAL SURPRISE
    ------------------------------------- */

    else if (clickCount === 4) {

        // Hide teasing screen
        // Show final birthday screen

        showScreen(surpriseScreen);

        // Start celebration effects
        startCelebration();
    }

});


/* =========================================
   CREATE CONFETTI
========================================= */

function createConfetti() {

    const container =
        document.querySelector(".confetti-container");

    const confetti =
        document.createElement("div");

    confetti.classList.add("confetti");


    // Different birthday decorations

    const symbols = [
        "✨",
        "💖",
        "🎀",
        "⭐",
        "💕",
        "🌸",
        "🎉",
        "💗",
        "🩷",
        "🥳"
    ];


    // Pick random symbol

    confetti.innerText =
        symbols[
            Math.floor(Math.random() * symbols.length)
        ];


    // Random horizontal position

    confetti.style.left =
        Math.random() * 100 + "vw";


    // Random size

    confetti.style.fontSize =
        (Math.random() * 15 + 10) + "px";


    // Random falling speed

    confetti.style.animationDuration =
        (Math.random() * 3 + 3) + "s";


    // Add to page

    container.appendChild(confetti);


    // Remove after animation

    setTimeout(function () {

        confetti.remove();

    }, 6000);
}


/* =========================================
   CREATE SPARKLES
========================================= */

function createSparkle() {

    const sparkle =
        document.createElement("div");

    sparkle.classList.add("sparkle");


    sparkle.innerText = "✨";


    // Random position

    sparkle.style.left =
        Math.random() * 100 + "vw";


    // Random size

    sparkle.style.fontSize =
        (Math.random() * 15 + 10) + "px";


    // Add sparkle

    document.body.appendChild(sparkle);


    // Remove after animation

    setTimeout(function () {

        sparkle.remove();

    }, 3000);
}


/* =========================================
   START FINAL CELEBRATION
========================================= */

function startCelebration() {


    /* -------------------------------------
       INITIAL CONFETTI BURST
    ------------------------------------- */

    for (let i = 0; i < 60; i++) {

        setTimeout(function () {

            createConfetti();

        }, i * 80);

    }


    /* -------------------------------------
       CONTINUOUS CONFETTI
    ------------------------------------- */

    setInterval(function () {

        createConfetti();

    }, 250);


    /* -------------------------------------
       CONTINUOUS SPARKLES
    ------------------------------------- */

    setInterval(function () {

        createSparkle();

    }, 300);

}
