uniform vec2 u_resolution;

/**
* GLSL中该函数的语法ceil如下：
* ceil(x) 其中x是要计算上限值的输入值。
*
* 该ceil函数的输出将是 的上限值x。
* ceil该函数在 GLSL 中的工作方式如下：
* 如果输入值x已经是整数，则该ceil函数将返回相同的整数值而不进行任何更改。
* 如果输入值x是浮点数，该ceil函数将把该值向上舍入为下一个整数。
* 即使输入的是整数，该ceil函数也始终返回浮点值。
*/
void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    gl_FragColor = vec4(
            ceil(uv.x * 10.0) / 10.0,
            0.0, 0.0, 1.0
        );
}
