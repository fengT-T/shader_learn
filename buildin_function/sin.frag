uniform vec2 u_resolution;
#define PI 3.14159265359

void main() {
    vec2 aspect = vec2(1.0, u_resolution.y / u_resolution.x);
    vec2 uv = (gl_FragCoord.xy / u_resolution) * aspect;
    vec2 center = vec2(0.5, 0.5) * aspect;
    float dis = distance(center, uv);
    gl_FragColor = vec4(
            abs(sin(dis * PI * 10)), 0.0, 0.0, 1.0
        );
}
