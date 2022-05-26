import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

function Threescene() {
  const mountRef = useRef(null)
  useEffect(() => {
    const innerThreeRef=mountRef.current
   const scene=new THREE.Scene();
   scene.background = new THREE.Color( 0x0d283b);
   const renderer=new THREE.WebGL1Renderer()
   renderer.setSize(window.innerWidth,window.innerHeight)
   innerThreeRef.appendChild(renderer.domElement)
   const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1)
    camera.position.z=5
    renderer.render(scene,camera)
    // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // var cube = new THREE.Mesh( geometry, material );
    
    // scene.add( cube );
    // var animate = function () {
    //   requestAnimationFrame( animate );
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
    //   renderer.render( scene, camera );
    // };
    
    // animate();
  }, [])
  
  return (
    <div ref={mountRef}></div>
  )
}

export default Threescene