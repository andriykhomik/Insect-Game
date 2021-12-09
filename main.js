const screens = document.querySelectorAll('.screen');
const insectButtons = document.querySelectorAll('.choose-insect-btn');
const startBtn = document.querySelector('#start-btn');
const scoreEl = document.querySelector('#score');
const timeEl = document.querySelector('#time');

let screen = 0;
let chosenInsect;
let score = 0;
let seconds = 0;
let minutes = 0;

startBtn.addEventListener('click', ()=> {
    screens[screen].classList.add('up');
    screen++;
})

insectButtons.forEach(insectBtn => {
    insectBtn.addEventListener('click', (e)=> {
        screens[screen].classList.add('up');
        chosenInsect = e.target;
        screen++;
        createInsect()
        setTime()
    })
})


function createInsect(){

    const imgEl = document.createElement('img');
    imgEl.src = chosenInsect.src;
    const insectEl = document.createElement('div');
    insectEl.classList.add('insect');

    insectEl.style.left = randomizer(window.innerWidth) + 'px';
    insectEl.style.top = randomizer(window.innerHeight) + 'px';
    insectEl.style.transform = `rotate(${randomizer(360)}deg)`;
    insectEl.appendChild(imgEl);
    insectEl.addEventListener('click', (e) => hide(e.target));
    screens[screen].appendChild(insectEl);
    setTimeout(createInsect, 2000);

}


function randomizer(value){
    return Math.floor(Math.random() * value);
}

function hide(insect){
    insect.remove();
    score++;
    scoreEl.innerText = `Score: ${score}`;
    // createInsect()
}

let sec;
let min;

function setTime(){

    if (seconds === 60){
        seconds = 0;
        minutes ++;
    }

    if (seconds.toString().length > 1){
        sec = seconds.toString();
    } else {
        sec = '0'+ seconds;
    }
    if (minutes.toString().length > 1){
        min = minutes.toString();
    } else {
        min = '0'+ minutes;
    }

    timeEl.innerText = `Time: ${min}:${sec}`;

    seconds++;
}

