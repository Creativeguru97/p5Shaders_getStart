/*Example:Color the entire background blue*/

#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 color_basis(){
  vec3 yellow, magenta, green;
  // Making Yellow
  yellow.rg = vec2(1.0);// Assigning 1. to red and green channels
  yellow[2] = 0.0;// Assigning 0. to blue channel
  // Making Magenta
  magenta = yellow.rbg;// Assign the channels with green and blue swapped

  // Making Green
  green.rgb = yellow.bgb; // Assign the blue channel of Yellow (0) to red and blue channels

  return green;
}

vec3 color_mixture(){
  vec3 colorA = vec3(0.149,0.141,0.912);
  vec3 colorB = vec3(1.000,0.833,0.224);
  
  float oscillate = abs(sin(u_time));
  vec3 color = mix(colorA, colorB, oscillate);

  return color;
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;

  // vec3 color = color_basis();
  vec3 color = color_mixture();
  gl_FragColor = vec4(color, 1.0);
}
