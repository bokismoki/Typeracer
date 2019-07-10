const app = document.querySelector(".app");
const randomWord = document.querySelector(".randomWord");
const playResetBtn = document.querySelector(".playResetBtn");
const myAnswer = document.querySelector(".myAnswer");
const timeLeft = document.querySelector(".timeLeft");
const points = document.querySelector(".points");
const progressBar = document.querySelector(".progressBar");

const wordsArray = [
    "glasses",
    "earthquake",
    "assertive",
    "brush",
    "dough",
    "purpose",
    "decade",
    "activate",
    "contract",
    "skin",
    "achieve",
    "drive",
    "swop",
    "equip",
    "disaster",
    "length",
    "sculpture",
    "loyalty",
    "nose",
    "register",
    "slab",
    "code",
    "treaty",
    "petty",
    "snail",
    "direct",
    "muggy",
    "deposit",
    "honor",
    "quiet",
    "polite",
    "fleet",
    "gem",
    "accountant",
    "crossing",
    "definition",
    "identification",
    "stem",
    "average",
    "extent",
    "story",
    "hotdog",
    "economist",
    "random",
    "fade",
    "nervous",
    "lot",
    "apology",
    "warning",
    "wonder",
    "house",
    "keyboard",
    "javascript",
    "minimalistic",
    "horizontal",
    "extravagant",
    "odd",
    "ancient"
];

let pointsCounter = 0;
let timeCountdown = 60;
let play = false;

randomWord.innerHTML = "typeracer";

timeLeft.innerHTML = timeCountdown;
points.innerHTML = pointsCounter;

let progressBarWidth = 100;
progressBar.style.width = progressBarWidth + "%";

app.addEventListener("click", e => {
    if (e.target.classList.contains("fa-play")) {

        play = true;

        let x = setInterval(() => {
            if (timeCountdown === 1) clearInterval(x);
            timeCountdown--;
            timeLeft.innerHTML = timeCountdown;
            progressBarWidth -= 1.66666667;
            progressBar.style.width = progressBarWidth + "%";
            if (progressBarWidth <= 20) {
                progressBar.style.backgroundColor = "crimson";
                pointsCounter--;
                points.innerHTML = pointsCounter;
            } else {
                progressBar.style.backgroundColor = "lime";
                points.innerHTML = pointsCounter;
            }
        }, 1000)

        playResetBtn.classList.add("fa-redo-alt");
        playResetBtn.classList.remove("fa-play");

    }

    if (e.target.classList.contains("fa-redo-alt")) {

        if (timeCountdown === 0) {
            let x = setInterval(() => {
                if (timeCountdown === 1) clearInterval(x);
                timeCountdown--;
                timeLeft.innerHTML = timeCountdown;
                progressBarWidth -= 1.66666667;
                progressBar.style.width = progressBarWidth + "%";
                if (progressBarWidth <= 20) {
                    progressBar.style.backgroundColor = "crimson";
                    pointsCounter--;
                    points.innerHTML = pointsCounter;
                } else {
                    progressBar.style.backgroundColor = "lime";
                    points.innerHTML = pointsCounter;
                }
            }, 1000)
        }

        pointsCounter = 0;
        points.innerHTML = pointsCounter;
        timeCountdown = 60;
        timeLeft.innerHTML = timeCountdown;
        progressBarWidth = 100;
        progressBar.style.width = progressBarWidth + "%";

    }
});

myAnswer.addEventListener("keydown", e => {

    if (e.keyCode === 13) {

        let randomNumber = Math.floor(Math.random() * wordsArray.length);

        if (myAnswer.value === randomWord.innerHTML && myAnswer.value !== "" && play === true && timeCountdown > 0 && progressBarWidth >= 90) {
            pointsCounter += 10;
            points.innerHTML = pointsCounter;
            randomWord.innerHTML = wordsArray[randomNumber];
            progressBarWidth += 5;
            progressBar.style.width = progressBarWidth + "%";
            if (progressBarWidth > 100) {
                progressBarWidth = 100;
                progressBar.style.width = progressBarWidth + "%";
            }
        } else if (myAnswer.value === randomWord.innerHTML && myAnswer.value !== "" && play === true && timeCountdown > 0) {
            pointsCounter += 5;
            points.innerHTML = pointsCounter;
            randomWord.innerHTML = wordsArray[randomNumber];
            progressBarWidth += 5;
            progressBar.style.width = progressBarWidth + "%";
            if (progressBarWidth > 100) {
                progressBarWidth = 100;
                progressBar.style.width = progressBarWidth + "%";
            }
        } else if (myAnswer.value !== randomWord.innerHTML && myAnswer.value !== "" && play === true && timeCountdown > 0) {
            pointsCounter -= 5;
            points.innerHTML = pointsCounter;
            randomWord.innerHTML = wordsArray[randomNumber];
            progressBarWidth -= 5;
            progressBar.style.width = progressBarWidth + "%";
            if (progressBarWidth < 0) {
                progressBarWidth = 0;
                progressBar.style.width = progressBarWidth + "%";
            }
        }
        myAnswer.value = "";
    }

});
