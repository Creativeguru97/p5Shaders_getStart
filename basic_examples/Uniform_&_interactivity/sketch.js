let theShader;

function preload(){
  theShader = loadShader('uniforms.vert', 'uniforms.frag');
}

function setup(){
  // disables scaling for retina screens which can create inconsistent scaling between displays
  pixelDensity(1);

  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw(){
  // lets send the resolution, mouse, and time to our shader
  // Modify the data so it's more easily usable by the shader
  theShader.setUniform('resolution', [width, height]);
  theShader.setUniform('mouse', map(mouseX, 0, width, 0, 7));
  theShader.setUniform('time', frameCount * 0.01);

  shader(theShader);//Set the shader.
  rect(0, 0, width, height);//Put to a geometry to draw something on by shader
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
