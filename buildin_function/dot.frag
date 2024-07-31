uniform vec2 u_resolution;
#define PI 3.14159265359

/**
* dot(a, b)
* a⋅b = |a||b|cos𝜃
* 其中 |a| 和 |b| 分别是向量 a 和 b 的模（长度），而 cos 𝜃  是这两个向量之间的夹角。
*
* 点积的几何意义可以总结如下：
* a⋅b 可以看作是向量  a 在 b 方向上投影的长度乘以  b 的长度。
* 同样，也可以理解为  b 在 a 方向上投影的长度乘以 a 的长度。
*
* 角度信息:
* 如果 a⋅b>0，则两向量之间的夹角小于 90°，表示它们大致指向相同方向。
* 如果 a⋅b=0，则两向量正交（垂直）。
* 如果 a⋅b<0，则两向量之间的夹角大于 90°，表示它们大致指向相反方向。
*
* 计算方式：交叉相乘然后求和
*/
void main() {
    vec2 aspect = vec2(1.0, u_resolution.y / u_resolution.x);
    vec2 uv = (gl_FragCoord.xy / u_resolution) * aspect;
    vec2 hight = vec2(0, -1);
    vec2 top = vec2(0.5, 0.75) * aspect;
    vec2 line = normalize(vec2(uv - top));

    gl_FragColor = vec4(
            step(
                cos(PI / 3.0),
                dot(line, hight)
            ) * step(0.25, uv.y),
            0.0, 0.0, 1.0);
}
