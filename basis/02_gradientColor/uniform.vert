// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES
precision mediump float;//lowp / mediump/highp
#endif

attribute vec3 aPosition;

void main() {
  //w = 0.0: direction, w = 1.0: position.
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;
}
