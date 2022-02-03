/*Example:Color the entire background blue*/

// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

void main() {
    // A blue color. The RGB color spectrum goes from 0 - 1 instead of 0 - 255
    vec3 color = vec3(0.0, 1.0, 0.0);

    // gl_FragColor is a built in shader variable, and you .frag file must contain it
    // We are setting the vec3 color into a new vec4, with an transparency of 1 (no opacity)
    gl_FragColor = vec4(color, 1.0);
}
