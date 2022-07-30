/*Example:Color the entire background blue*/

#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;

  float y = st.y * u_mouse.y;
  float x = st.x * u_mouse.x;
  float y2 = st.y;
  float x2 = st.x*(sin(u_time)+1.0)/2.0;
  gl_FragColor = vec4(x2, y2, 1.0, 1.0);
}
//Normalizing values makes it easier to map values between variables.
