uniform vec2 u_resolution;
void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec3 red = vec3(1.0, 0.0, 0.0);
    vec3 green = vec3(0.0, 1.0, 0.0);
    vec3 blue = vec3(0.0, 0.0, 1.0);
    vec3 white = vec3(1.0, 1.0, 1.0);
    gl_FragColor = vec4(
            mix(
                mix(green, white, uv.x),
                mix(red, blue, uv.x),
                uv.y
            ),
            1.0
        );
}
