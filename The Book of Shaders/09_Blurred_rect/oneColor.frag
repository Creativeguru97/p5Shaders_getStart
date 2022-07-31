/*Example:Color the entire background blue*/

#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float rectangle(vec2 st){
  vec2 B_L = step(vec2(0.1), st);//Similar to (XY greater than (0.1, 0.1))
  vec2 R_T = step(vec2(0.1), 1.0-st);
  return B_L.x * B_L.y * R_T.x * R_T.y;
}

float blurred_rect(vec2 st, float start, float end){
  float left = smoothstep(start, end, st.x);
  float bottom = smoothstep(start, end, st.y);
  float right = smoothstep(start, end, 1.0-st.x);
  float top = smoothstep(start, end, 1.0-st.y);

  //This 2 line are equivalent to the 4 lines above
  vec2 R_L = smoothstep(vec2(start), vec2(end), st);
  vec2 T_B = smoothstep(vec2(start), vec2(end), 1.0-st);

  // return left*bottom*right*top;
  return R_L.x * R_L.y * T_B.x * T_B.y;
}

float rect_outline(vec2 st, float size, float wid){
  size = 0.5-size;
  //Outer line
  float O_left = step(size-wid/2.0, st.x);
  float O_bottom = step(size-wid/2.0, st.y);
  float O_right = step(size-wid/2.0, 1.0-st.x);
  float O_top = step(size-wid/2.0, 1.0-st.y);

  //Inner line
  float I_left = step(size+wid/2.0, st.x);
  float I_bottom = step(size+wid/2.0, st.y);
  float I_right = step(size+wid/2.0, 1.0-st.x);
  float I_top = step(size+wid/2.0, 1.0-st.y);

  //This 4 line are equivalent to the 8 lines above
  vec2 O_B_L = step(vec2(size-wid/2.0), st);
  vec2 O_R_T = step(vec2(size-wid/2.0), 1.0-st);
  vec2 I_B_L = step(vec2(size+wid/2.0), st);
  vec2 I_R_T = step(vec2(size+wid/2.0), 1.0-st);

  // return O_left*O_bottom*O_right*O_top - I_left*I_bottom*I_right*I_top;
  return O_B_L.x * O_B_L.y * O_R_T.x * O_R_T.y - I_B_L.x * I_B_L.y * I_R_T.x * I_R_T.y;
}

float blurred_rect_outline(vec2 st, float size, float wid, float blurriness){
  size = 0.5-size;
  //Outer line
  float O_left = smoothstep(size-wid/2.0-blurriness, size-wid/2.0+blurriness, st.x);
  float O_bottom = smoothstep(size-wid/2.0-blurriness, size-wid/2.0+blurriness, st.y);
  float O_right = smoothstep(size-wid/2.0-blurriness, size-wid/2.0+blurriness, 1.0-st.x);
  float O_top = smoothstep(size-wid/2.0-blurriness, size-wid/2.0+blurriness, 1.0-st.y);

  //Inner line
  float I_left = smoothstep(size+wid/2.0-blurriness, size+wid/2.0+blurriness, st.x);
  float I_bottom = smoothstep(size+wid/2.0-blurriness, size+wid/2.0+blurriness, st.y);
  float I_right = smoothstep(size+wid/2.0-blurriness, size+wid/2.0+blurriness, 1.0-st.x);
  float I_top = smoothstep(size+wid/2.0-blurriness, size+wid/2.0+blurriness, 1.0-st.y);

  //This 4 line are equivalent to the 8 lines above
  vec2 O_B_L = smoothstep(vec2(size-wid/2.0-blurriness), vec2(size-wid/2.0+blurriness), st);
  vec2 O_R_T = smoothstep(vec2(size-wid/2.0-blurriness), vec2(size-wid/2.0+blurriness), 1.0-st);
  vec2 I_B_L = smoothstep(vec2(size+wid/2.0-blurriness), vec2(size+wid/2.0+blurriness), st);
  vec2 I_R_T = smoothstep(vec2(size+wid/2.0-blurriness), vec2(size+wid/2.0+blurriness), 1.0-st);

  // return O_left*O_bottom*O_right*O_top - I_left*I_bottom*I_right*I_top;
  return O_B_L.x * O_B_L.y * O_R_T.x * O_R_T.y - I_B_L.x * I_B_L.y * I_R_T.x * I_R_T.y;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.0);

    color = vec3(rectangle(st));
    // color = vec3(blurred_rect(st, 0.1, 0.2));
    // color = vec3(blurred_rect(st, 0.1, u_mouse.y/2.0));//intereactive!!!
    // color = vec3(rect_outline(st, 0.3, 0.05));
    // color = vec3(blurred_rect_outline(st, 0.3, 0.05, u_mouse.y/20.0));

    gl_FragColor = vec4(color,1.0);
}
