let theShader;

function preload(){
  theShader = loadShader('oneColor.vert', 'oneColor.frag');
}

function setup(){
  createCanvas(600, 600, WEBGL);
  noStroke();
  pixelDensity(1);
}

function draw(){
  theShader.setUniform('u_resolution', [width, height]);
  // theShader.setUniform('u_mouse', [mouseX, map(mouseY, 0, height, height, 0)]);
  theShader.setUniform('u_mouse', [mouseX/width, map(mouseY, 0, height, height, 0)/height]);
  theShader.setUniform('u_time', frameCount * 0.02);
  shader(theShader);
  rect(0, 0, width, height);

  // console.log('Frame rate: '+frameRate());
  // console.log((sin(frameCount/100)+1)/2);
}
