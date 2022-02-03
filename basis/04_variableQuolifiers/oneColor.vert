// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES
precision mediump float;//lowp / mediump/highp
#endif

//variable quolifiers: int, float, const, vec2...
const float PI = 3.14159265358979323846;
//or
#define PI 3.14159265358979323846;
//this # syntax: "preprocessor directive".
//theoretically faster since it's not a variable

//Our vertex data from WEBGL/p5
attribute vec3 aPosition;

void main() {
  // copy the position data into a vec4(x, y, z, w)
  //w = 0.0:direction, w = 1.0:position.
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

  // Send the vertex information on to the fragment shader
  gl_Position = positionVec4;
}
