/*Example:Color the entire background blue*/

#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec2 brickTile(vec2 st, float zoom){
  st *= zoom;
  st.x += step(1.0, mod(st.y, 2.0))*0.5;
  return fract(st);
}

vec2 rotate2d(vec2 st, float angle){
  st -= vec2(0.5);
  st = mat2(cos(angle),-sin(angle),
              sin(angle),cos(angle))*st;
  st += vec2(0.5);
  return st;
}

float rect(in vec2 st, in vec2 size){
  //To flip the size value affect right. Like the value is bigger, the more the rectangle is actually larger.
  size = vec2(0.5) - size;
  vec2 B_L = smoothstep(size, size+vec2(0.01), st);
  vec2 R_T = smoothstep(size, size+vec2(0.01), vec2(1.0)-st);
  return B_L.x*B_L.y*R_T.x*R_T.y;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    // st = rotate2d(st, sin(u_time/2.0)*PI);//Use a matrix to rotate the scape 45 degrees.
    st = brickTile(st, 5.0);

    vec3 color = vec3(st.x,st.y,0.0);// Show the coordinates of the space on the background
    // vec3 color = vec3(rect(st, vec2(0.48)));
    gl_FragColor = vec4(color,1.0);
}
