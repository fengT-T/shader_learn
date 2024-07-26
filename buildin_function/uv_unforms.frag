uniform vec2 u_resolution;

/**
 * gl_FragCoord是一个四维向量（vec4），仅在片段着色器中可用。
 * 它包含片段相对于窗口的坐标值 (x, y, z, 1/w)。
 * 如果使用多重采样，则该值可以是像素内的任意位置或片段样本之一。
 * 这个值是由固定功能硬件在顶点处理后插值原始图元以生成片段时产生的结果。
 * 其中z分量是片段深度值，如果着色器没有写入gl_FragDepth的话，就会使用这个值作为片段的深度。
 * 默认情况下，gl_FragCoord 假设窗口坐标的原点位于左下角，并且像素中心位于半像素中心。
*/
void main() {
    gl_FragColor = vec4(gl_FragCoord.xy / u_resolution, 0.0, 1.0);
}
