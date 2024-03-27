import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

window.canvas = document.getElementById('Latour')
      window.canvas.width = innerWidth 
      window.canvas.height = innerHeight 
      window.iw = innerWidth
      window.ih = innerHeight

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(70, iw / ih)
      
// const geometry = new THREE.BoxGeometry(1, 1, 1)
      
// const material = new THREE.MeshPhongMaterial({ color:0xffffff })
      
// const mesh = new THREE.Mesh(geometry, material)

const light = new THREE.PointLight(0xeeeeee, 3)
      
scene.add(light)      
// scene.add(mesh)
      
camera.position.set(0, 0, 3)
light.position.set(0, 0, 3)
      
const renderer = new THREE.WebGLRenderer({ canvas })
  
// Création d'une instance du chargeur GLTFLoader
let loader = new THREE.GLTFLoader();

// Chargement du modèle 3D à partir du fichier GLTF
loader.load('chemin/vers/Tour3D.gltf', function(gltf) {
    // Ajout du modèle 3D à la scène
    scene.add(gltf.scene);

    // Rendu de la scène avec la caméra spécifiée (assurez-vous que "camera" est défini)
    renderer.render(scene, camera);
});

//loop()
      
// function loop() {
//     requestAnimationFrame(loop)
//     mesh.rotation.x += 0.005
//     mesh.rotation.y += 0.01
//     renderer.render(scene, camera)
// }