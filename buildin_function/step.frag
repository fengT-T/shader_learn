uniform vec2 u_resolution;

/**
  * float step(float edge, float x)
  * 如果x < edge， 则该函数返回 0.0。
  * 如果x >= edge，则该函数返回 1.0。
  */
void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float red = step(0.5, uv.x);
    gl_FragColor = vec4(red, 0.0, 0.0, 1.0);
}
