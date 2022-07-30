let theShader;

function preload(){
  theShader = loadShader('oneColor.vert', 'oneColor.frag');
}

function setup(){
  createCanvas(600, 400, WEBGL);
  noStroke();
}

function draw(){
  theShader.setUniform('u_time', frameCount * 0.01);
  shader(theShader);
  rect(0, 0, width, height);

  console.log('Frame rate: '+frameRate());
}
