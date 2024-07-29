uniform vec2 u_resolution;

/**
* 该smoothstep函数有三个参数：edge0、edge1和x，其中edge0和edge1是定义插值范围的阈值，x是插值因子。
* 该smoothstep函数计算结果如下：
* smoothInterpolation = smoothstep(edge0, edge1, x)
* 平滑插值smoothInterpolation计算如下：
* 如果x小于或等于edge0，则结果为 0。
* 如果x大于或等于edge1，则结果为 1。
* 如果x介于edge0和之间edge1，则使用Hermite插值函数在0和1之间平滑地插入结果。
*/
void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    gl_FragColor = vec4(
            smoothstep(vec3(1.0, 0.0, 1.0), vec3(0.0, 1.0, 1.0), vec3(uv.x, uv.y, uv.x)),
            1.0
        );
}
