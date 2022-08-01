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

float crossShape(in vec2 st, in vec2 size1, in vec2 size2){
  return rect(st, size1)+rect(st, size2);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec2 translate = vec2(cos(u_time),sin(u_time));
    st += translate*vec2(0.25, 0.10);//(width, hight) of the orbit

    vec3 color = vec3(crossShape(st, vec2(0.025,0.125), vec2(0.125,0.025)));
    gl_FragColor = vec4(color,1.0);
}
