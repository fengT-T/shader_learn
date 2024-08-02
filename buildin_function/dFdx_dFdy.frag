uniform vec2 u_resolution;
uniform sampler2D u_tex0;
#include "lygia/color/luminance.glsl"

void main(){
    vec2 uv = (gl_FragCoord.xy / u_resolution);
    vec4 color = texture(u_tex0, uv);
    float l = luminance(color);
    // float mask = dFdx(l) + dFdy(l);
    float mask = fwidth(l);
    gl_FragColor = vec4(vec3(mask), 1.0);
}
