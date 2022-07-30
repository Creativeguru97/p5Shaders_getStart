/*Example:Color the entire background blue*/

#ifdef GL_ES //a shader API which is automatically used by your GPU
precision mediump float;//lowp / mediump/highp
#endif

void main() {
    gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
}
//Normalizing values makes it easier to map values between variables.
