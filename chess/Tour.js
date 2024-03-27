import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

window.canvas = document.getElementById('Latour')

window.iw = innerWidth
window.ih = innerHeight

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, iw / ih, 0.1, 1000); 
const geometrie = new THREE.BoxGeometry(1, 1, 1); 
const materiau = new THREE.MeshBasicMaterial({ color: 0xffffff });
const maillage = new THREE.Mesh(geometrie, materiau);
scene.add(maillage);

camera.position.set(0, 0, 2);

const rendu = new THREE.WebGLRenderer({ canvas });

function boucle() {
    requestAnimationFrame(boucle);
    maillage.rotation.y += 0.01; 
    rendu.render(scene, camera);
}

boucle();