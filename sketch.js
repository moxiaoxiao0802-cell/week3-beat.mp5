let beat;
let analyzer;

function preload() {
  soundFormats('mp3');
  beat = loadSound('beat.mp3');
}

function setup() {
  createCanvas(600, 400);

  analyzer = new p5.Amplitude();
  analyzer.setInput(beat);
}

function draw() {
  background(20, 20, 40);

  let volume = analyzer.getLevel();
  let size = 100 + volume * 1000;

  fill(180, 120, 255);
  noStroke();
  ellipse(width / 2, height / 2, size, size);

  fill(255);
  textAlign(CENTER);
  textSize(16);
  text('Click to play / stop', width / 2, 360);
}

function mousePressed() {
  if (beat.isPlaying()) {
    beat.stop();
  } else {
    beat.loop();
  }
}