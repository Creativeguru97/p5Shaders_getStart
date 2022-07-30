/*Example:Color the entire background blue*/

// These are necessary definitions that let you graphics card know how to render the shader
// #ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
// #endif

// this is the same variable we declared in the vertex shader
// we need to declare it here too!
varying vec2 vTexCoord;

void main() {
	// copy the vTexCoord
  // vTexCoord is a value that goes from 0.0 - 1.0 depending on the pixels location
  // we can use it to access every pixel on the screen
  vec2 coord = vTexCoord;

  // gl_FragColor is a built in shader variable, and you .frag file must contain it
	// x values for red, y values for green, both for blue
  gl_FragColor = vec4(coord.x, coord.y, (coord.x+coord.y), 1.0);
}
