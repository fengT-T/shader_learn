uniform vec2 u_resolution;

/**
 *
 * https://graphtoy.com/?f1(x,t)=max(step(x,0.25),step(0.75,x))&v1=true&f2(x,t)=step(x,0.25)&v2=true&f3(x,t)=step(0.75,x)&v3=true&f4(x,t)=&v4=false&f5(x,t)=&v5=false&f6(x,t)=&v6=false&grid=1&coords=0,0,12
 * max 可以将两个波形高的部分组合起来
 * 反之min组合的就是两个波形低的部分
 */
float stepUnion(float x) {
    return max(
        step(x, 0.25),
        step(0.75, x)
    );
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float color_mask = max(stepUnion(uv.x), stepUnion(uv.y));
    gl_FragColor = vec4(color_mask * uv, color_mask, 1.0);
}
