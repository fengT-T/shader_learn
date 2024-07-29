uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    gl_FragColor = vec4(
            step(
                abs(uv.x - 0.5) + abs(uv.y - 0.5), 0.5
            ),
            0.0, 0.0, 1.0
        );
}
