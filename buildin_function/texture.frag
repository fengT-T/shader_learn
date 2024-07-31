uniform vec2 u_resolution;
uniform sampler2D u_tex0;

void main() {
    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
    vec2 uv = (gl_FragCoord.xy / u_resolution) * aspect;
    gl_FragColor = texture(u_tex0, uv);
}
