#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

// These are our passed in information from the sketch.js
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
  /*position of the pixel divided by resolution,
	to get normalized positions (0.0 - 1.0) on the canvas*/
	vec2 st = gl_FragCoord.xy/u_resolution;

  // make the color depend on the mouse input using the uniform, calculate
  // the st.x, u_mouse.x, u_mouse.y, st.y are all mapped to the 0-1 space
  // so multiplying them will still make a new number between 0 and 1!
  float y = st.y * u_mouse.y;
  float x = st.x * u_mouse.x;

  // lets map x to red, and y to green (try to edit this line and make other colors)
  // remember to keep all values between 0 and 1
  vec3 color = vec3(x,y,1.0);      // vec3(r,g,b)

  // gl_FragColor is a built in shader variable, and your .frag file must contain it
  // We are setting the vec3 color into a new vec4, with a transparency of 1 (no opacity)
	gl_FragColor = vec4(color,1.0);  // vec4(r,g,b,a)
}
