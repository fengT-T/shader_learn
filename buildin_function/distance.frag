uniform vec2 u_resolution;
uniform vec2 u_mouse;

// GLSL中的函数distance计算两个点或向量之间的欧几里得距离。
// length函数distance可以互换：
// length(p1-p0)= distance(p0, p1)
void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 aspect = vec2(1.0, u_resolution.y / u_resolution.x);
    gl_FragColor = vec4(
            step(
                distance(
                    uv * aspect,
                    (u_mouse / u_resolution) * aspect),
                0.2),
            0.0, 0.0, 1.0
        );
}
