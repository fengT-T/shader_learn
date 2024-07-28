uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    gl_FragColor = vec4(
            smoothstep(vec3(1.0, 0.0, 1.0), vec3(0.0, 1.0, 1.0), vec3(uv.x, uv.x, uv.x)),
            1.0
        );
}
