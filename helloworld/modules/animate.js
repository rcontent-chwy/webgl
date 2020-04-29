export function rotate(mat4, modelViewMatrix, rotation) {
    mat4.rotate(modelViewMatrix,  // destination matrix
        modelViewMatrix,  // matrix to rotate
        rotation,   // amount to rotate in radians
        [0, 0, 1]);
};

export function rotateSixAxis(mat4, modelViewMatrix, rotation) {
    mat4.rotate(modelViewMatrix, modelViewMatrix, rotation * .1, [0.2, 0.3, 0.4]);
};
