import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Threescene() {
  const mountRef = useRef(null);
  useEffect(() => {
    const innerThreeRef = mountRef.current;
    const scene = new THREE.Scene();
    let mixer;
    let mixer2;
    let mixer3;
    let clipAction;
    let clipAction2;
    let clipAction3;
    let model;
    const clock = new THREE.Clock();
    scene.background = new THREE.Color(0x0d283b);
    const container = document.getElementById("three");
    const renderer = new THREE.WebGL1Renderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight / 2);
    innerThreeRef.appendChild(renderer.domElement);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1
    );
    camera.lookAt(0, 2, 0);
    camera.position.y = 1;
    camera.position.z = 9;
    camera.position.x = -1;
    const geometry = new THREE.PlaneGeometry(15, 15);
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load("images/ground2.PNG"),
      side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
    //plane.rotation.set(90,0,0)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);
    var ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);
    scene.add(plane);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    controls.update();
    const fbxLoader = new FBXLoader();
    // fbxLoader.load("Model/windmill2/winmillnew.fbx", (object) => {
    //   object.scale.set(0.0003, 0.0003, 0.0003);
    //   scene.add(object);
    //   mixer = new THREE.AnimationMixer(object);
    //   clipAction = mixer.clipAction(object.animations[0]);
    // console.log(object)
    // console.log(clipAction)
    // clipAction.play()
    // });
    const loader = new GLTFLoader();
    loader.load("Model/windmill2/windmill3.glb", function (gltf) {
      gltf.scene.scale.set(0.3, 0.3, 0.3);
      gltf.scene.position.set(0, 0, -3);
      gltf.scene.rotation.y = -Math.PI / 2;
      const model = gltf.scene.clone();
      model.position.set(0, 0, 1);
      scene.add(model);
      const model2 = gltf.scene.clone();
      model2.position.set(0, 0, 4);
      scene.add(model2);
      const model3 = gltf.scene.clone();
      model3.position.set(3, 0, 1);
      scene.add(model3);
      const model4 = gltf.scene.clone();
      model4.position.set(3, 0, 4);
      scene.add(model4);
      const model5 = gltf.scene.clone();
      model5.position.set(-3, 0, 1);
      scene.add(model5);
      const model6 = gltf.scene.clone();
      model6.position.set(-3, 0, 4);
      scene.add(model6);
      const model7 = gltf.scene.clone();
      model7.position.set(6, 0, 1);
      scene.add(model7);
      const model8 = gltf.scene.clone();
      model8.position.set(6, 0, 4);
      scene.add(model8);
      const model9 = gltf.scene.clone();
      model9.position.set(-6, 0, 1);
      scene.add(model9);
      const model10 = gltf.scene.clone();
      model10.position.set(-6, 0, 4);
      scene.add(model10);
      console.log(gltf.animations);
      scene.add(gltf.scene);
      mixer = new THREE.AnimationMixer(gltf.scene);
      clipAction = mixer.clipAction(gltf.animations[0]);
      // mixer2 = new THREE.AnimationMixer(model2.scene);
      // clipAction2 = mixer2.clipAction(model2.animations[0]);
      // console.log(clipAction2)
      // mixer3 = new THREE.AnimationMixer(model3.scene);
      // clipAction3 = mixer.clipAction(model3.animations[0]);
      // clipAction2.play()
      // clipAction3.play()
      clipAction.play();
    });
    function createClone(object) {
      for (let i = 1; i <= 10; i++) {

      }
    }
    function animate() {
      requestAnimationFrame(animate);
      var delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      // required if controls.enableDamping or controls.autoRotate are set to true
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return <div id="sample" ref={mountRef}></div>;
}
export default Threescene;
