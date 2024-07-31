uniform vec2 u_resolution;
#define PI 3.14159265359

/**
 * float atan(float y, float x);
 * atan(y, x)函数用于计算正 x 轴与(x, y)二维笛卡尔坐标系中的点之间的角度（以弧度为单位）
 * 只要有y,x坐标值就能够输出弧度
 */
void main() {
    vec2 aspect = vec2(1.0, u_resolution.y / u_resolution.x);
    vec2 uv = (gl_FragCoord.xy / u_resolution) * aspect;
    vec2 center = vec2(0.5, 0.5) * aspect;
    vec2 d_uv_center = uv - center;
    float mask = step(
            length(d_uv_center),
            center.y
        );

    vec3 color = mix(
            vec3(1.0, 1.0, 0.0),
            vec3(1.0, 0.0, 1.0),
            abs(atan(d_uv_center.y, d_uv_center.x) / PI)
        );
    gl_FragColor = vec4(mask * color, 1.0);
}
