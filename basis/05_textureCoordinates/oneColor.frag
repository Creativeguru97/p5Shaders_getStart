
// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

// recieve vTexCoord from vertex shader
varying vec2 vTexCoord;
//vTexCoord is a value that goes from 0.0 - 1.0 depending on the pixels location
// we can use it to access every pixel on the screen
vec2 st = vTexCoord;

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  
  vec2 uv = vTexCoord;
  gl_FragColor = vec4(uv, 1.0);
}
