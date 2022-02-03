let theShader;

function preload(){
  theShader = loadShader('oneColor.vert', 'oneColor.frag');
}

function setup(){
  // disables scaling for retina screens which can create inconsistent scaling between displays
  pixelDensity(1);

  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw(){
  //Send resolution of sketch into shader.
  theShader.setUniform('u_resolution', [width, height]);
  //Shader() sets the active shader with our shader.
  shader(theShader);
  //Put to give some geometry to draw something on by shader
  rect(0, 0, width, height);

  //console.log('Frame rate: '+frameRate());
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
