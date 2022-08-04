/*Example:Color the entire background blue*/

#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float blurred_circle(vec2 st, float r, float blur){
  float circle = smoothstep(r-blur, r+blur, distance(st, vec2(u_mouse.x, u_mouse.y)));
  return circle;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    st*=3.0;//Scale up the space by 3
    st = fract(st);//Take fractional part of every pixel.

    // vec3 color = vec3(st.x,st.y,0.0);// Show the coordinates of the space on the background
    vec3 color = vec3(blurred_circle(st, 0.3, 0.05));
    gl_FragColor = vec4(color,1.0);
}
