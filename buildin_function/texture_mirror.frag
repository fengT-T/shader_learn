uniform vec2 u_resolution;
uniform sampler2D u_tex0;

void main() {
    vec2 repeat = vec2(8.0, 4.0);
    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
    vec2 uv = gl_FragCoord.xy / u_resolution;
    uv *= aspect * repeat;
    vec2 mirror = ceil(mod(uv + 2.0, 2.0)) - 1;
    gl_FragColor = texture(u_tex0, abs(mirror - fract(uv)));
}
