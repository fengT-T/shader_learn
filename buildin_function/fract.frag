uniform vec2 u_resolution;

/**
 * fract(float x)
 * 返回小数部分, 一个不错的周期函数
  */
float stepGrid(float x) {
    return step(0.1, x) * step(x, 0.9);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    uv = fract(uv * 6);
    float mask = stepGrid(uv.x) * stepGrid(uv.y);

    gl_FragColor = vec4(
            uv * mask,
            mask,
            1.0
        );
}
