#ifdef GL_ES
precision mediump float;//lowp / mediump/highp
#endif

attribute vec3 aPosition;//our vertex data from sketch.js
attribute vec2 aTexCoord;// our texcoordinates from the cpu
varying vec2 vTexCoord;//A variable for varying texcoords


void main() {
  vTexCoord = aTexCoord;// copy the texture coordinates
  vec4 positionVec4 = vec4(aPosition, 1.0);//w = 0.0: direction, w = 1.0: position.

  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;//Fix the scale to fit the screen
  gl_Position = positionVec4;  // Send the vertex information on to the fragment shader
}
