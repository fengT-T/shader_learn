uniform vec2 u_resolution;
/**
 * 和 fract() 等价
  */
float stepGrid(float x) {
    return step(0.1, x) * step(x, 0.9);
}
void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    uv = mod(uv * 6, 1);
    float mask = stepGrid(uv.x) * stepGrid(uv.y);

    gl_FragColor = vec4(
            uv * mask,
            mask,
            1.0
        );
}
