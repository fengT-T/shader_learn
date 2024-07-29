uniform vec2 u_resolution;

/**
*
* 该mix函数有三个参数：start、end和t，其中start和end是要在其中进行插值的值，t是插值因子。
* 该mix函数按如下方式计算结果：
* mix(start, end, t) = start * (1 - t) + end * t
* 以下是该函数工作原理的详细说明mix：
* 当t为0时，结果等于start。
* 当t为1时，结果等于end。
* 当t介于0和1之间时，结果是start和之间的线性插值end。
**/
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
