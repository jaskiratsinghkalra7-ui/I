/* =========================================
   GET ELEMENTS
========================================= */

const welcomeScreen =
    document.getElementById("welcomeScreen");

const teaseScreen =
    document.getElementById("teaseScreen");

const surpriseScreen =
    document.getElementById("surpriseScreen");


const startBtn =
    document.getElementById("startBtn");

const teaseBtn =
    document.getElementById("teaseBtn");


const teaseTitle =
    document.getElementById("teaseTitle");

const teaseText =
    document.getElementById("teaseText");

const teaseEmoji =
    document.getElementById("teaseEmoji");


const counter =
    document.getElementById("counter");


const music =
    document.getElementById("birthdayMusic");


const revealImage =
    document.getElementById("revealImage");


const photoCaption =
    document.getElementById("photoCaption");


let clickCount = 0;


/* =========================================
   PHOTOS
========================================= */

const photos = [

    "photos/photo1.jpg",

    "photos/photo2.jpg",

    "photos/photo3.jpg",

    "photos/photo4.jpg",

    "photos/photo5.jpg",

    "photos/photo6.jpg",

    "photos/photo7.jpg"

];


const captions = [

    "Okay... this one had to be here 🥹",

    "Another little memory ✨",

    "That smile though 👀❤️",

    "Just a cute little moment 🎀",

    "Pretty sure this one deserves a spot 💗",

    "Birthday girl energy 🎂",

    "And finally... this one 🩷"

];


/* =========================================
   SCREEN SWITCHING
========================================= */

function showScreen(screenToShow) {

    welcomeScreen.classList.remove("active");

    teaseScreen.classList.remove("active");

    surpriseScreen.classList.remove("active");


    screenToShow.classList.add("active");

}


/* =========================================
   LET'S GO
========================================= */

startBtn.addEventListener(
    "click",
    function () {

        showScreen(teaseScreen);

    }
);


/* =========================================
   TEASING
========================================= */

teaseBtn.addEventListener(
    "click",
    function () {


        clickCount++;


        counter.innerText =
            clickCount + " / 4";


        /* ==============================
           CLICK 1
        ============================== */

        if (clickCount === 1) {


            teaseEmoji.innerText =
                "😏";


            teaseTitle.innerText =
                "Ohooo... 👀";


            teaseText.innerText =
                "Itni jaldi surprise chahiye? Thoda wait karo madam 😂";


            teaseBtn.innerText =
                "Okay okay... Click again 😭";


        }


        /* ==============================
           CLICK 2
        ============================== */

        else if (clickCount === 2) {


            teaseEmoji.innerText =
                "😂";


            teaseTitle.innerText =
                "Patience Ishhhhhhh!";


            teaseText.innerText =
                "Abhi toh surprise shuru bhi nahi hua 😭✨";


            teaseBtn.innerText =
                "One more time 👀";


        }


        /* ==============================
           CLICK 3
        ============================== */

        else if (clickCount === 3) {


            teaseEmoji.innerText =
                "🤭";


            teaseTitle.innerText =
                "Okayyy okayyy...";


            teaseText.innerText =
                "Promise, ab next click mein actual surprise hai 🫣💗";


            teaseBtn.innerText =
                "LAST ONE, I SWEAR 😭";


        }


        /* ==============================
           CLICK 4
        ============================== */

        else if (clickCount === 4) {


            showScreen(
                surpriseScreen
            );


            /* --------------------------
               START MUSIC
            -------------------------- */

            music.volume = 0.4;


            music.play().catch(
                function (error) {

                    console.log(
                        "Music could not autoplay:",
                        error
                    );

                }
            );


            /* --------------------------
               START CELEBRATION
            -------------------------- */

            startCelebration();


            /* --------------------------
               START PHOTO SHOW
            -------------------------- */

            startPhotoReveal();

        }

    }
);


/* =========================================
   PHOTO REVEAL
========================================= */

function startPhotoReveal() {


    let currentPhoto = 0;


    revealImage.src =
        photos[currentPhoto];


    photoCaption.innerText =
        captions[currentPhoto];


    currentPhoto++;


    const photoInterval =
        setInterval(
            function () {


                if (
                    currentPhoto >= photos.length
                ) {

                    clearInterval(
                        photoInterval
                    );


                    /* Keep final photo */

                    revealImage.src =
                        photos[photos.length - 1];


                    photoCaption.innerText =
                        "And this one... had to be the last one 🩷";


                    return;

                }


                /* Fade out */

                revealImage.style.opacity =
                    "0";


                setTimeout(
                    function () {


                        revealImage.src =
                            photos[currentPhoto];


                        photoCaption.innerText =
                            captions[currentPhoto];


                        revealImage.style.opacity =
                            "1";


                        currentPhoto++;


                    },
                    500
                );


            },
            2200
        );

}


/* =========================================
   CREATE CONFETTI
========================================= */

function createConfetti() {


    const container =
        document.getElementById(
            "confettiContainer"
        );


    const confetti =
        document.createElement("div");


    confetti.classList.add(
        "confetti"
    );


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
        "🥳",
        "🎂"

    ];


    confetti.innerText =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    confetti.style.left =
        Math.random() * 100 + "vw";


    confetti.style.fontSize =
        (
            Math.random() * 15 +
            10
        ) + "px";


    confetti.style.animationDuration =
        (
            Math.random() * 3 +
            3
        ) + "s";


    container.appendChild(
        confetti
    );


    setTimeout(
        function () {

            confetti.remove();

        },
        6000
    );

}


/* =========================================
   START CELEBRATION
========================================= */

function startCelebration() {


    /* -------------------------------
       BIG INITIAL BURST
    -------------------------------- */

    for (
        let i = 0;
        i < 100;
        i++
    ) {


        setTimeout(
            function () {

                createConfetti();

            },
            i * 40
        );

    }


    /* -------------------------------
       CONTINUOUS CONFETTI
    -------------------------------- */

    setInterval(
        function () {

            createConfetti();

        },
        300
    );

}
