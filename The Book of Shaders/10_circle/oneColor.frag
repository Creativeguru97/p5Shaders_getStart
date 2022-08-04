/*Example:Color the entire background blue*/

#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float circle(vec2 st, float r){
  float circle = step(0.5-r, 0.5-distance(st, vec2(u_mouse.x, u_mouse.y)));
  return circle;
}

float blurred_circle(vec2 st, float r, float blur){
  r = 0.5-r;
  float circle = smoothstep(r-blur, r+blur, 0.5-distance(st, vec2(u_mouse.x, u_mouse.y)));
  return circle;
}

float circle_outline(vec2 st, float r, float wid){
  r = 0.5-r;
  float o_circle = step(r-wid/2.0, 0.5-distance(st, vec2(u_mouse.x, u_mouse.y)));
  float i_circle = step(r+wid/2.0, 0.5-distance(st, vec2(u_mouse.x, u_mouse.y)));
  return o_circle-i_circle;
}

float blurred_circle_outline(vec2 st, float r, float wid, float blur){
  r = 0.5-r;
  float o_circle = smoothstep(r-wid/2.0-blur, r-wid/2.0+blur, 0.5-distance(st, vec2(u_mouse.x, u_mouse.y)));
  float i_circle = smoothstep(r+wid/2.0-blur, r+wid/2.0+blur, 0.5-distance(st, vec2(u_mouse.x, u_mouse.y)));
  return o_circle-i_circle;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;

    vec3 color = vec3(circle(st, 0.3));
    // vec3 color = vec3(blurred_circle(st, 0.3, 0.05));
    // vec3 color = vec3(circle_outline(st, 0.3, 0.05));
    // vec3 color = vec3(blurred_circle_outline(st, 0.3, 0.05, 0.05));
    gl_FragColor = vec4(color,1.0);
}
