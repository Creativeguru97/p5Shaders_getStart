/*Example:Color the entire background blue*/

#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot (vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) -
          smoothstep( pct, pct+0.01, st.y);
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;

  vec3 colorA = vec3(0.149,0.141,0.912);
  vec3 colorB = vec3(1.000,0.833,0.224);

  vec3 percentage = vec3(st.x);
  percentage.r = smoothstep(0.0,1.0, st.x);
  percentage.g = sin(st.x*PI);
  percentage.b = pow(st.x, 0.5);
  //At here, the "pct" is mixture percentage of the 2 colors
  // vec3 color = mix(colorA, colorB, percentage);
  vec3 color = mix(colorA, colorB, percentage);
  // Plot transition lines for each channel
  color = mix(color,vec3(1.0,0.0,0.0), plot(st,percentage.r));
  color = mix(color,vec3(0.0,1.0,0.0), plot(st,percentage.g));
  color = mix(color,vec3(0.0,0.0,1.0), plot(st, percentage.b));
  gl_FragColor = vec4(color, 1.0);
}
