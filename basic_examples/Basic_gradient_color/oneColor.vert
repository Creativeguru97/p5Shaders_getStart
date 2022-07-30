#ifdef GL_ES
precision mediump float;//lowp / mediump/highp
#endif

/*Always include this to get the position
of the pixel and map the shader correctly
onto the shape*/
attribute vec3 aPosition;

void main() {
  //Copy the position data into a vec4(x, y, z, w)
  //When the w = 0.0, the vector is treated as direction.
  //When the w = 1.0, the vector is treated as position.
  //Scalar or Vector
  vec4 positionVec4 = vec4(aPosition, 1.0);

  // Make sure the shader covers the entire screen:
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

  // Send the vertex information on to the fragment shader
  gl_Position = positionVec4;
}
