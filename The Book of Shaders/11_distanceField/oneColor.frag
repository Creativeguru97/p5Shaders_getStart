/*Example:Color the entire background blue*/

#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    st.x = st.x * u_resolution.x / u_resolution.y;
    st = st * 2.0 - 1.0;//Map the space to -1 to 1

    // float d = length(abs(st)-0.3);
    float d = distance(abs(st), vec2(0.3));
    gl_FragColor = vec4(vec3(fract(d*10.0)),1.0);
}
