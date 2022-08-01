/*Example:Color the entire background blue*/

#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

#define PI 3.14159265359

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

float crossShape(in vec2 st, in vec2 size1, in vec2 size2){
  return rect(st, size1)+rect(st, size2);
}

mat2 rotate2d(float angle){
  return mat2(cos(angle),-sin(angle),
              sin(angle), cos(angle));
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    st -= vec2(0.5);//Move space from the center to the vec2(0.0)
    st = rotate2d(sin(u_time)*2.0*PI)*st;//
    st += vec2(0.5); //Move it back to the original place

    vec3 color = vec3(st.x,st.y,0.0);// Show the coordinates of the space on the background
    color += vec3(crossShape(st, vec2(0.025,0.125), vec2(0.125,0.025)));
    gl_FragColor = vec4(color,1.0);
}
