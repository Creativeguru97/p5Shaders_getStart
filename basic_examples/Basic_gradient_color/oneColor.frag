/*Example:Color the entire background blue*/

// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

/* This is passed in as a uniform
from the sketch.js file*/
uniform vec2 u_resolution;
/*
  u_resolution.x == width
  u_resolution.y == height
*/

void main() {
  /*position of the pixel divided by resolution,
	to get normalized positions (0.0 - 1.0) on the canvas*/
	vec2 st = gl_FragCoord.xy/u_resolution;

  float r = st.x;
  float g = 1.0-st.y;
  vec3 color = vec3(r, g, 0.6);

  // gl_FragColor is a built in shader variable, and you .frag file must contain it
  // We are setting the vec3 color into a new vec4, with an transparency of 1 (no opacity)
  gl_FragColor = vec4(color, 1.0);
}
