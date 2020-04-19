document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function () {
        var audio = new Audio('sounds/' + this.id + '.mp3');
        audio.play();
        buttonAnimation(this.innerHTML);
    });
});

document.addEventListener("keydown", event => {

    var audioPath = "sounds/";

    switch (event.key) {
        case 'a':
            audioPath += "crash.mp3";
            break;
        case 'w':
            audioPath += "kick-bass.mp3";
            break;
        case 's':
            audioPath += "snare.mp3";
            break;
        case 'd':
            audioPath += "tom-1.mp3";
            break;
        case 'j':
            audioPath += "tom-2.mp3";
            break;
        case 'k':
            audioPath += "tom-3.mp3";
            break;
        case 'l':
            audioPath += "tom-4.mp3";
            break;

        default:
            break;
    }

    var audio = new Audio(audioPath);

    if (audio !== null) {
        audio.play();
        buttonAnimation(event.key);
    }

});

function buttonAnimation(currentKey) {

    document.querySelector('.' + currentKey).classList.add("pressed");

    setTimeout(function () {
        document.querySelector('.' + currentKey).classList.remove("pressed")
    }, 100);
}