import * as shape from './shapes.js'

function setBuffers(gl, shape) {
    // Create a buffer for the shapes's positions.

    const positionBuffer = gl.createBuffer();

    // Select the positionBuffer as the one to apply buffer
    // operations to from here out.

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Now create an array of positions for shape

    const positions = shape.positions;

    // Now pass the list of positions into WebGL to build the
    // shape. We do this by creating a Float32Array from the
    // JavaScript array, then use it to fill the current buffer.

    gl.bufferData(gl.ARRAY_BUFFER,
        new Float32Array(shape.positions),
        gl.STATIC_DRAW);


    if (shape.faceColors) {

    }
    const faceColors = shape.faceColors;

    // Convert the array of colors into a table for all the vertices.

    var colors = [];
    if (shape.faceColors) {
        const faceColors = shape.faceColors;
        for (var j = 0; j < faceColors.length; ++j) {
            const c = faceColors[j];

            // Repeat each color four times for the four vertices of the face
            colors = colors.concat(c, c, c, c);
        }
    }

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    // This array defines each face as two triangles, using the
    // indices into the vertex array to specify each triangle's
    // position.

    const indices = shape.indices;

    // Now send the element array to GL

    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indices), gl.STATIC_DRAW);

    return {
        position: positionBuffer,
        color: colorBuffer,
        indices: indexBuffer,
        animationSpeed: shape.animationSpeed,
        coords: shape.coords,
        animate: shape.animate,
    };

};

export function initBuffers(gl) {

    let buffers = [];
    const shapes = [shape.cube, shape.cube2, shape.cube3];
    shapes.forEach(shape => {
        buffers.push(setBuffers(gl, shape));
    });
    return buffers;

};
