song = ""

function preload()
{
  song = loadSound("music.mp3");
}
function setup()
{
  canvas = createCanvas(800,800);
  canvas.center() 
  
  video = createCapture(VIDEO);
  video.hide();
}

function draw()
{
  image(video, 0, 0, 800, 800);
}

function draw()
{
  song.play();
}