import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

const video = document.querySelector('video');
const captureButton = document.getElementById('capture');

async function setupWebcam() {
  
}

async function detectObjects() {
  
}

async function main() {
  await setupWebcam();

  captureButton.addEventListener('click', () => {
    detectObjects();
  });
}

main();
