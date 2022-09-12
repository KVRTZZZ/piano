// pwgar todas as teclas
const keys = document.querySelectorAll(".key");

function playNote(event) {

    let audioKeyCode = getKeyCode(event);

    // ver se a key foi pressionada ou clicada
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

    // verificar se existe
    const cantFoundAnyKey = !key;

    if (cantFoundAnyKey) {
        return;
    }

    addPlayingClass(key);
    playAudio(audioKeyCode);
}

function addPlayingClass(key) {
    key.classList.add('playing');
}

function getKeyCode(event) {
    let keyCode;

    const isKeyboard = event.type === "keydown";
    if (isKeyboard) {
        keyCode = event.keyCode;
    } else {
        keyCode = event.target.dataset.key;
    }

    return keyCode;
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
    audio.currentTime = 0;
    audio.play();
}

function removePlayingClass(event) {
    event.target.classList.remove("playing");
}

function registerEvents() {
    // click com o mouse
    keys.forEach(function(key) {
        key.addEventListener("click", playNote);
        key.addEventListener("transitionend", removePlayingClass);
    });

    // teclado pressionado
    window.addEventListener("keydown", playNote);
}

window.addEventListener("load", registerEvents);