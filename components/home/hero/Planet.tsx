import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Constants and Global Variables
let scene, renderer, camera, saturn, light, controls;
let WIDTH = typeof window !== 'undefined' ? window.innerWidth : 0;
let HEIGHT = typeof window !== 'undefined' ? window.innerHeight : 0;

const parameters = {
  minRadius: 30,
  maxRadius: 50,
  minSpeed: 0.015,
  maxSpeed: 0.025,
  particles: 300,
  minSize: 0.1,
  maxSize: 2,
};

const Colors = {
  green: 0x8fc999,
  blue: 0x5fc4d0,
  orange: 0xee5624,
  yellow: 0xfaff70,
};

function getMat(color) {
  return new THREE.MeshStandardMaterial({
    color: color,
    roughness: .9,
    emissive: 0x270000,
    shading: THREE.FlatShading
  });
}

function getRandomColor() {
  const colorsLength = Object.keys(Colors).length;
  const colIndx = Math.floor(Math.random() * colorsLength);
  return Colors[Object.keys(Colors)[colIndx]];
}

function rule3(v, vmin, vmax, tmin, tmax) {
  const nv = Math.max(Math.min(v, vmax), vmin);
  const dv = vmax - vmin;
  const pc = (nv - vmin) / dv;
  const dt = tmax - tmin;
  return tmin + (pc * dt);
}

class Saturn {
    planet: THREE.Mesh;
    ring: THREE.Mesh;
    nParticles: number;
    mesh: THREE.Object3D;
  constructor() {
    const geomPlanet = new THREE.TetrahedronGeometry(20, 2);
    const noise = 5;
    geomPlanet.vertices.forEach(v => {
      v.x += -noise / 2 + Math.random() * noise;
      v.y += -noise / 2 + Math.random() * noise;
      v.z += -noise / 2 + Math.random() * noise;
    });

    const matPlanet = getMat(Colors.orange);
    this.planet = new THREE.Mesh(geomPlanet, matPlanet);
    this.ring = new THREE.Mesh();
    this.nParticles = 0;

    this.mesh = new THREE.Object3D();
    this.mesh.add(this.planet);
    this.mesh.add(this.ring);

    this.updateParticlesCount();
    this.planet.castShadow = true;
    this.planet.receiveShadow = true;
  }

  updateParticlesCount(){
  
  
    if (this.nParticles < parameters.particles){
      
      // Remove particles
      
      for (var i=this.nParticles; i< parameters.particles; i++){
        var p = new Particle();
        p.mesh.rotation.x = Math.random()*Math.PI;
        p.mesh.rotation.y = Math.random()*Math.PI;
        p.mesh.position.y = -2 + Math.random()*4;
        this.ring.add(p.mesh);
      }
    }else{
      
      // add particles
      
      while(this.nParticles > parameters.particles){
        var m = this.ring.children[this.nParticles-1];
        this.ring.remove(m);
        m.userData.po = null;
        this.nParticles--;
      }
    }

  updateParticlesRotation(){

    // increase the rotation of each particle
    // and update its position
  
    for(var i=0; i<this.nParticles; i++){
      var m = this.ring.children[i];
      // increase the rotation angle around the planet
      m.userData.angle += m.userData.angularSpeed;
  
      // calculate the new position
      var posX = Math.cos(m.userData.angle)*m.userData.distance;
      var posZ = Math.sin(m.userData.angle)*m.userData.distance;
      m.position.x = posX;
      m.position.z = posZ;
  
      //*
      // add a local rotation to the particle
      m.rotation.x += Math.random()*.05;
      m.rotation.y += Math.random()*.05;
      m.rotation.z += Math.random()*.05;
      //*/
    }
  }
}


export const Planet = () => {
    useEffect(() => {
      initWorld();
      const handleResize = () => handleWindowResize();
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return <div id="world"></div>;
  };

function initWorld() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 2000);
  camera.position.z = 100;

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMap.enabled = true;

  const container = document.getElementById('world');
  container.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0x663344, 2);
  scene.add(ambientLight);

  light = new THREE.DirectionalLight(0xffffff, 1.5);
  light.position.set(200, 100, 200);
  light.castShadow = true;
  scene.add(light);

  controls = new OrbitControls(camera, renderer.domElement);

  saturn = new Saturn();
  scene.add(saturn.mesh);

  loop();
}

function loop() {
  saturn.updateParticlesRotation();
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}

function handleWindowResize() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
}
