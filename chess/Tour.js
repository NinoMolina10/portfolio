import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

//const loader = new GLTFLoader();

window.canvas = document.getElementById('Latour')
window.canvas.width = innerWidth
window.canvas.height = innerHeight
window.iw = innerWidth
window.ih = innerWidth

const scene = new THREE.Scene()
const light = new THREE.PointLight(0xeeeeee, 4)
scene.background = new THREE.Color(0xB8CCEA);
scene.add(light)



let loader = new THREE.ObjectLoader()
loader.load(
    '../portfolioNM/src/Photos/chess_rook.json',
    function(object) {
        object.position.set(10, 0, 1)
        scene.add(object)
    }
)



