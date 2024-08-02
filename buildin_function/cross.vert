uniform float u_time;
uniform mat4 viewMatrixu_modelViewProjectionMatrix;
varying vec3 vPos;

void setPosition3D(mat3 transform) {
    vec3 pos = transform * position.xyz;
    vPos = pos;
    gl_Position = u_modelViewProjectionMatrix * vec4(pos, 1.0);
}

void main() {
    float angleX = 0.1;
    float angleY = -u_time;
    float angleZ = u_time * 0.5;

    mat3 rotateX = transpose(mat3(
                vec3(1, 0, 0),
                vec3(0, cos(angleX), -sin(angleX)),
                vec3(0, sin(angleX), cos(angleX))
            ));

    mat3 rotateY = transpose(mat3(
                vec3(cos(angleY), 0, sin(angleY)),
                vec3(0, 1, 0),
                vec3(-sin(angleY), 0, cos(angleY))
            ));

    mat3 rotateZ = transpose(mat3(
                vec3(cos(angleZ), -sin(angleZ), 0),
                vec3(sin(angleZ), cos(angleZ), 0),
                vec3(0, 0, 1)
            ));

    setPosition3D(rotateZ * rotateY * rotateX);
}
