/*Example:Color the entire background blue*/

#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    float offset = sin(u_time/2.0)*2.0;

    vec2 pos = vec2(0.5)-st;
    float radius = length(pos)+offset/20.0;
    float angle = atan(pos.y, pos.x)+offset;

    // float function = cos(angle*3.0);
    float function = abs(cos(angle*2.5))/10.0+0.15;
    // float function = abs(cos(angle*12.0)*sin(angle*3.0))*0.2+0.1;

    // vec3 color = vec3(step(radius, function));
    vec3 color = vec3(1.0-smoothstep(function, function+0.05, radius));
    gl_FragColor = vec4(color,1.0);
}
