uniform vec2 u_resolution;

/**
  * float max(float x, float y);
  * 以下是该函数工作原理的详细说明max：
  * 如果x大于或等于y，函数返回x。
  * 如果y大于x，函数返回y。
 */
void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    float mask = max(
            step(uv.x, 0.25),
            step(0.75, uv.x));
    gl_FragColor = vec4(mask * uv, mask, 1.0);
}
