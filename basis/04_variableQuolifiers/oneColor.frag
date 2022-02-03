
// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

//Uniforms are constant variable (constant per a frame)
//So they can be updated between draw()
//Uniforms can be accessed by all of the parallel threads in our GPU
/*
  They are called uniforms because the information being
  received by each thread is the same, as a result of this
  necessity of uniformity for all threads, each thread can
  read the input data but cannot modify it.
*/
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

//In glsl, we need to define a funciton above the calling it.
vec3 rgb(float r, float g, float b){
  return vec3(r/255.0, g/255.0, b/255.0);
}

void main() {
    // A blue color. The RGB color spectrum goes from 0 - 1 instead of 0 - 255
    vec3 color = rgb(0.0, 255.0, 0.0);

    // gl_FragColor is a built in shader variable, and you .frag file must contain it
    // We are setting the vec3 color into a new vec4, with an transparency of 1 (no opacity)
    gl_FragColor = vec4(color, 1.0);
}
