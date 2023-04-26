let pianoKeys = document.querySelectorAll('.piano-keys .key');
let volumeBar = document.querySelector('.volume-bar input');
let showKeys = document.querySelector('.show-hide-bar input');

//to define default tune of piano sound
audio = new Audio(`tunes/a.wav`);
allKeys = [];

// function for playsound
function playSound(key) {
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}

//function for volume bar
const volumeBarAction = (key) => {
    // console.log(key.target.value);
    audio.volume = key.target.value;
}

//function for  show hide keys
const showHideKeys = () => {
    keywords = document.querySelectorAll('.key span');
    keywords.forEach((word) => {
        word.classList.toggle('hide');
    })
}

const pressedKey = (e) => {
    if (allKeys.includes(e.key)) playSound(e.key);
}

//when we click piono keys
pianoKeys.forEach((key) => {
    allKeys.push(key.dataset.key);

    key.addEventListener('click', () => playSound(key.dataset.key));

})

//to control piona volume
volumeBar.addEventListener('input', volumeBarAction);


// to hide and show keys
showKeys.addEventListener('click', showHideKeys);

document.addEventListener("keydown", pressedKey);