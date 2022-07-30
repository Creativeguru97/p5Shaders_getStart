#ifdef GL_ES
precision mediump float;//lowp / mediump/highp
#endif

//our vertex data from sketch.js
attribute vec3 aPosition;
// our texcoordinates from the cpu
attribute vec2 aTexCoord;

// this is a variable that will be shared with the fragment shader
// we will assign the attribute texcoords to the varying texcoords to move them from the vert shader to the frag shader
// it can be called whatever you want but often people prefix it with 'v' to indicate that it is a varying
varying vec2 vTexCoord;

void main() {
  // copy the texture coordinates
  vTexCoord = aTexCoord;
  // copy the position data into a vec4(x, y, z, w)
  //w = 0.0: direction, w = 1.0: position.
  vec4 positionVec4 = vec4(aPosition, 1.0);

  // Make sure the shader covers the entire screen:
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

  // Send the vertex information on to the fragment shader
  gl_Position = positionVec4;
}
