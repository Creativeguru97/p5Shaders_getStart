/*Example:Color the entire background blue*/

#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st){
  return smoothstep(0.0, 0.01, abs(st.y-st.x));//diagonally right line
  // return smoothstep(0.0, 0.01, abs(-st.y+1.0-st.x));//diagonally left line
}

float plot2(vec2 st, float pct){
  return smoothstep(pct-0.01, pct, st.y)-//Below the line
          smoothstep(pct, pct+0.01, st.y);//Above the line
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;

  // float y = st.x;
  // float y = pow(st.x, 2.0);
  float y = pow(st.x, sin(u_time)+1.5);
  // float y = step(0.5, st.x);
  // float y = smoothstep(0.1, 0.9, st.x);
  // float y = smoothstep(0.2, 0.5, st.x) - smoothstep(0.5, 0.8, st.x);
  // float y = mod(st.x, 1.0);
  // float y = sin(st.x*18.0)/5.0+0.5;
  // float y = abs(sin(st.x*18.0))/5.0+0.5;
  // float y = clamp(st.x, 0.4, 0.6);

  //Plot a line
  // float percentage = plot(st);
  float percentage = plot2(st, y);
  // color = (1.0-pct) * color+pct*vec3(1.0, 0.0, 1.0);
  vec3 color = percentage*vec3(0.7, 0.8, 0.9);
  gl_FragColor = vec4(color, 1.0);
}
