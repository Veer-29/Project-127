song1 = "";
song2 = "";


function preload()
{
	song1 = loadSound("Despacito.mp3");
	song2 = loadSound("Believer.mp3");
}

function setup() {
    canvas = createCanvas(600,550);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
	image(video, 0, 0, 600, 500);
	}

function play() {
    song1.play();
    song1.setVolume(1);

}

function stop() {
    song1.pause();
}