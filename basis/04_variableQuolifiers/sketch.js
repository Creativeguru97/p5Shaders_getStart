let theShader;

function preload(){
  theShader = loadShader('oneColor.vert', 'oneColor.frag');
}

function setup(){
  createCanvas(600, 400, WEBGL);
  noStroke();
}

function draw(){
  shader(theShader);
  rect(0, 0, width, height);

  theShader.setUniform("u_resolution", [width, height]);
  theShader.setUniform("u_time", millis() / 1000.0);
  // we flip Y so it's oriented properly in our shader
  theShader.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)]);

  // console.log('Frame rate: '+frameRate());
}
