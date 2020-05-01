export function rotateX(mat4, modelViewMatrix, rotation) {
    mat4.rotate(modelViewMatrix, modelViewMatrix, rotation * .1, [1.0, 0.0, 0.0]);
};

export function rotateY(mat4, modelViewMatrix, rotation) {
    mat4.rotate(modelViewMatrix, modelViewMatrix, rotation * .1, [0.0, 1.0, 0.0]);
};

export function rotateZ(mat4, modelViewMatrix, rotation) {
    mat4.rotate(modelViewMatrix, modelViewMatrix, rotation * .1, [0.0, 0.0, 1.0]);
};
