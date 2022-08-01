/*Example:Color the entire background blue*/

#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float rect(in vec2 st, in vec2 size){
  //To flip the size value affect right. Like the value is bigger, the more the rectangle is actually larger.
  size = vec2(0.5) - size;
  vec2 B_L = smoothstep(size, size+vec2(0.02), st);
  vec2 R_T = smoothstep(size, size+vec2(0.02), vec2(1.0)-st);
  return B_L.x*B_L.y*R_T.x*R_T.y;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec2 translate = u_mouse;
    st -= translate;
    // st -= vec2(-0.5, -0.5)+translate;

    vec3 color = vec3(rect(st, vec2(0.125,0.125)));
    gl_FragColor = vec4(color,1.0);
}
