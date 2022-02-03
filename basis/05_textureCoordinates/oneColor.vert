// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES
precision mediump float;//lowp / mediump/highp
#endif

// our texcoordinates from the cpu
attribute vec2 aTexCoord;
/*
  this is a variable that will be shared with the fragment
  shader. We will assign the attribute texcoords to the
  varying texcoords to move them from the vert shader to the
  frag shader
*/
/*
  it can be called whatever you want but often people
  prefix it with 'v' to indicate that it is a
  varying attribute vec2 vTexCoord;
*/
varying vec2 vTexCoord;


void main() {
  //Copy the texture coordinates
  vTexCoord = aTexCoord;
}
