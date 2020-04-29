import { getShaderProgram } from './modules/shader.js';
import { initBuffers } from './modules/buffer.js';
import { drawScene } from './modules/render.js'

function main() {
    const canvas = document.querySelector("#glCanvas");
    // Initialize the GL context
    const gl = canvas.getContext("webgl");

    // Only continue if WebGL is available and working
    if (gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    // Set clear color to black, fully opaque
    //gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    //gl.clear(gl.COLOR_BUFFER_BIT);

    const shaderProgram = getShaderProgram(gl);

    const programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
            vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
        },
    };

    const buffers = initBuffers(gl);

    var then = 0;
    let rotation = 0.0;

    // Draw the scene repeatedly
    function render(now) {
      now *= 0.001;  // convert to seconds
      const deltaTime = now - then;
      then = now;
  
      drawScene(gl, programInfo, buffers, rotation*3);
  
      requestAnimationFrame(render);
      rotation += deltaTime;
    }
    requestAnimationFrame(render);

}

window.onload = main;
