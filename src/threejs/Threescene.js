import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import FBXLoader from "three-fbx-loader";
function Threescene() {
  const mountRef = useRef(null);
  useEffect(() => {
    const innerThreeRef = mountRef.current;
    const scene = new THREE.Scene();
     scene.background = new THREE.Color( 0x000000);
    const container = document.getElementById("three");
  
    console.log("Three.js")
    const renderer = new THREE.WebGL1Renderer();
    renderer.setSize(window.innerWidth, window.innerHeight/2);
    innerThreeRef.appendChild(renderer.domElement);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1
    );
    camera.lookAt(0,0,0)
    camera.position.y=1
    camera.position.z = 5;
    const geometry = new THREE.PlaneGeometry( 8, 5 );
    const material = new THREE.MeshBasicMaterial( {color: 0xffffff ,side: THREE.DoubleSide} );
    const plane = new THREE.Mesh( geometry, material );
    plane.rotation.set(2.2,0,0)
    scene.add( plane );






    














    
    renderer.render(scene, camera);

    
  }, []);

  return <div ref={mountRef}></div>;
}

export default Threescene;
