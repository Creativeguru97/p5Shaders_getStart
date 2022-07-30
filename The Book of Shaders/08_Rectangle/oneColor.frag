/*Example:Color the entire background blue*/

#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.0);

    float left = step(0.1, st.x);//Similar to (X greater than 0.1)
    float bottom = step(0.1, st.y);//Similar to (Y greater than 0.1)

    vec2 B_L = step(vec2(0.1), st);//Similar to (XY greater than (0.1, 0.1))
    vec2 R_T = step(vec2(0.1), 1.0-st);

    color = vec3(B_L.x * B_L.y * R_T.x * R_T.y);

    gl_FragColor = vec4(color,1.0);
}
