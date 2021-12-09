const screens = document.querySelectorAll('.screen');
const insectButtons = document.querySelectorAll('.choose-insect-btn');
const startBtn = document.querySelector('#start-btn');
const scoreEl = document.querySelector('#score');
const timeEl = document.querySelector('#time');
const messageEl = document.querySelector('#message');

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
        createInsect();
        setInterval(setTime, 1000);
        start();
    })
})

const start = ()=> {
    setInterval(createInsect, 2000);
}

function createInsect(){

    const insectEl = document.createElement('div');
    insectEl.classList.add('insect');

    insectEl.style.left = randomizer(window.innerWidth) + 'px';
    insectEl.style.top = randomizer(window.innerHeight) + 'px';
    insectEl.style.transform = `rotate(${randomizer(360)}deg)`;

    insectEl.addEventListener('click', () => {

        insectEl.classList.add('caught');

        hide();
        createInsect();
    })
        const imgEl = document.createElement('img');
        imgEl.src = chosenInsect.src;

    insectEl.appendChild(imgEl);
    screens[screen].appendChild(insectEl);
}

function hide(){
    console.log(this)
    // insect.remove();
    score++;
    scoreEl.innerText = `Score: ${score}`;
    if (score > 19){
        messageEl.classList.add('visible');
    }
}

function randomizer(value){
    if (value !== 360){
        return Math.floor(Math.random() * (value - 200) + 100);
    } else {
        return Math.floor(Math.random() * value);
    }

}





function setTime(){
    let sec;
    let min;seconds++;
    if (seconds === 60){
        seconds = 0;
        minutes ++;
    }

    if (seconds.toString().length > 1) sec = seconds.toString();
        else sec = '0'+ seconds;

    if (minutes.toString().length > 1) min = minutes.toString();
        else  min = '0'+ minutes;

    timeEl.innerText = `Time: ${min}:${sec}`;
}
