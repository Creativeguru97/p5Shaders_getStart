/*Example:Color the entire background blue*/

#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

#define PI 3.14159265359
#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    st = st*2.0-1.0;//Map the space to -1 to 1

    // Angle and radius from the current pixel
    float a = atan(st.x,st.y)+PI;
    float r = TWO_PI/4.0;
    // Shaping function that modulate the distance
    float function = cos(floor(0.5+a/r)*r-a)*length(st);
    vec3 color = vec3(1.0-smoothstep(0.3,0.40,function));

    gl_FragColor = vec4(color,1.0);
}
