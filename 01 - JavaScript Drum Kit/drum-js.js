
window.addEventListener('keydown', function (e) {

let note = document.querySelector(`audio[data-key="${e.keyCode}"]`);
let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

if (!note) return;

note.play();
key.classList.add('playing');

});

window.addEventListener('keyup', function(e){

    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    key.classList.remove('playing');

});