
const studio = [
    {
        title:""
    }
    {
        title:"Applause",
        audio:"./applause/boo.mp3",
    },
    {
        title:"Applause",
        audio:"./applause/gasp.mp3",
    },
    {
        title:"Applause",
        audio:"./applause/tada.mp3",
    },
    {
        title:"Applause",
        audio:"./applause/victory.mp3",
    },
    {
        title:"Applause",
        audio:"./applause/wrong.mp3",
    }
];

// window.onclick = function(){
//     const audio = new Audio("./applause/audio.mp3");

//     audio.loap = true;
//     audio.play();
// };\

const soundCards = document.querySelector(".sound-cards");

function play() {
    const audio = new Audio(this.dataset.audio);
    audio.play();
}
function createSoundCard(sound) {
    const btn = document.createElement("button");

    btn.innerText= sound.title;
    btn.dataset.audio = sound.audio;

    btn.onclick = play;

}