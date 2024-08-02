uniform vec2 u_resolution;
uniform sampler2D u_tex0;
uniform vec3 u_light;
uniform vec3 u_lightColor;
varying vec4 v_position;
#ifdef MODEL_VERTEX_NORMAL
varying vec3 v_normal;
#endif

void main() {
    vec3 xdPos = dFdx(v_position.xyz);
    vec3 ydPos = dFdy(v_position.xyz);
    vec3 n = cross(xdPos, ydPos);
    // vec3 n = v_normal;
    float l = dot(normalize(n), normalize(u_light - v_position.xyz));

    gl_FragColor = vec4(u_lightColor * l, 1.0);
}
