uniform vec2 u_resolution;

/**
* float clamp(float value, float minVal, float maxVal)
* value：想要限制在指定范围内的输入值。
* minVal：该值不应低于的最小值。
* maxVal：该值不应超过的最大值。
*/
void main() {
    vec2 uv = (gl_FragCoord.xy / u_resolution);
    float mask = step(abs(clamp(uv.x, 0.25, 0.75) - uv.y), 0.1);
    gl_FragColor = vec4(mask, 0.0, 0.0, 1.0);
}
