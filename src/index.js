import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

const video = document.querySelector('video');
const captureButton = document.getElementById('capture');

async function setupWebcam() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;

    return new Promise((resolve) => {
        video.onloadedmetadata = () => {
            video.play();
            resolve();
        };
    });
}

async function detectObjects() {
    const model = await cocoSsd.load();

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const predictions = await model.detect(canvas);

    console.log('Predictions:', predictions);
}

async function main() {
    await setupWebcam();

    captureButton.addEventListener('click', () => {
        detectObjects();
    });
}

main();